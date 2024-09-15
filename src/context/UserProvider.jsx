import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserProvider = ({children}) =>{
const [user , setUser] = React.useState(null)    
 return (
        <UserContext.Provider value={{user , setUser}}>
          {children}
         </UserContext.Provider>
    )

}
export default UserProvider