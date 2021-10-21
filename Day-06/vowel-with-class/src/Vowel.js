import React, { Component } from "react";
import "./assets/css/custom.css";
export default class Vowel extends Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      str: "",
      vowel: ["a", "e", "i", "u", "o"],
    };
  }
  getVowel = () => {
    var store = this.state.str;

    let counter = 0;

    for (var i = 0; i < store.length; i++) {
      this.state.vowel.includes(store[i]) && counter++;
    }

    this.setState({ msg: `${store} has ${counter} vowel` });
  };
  getWord = (e) => {
    this.setState({ str: e.target.value });
   
  };
  render() {
    return (
      <div>
        <div className="box">
          <div className="flex-area">
            <input onChange={this.getWord} />
            <button onClick={this.getVowel}>Check</button>
          </div>
          <h3>{this.state.msg}</h3>
        </div>
      </div>
    );
  }
}
