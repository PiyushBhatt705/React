import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './chai'






function App() {
  let [counter, setCounter]= useState(0)
  // let counter = 5

  const addValue = () => {
    counter = counter +1
    setCounter(counter)
  }

  const removeValue = () => {
    counter = counter -1
    setCounter(counter)
  }
  return (
    
    <>
      <h1>Piyush Bhatt</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick= {removeValue}>Remove value</button>

    </>
  )
}

export default App
