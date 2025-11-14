import { useState } from "react"
const Auth = () => {

    const [error, setError] = useState(null)
    const [isLogIn, setLogIn] = useState(true)

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
                    <input type="submit" className="create"/>
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