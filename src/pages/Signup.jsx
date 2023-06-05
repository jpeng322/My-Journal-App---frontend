import { useContext, useState } from "react";
import "../cssPages/Signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import {
  Button,
  Form,
  FloatingLabel,
  Image,
  Container,
  Col,
  Row,
} from "react-bootstrap";

import Logo from "../../images/logo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Signup, signupMessage } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    Signup(email, password);
  };

  return (
    <Container
      fluid
      className="signup-container d-flex flex-column flex-lg-row"
    >
      <Row className="border access-form d-flex flex-column flex-lg-row">
        <Col className="design d-flex">
          <div>
            <Image className="img" src={Logo} fluid></Image>
          </div>
        </Col>

        <Col className="form-container d-flex">
          <Form action="" onSubmit={handleSubmit}>
            <Col className="signup-content mb-lg-5">
              <h3>Welcome to MJN!</h3>
              <div className="input">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="float-label"
                >
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
              </div>
              <div className="input">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password "
                  className="float-label"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FloatingLabel>
              </div>
              <div className="btn-div">
                <Button className="sub-btn" type="submit">
                  Sign Up
                </Button>
              </div>
              <div>{signupMessage}</div>
            </Col>
          </Form>
          <div className="access-message">
            <p>Already have an account? </p>
            <Link to="/login">Log In</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
