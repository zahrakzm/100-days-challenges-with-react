import { useState } from "react";
import "./assets/css/custom.css";

const Vowel = () => {
  const [msg, setMsg] = useState("");
  const [str, setStr] = useState("");
  const getVowel = () => {
    const vowel = ["a", "e", "o", "u", "i"];
    var store = str;
    let counter = 0;
    for (var i = 0; i < store.length; i++) {
      vowel.includes(store[i]) && counter++;
    }
    setMsg(`${store} has ${counter} vowel`);
  };
  const getWord = (e) => {
    setStr(e.target.value);
  };
  return (
    <div>
      <div className="box">
        <div className="flex-area">
          <input onChange={getWord} />
          <button onClick={getVowel}>Check</button>
        </div>
        <h3>{msg}</h3>
      </div>
    </div>
  );
};

export default Vowel;
