import { useContext, useState } from "react";
import "../cssPages/Signup.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from 'react-bootstrap/Image'
import Logo from "../../images/logo.png"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { Login, loginMessage, setAccountName, setAccountPw } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        Login(email, password)
        console.log(email, password)
        setAccountName(email)
    }


    return (
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
                        <h3>Login</h3>
                        <div className="input" >
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
                            <Button className="sub-btn" type="submit">Login</Button>
                            {/* <Link to="/signup">Sign up</Link> */}
                        </div>
                        <div>{loginMessage}</div>
                    </div>
                </Form>
                <div className="access-message" >
                    <p>Don't have an account yet? </p>
                    <Link to="/signup">Sign up</Link></div>
            </div>

        </div>
    );
}

export default Login;