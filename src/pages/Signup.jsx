import { useContext, useState } from "react";
import "../cssPages/Signup.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { Signup, signupMessage} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        Signup(email, password)
        console.log(email, password)
    }

    return (
        <form action="" className="signup" onSubmit={handleSubmit}>
            <div className="signup-content">
                <h3>Sign Up</h3>
                <div className="input">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input">
                    <button type="submit">Sign Up</button>
                    <Link to="/login">Already signed up?</Link>
                </div>
                <div>
                    {signupMessage}
                </div>
            </div>
        </form>
    );
}

export default Signup;