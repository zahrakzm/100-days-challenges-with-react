import React, { useState } from "react";

export default function CounterWithFunction() {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <h1>JavaScript Counter</h1>
      <div className="displayCounter">{counter}</div>
      <div className="buttonarea">
        <button type="increase" className="increaseCounter" onClick={increase}>
          Increase Counter
        </button>
        <button type="decrease" onClick={decrease}>
          Decrease Counter
        </button>
        <button type="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
