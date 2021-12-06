import React, { Component } from 'react'
import './assets/css/custom.css'

export default class GetLocation extends Component {
  constructor () {
    super()
    this.state = {
      str: ' ',
      tr: '',
     
    }
  }

  
  changeInput = e => {
    this.setState({ str: e.target.value }) 
    const e2p = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
    const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  
   Number(e.target.value) ?
   ( this.setState({tr: e2p(e.target.value)})) : (this.setState({tr: p2e(e.target.value)}))
  
    // this.translator(e)
  }
  
  // translator=(e)=> {
  //   const e2p = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
  //   this.setState({tr: e2p(e.target.value)})
  // }
  


render () {
    return (
      <div className='main'>
        <input
          onChange={this.changeInput}
          type='text'
          placeholder='Type your Expression Here'
        />
        <br />
        <div className='container'>
          <label className='label'>Original: </label>{' '}
          <div className='original box'>{this.state.str}</div>
        </div>

        <div className='container'>
          <label className='label'>Translate: </label>{' '}
    <div className='translate box'> {this.state.tr}</div>
   
        </div>
      </div>
    )
  }
}
