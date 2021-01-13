import React, { useState, useContext, useEffect } from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setCurrentUserID(user)
        })
    }, [])
    
    const [currentUserID, setCurrentUserID] = useState()

    function signUp (email, password) {
        auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            alert("The User has Signed Up")
            // Signed in 
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
        });
    }

    const value = {
        currentUserID,
        signUp
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}