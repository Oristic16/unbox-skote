import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import profile from '../../assets/images/profile-img.png'

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userJSON = JSON.stringify(user);
    localStorage.setItem("authUser", userJSON);
    return navigate("/");
  };

  return (
    <React.Fragment>
      <div className="account-pages">
        <img
          alt="background-login"
          style={{
            backgroundSize: "cover",
            width: "1536px",
            height: "731px",
            position: "absolute",
            zIndex: "-1",
            opacity: "0.7",
          }}
          src="https://wallpapercave.com/wp/wp2939895.jpg"
        />

        <Container >
          <Row style={{ height: "100vh", display:"flex", alignItems:"center" }} className="">
          {/* <Row className="justify-content-center"> */}
            <Col md={2} lg={3} xl={3}></Col>
            <Col sm={12} md={8} lg={6} xl={6} >
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup floating>
                      <Input
                        type="text"
                        placeholder="Enter your Username..."
                        onChange={(e) =>
                          setUser({ ...user, username: e.target.value })
                        }
                      />
                      <Label className="form-label" htmlFor="">
                        <i className="fa-solid fa-user me-2"></i>Username
                      </Label>
                    </FormGroup>
                    <FormGroup floating>
                      <Input
                        type="password"
                        placeholder="Enter your Password..."
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                      <Label>
                        <i className="fa-solid fa-key me-2"></i>Password
                      </Label>
                    </FormGroup>
                    <div className="form-check">
                      <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="text-end">
                          <a href="/login">Forgot your Password</a>
                        </Col>
                        </Row>
                      </div>
                    <Button color="primary" className="mt-3" style={{ width: "100%" }}>SIgn In</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md={2} lg={3} xl={3}>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Login;
