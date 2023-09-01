import React, { Component } from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import { Chart as ChartJS, registerables } from "chart.js";

import Breadcrumbs from "../../components/Common/Breadcrumb";

import Calendar from "./Calendar";
import TextCard from "./TextCard";
import TextCard2 from "./TextCard2";
import ChartA from "./ChartA";
import Karnlar from "./KarnLar/Karnlar";
import WaterBall from "./WaterBall/WaterBall";
import WelcomeComp from "./WelcomeComp/WelcomeComp";
import EntryWork from "./EntryWork/EntryWork";
import Reservation from "./Reservation";
import Announce from "./Announce/Announce";
import ListComp from "./ListComponent/ListComp";
import RecentFile from "./OPDCBOX/RecentFile";

ChartJS.register(...registerables);

export default class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: null,
      timeNow: new Date(),
    };
  }

  checkRole = () => {
    const getStorage = localStorage.getItem("authUser");
    const roleJSON = JSON.parse(getStorage);
    this.setState({ role: roleJSON.role });
  };

  componentDidMount() {
    this.checkRole();
  }

  handleClick = () => {
    window.open("https://www.youtube.com");
  };

  handleRedirect = () => {
    return (window.location.href = "http://www.google.com");
  };

  render() {
    document.title = "Dashboard | Skote - React Admin & Dashboard Template";

    const { role } = this.state;

    if (role === "user") {
      return (
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Home" breadcrumbItem="Dashboard" />
            <Row>
              <Col lg={12} >
                <Row style={{ display: "flex" }}>
                  <Col
                    xl={3}
                    // className="border border-danger"
                  >
                    <Row>
                      <Col xl={12}>
                        <WelcomeComp />
                      </Col>
                      <Col>
                      <Calendar />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xl={4}
                    // className="border border-danger"
                  >
                    <Row>
                      <Col xl={12}>
                        <Karnlar />
                      </Col>
                      <Col>
                        <RecentFile />
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xl={3}
                  // className="border border-danger"
                  >
                    <Row>
                      <Col>
                        <Reservation />
                      </Col>
                      <Col>
                        <Announce />
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xl={2}>
                    <Row>
                      <Col
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <WaterBall />
                      </Col>
                      <Col>
                        <EntryWork />
                      </Col>
                      <Col xl={12}>
                        <ListComp />
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={3} ></Col>
                  <Col xl={4} >
                    <Row>
                      <Col xl={3}>
                        <Card style={{ backgroundColor: "#ffc74f" }}>
                          <CardBody>
                            <CardTitle style={{ color: "#" }}>
                              INTRANET
                            </CardTitle>
                            <Row>
                              <Col lg={9}>
                                <Row>
                                  <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                                </Row>
                                <Row>
                                  <Col>158 รายการ</Col>
                                </Row>
                              </Col>
                              <Col
                                lg={3}
                                className="d-flex justify-content-end align-items-center"
                              >
                                <i className="fa-solid fa-database fa-3x"></i>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xl={3}>
                        <Card style={{ background: "#91a4ff" }}>
                          <CardBody>
                            <CardTitle>ระบบสารบรรณ</CardTitle>
                            <Row>
                              <Col lg={9}>
                                <Row>
                                  <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                                </Row>
                                <Row>
                                  <Col>123 รายการ</Col>
                                </Row>
                              </Col>
                              <Col
                                lg={3}
                                className="d-flex justify-content-end align-items-center"
                              >
                                <i className="fa-solid fa-paper-plane fa-3x"></i>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xl={3}>
                        <Card style={{ background: "#f9a3ff" }}>
                          <CardBody className="">
                            <CardTitle>ระบบจองห้องประชุม</CardTitle>
                            <Row>
                              <Col lg={9} xl={9}>
                                <Row>
                                  <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                                </Row>
                                <Row>
                                  <Col>19 คำขอ</Col>
                                </Row>
                              </Col>
                              <Col
                                lg={3}
                                className="d-flex justify-content-end align-items-center"
                              >
                                <i className="fa-solid fa-screen-users fa-3x"></i>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xl={3}>
                        <Card style={{ background: "#86eeb1" }}>
                          <CardBody>
                            <CardTitle>ระบบจองยานพาหนะ</CardTitle>
                            <Row>
                              <Col lg={9} xl={9}>
                                <Row>
                                  <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                                </Row>
                                <Row>
                                  <Col>27 คำขอ</Col>
                                </Row>
                              </Col>
                              <Col
                                lg={3}
                                className="d-flex justify-content-end align-items-center"
                              >
                                <i className="fa-solid fa-cars fa-3x"></i>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>

                  <Col xl={3}>
                    
                  </Col>
                  <Col xl={3}>
                    <TextCard
                      day="2"
                      month="เม ย."
                      date="2 เมษา 2561"
                      detail="นักบริหารการเปลี่ยนแปลงคนรุ่นใหม่ รุ่นที่10 รับฟังหลักเกณฑ์และขั้นตอนการจัดสรรไปปฏิบัติราชการ ณ สำนักงาน ก.พ.ร."
                    />
                    <TextCard
                      day="3"
                      month="เม ย."
                      date="3 เมษา 2561"
                      detail="คลีนิกให้คำปรึกษาการประเมินสถานะการเป็นระบบราชการ 4.0 (ส่วนราชการในสังกัดกระทรวงยุติธรรม)"
                    />
                    <TextCard
                      day="3"
                      month="เม ย."
                      date="3 เมษา 2561"
                      detail="การประชุมฝ่ายบริหาร สำนักงาน ก.พ.ร. ครั้งที่ 7/2561"
                    />
                    <TextCard
                      day="3"
                      month="เม ย."
                      date="3 เมษา 2561"
                      detail="การประชุมคณะกรรมการสวัสดิการสำนักงงาน ก.พ.ร. ครั้งที่1/2561"
                    />
                    <TextCard
                      day="4"
                      month="เม ย."
                      date="4 เมษา 2561"
                      detail="การประชุม เรื่อง การรายงานผลการดำเนินการตามแนวทางปรับปรุงสภาพแวดล้อม สำหรับประกอบธุรกิจในประเทศไทย"
                    />
                    <TextCard
                      day="5"
                      month="เม ย."
                      date="5 เมษา 2561"
                      detail="พิธีลงนามบันทึกข้อตกลงว่าด้วยความร่วมมือด้านการเชื่อมโยงข้อมูลหลักประกันทางอิเล็กทรอนิกส์"
                    />
                    <TextCard
                      day="5"
                      month="เม ย."
                      date="5 เมษา 2561"
                      detail="การรายงานตัวเข้าร่วมโครงการพัฒนานักบริหารการเปลี่ยนแปลงรุ่นใหม่ รุ่นที่ 12"
                    />
                  </Col>
                  <Col xl={3}>
                    <TextCard2 />
                  </Col>
                  <Col xl={6}>
                    <ChartA />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
