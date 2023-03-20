import { useContext, useState } from "react";
import "../cssPages/Signup.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


import { Button, Form, FloatingLabel, Image, Container, Col, Row } from 'react-bootstrap'

import Logo from "../../images/logo.png"



const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { Login, loginMessage, setAccountName, setAccountPw } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginMessage)
        Login(email, password)
        console.log(email, password)
        setAccountName(email)
    }


    return (

        <Container fluid className="login-container d-flex flex-column flex-lg-row">
            <Row className="access-form d-flex flex-column flex-lg-row">
                <Col className="design d-flex">
                    <div>
                        <Image className="img" src={Logo} fluid>
                        </Image>
                    </div>
                </Col>
            </Row>
            <Row className="">
                <Col className="form-container d-flex">
                    <Form action="" onSubmit={handleSubmit}>
                        <div className="signup-content mb-lg-5">
                            <h3>Welcome Back!</h3>
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
                </Col>
            </Row>
        </Container >

    );
}

export default Login;