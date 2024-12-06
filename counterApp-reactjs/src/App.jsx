import { useState } from "react";
import ReactDom from "react-dom/client";
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
      <h1 className="text-3xl font-bold my-10">Count</h1>
      <section className="counting">
        <input
          className="w-20 "
          type="text"
          placeholder="Insert a value for steps"
          value={inputValue}
          onChange={handleChange}
        />
        <div>
          <button className="plus" onClick={add}>
            +
          </button>
          <button className="sub" onClick={sub}>
            -
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
        <p className="text-3xl font-bold my-10">{count}</p>
      </section>
    </main>
  );
}

export default App;
