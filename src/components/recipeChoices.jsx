import React, { Component, useEffect, useState } from "react";


const RecipeChoices = ({ handleChange, label, choices, checked, currentVal }) => {

    return (
        <div>
            <input
                type="text"
                name={label}
                value={currentVal}
                placeholder="Guess the ingredient..."
                onChange={handleChange}
                className="textbox"
            />

            <div className="radio-buttons">

                {choices &&
                    choices.map((choice) => (
                        <li key={choice}>
                            <input
                                id={choice}
                                value={choice}
                                name={label}
                                type="radio"
                                onChange={handleChange}
                                checked={checked == choice}
                            />
                            {choice}
                        </li>
                    ))}

                {/* {choices &&
                    choices.map((choice) => (
                        <li key={choice}>
                            {choice}
                        </li>
                    ))} */}

            </div>

        </div>
    );
};

export default RecipeChoices;

