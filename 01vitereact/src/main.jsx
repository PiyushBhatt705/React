import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <>
      <h1>Custom App !</h1>
    </>
  )
}

// const ReactElement ={
//   type :'a',
//   props :{
//       herf : 'https://google.com',
//       targrt : '_blank'
//   },
//   children : 'click me to visit google'
// };

const AnotherElement =(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = " Piyush Bhatt"

const reactElement =React.createElement(
  'a',
  { href: 'https://google.com',
    targrt : '_blank'
  },
  'Click Me To Visit Google',
  anotherUser 
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
)
