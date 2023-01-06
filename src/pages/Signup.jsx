import { useContext, useState } from "react";
import "../cssPages/Signup.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from 'react-bootstrap/Image'
import Logo from "../../images/logo.png"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { Signup, signupMessage } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        Signup(email, password)
        console.log(email, password)
    }

    return (
        // <form action="" className="signup" onSubmit={handleSubmit}>
        //     <div className="signup-content">
        //         <h3>Sign Up</h3>
        //         <div className="input">
        //             <label htmlFor="email">Email:</label>
        //             <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        //         </div>
        //         <div className="input">
        //             <label htmlFor="password">Password:</label>
        //             <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //         </div>
        //         <div className="input">
        //             <button type="submit">Sign Up</button>
        //             <Link to="/login">Already signed up?</Link>
        //         </div>
        //         <div>
        //             {signupMessage}
        //         </div>
        //     </div>
        // </form>
        <div className="access-form">
            <div className="design">
                <div>
                    <Image className="img" src={Logo} fluid>
                    </Image>
                </div>
            </div>

            <div className="signup-container">
                <Form action="" onSubmit={handleSubmit}>
                    <div className="signup-content">
                        <h3>Welcome to MJN!</h3>
                        <div className="input">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="float-label"
                            >
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </FloatingLabel>
                        </div>
                        <div className="input">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Password "
                                className="float-label"
                            >
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </FloatingLabel>
                        </div>
                        <div className="btn-div">
                            <Button className="sub-btn" type="submit">Sign Up</Button>
                            {/* <Link to="/signup">Sign up</Link> */}
                        </div>
                        <div>{signupMessage}</div>
                    </div>
                </Form>
                <div className="access-message" >
                    <p>Already have an account? </p>
                    <Link to="/login">Log In</Link></div>
            </div>

        </div>
    );
}

export default Signup;