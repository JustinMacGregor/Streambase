import React, {useState, useRef} from 'react'
import {useAuth} from '../contexts/AuthContext'

function SignUp(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signUp, currentUserID} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value)
            return setError('Passwords do not match')

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <p>{currentUserID && currentUserID.email}</p>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" ref={emailRef} required></input>
                <label>Password</label>
                <input type="password" ref={passwordRef} required></input>
                <label>Confirm Password</label>
                <input type="password" ref={passwordConfirmRef} required></input>
                <button disabled={loading} type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;