import React, {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
const  [username , setuserName] = useState('')
const  [password , setpassword] = useState('')
const  {setUser} = useContext (UserContext)

const handleSubmit = (e) =>{
    e.preventDefault()
       setUser({username, password})
}
  return (
    <>
    
        <h1 className='pt-4 text-4xl'>Login</h1>
        <div className='pt-4 w-3/3 h-2/3 bg-red-400'>
        <input className='p-4 border-black border-4 rounded-xl' type='text'
        value={username}
        onChange={(e)=>setuserName(e.target.value) }
        placeholder='username' />
        {" "}
        <input className='p-4 border-black border-4 rounded-xl'  type="text"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}  
        placeholder='password' />
        <button className='p-4 bg-green-600 rounded-xl ml-2' onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default Login