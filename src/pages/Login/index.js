import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
// import profile from "../../assets/images/profile-img.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import backgroundLogin from "../../assets/images/working_space.jpg";
import FadeIn from "react-fade-in/lib/FadeIn";
import Lottie from "react-lottie";
import * as unLock from "./unlock.json";
import * as accessDenied from "./accessDenied.json";
import KorPorRorLogo from "../../assets/images/1200px-Opdc_preview_rev_1.png";
import { GetCookieData, GetCookieToken, GetCookieExpires } from "../Cookie/FunctionCookie";

const CheckUserLogin = () => {

  const baseURL = process.env.REACT_APP_API_CORS;

  document.title = "Login | FlexibleTIme";

  const [canLogin, setCanLogin] = useState(null);
  const [modalCheck, setModalCheck] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const [viewType, setViewType] = useState("Login");

  const [setPassword, setSetPassword] = useState();
  const [modalSetPassword, setModalSetPassword] = useState(false)
  const [isUsernameCorrect, setIsUsernameCorrect] = useState(false)
  // const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)

  const loginValidation = useFormik({
    enableReinitialize: true,

    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required("กรุณากรอก Username"),
      password: Yup.string()
        .required("กรุณากรอก Password")
        .min(8, "ต้องมีความยาวอย่างน้อย 8-20 ตัวอักษร")
        .max(20, "ต้องมีความยาวไม่เกิน 20 ตัวอักษร"),
    }),
    onSubmit: async (values) => {
      await axios
        .post(`${baseURL}/login`, values)
        .then((res) => {
          setCanLogin(res.data.status);

          handleOpenModal(res.data.status);
          console.log("Console log Login: ", res);
          if (res.data.status !== false) {
            setCookie(
              "userData",
              "userToken",
              res.data.user,
              res.data.token,
              1
            );
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else if (res.data.status === false) {
            console.log("Password ไม่ถูกต้อง");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  const setCookie = (nameProfile, nameToken, payload, token, duration) => {
    let expires;
    if (duration) {
      var date = new Date();
      date.setTime(date.getTime() + duration * 24 * 60 * 60 * 1000);
      expires = `expires=${date.toUTCString()}`;
    }

    const serializedObject = JSON.stringify(payload);

    document.cookie =
      nameProfile +"="+encodeURIComponent(serializedObject)+";"+expires+"; path=/";
    document.cookie = nameToken + "=" + token + ";" + expires + "; path=/";
  };

  const handleCheckUser = (username) => {
    axios
      .get(baseURL + `/login/username/${username}`)
      .then((res) => {
        console.log("Check User: ", res);
        if (res.data.firstLogin === 1 && res.data.status === true) {
          // setViewType(prev => "Login")
          // handleOpenModal(1,true)
          // alert('Username นี้ทำการตั้งรหัสแล้ว')
          setCanLogin(true)
          setIsUsernameCorrect(res.data.status)
          setSetPassword(res.data.firstLogin)
          console.log("Username นี้ทำการตั้งรหัสแล้ว");
        } else if (res.data.firstLogin === 0 && res.data.status === true) {
          // setViewType(prev => "VerifyUser")
          setCanLogin(false)
          setSetPassword(res.data.firstLogin);
          setModalSetPassword(res.data.status)
          console.log("Username ยังไม่ได้ทำการตั้งรหัส");
        } else if (res.data.status === false) {
          setCanLogin(false)
          setIsUsernameCorrect(res.data.status)
          loginValidation.setErrors({
            username: "ไม่พบ Username นี้ กรุณากรอก Username ให้ถูกต้อง",
          });
          // alert("ไม่พบ Username นี้ กรุณากรอก Username ให้ถูกต้อง");
          console.log("ไม่พบ Username นี้ กรุณากรอก Username ให้ถูกต้อง");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    console.log(loginValidation.values.username);
  }, [loginValidation.values.username]);

  const handleSubmit = () => {
    if (viewType === "CheckUser") {
      axios
        .get(baseURL + `/login/username/${data.username}`)
        .then((res) => {
          console.log("Check User: ", res);
          if (res.data.firstLogin === 1 && res.data.status === true) {
            // setViewType(prev => "Login")
            alert("Username นี้ทำการตั้งรหัสแล้ว");
          } else if (res.data.firstLogin === 0 && res.data.status === true) {
            // setViewType(prev => "VerifyUser")
            alert("Username ยังไม่ได้ทำการตั้งรหัส");
          } else {
            alert("ไม่พบ Username นี้");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (viewType === "VerifyUser") {
      axios
        .post(`${baseURL}/login/verify`, {
          username: data.username,
          idcard: data.idcard,
        })
        .then((res) => {
          if (res.data.status === true) {
            console.log(res);
            setToken(res.data.token);
            setViewType((prev) => "SetPassword");
          } else if (res.data.status === false) {
            alert("Username หรือ Password ไม่ถูกต้อง");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (viewType === "SetPassword") {
      // if(data.passwordMatch === true) {
      axios
        .post(
          `${baseURL}/login/resetPassword`,
          {
            password: data.password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log("Check User: ", res);
          setViewType((prev) => "Login");
        })
        .catch((err) => {
          console.error(err);
        });
      // } else if(data.passwordMatch === false) {
      //   alert("Passwords not match!")
      // }
    }
    if (viewType === "Login") {
      axios
        .post(`${baseURL}/login`, {
          username: data.username,
          password: data.password,
        })
        .then((res) => {
          if (res.data.status !== false) {
            console.log(res);

            setCookie(
              "userData",
              "userToken",
              res.data.user,
              res.data.token,
              1
            );
            navigate("/");
          } else if (res.data.status === false) {
            alert("Password ไม่ถูกต้อง");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    console.log("loginValidation :",loginValidation.values);
  }, [loginValidation.values]);

  const handleOpenModal = (status) => {
    setModalCheck(true);
    console.log(status);
    setTimeout(() => {
      handleCloseModal();
    }, 1300);
  };

  const handleCloseModal = () => {
    setModalCheck(false);
  };

  const handleLogout = (name,token) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = token + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    return navigate('/login');
  };

 

  return (
    <React.Fragment>
      <div className="account-pages">
        <img
          alt="background-login"
          style={{
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "-1",
            opacity: "0.7",
          }}
          src={backgroundLogin}
          // src="https://wallpapercave.com/wp/wp2939895.jpg"
        />
        <Container>
          <Row
            style={{ height: "100vh", display: "flex", alignItems: "center" }}
            className=""
          >
            {/* <Row className="justify-content-center"> */}
            <Col md={2} lg={3} xl={3}></Col>
            <Col sm={12} md={8} lg={6} xl={6}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={12} md={7} lg={8}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">
                          ยินดีต้อนรับเข้าสู่สำนักงาน ก.พ.ร
                        </h5>
                        <p>Sign In to continue to ก.พ.ร.</p>
                      </div>
                    </Col>
                    <Col
                      className="align-self-end py-4 px-4"
                      style={{ justifySelf: "end" }}
                    >
                      <img src={KorPorRorLogo} alt="" className="img-fluid" />
                      {/* <img src={profile} alt="" className="img-fluid" /> */}
                    </Col>
                  </Row>
                </div>
                <CardBody>
                  <Form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // handleSubmit();
                      loginValidation.handleSubmit();
                      return false;
                    }}
                  >
                    {/* {viewType !== "SetPassword" ? ( */}
                    <FormGroup floating className="position-relative">
                      <Input
                        id="username"
                        name="username"
                        placeholder="Enter Username"
                        type="text"
                        onBlur={(e) => {
                          loginValidation.handleBlur(e);
                          handleCheckUser(e.target.value);
                        }}
                        onChange={(e) => {
                          loginValidation.handleChange(e);
                          // handleCheckUser(e.target.value)
                        }}
                        value={loginValidation.values.username}
                        invalid={
                          loginValidation.touched.username &&
                          loginValidation.errors.username && isUsernameCorrect === false
                            ? true
                            : false
                        }
                        valid={
                          loginValidation.touched.username &&
                          !loginValidation.errors.username && isUsernameCorrect === true
                            ? true
                            : false
                        }
                        className="flex-grow-2"
                      />
                      <Label htmlFor="username" className="form-label">
                        Username
                      </Label>
                      {loginValidation.touched.username &&
                      loginValidation.errors.username && isUsernameCorrect === false ? (
                        <FormFeedback>
                          {loginValidation.errors.username}
                        </FormFeedback>
                      ) : (
                        <FormFeedback valid>Username ถูกต้อง</FormFeedback>
                      )}
                    </FormGroup>

                    {/* {viewType === "VerifyUser" ? ( */}
                    {/* <FormGroup floating>
                      <Input
                        id="idcard"
                        name="idcard"
                        placeholder="Enter idcard"
                        type="text"
                        onChange={(e) => {
                          setData(prev => ({...prev, idcard: e.target.value}));
                        }}
                      />
                      <Label className="form-label">รหัสบัตรประชาชน 13 หลัก</Label>
                    </FormGroup> */}
                    {/* ) : null} */}

                    {/* {viewType === "SetPassword" || viewType === "Login" ? ( */}
                    <FormGroup floating className="position-relative">
                      <Input
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        type="password"
                        disabled={
                          // loginValidation.values.username === "" ? true : false
                          canLogin ? false : true
                        }
                        onBlur={loginValidation.handleBlur}
                        onChange={loginValidation.handleChange}
                        value={loginValidation.values.password}
                        invalid={
                          loginValidation.touched.password &&
                          loginValidation.errors.password
                            ? true
                            : false
                        }
                        // valid={
                        //   loginValidation.touched.password &&
                        //   !loginValidation.errors.password
                        //     ? true
                        //     : false
                        // }
                        className="flex-grow-2"
                      />
                      <Label htmlFor="password" className="form-label">
                        Password
                      </Label>

                      {loginValidation.touched.password &&
                      loginValidation.errors.password ? (
                        <FormFeedback>
                          {loginValidation.errors.password}
                        </FormFeedback>
                      ) : null
                      // (
                      //   <FormFeedback valid>Password สามารถใช้ได้</FormFeedback>
                      // )
                      }
                    </FormGroup>
                    {/* ) : null} */}

                    {/* {viewType === "SetPassword" ? ( */}
                    {/* <FormGroup floating>
                        <Input
                          name="conpassword"
                          type="password"
                          placeholder="Enter Confirm Password"
                          onChange={(e) => {
                            setData(prev => ({...prev, conpassword: e.target.value}));
                          }}
                        />
                        <Label>Confirm Password</Label>
                        {data.passwordMatch === false ? <FormFeedback>Passwords do not match!</FormFeedback> : null}
                      </FormGroup> */}
                    {/* ) : null} */}
                    <div className="mt-1 d-grid">
                      <button
                        className="btn btn-primary btn-block font-size-16"
                        type="submit"
                      >
                        เข้าสู่ระบบ
                      </button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md={2} lg={3} xl={3}></Col>
          </Row>
          <Modal centered isOpen={modalCheck} toggle={() => handleCloseModal()}>
            <ModalHeader></ModalHeader>
            <ModalBody
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "50vh",
              }}
            >
              <Container>
              <Row>
                <Col xxl={12} style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"}}>
                  <div
                    className="p-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      height: "150px",
                      width: "150px",
                      border: "5px solid black",
                    }}
                  >
                    {canLogin === false ? (
                      <FadeIn>
                        <Lottie
                          options={{
                            loop: true,
                            autoplay: true,
                            animationData: accessDenied.default,
                            rendererSettings: {
                              preserveAspectRatio: "xMidYMid slice",
                            },
                          }}
                          width={180}
                          height={100}
                        />
                      </FadeIn>
                    ) : (
                      <FadeIn>
                        <Lottie
                          options={{
                            loop: true,
                            autoplay: true,
                            animationData: unLock.default,
                            rendererSettings: {
                              preserveAspectRatio: "xMidYMid slice",
                            },
                          }}
                          width={180}
                          height={100}
                        />
                      </FadeIn>
                    )}
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="d-flex justify-content-center" xxl={12}>
                  {!canLogin && (
                      <div>
                        <h3>Password ไม่ถูกต้อง</h3>
                      </div>
                    )}
                  
                </Col>
              </Row>

              
              </Container>
            </ModalBody>
          </Modal>
          <Modal size="lg" centered isOpen={modalSetPassword} toggle={() => {
            setModalSetPassword(!modalSetPassword)
          }}>
            <ModalHeader 
              toggle={() => {
                setModalSetPassword(!modalSetPassword)
              }}>
                ตั้งรหัสผ่าน
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row style={{ display:"flex", justifyContent: "center"}}>
                  
                <Label className="text-end" xxl={3} xl={4} lg={4} md={4}>กรอกรหัสผ่าน</Label>
                  <Col xxl={5} xl={6} md={6}>
                    <Input type="text" placeholder="กรอกรหัสผ่าน" />
                  </Col>
                </FormGroup>
                <FormGroup row style={{ display:"flex", justifyContent: "center"}}>
                    <Label className="text-end" xxl={3} xl={4}>กรอกรหัสผ่านอีกครั้ง</Label>
                    <Col xxl={5} xl={6}>
                      <Input type="text" placeholder="กรอกรหัสผ่านอีกครั้ง" />
                    </Col>
                </FormGroup>
                <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                  <Col xxl={2} xl={2}>
                    <Button className="w-100" color="success">บันทึก</Button>
                  </Col>
                  <Col xxl={2} xl={2}>
                    <Button className="w-100" color="danger">ย้อนกลับ</Button>
                  </Col>
                  <Col xxl={2} xl={1}></Col>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </Container>
      </div>
    </React.Fragment>
  );
};

{
  /* {loginValidation.values.password === "" ? null : (
                        <button
                          onClick={() => {
                            loginValidation.setFieldValue("password", "");
                          }}
                          type="button"
                          className="position-absolute translate-middle-y btn-close"
                          style={{
                            right: "9%",
                            top: "40%",
                          }}
                        >
                        </button>
                      )} */
}

export default CheckUserLogin;
