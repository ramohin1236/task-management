/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
      

    const createUser =(email,password)=>{
        setLoading(true)
        return createBrowserRouter(auth,email,password)
    }

   const userInfo ={
    loading,
    user,
    createUser
   }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;