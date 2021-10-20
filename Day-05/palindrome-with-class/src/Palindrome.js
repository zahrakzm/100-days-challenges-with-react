import React, { Component } from "react";
import "./assets/css/custom.css";

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      str: "",
    };
  }
  getPalindrome = (e) => {
    var len = this.state.str;
    var mid = Math.floor(len.length / 2);

    for (var i = 0; i < mid; i++) {
      if (this.state.str[i] === this.state.str[len.length - 1 - i]) {
        this.setState({ msg: `${len} is a palindrome` });
      } else {
        this.setState({ msg: `${len} is not a palindrome` });
        return;
      }
    }
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
            <button onClick={this.getPalindrome}>Check</button>
          </div>
          <h3>{this.state.msg}</h3>
        </div>
      </div>
    );
  }
}
