import React, { useState } from "react";
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
import classnames from "classnames";
import { Link } from "react-router-dom";

const Karnlar = () => {
  const [activeTab1, setActiveTab1] = useState("5");

  const toggle1 = (tab) => {
    if (activeTab1 !== tab) {
      setActiveTab1(tab);
    }
  };
  return (
    <div>
      <Card className="">
        <CardBody className="">
          <h5>
            <i className="fa-solid fa-briefcase font-size-20 me-2"></i>
            ภาพรวมการลาปฏิบัติงาน
          </h5>
          <Row className="mt-3">
            <Col lg={12} xl={12}>
              <Nav
                fill
                // tabs
                pills
                className="navtab-bg"
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
                    จำนวนการลา
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
              </Nav>
              <div
                className="my-4"
                style={{ border: "2.5px solid #3a40cd" }}
              ></div>
              <TabContent activeTab={activeTab1} className="p-2 text-muted">
                <TabPane tabId="5">
                  <h5>
                    <i className="fa-solid fa-memo-circle-info font-size-16 me-1"></i>
                    ข้อมูลการลา
                  </h5>
                  <Row
                    className="mb-0 mt-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* <Col
                          lg={6}
                          xl={6}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            maxHeight: "200px",
                          }}
                        >
                          <DonutChart />
                        </Col> */}
                    <Col className="ms-4 mt-2">
                      {/* <Row className="mb-2 mt-3">
                            <Col className="text-start">
                              <h5>จำนวนวันลาทั้งหมด</h5>
                            </Col>
                            <Col lg={2} xl={2} className="text-end">
                              <h5>33</h5>
                            </Col>
                          </Row> */}
                      <Row className="mb-1 d-flex align-items-center">
                        <Col xs={8} className="text-start">
                          <h5>
                            <i
                              style={{ color: "#7180ff" }}
                              className="fa-solid fa-square me-2"
                            ></i>
                            จำนวนวันลาทั้งหมด
                          </h5>
                        </Col>
                        <Col xs={4} lg={2} className="text-end">
                          <h5>30</h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} className="text-start">
                          <h5>
                            <i
                              style={{ color: "#ff6868" }}
                              className="fa-solid fa-square me-2"
                            ></i>
                            ใช้ไปแล้ว
                          </h5>
                        </Col>
                        <Col xs={4} lg={2} className="text-end">
                          <h5>10</h5>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col xs={8} className="text-start">
                          <h5>
                            <i
                              style={{ color: "#4dff62" }}
                              className="fa-solid fa-square me-2"
                            ></i>
                            คงเหลือ
                          </h5>
                        </Col>
                        <Col xs={4} lg={2} className="text-end">
                          <h5>20</h5>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="6">
                  <h5>
                    <i className="fa-solid fa-house-person-leave font-size-18 me-1"></i>
                    ประเภทการลา
                  </h5>
                  <Row className="mt-3">
                    <Col lg={12}>
                      <Row className="mb-1">
                        <Col lg={7}>
                          <Row>
                            <Col xs={10} lg={10}>
                              <h5 className="font-size-13">
                                ลาป่วย ลากิจ ลาคลอดบุตร
                              </h5>
                            </Col>
                            <Col xs={2} className="text-end">
                              <h6>7</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5}>
                          <Row>
                            <Col xs={10}>
                              <h5 className="font-size-13">ลาพักผ่อน</h5>
                            </Col>
                            <Col lg={1} xs={2} className="text-end">
                              <h6>3</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={7}>
                          <Row>
                            <Col xs={10} lg={10}>
                              <h5 className="font-size-13">
                                ขออนุญาติไปต่างประเทศ
                              </h5>
                            </Col>
                            <Col xs={2} className="text-end">
                              <h6>0</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5} className="text-start">
                          <Row>
                            <Col xs={10}>
                              <h5 className="font-size-13">ลาอุปสมบท</h5>
                            </Col>
                            <Col lg={1} xs={2} className="text-end">
                              <h6>0</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={7}>
                          <Row>
                            <Col lg={10} xs={10}>
                              <h5 className="font-size-13">
                                ลาประกอบพิธีฮัจญ์
                              </h5>
                            </Col>
                            <Col xs={2} className="text-end">
                              <h6>0</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5}>
                          <Row>
                            <Col xs={10}>
                              <h5 className="font-size-13">ลาติดตามคู่สมรส</h5>
                            </Col>
                            <Col lg={1} xs={2} className="text-end">
                              <h6>0</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={7} >
                          <Row>
                            <Col lg={10} xs={10}>
                              <h5 className="font-size-13">
                                ปฏิบัติราชการนอกสำนักงาน
                              </h5>
                            </Col>
                            <Col xs={2} className="text-end">
                              <h6>0</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5} >
                          <Row>
                            <Col xs={10}>
                              <h5 className="font-size-13">ลากรณีพิเศษ</h5>
                            </Col>
                            <Col xs={2} lg={1} className="text-end">
                              <h6>0</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={7} >
                          <Row>
                            <Col  xs={10} lg={10}>
                              <h5 className="font-size-13">
                                ลาศึกษา/ฝึกอบรม ดูงาน
                              </h5>
                            </Col>
                            <Col className="text-end">
                              <h6>0</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={7}>
                          <Row>
                            <Col lg={10} xs={10}>
                              <h5 className="font-size-13">
                                เข้ารับการตรวจเลือก/เตรียมพล
                              </h5>
                            </Col>
                            <Col className="text-end">
                              <h6>0</h6>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      {/* <HorizonBarChart /> */}
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
              <div className="mt-2" style={{ textAlign: "end" }}>
                <Link to="/laonline" className="btn btn-primary  btn-md">
                  ดูข้อมูลเพิ่มเติมได้ที่ระบบลาออนไลน์{" "}
                  <i className="mdi mdi-arrow-right ms-1"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Karnlar;
