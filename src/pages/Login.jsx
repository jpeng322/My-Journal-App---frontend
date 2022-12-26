import { useContext, useState } from "react";
import "../cssPages/Signup.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { Login, loginMessage } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        Login(email, password)
        console.log(email, password)
    }




    return (
        <form action="" className="signup" onSubmit={handleSubmit}>
            <div className="signup-content">
                <h3>Login</h3>
                <div className="input">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input">
                    <button type="submit">Login</button>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/">Home</Link>
                </div>
                <div>{loginMessage}</div>
            </div>
        </form>
    );
}

export default Login;