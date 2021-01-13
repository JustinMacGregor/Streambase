import React, {useState, useRef} from 'react'
import {useAuth} from '../contexts/AuthContext'

function LogIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {logIn, logOut, currentUserID} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    async function handleLogOut() {
        try {
          await logOut()
        } catch {
          alert("Could not log out user")
        }
      }

 return (
     <div>
        <h2>Log In</h2>
        <p>{currentUserID && currentUserID.email}</p>
        <p>{error}</p>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" ref={emailRef} required></input>
            <label>Password</label>
            <input type="password" ref={passwordRef} required></input>
            <button disabled={loading} type="submit">Log In</button>
        </form>
        <button onClick={handleLogOut}>Log Out</button>
     </div>
 )
}

export default LogIn