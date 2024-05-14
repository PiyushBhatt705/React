import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}[]/,.<>?~''"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [ length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    password.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  }, [password]) 

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'
      style={{height: '8rem'}}
      >
        <h1 className='text-white text-center text-xl my-3'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 h-10'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard} 
          className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1 '>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() =>{
              setNumberAllowed((prev) => !prev);
            }}

            />
            <label htmlFor="numberInput">Numbers</label>

            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='chracterInput'
            onChange={() =>{
              setNumberAllowed((prev) => !prev);
            }}

            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
