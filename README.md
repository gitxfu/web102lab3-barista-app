# On My Grind - Barista Training App

## Overview
"On My Grind" is a React-based web application designed to train and test aspiring baristas on their drink-making knowledge.

## Brief Guide
1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`           
4. Open the application in your browser

## Key React Concepts and Examples



#### useState

```jsx
const [inputs, setInputs] = useState({
  'temperature': '',
  'milk': '',
  'syrup': '',
  'blended': ''
});
```
useState allows functional components to manage state, replacing the need for class components in many cases.

### useEffect

```jsx
useEffect(() => {
  onNewDrink();
}, []); 
```

useEffect is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.


### List Rendering

```
{choices.map((choice) => (
  <li key={choice}>{choice}</li>
))}
```

List rendering is used to render a list of items in React.

### Conditional Rendering

```jsx
{checkedTemperature === 'correct' && <p>Correct!</p>}
```

Conditional rendering is used to render a component based on a condition.

### Forms

```jsx
<form onSubmit={handleSubmit}>
  <input type="text" name="temperature" value={inputs.temperature} onChange={handleChange} />
</form>
``` 

Forms are used to collect user input in React.


