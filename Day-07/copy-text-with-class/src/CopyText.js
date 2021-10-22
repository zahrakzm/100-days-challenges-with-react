import React, { Component } from 'react'
import './assets/css/custom.css'

export default class CopyText extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      copySuccess: 'copy'
    }
  }
  onChange = e => {
    this.setState({ text: e.target.value })
  }

  onCopy = e => {
    var textField = document.createElement('textarea')
    textField.innerText = this.state.text
    document.body.appendChild(textField)
    textField.focus();
    textField.select();
    document.execCommand('copy')
    textField.remove()
    this.setState({ copySuccess: 'Copied!' });
  }

  render () {
    return (
      <div>
        <div className='box'>
        <h3>Get 25% Discount with this Coupon</h3>
        <div className='flex-area'>
        <input  type='text' onChange= {this.onChange} id='text-area' />
        <button onClick={this.onCopy}>{this.state.copySuccess}</button>
        </div>
        </div>
      </div>
    )
  }
}
