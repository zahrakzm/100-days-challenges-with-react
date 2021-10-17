import React, { Component } from "react";

export default class RandomNumber extends Component {
  constructor() {
    super();
    this.state = {
      random: 0,
      value: 1
    };
  }

  randomNum = () => {
  
    var max = Math.pow(10, this.state.value);
    const min = 1;

    // solution 1
    // const rand = Math.floor( Math.pow(10, this.state.value-1)+ Math.random() * (max - Math.pow(10, this.state.value-1) - 1) );
    // solutin 2
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    const newRand = (rand.toString().length < this.state.value) && (`0${rand}`)

    this.setState({ random: newRand || rand });
  };
  onChange = (e) => {
    const v = e.target.value;
    console.log(!isNaN(+v)); //true if its a number , false if it's not a number

    if (v <= 8 && v >= 1) {
      this.setState({ value: e.target.value });
    }
  };

  render() {
    return (
      <div>
        <div className="box">
          <h2>Random Number Generator</h2>
          <div className="randomNum">{this.state.random}</div>
          <hr />
          <div className='action'>
          <button onClick={this.randomNum}>Generate</button>
          <input
            placeholder="enter number of digits"
            type="number"
            onChange={this.onChange}
          />
          </div>
        </div>
      </div>
    );
  }
}
