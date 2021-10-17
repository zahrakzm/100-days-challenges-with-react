import React, { useState } from 'react'
import './assets/css/custom.css'

const RandomNumber = () => {
  const [random, setRandom] = useState(0)
  const [value, setValue] = useState(1)

  const RandomNumber = () => {
    const max = Math.pow(10, value)
    const min = 1
    const rand = Math.floor(Math.random() * (max - min + 1)) + min
    const newRand = rand.toString().length < value && `0${rand}`
    setRandom(newRand || rand)
  }

  const onChange = e => {
    const v = e.target.value
    console.log(!isNaN(+v))
    if (v <= 8 && v >= 1) {
      setValue(e.target.value)
    }
  }
  return (
    <div>
      <div className='box'>
        <h2> Random Number Generator</h2>
        <div className='random-num'>{random}</div>
        <hr />
        <div className='action'>
          <button onClick={RandomNumber}>Generate</button>

          <input
            type='number'
            placeholder='enter number of digits'
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}

export default RandomNumber
