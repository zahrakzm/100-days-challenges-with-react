import React, { Component } from "react";

export default class AnvancedCounter extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      counter: props.initialCounter,
    };
    this.state = this.initialState;
  }
  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  reset = () => {
    this.setState(this.initialState);
  };
  render() {
    return (
      <div>
        <h1>JavaScript Counter</h1>
        <div className= 'displayCounter'>{this.state.counter}</div>
        <div className = 'buttonarea'>
        <button type='increase' className='increaseCounter' onClick={this.increase}>Increase Counter</button>
        <button type='decrease'onClick={this.decrease}>Decrease Counter</button>
        <button type ='reset'onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
