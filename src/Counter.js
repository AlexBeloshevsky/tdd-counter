import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>This is a counter app</h1>
      <button id="increment-btn" onClick={incrementCounter}>
        Increment
      </button>
      <button id="decrement-btn" onClick={decrementCounter}>
        Decrement
      </button>
      <div id="counter-value">{counter}</div>
    </div>
  );
}
