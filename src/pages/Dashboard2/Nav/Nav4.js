import React from "react";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Nav4 = () => {
  return (
    <div>
      <Card className="mini-stats-wid" id="card4">
        <CardBody>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col
              lg={4}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                {/* <span className="avatar-title rounded-circle bg-primary"> */}
                <span
                  style={{ background: "#58bd81" }}
                  className="avatar-title rounded-circle"
                  id="iconCard"
                >
                  <i
                    id="icon4"
                    className="fa-regular fa-user-astronaut font-size-24"
                  ></i>
                </span>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <h6 style={{}} className="font-size-14">
                    <b>ผู้ดูแลระบบ</b>
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 id="header-rightbar">17</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Progress
                    color="success"
                    animated
                    style={{
                      height: "10px",
                      background: "#e5e5e5",
                      border: "2px solid #d5d5d5",
                    }}
                    value={80}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6
                    id="header-rightbar"
                    className="mb-0 mt-2"
                    style={{ fontSize: "10px" }}
                  >
                    <span className={"badge bg-" + "success" + " font-size-12"}>
                      เพิ่มขึ้น 5%
                    </span>{" "}
                    เมื่อเทียบกับปีที่แล้ว
                  </h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Nav4;
