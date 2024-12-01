import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  function reset() {
    setCount(0);
    console.log(count);
  }
  function add() {
    let addValue = count + 1;
    setCount(addValue);
  }
  function sub() {
    let subValue = count - 1;
    setCount(subValue);
  }

  return (
    <main>
      <h1>Count</h1>
      <section className="counting">
        <p>{count}</p>
        <input type="number" placeholder="Insert a value for steps" />
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
