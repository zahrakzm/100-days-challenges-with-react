import React, { Component } from 'react'
import './assets/css/custom.css'

export default class InputCount extends Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }

changeField=(e) => {
this.setState({count: e.target.value.length})
console.log(`e.target.value`, e.target.value)
}
  render () {
    return (
      <div>
        <div className='box'>
          <h2>Input Character Count</h2>
          <div className='count'>{this.state.count}</div>
          <hr />
          <input onChange={this.changeField} />
        </div>
      </div>
    )
  }
}
