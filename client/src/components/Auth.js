import { useState } from "react"
const Auth = () => {

    const [error, setError] = useState(null)
    const [isLogIn, setLogIn] = useState(true)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    console.log(email, password, confirmPassword)

    const handleSubmit = async (e, endpoint) => {
        e.preventDefault()
        if (!isLogIn && password !== confirmPassword) {
            setError('Make sure your passwords match!')
        }
        const response = await fetch(`${process.env.REACT_APP_SERVERYRL}/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        console.log(data)
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
                    <input
                        type="email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    {!isLogIn &&
                        <input type="password"
                            placeholder="confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required />}
                    <input
                        type="submit"
                        className="create"
                        onClick={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')} />
                    {error && <p>{error}</p>}
                </form>
                <div className="auth-options">
                    <button
                        type="button"
                        onClick={() => viewLogIn(false)}
                        style={{ backgroundColor: !isLogIn ? 'var(--color5)' : 'var(--color6)' }}
                    >sign up</button>
                    <button
                        type="button"
                        onClick={() => viewLogIn(true)}
                        style={{ backgroundColor: !isLogIn ? 'var(--color6)' : 'var(--color5)' }}
                    >log in</button>
                </div>
            </div>
        </div>
    )
}
export default Auth