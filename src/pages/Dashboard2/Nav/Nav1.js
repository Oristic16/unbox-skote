import React from "react";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Nav1 = () => {
  return (
    <div>
      <Card className="card mini-stats-wid" id="card1">
        <CardBody>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col
              lg={4}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="avatar-sm rounded-circle align-self-center mini-stat-icon">
                <span
                  style={{ background: "#ffa642" }}
                  className="avatar-title rounded-circle"
                  id="iconCard"
                >
                  {/* <span className="avatar-title rounded-circle bg-primary"> */}
                  <i
                    id="icon1"
                    className={"icon-card fa-solid fa-users font-size-24"}
                  ></i>
                </span>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <h6 style={{}} className="card-title font-size-12">
                    <b>เจ้าหน้าที่สำนักงาน ก.พ.ร.</b>
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 id="header-rightbar">333</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Progress
                    color="warning"
                    animated
                    style={{
                      height: "10px",
                      background: "#e5e5e5",
                      border: "2px solid #d5d5d5",
                    }}
                    value={90}
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

export default Nav1;
