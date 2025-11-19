import { useState } from "react"
const Auth = () => {

    const [error, setError] = useState(null)
    const [isLogIn, setLogIn] = useState(true)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = usteState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const handleSubmit = async (e, endpoint) => {
        e.preventDefault()
        if (!isLogIn && password !== confirmPassword) {
            setError('Make sure your passwords match!')
    }
    await fetch(`${process.env.REACT_APP_SERVERYRL}/${endpoint}`)
}

    const viewLogIn = (status) => {
        setError(null)
        setLogIn(status)
    }
    return (
        <div className="auth-container">
            <div className="auth-container-box">
                <form>
                    <h2>{isLogIn ? "Please log in" : "Please sign up!"}</h2>
                    <input type="email" placeholder="email" required />
                    <input type="password" placeholder="password" required />
                    {!isLogIn && <input type="password" placeholder="confirm password" required />}
                    <input type="submit" className="create" onClick = {(e) => handleSubmit(e, endpoint)}/>
                    {error && <p>{error}</p>}
                </form>
                <div className="auth-options">
                    <button
                    type="button"
                    onClick = {() => viewLogIn(false)}
                    style={{backgroundColor : !isLogIn ? 'var(--color5)' : 'var(--color6)'}}
                    >sign up</button>
                    <button
                    type="button"
                    onClick = {() => viewLogIn(true)}
                    style={{backgroundColor : !isLogIn ? 'var(--color6)' : 'var(--color5)'}}
                    >log in</button>
                </div>
            </div>
        </div>
    )
}
export default Auth