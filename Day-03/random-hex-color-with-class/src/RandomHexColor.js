import React, { Component } from "react";
import "./assets/css/custom.css";

export default class RandomHexColor extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      color: this.hexColor(),
      
    };
  }

  hexColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const rand = `#${randomColor}`;
    this.setState({ counter: rand });
    document.body.style.backgroundColor = rand;
    console.log('rand' , rand)

  };
  

  render() {
    return (
      <div>
        <div className="box">
          <h2>Random Hex Color Generator</h2>
          <div className="randomNum">{this.state.counter}</div>
          <hr />

          <button onClick={this.hexColor}>Generate</button>
        </div>
      </div>
    );
  }
}
