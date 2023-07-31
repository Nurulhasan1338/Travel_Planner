import { useState } from "react";
import UserContext from "./UserContext";


const UserState = ({children}) =>{

    const host = 'http://localhost:5000';
    // const host = 'https://mail-sensor-backend-3.vercel.app';
    const [user, setUser] = useState(null)

    const getUser = async () =>  {

        //API Call
        const response = await fetch(`${host}/api/auth/get-user`, {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token' :localStorage.getItem('token'),
          },
        });
        const json = await response.json();
        console.log(json)
    
        setUser(json)
      }      



    return(
        <UserContext.Provider value={{host, user, setUser, getUser,}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserState