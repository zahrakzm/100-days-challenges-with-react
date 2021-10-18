import React, { useState } from 'react'
import './assets/css/custom.css'

const bgColor = color => {
  document.body.style.backgroundColor = color
}

const rand = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return `#${randomColor}`
}
const RandomHexColor = () => {
  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState(rand())

  bgColor(color) // before clicking on the button change the background

  const hexColor = () => {
    const save = rand() // each time call function it has a different result

    setCounter(save)
    setColor(save)
    bgColor(color)
  }

  return (
    <div>
      <div className='box'>
        <h2>Random Hex Color Generator</h2>
        <div className='randomNum'>{counter}</div>
        <hr />

        <button onClick={hexColor}>Generate</button>
      </div>
    </div>
  )
}

export default RandomHexColor
