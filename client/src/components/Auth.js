import { useState } from "react"
const Auth = () => {

    [error, setError] = useState(null)
    [isLogIn, setLogIn] = useState(true)

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
                    <button onClick = {() => viewLogIn(false)}>sign up</button>
                    <button onClick = {() => viewLogIn(true)}>log in</button>
                </div>
            </div>
        </div>
    )
}
export default Auth