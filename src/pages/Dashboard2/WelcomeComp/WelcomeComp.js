import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";

import avatar1 from "../../../assets/images/man_2202112.png";
import profileImg from "../../../assets/images/profile-img.png";

const WelcomeComp = () => {

    const [userInfo, setUserInfo] = useState({
        fullName: "Nirut Nammuang",
        position: "Programmer"
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
            </Col>
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="4">
              <div className="avatar-md profile-user-wid mb-4">
                <img
                //   src={avatar1}
                  src={avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <h5 className="font-size-15 text-truncate">{userInfo.fullName}</h5>
              <p className="text-muted mb-0 text-truncate">{userInfo.position}</p>
            </Col>

            <Col sm="8">
              <div className="pt-4">
                <Row>
                  <Col xs="6">
                    <h5 className="font-size-15">125</h5>
                    <p className="text-muted mb-0">Projects</p>
                  </Col>
                  <Col xs="6">
                    <h5 className="font-size-15">$1245</h5>
                    <p className="text-muted mb-0">Revenue</p>
                  </Col>
                </Row>
                <div className="mt-4" style={{textAlign:"end"}}>
                  <Link to="/profile" className="btn btn-primary  btn-md">
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
