import React from "react";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Nav2 = () => {
  return (
    <div>
      <Card className="mini-stats-wid" id="card2">
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
                  id="iconCard"
                  style={{ background: "#0061ff" }}
                  className="avatar-title rounded-circle "
                >
                  <i
                    id="icon2"
                    className="fa-solid fa-user-group-crown font-size-24"
                  ></i>
                </span>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <h5 style={{}} className="card-title font-size-14">
                    ผู้บังคับบัญชา
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 id="header-rightbar">172</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Progress
                    color="primary"
                    animated
                    style={{
                      height: "10px",
                      background: "#e5e5e5",
                      border: "2px solid #d5d5d5",
                    }}
                    value={70}
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
                    <span className={"badge bg-" + "danger" + " font-size-12"}>
                      ลดลง 1%
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

export default Nav2;
