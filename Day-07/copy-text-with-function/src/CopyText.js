import { useState } from "react";
import './assets/css/custom.css'
const CopyText = () => {
  const [text, setText] = useState("");
  const [copySuccess, setCopySuccess] = useState("copy");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onCopy = () => {

    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.focus();
    textField.select();
    document.execCommand('copy')
    textField.remove()
    setCopySuccess('copied!')
  };
  return (
    <div>
      <div className="box">
        <h3>Get 25% Discount with this Coupon</h3>
        <div className="flex-area">
          <input type="text" onChange={onChange} id="text-area" />
          <button onClick={onCopy}>{copySuccess}</button>
        </div>
      </div>
    </div>
  );
};

export default CopyText;
