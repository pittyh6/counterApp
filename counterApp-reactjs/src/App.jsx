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
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <main className="overflow-x-hidden">
      <h1 className="text-3xl font-bold my-8 mt-36">Count</h1>
      <section className="counting">
        <input
          className="w-26 rounded-md pl-2 my-3"
          type="text"
          placeholder="Insert a value for steps"
          value={inputValue}
          onChange={handleChange}
        />
        <div>
          <button
            className="plus"
            onClick={() =>
              setCount((count) => parseInt(count) + parseInt(inputValue))
            }
          >
            +
          </button>
          <button
            className="sub"
            onClick={() =>
              setCount((count) => parseInt(count) - parseInt(inputValue))
            }
          >
            -
          </button>
          <button className="reset w-24" onClick={reset}>
            Reset
          </button>
        </div>
        <p className="break-words text-9xl font-bold my-10 text-[#1f6881] ">
          {count}
        </p>
      </section>
    </main>
  );
}

export default App;
