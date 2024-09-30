import { useState } from 'react';
import BaristaForm from './components/baristaForm';
import viteLogo from '/vite.svg';

import './App.css';
import Test from './components/Test';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <div className="title-container">
        <img className="omg-logo" src="./omg-logo.79cdfddd.png" />
        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      {/* <Test /> */}
      <BaristaForm />
    </div>

  )
}

export default App
