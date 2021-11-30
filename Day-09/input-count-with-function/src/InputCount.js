import { useState } from "react";
import "./assets/css/custom.css";

const InputCount = () => {
   
  const [count, setCount] = useState(0);

  const changeField = (e) => {
    setCount( e.target.value.length );
    console.log(`e.target.value`, e.target.value);
  };
  return (
    <div>
      <div className="box">
        <h2>Input Character Count</h2>
        <div className="count">{count}</div>
        <hr />
        <input onChange={changeField} />
      </div>
    </div>
  );
};

export default InputCount;
