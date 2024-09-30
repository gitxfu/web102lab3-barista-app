import React, { useState, useEffect } from "react";
import RecipeChoices from './recipeChoices';
import drinksJson from "./drinks.json"

const BaristaForm = () => {
    // In React, the useEffect hook is used to perform side effects in your function components. If you want to run some code when your component mounts (i.e., when the page loads), you would use useEffect with an empty dependency array. 
    useEffect(() => {
        onNewDrink();
    }, []);  // The empty array means this useEffect will only run once, similar to componentDidMount


    const [inputs, setInputs] = useState(
        {
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        }
    );

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const [currentDrink, setCurrentDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({});

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }

    const onCheckAnswer = () => {
        if (!ingredients['temperature'].includes(inputs['temperature'])) {
            alert("For temperature, that isn't even an option!")
        }
        if (trueRecipe.temp != inputs['temperature']) {
            setCheckedTemperature('wrong');
        } else {
            setCheckedTemperature("correct");
        }

        if (!ingredients['milk'].includes(inputs['milk'])) {
            alert("For milk, that isn't even an option!")
        }
        if (trueRecipe.milk != inputs['milk']) {
            setCheckedMilk('wrong');
        } else {
            setCheckedMilk("correct");
        }

        if (!ingredients['syrup'].includes(inputs['syrup'])) {
            alert("For syrup, that isn't even an option!")
        }
        if (trueRecipe.syrup != inputs['syrup']) {
            setCheckedSyrup('wrong');
        } else {
            setCheckedSyrup("correct");
        }

        if (!ingredients['blended'].includes(inputs['blended'])) {
            alert("For blended, that isn't even an option!")
        }
        if (trueRecipe.blended != inputs['blended']) {
            setCheckedBlended('wrong');
        } else {
            setCheckedBlended("correct");
        }
    };

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });

        getNextDrink();

        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');
    };



    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    🔄
                </button>
            </div>

            {/* <h2>trueRecipe:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{
                    `temp=${trueRecipe.temp}, milk=${trueRecipe.milk}, syrup=${trueRecipe.syrup}, blended=${trueRecipe.blended}`
                }</h2>
            </div> */}


            <form className="container">

                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id={correct_temp}>
                        {inputs["temperature"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        // event.target: This refers to the HTML element that triggered the onChange event—in this case, the <input> element.
                        // event.target.value: This extracts the value property from the target element, which is the current text entered in the <input> element.
                        label="temperature"
                        choices={ingredients["temperature"]}
                        checked={inputs["temperature"]}
                        currentVal={inputs["temperature"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space" id={correct_milk}>
                        {inputs["milk"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                        currentVal={inputs["milk"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space" id={correct_syrup}>
                        {inputs["syrup"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                        currentVal={inputs["syrup"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space" id={correct_blended}>
                        {inputs["blended"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                        currentVal={inputs["blended"]}
                    />
                </div>

            </form>

            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>
        </div>
    );

};

export default BaristaForm;

