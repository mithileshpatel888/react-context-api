import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext (UserContext) 
    if(!user)  return <div className='text-2xl '>please Login</div>
    
  return <div className='text-2xl p-4 text-pink-700' >Welcome {user.username}</div>
  
} 

export default Profile