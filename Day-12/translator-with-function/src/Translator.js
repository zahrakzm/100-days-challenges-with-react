import { useState } from 'react'
import './assets/css/custom.css'

const Translator = () => {
  const [str, setStr] = useState('')
  const [tr, setTr] = useState('')



  const changeInput = e => {
    setStr(e.target.value)
    const e2p = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
    const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))


    // const en = s => s.replace(/[a-zA-Z]/g, d => /[آ-ی]/ )
    // const pe = s => s.replace(/[آ-ی]/, d => /[a-zA-Z]/)


    Number(e.target.value)
      ? setTr(e2p(e.target.value))
      : setTr(p2e(e.target.value))

     
  }
  return (
    <div className='main'>
      <input
        onChange={changeInput}
        type='text'
        placeholder='Type your Expression Here'
      />
      <br />
      <div className='container'>
        <label className='label'>Original: </label>{' '}
        <div className='original box'>{str}</div>
      </div>

      <div className='container'>
        <label className='label'>Translate: </label>{' '}
        <div className='translate box'> {tr}</div>
      </div>
    </div>
  )
}

export default Translator
