import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  function reset() {
    setCount(0);
    setInputValue(1);
    console.log(count);
  }
  function add() {
    let newValue = parseInt(count) + parseInt(inputValue);
    setCount(newValue);
  }
  function sub() {
    let newValue = parseInt(count) - parseInt(inputValue);
    setCount(newValue);
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <main>
      <h1>Count</h1>
      <section className="counting">
        <p>{count}</p>
        <input
          type="text"
          placeholder="Insert a value for steps"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="plus" onClick={add}>
          +
        </button>
        <button className="sub" onClick={sub}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </section>
    </main>
  );
}

export default App;
