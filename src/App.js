import { useState } from 'react';
import './App.css';

function App() {

  const [inputBoxValue, setInputBoxValue] = useState('');
  const [result, setResult] = useState('No input yet');

  const handleChange = (event) => {
    setInputBoxValue(event.target.value);
  }

  const handleClick = (event) => {
    let res = Number(inputBoxValue)*2;
    setResult(res);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Input👇🏿</h1>
        <label htmlFor="inbox">Enter a number below👇🏿</label>
        <input
          type="text"
          name="inbox"
          id="inbox"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
        >
          Double!
        </button>
        <h1>Output👇🏿</h1>
        <p className="output-field">{result}</p>
      </div>
    </div>
  );
}

export default App;
