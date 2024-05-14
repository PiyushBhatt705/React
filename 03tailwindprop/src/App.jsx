import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: 'Piyush',
    age: 14
  }

  return (
    <>
    <h1 className=' bg-green-400 text-black p-4 rounded-2xl mb-4'>Piyush Bhatt</h1>
    <Card username='Chaiaurcode' btnText ="Click Me"/>
    <Card username="Piyush" />
    </>
  )
}

export default App
