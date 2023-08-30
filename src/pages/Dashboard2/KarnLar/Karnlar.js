import React, { useState } from "react";
import { HorizonBarChart } from "../HorizonBarChart";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { DonutChart } from "../DonutChart";
import classnames from "classnames";

const Karnlar = () => {
  const [activeTab1, setActiveTab1] = useState("5");

  const toggle1 = (tab) => {
    if (activeTab1 !== tab) {
      setActiveTab1(tab);
    }
  };
  return (
    <div>
      <Card className="pb-0">
        <CardBody className="pb-0">
          <CardTitle style={{ color: "#483fd3" }}>
            <i className="fa-solid fa-briefcase font-size-18 me-2"></i>
            ภาพรวมการลาปฏิบัติงาน
          </CardTitle>
          <Row className="mb-0">
            <Col lg={12} xl={12}>
              <Card>
                <CardBody>
                  <Nav
                    fill
                    // tabs
                    pills
                    className="navtab-bg mt-0"
                  >
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "5",
                        })}
                        onClick={() => {
                          toggle1("5");
                        }}
                      >
                        ข้อมูลการลา
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "6",
                        })}
                        onClick={() => {
                          toggle1("6");
                        }}
                      >
                        ประเภทการลา
                      </NavLink>
                    </NavItem>
                    <NavItem></NavItem>
                    <NavItem></NavItem>
                  </Nav>
                  <div
                    className="my-4"
                    style={{ border: "2.5px solid #3a40cd" }}
                  ></div>
                  <TabContent activeTab={activeTab1} className="p-3 text-muted">
                    <TabPane tabId="5">
                      <CardTitle style={{ color: "#483fd3" }} className="mb-2">
                        <h5>
                          <i className="fa-solid fa-memo-circle-info font-size-16 me-1"></i>
                          ข้อมูลการลา
                        </h5>
                      </CardTitle>
                      <Row
                        className="mb-0 mt-3"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Col
                          lg={6}
                          xl={6}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "200px",
                          }}
                        >
                          <DonutChart />
                        </Col>
                        <Col>
                          <Row className="mb-2 mt-3">
                            <Col className="text-start">
                              <h5>คำขอลาเวลาปฏิบัติงาน</h5>
                            </Col>
                            <Col lg={2} xl={2} className="text-end">
                              <h5>33</h5>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="text-start">
                              <h5>
                                <i
                                  style={{ color: "#7180ff" }}
                                  className="fa-solid fa-square me-2"
                                ></i>
                                อนุญาตใบลา
                              </h5>
                            </Col>
                            <Col lg={2} className="text-end">
                              <h5>15</h5>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="text-start">
                              <h5>
                                <i
                                  style={{ color: "#4dff62" }}
                                  className="fa-solid fa-square me-2"
                                ></i>
                                อนุมัติใบลา
                              </h5>
                            </Col>
                            <Col lg={2} className="text-end">
                              <h5>10</h5>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-start">
                              <h5>
                                <i
                                  style={{ color: "#ff6868" }}
                                  className="fa-solid fa-square me-2"
                                ></i>
                                ยกเลิกใบลา
                              </h5>
                            </Col>
                            <Col lg={2} className="text-end">
                              <h5>8</h5>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="6">
                      <CardTitle style={{ color: "#483fd3" }}>
                        <h5>
                          <i className="fa-solid fa-house-person-leave font-size-18 me-1"></i>
                          ประเภทการลา
                        </h5>
                      </CardTitle>
                      <Row>
                        <Col
                          lg={12}
                          style={{
                            height: "350px",
                          }}
                        >
                          <HorizonBarChart />
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Karnlar;
