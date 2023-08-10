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

import { useFormik } from "formik";
import * as Yup from 'yup'

import profile from '../../assets/images/profile-img.png'
import axios from "axios";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
        conpassword: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userJSON = JSON.stringify(user);
        localStorage.setItem("authUser", userJSON);
        console.log(user)
        if(checkEqualPass() === true) {
          createUser();
          return navigate("/login")
        }
        return alert('Password ไม่ตรงกับ ConFirm Password')
    };

    const createUser = async (e) => {
        try {
          await axios.post("http://localhost:3001/users/create", {
          username: user.username,
          password: user.password,
          conpassword: user.conpassword,
        })
      } catch (err) {
        console.error(err);
      }
  
    }

    const checkEqualPass = () => {
      if(user.password === user.conpassword) return true

      return false
    }

    const validation = useFormik({
          // enableReinitialize : use this flag when initial values needs to be changed
          enableReinitialize: true,
      
          initialValues: {
            username: '',
            password: '',
            conpassword: '',
          },
          validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password"),
            conpassword: Yup.string().required("Please Enter Your Confrim Password"),
          }),
          onSubmit: (values) => {
            console.log(values);
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
                <Col md={2} lg={3} xl={3}></Col>
                <Col sm={12} md={8} lg={6} xl={6} >
                  <Card className="overflow-hidden">
                    <div className="bg-primary bg-soft">
                      <Row>
                        <Col xs={7}>
                          <div className="text-primary p-4">
                            <h5 className="text-primary">Welcome</h5>
                            <p>Sign Up to continue to Skote.</p>
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
                      <FormGroup floating>
                        <Input
                          name="conpassword"
                          type="password"
                          placeholder="Enter Confrim password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.conpassword || ""}
                          invalid={
                            validation.touched.conpassword && validation.errors.conpassword ? true : false
                          }
                        />
                        <Label>Confirm Password</Label>  
                        {validation.touched.conpassword && validation.errors.conpassword ? (
                          <FormFeedback type="invalid">{validation.errors.conpassword}</FormFeedback>
                        ) : null}
                      </FormGroup>

                      <div className="mt-4 d-grid">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Register
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
                          <Link to="/login">Already have an account? Sign In here</Link>
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

export default Register

// import React from "react";

// // Formik Validation
// import * as Yup from "yup";
// import { useFormik } from "formik";

// import { Link } from "react-router-dom";

// import { Row, Col, CardBody, Card, Container, Form, Label, Input, FormFeedback, FormGroup } from "reactstrap";

// // import images
// import profileImg from "../../assets/images/profile-img.png";
// import logoImg from "../../assets/images/logo.svg";
// import lightlogo from "../../assets/images/logo-light.svg";

// const Register = () => {

//   //meta title
//   document.title="Register | Skote - React Admin & Dashboard Template";

//   //form validation
//   const validation = useFormik({
//     // enableReinitialize : use this flag when initial values needs to be changed
//     enableReinitialize: true,

//     initialValues: {
//       username: '',
//       password: '',
//       conpassword: '',
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required("Please Enter Your Username"),
//       password: Yup.string().required("Please Enter Your Password"),
//       conpassword: Yup.string().required("Please Enter Your Confrim Password"),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//     }
//   });
//   return (
//     <React.Fragment>      
//       <div className="account-pages my-5 pt-sm-5">
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8} lg={8} xl={5}>
//               <Card className="overflow-hidden">
//                 <div className="bg-primary bg-soft">
//                   <Row>
//                     <Col className="col-7">
//                       <div className="text-primary p-4">
//                         <h5 className="text-primary">Free Register</h5>
//                         <p>Get your free Skote account now.</p>
//                       </div>
//                     </Col>
//                     <Col className="col-5 align-self-end">
//                       <img src={profileImg} alt="" className="img-fluid" />
//                     </Col>
//                   </Row>
//                 </div>
//                 <CardBody className="pt-0">
//                   <div>
//                   <div className="auth-logo">
//                     <Link to="/" className="auth-logo-light">
//                       <div className="avatar-md profile-user-wid mb-4">
//                         <span className="avatar-title rounded-circle bg-light">
//                           <img
//                             src={lightlogo}
//                             alt=""
//                             className="rounded-circle"
//                             height="34"
//                           />
//                         </span>
//                       </div>
//                     </Link>
//                     <Link to="/" className="auth-logo-dark">
//                       <div className="avatar-md profile-user-wid mb-4">
//                         <span className="avatar-title rounded-circle bg-light">
//                           <img
//                             src={logoImg}
//                             alt=""
//                             className="rounded-circle"
//                             height="34"
//                           />
//                         </span>
//                       </div>
//                     </Link>
//                   </div>
//                   </div>
//                   <div className="p-2">
//                     <Form className="form-horizontal"
//                       onSubmit={(e) => {
//                         e.preventDefault();
//                         validation.handleSubmit();
//                         return false;
//                       }}
//                     >
//                       <FormGroup floating>
                        
//                         <Input
//                           id="username"
//                           name="username"
//                           placeholder="Enter Username"
//                           type="text"
//                           onChange={validation.handleChange}
//                           onBlur={validation.handleBlur}
//                           value={validation.values.username || ""}
//                           invalid={
//                             validation.touched.username && validation.errors.username ? true : false
//                           }
//                         />
//                         <Label className="form-label">Username</Label>
//                         {validation.touched.username && validation.errors.username ? (
//                           <FormFeedback type="invalid">{validation.errors.username} </FormFeedback>
//                         ) : null}
//                       </FormGroup>
                      

//                       <FormGroup floating>
//                         <Input
//                           name="password"
//                           type="password"
//                           placeholder="Enter Password"
//                           onChange={validation.handleChange}
//                           onBlur={validation.handleBlur}
//                           value={validation.values.password || ""}
//                           invalid={
//                             validation.touched.password && validation.errors.password ? true : false
//                           }
//                         />
//                         <Label>Password</Label>
//                         {validation.touched.password && validation.errors.password ? (
//                           <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
//                         ) : null}
//                       </FormGroup>
//                       <FormGroup floating>
//                         <Input
//                           name="conpassword"
//                           type="password"
//                           placeholder="Enter Confrim password"
//                           onChange={validation.handleChange}
//                           onBlur={validation.handleBlur}
//                           value={validation.values.conpassword || ""}
//                           invalid={
//                             validation.touched.conpassword && validation.errors.conpassword ? true : false
//                           }
//                         />
//                         <Label>Confirm Password</Label>  
//                         {validation.touched.conpassword && validation.errors.conpassword ? (
//                           <FormFeedback type="invalid">{validation.errors.conpassword}</FormFeedback>
//                         ) : null}
//                       </FormGroup>

//                       <div className="mt-4 d-grid">
//                         <button
//                           className="btn btn-primary btn-block "
//                           type="submit"
//                         >
//                           Register
//                         </button>
//                       </div>

//                       <div className="mt-4 text-center">
//                         <h5 className="font-size-14 mb-3">Sign up using</h5>

//                         <ul className="list-inline">
//                           <li className="list-inline-item">
//                             <Link
//                               to="#"
//                               className="social-list-item bg-primary text-white border-primary"
//                             >
//                               <i className="mdi mdi-facebook" />
//                             </Link>
//                           </li>{" "}
//                           <li className="list-inline-item">
//                             <Link
//                               to="#"
//                               className="social-list-item bg-info text-white border-info"
//                             >
//                               <i className="mdi mdi-twitter" />
//                             </Link>
//                           </li>{" "}
//                           <li className="list-inline-item">
//                             <Link
//                               to="#"
//                               className="social-list-item bg-danger text-white border-danger"
//                             >
//                               <i className="mdi mdi-google" />
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>

//                       <div className="mt-4 text-center">
//                         <p className="mb-0">
//                           By registering you agree to the Skote{" "}
//                           <Link to="#" className="text-primary">
//                             Terms of Use
//                           </Link>
//                         </p>
//                       </div>
//                     </Form>
//                     {/* <Form>
//                     <div className="form-floating mb-3">
//                       <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
//                       <label htmlFor="floatingnameInput">Name</label>
//                     </div>
//                     <Row>
//                       <Col md={6}>
//                         <div className="form-floating mb-3">
//                           <input type="email" className="form-control" id="floatingemailInput" placeholder="Enter Email address" />
//                           <label htmlFor="floatingemailInput">Email address</label>
//                         </div>
//                       </Col>
//                       <Col md={6}>
//                         <div className="form-floating mb-3">
//                           <select defaultValue="0" className="form-select">
//                             <option value="0">Open this select menu</option>
//                             <option value="1">One</option>
//                             <option value="2">Two</option>
//                             <option value="3">Three</option>
//                           </select>
//                           <label htmlFor="floatingSelectGrid">Works with selects</label>
//                         </div>
//                       </Col>
//                     </Row>

//                     <div className="mb-3">

//                       <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="floatingCheck" />
//                         <label className="form-check-label" htmlFor="floatingCheck">
//                           Check me out
//                         </label>
//                       </div>
//                     </div>
//                     <div>
//                       <button type="submit" className="btn btn-primary w-md">Submit</button>
//                     </div>
//                   </Form> */}
//                   </div>
//                 </CardBody>
//               </Card>
//               <div className="mt-5 text-center">
//                 <p>
//                   Already have an account ?{" "}
//                   <Link
//                     to="/login"
//                     className="fw-medium text-primary"
//                   >
//                     {" "}
//                     Login
//                   </Link>{" "}
//                 </p>
//                 <p>
//                   © {new Date().getFullYear()} Skote. Crafted with{" "}
//                   <i className="mdi mdi-heart text-danger" /> by Themesbrand
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Register;
