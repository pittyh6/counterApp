import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Count</h1>
      <section className="counting">
        <p>0</p>
        <button className="plus">+</button>
        <button className="sub">-</button>
        <button className="reset">Reset</button>
      </section>
    </main>
  );
}

export default App;
