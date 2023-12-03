import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

import avatar1 from "../../../assets/images/man_2202112.png";
import profileImg from "../../../assets/images/profile-img.png";
import styles from './WelcomeComp.module.scss'

const WelcomeComp = (props) => {

  const { name, email, picture } = props

  // console.log(picture)

  const navigate = useNavigate()

  // console.log(props)

  const [userInfo, setUserInfo] = useState({
      fullName: name,
      email: email
  })

  return (
    <div>
      <Card className="overflow-hidden">
        <div className="bg-primary bg-soft">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">Welcome</h5>
                <p>Grow Up Tech</p>
              </div>
            </Col>
            <Col xs="5" className="align-self-end">
              <img src={profileImg} alt="" className="img-fluid" />
              {/* <img src={profileImg} alt="" className="img-fluid" /> */}
            </Col>
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="4" xxl={5}>
              <div className="avatar-md profile-user-wid mb-4">
                <img
                  // src={avatar1}
                  src={picture}
                  // src={avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <h5 className="font-size-15 text-truncate">{name}</h5>
              {/* <h5 className="font-size-15 text-truncate">{userInfo.fullName}</h5> */}
              <p className="text-muted mb-0 text-truncate">{email}</p>
              {/* <p className="text-muted mb-0 text-truncate">{userInfo.email}</p> */}
            </Col>

            <Col sm="8" xxl={7}>
              <div className="pt-4">
                <Row>
                  <Col xxl={12} xl={12} style={{display:"flex",justifyContent:"end"}}>
                    {/* <h5 className="font-size-15">125</h5>
                    <p className="text-muted mb-0">Projects</p> */}
                    <Button
                      className="position-relative"
                      color="warning"
                      size="md"
                      onClick={() => window.open("https://eoffice.opdc.go.th/saraban/home/", "_blank")}
                    >
                      หนังสือเข้าใหม่
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success font-size-14">
                        {/* {data2.length}{" "} */}

                        
                        {/* {props.dataLength} */}
                      </span>
                    </Button>
                  </Col>
                  {/* <Col xs="6">
                    <h5 className="font-size-15">$1245</h5>
                    <p className="text-muted mb-0">Revenue</p>
                  </Col> */}
                </Row>
                <div className="mt-4" style={{textAlign:"end"}}>
                  <Link to="/profile" className={`btn btn-primary btn-md ${styles.respon}`}>
                    ไปที่การตั้งค่าโปรไฟล์ <i className="mdi mdi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default WelcomeComp;
