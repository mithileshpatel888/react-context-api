
import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserProvider from './context/UserProvider'

function App() {
  

  return (
    <UserProvider>
   <h1 className='bg-red-600  p-4 text-4xl'>context-Api-with-react</h1>
   <Login/>
   <Profile/>
    </UserProvider>
  )
}

export default App
