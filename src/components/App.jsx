import React, { useState } from "react";
import Footer from "./Footer";

function App() {
  const [counter, setCounter] = useState(0);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Increment and Decrement Operator</h1>
      <button onClick={decrease}>-</button>
      <h2>{counter}</h2>
      <button onClick={increase}>+</button>
      <Footer />
    </div>
  );
}

export default App;
