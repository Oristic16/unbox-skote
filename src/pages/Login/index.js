import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import profile from '../../assets/images/profile-img.png'
import { useFormik } from "formik";

import * as Yup from 'yup'

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

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: '',
      password: '',
      role: 'user'
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("authUser", JSON.stringify(values));
      return navigate("/");
    }
  })

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
                        <p>Sign In to continue to Skote.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody>
                <Form className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <FormGroup floating>
                        
                        <Input
                          id="username"
                          name="username"
                          placeholder="Enter Username"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.username || ""}
                          invalid={
                            validation.touched.username && validation.errors.username ? true : false
                          }
                        />
                        <Label className="form-label">Username</Label>
                        {validation.touched.username && validation.errors.username ? (
                          <FormFeedback type="invalid">{validation.errors.username} </FormFeedback>
                        ) : null}
                      </FormGroup>
                      

                      <FormGroup floating>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.password || ""}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        <Label>Password</Label>
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </FormGroup>
                      
                      <select name="role" disabled onChange={validation.handleChange} className="form-control">
                        {/* <option value="">กรุณาระบุ Role</option> */}
                        <option value="user">User</option>
                        {/* <option value="admin">Admin</option> */}
                      </select>

                      <div className="mt-4 d-grid">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign up using</h5>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-primary text-white border-primary"
                            >
                              <i className="mdi mdi-facebook" />
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-info text-white border-info"
                            >
                              <i className="mdi mdi-twitter" />
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-danger text-white border-danger"
                            >
                              <i className="mdi mdi-google" />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Skote{" "}
                          <Link to="#" className="text-primary">
                            Terms of Use
                          </Link>
                        </p>
                      </div>
                    </Form>
                  <Row className="mt-3">
                    <Col style={{display:"flex", justifyContent:"center"}}>
                      <Link to="/register">Don't have an account? Sign up Here</Link>
                    </Col>
                  </Row>
                  
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
