import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextprovider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextprovider>
    <h1>React</h1>
    <Login />
    <Profile />
    </UserContextprovider>
  )
}

export default App
