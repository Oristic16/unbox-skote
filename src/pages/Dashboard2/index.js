import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";

import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

import Breadcrumbs from "../../components/Common/Breadcrumb";

import { DonutChart } from "./DonutChart";
import { HorizonBarChart } from "./HorizonBarChart";
import { MixChart } from "./MixChart";

import Calendar from './Calendar';
import TextCard from './TextCard';
import TextCard2 from './TextCard2';
import TableA from './TableA';
import ChartA from './ChartA';

ChartJS.register(...registerables);

export default class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab1: "5",
      role: null,
      timeNow: new Date(),
    };
  }

  toggle1 = (tab) => {
    if (this.state.activeTab1 !== tab) {
      this.setState({ activeTab1: tab });
    }
  };

  checkRole = () => {
    const getStorage = localStorage.getItem("authUser");
    const roleJSON = JSON.parse(getStorage);
    this.setState({ role: roleJSON.role });
  };

  componentDidMount() {
    this.checkRole();
    this.setTimeAuto();
  }

  handleClick = () => {
    window.open("https://www.youtube.com");
  };

  handleRedirect = () => {
    return (window.location.href = "http://www.google.com");
  };

  setTimeAuto = () => {
    var timer = setInterval(() => this.setState({ timeNow: new Date() }), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  };

  render() {
    const { role, timeNow, activeTab1 } = this.state;

    if (role === "admin") {
      return (
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col xl={12}>
                <Row>
                  <Col xl={3}>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xl={3}>
                            <i className="fa-solid fa-users"></i>
                          </Col>
                          <Col xl={9}></Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xl={3}>
                    <Card>
                      <CardBody>Nav1</CardBody>
                    </Card>
                  </Col>
                  <Col xl={3}>
                    <Card>
                      <CardBody>Nav1</CardBody>
                    </Card>
                  </Col>
                  <Col xl={3}>
                    <Card>
                      <CardBody>Nav1</CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col xl={9}>
                    <Card>
                      <CardBody>
                        <h5>การลาปฏิบัติงาน</h5>
                        <Row>
                          <Col xl={3}>
                            <Card>
                              <CardBody>
                                <p>คำขอลาเวลาปฏิบัติงาน</p>
                                <p>อนุญาตใบลา</p>
                                <p>อนุมัติใบลา</p>
                                <p>ยกเลิกใบลา</p>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xl={9}>
                            <Card>
                              <CardBody>
                                <h1>Content</h1>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xl={3}>
                    <Card>
                      <CardBody>
                        <h6>ลงเวลาปฏิบัติงาน</h6>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else if (role === "user") {
      return (
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Home" breadcrumbItem="Dashboard" />
            <Row>
              <Col lg={12}>
                <Row>
                  <Col sm={6} md={6} lg={6} xl={6} xxl={3}>
                    <Card className="mini-stats-wid">
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
                              <span
                                style={{ background: "#ff9825" }}
                                className="avatar-title rounded-circle"
                              >
                                {/* <span className="avatar-title rounded-circle bg-primary"> */}
                                <i
                                  className={"fa-solid fa-users font-size-24"}
                                ></i>
                              </span>
                            </div>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <h6 className="card-title font-size-12">
                                  เจ้าหน้าที่สำนักงาน ก.พ.ร.
                                </h6>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <h3>333</h3>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Progress
                                  animated
                                  style={{ height: "6px" }}
                                  value={25}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p
                                  className="mb-0 mt-2"
                                  style={{ fontSize: "10px" }}
                                >
                                  เพิ่มขึ้น 5% เมื่อเทียบกับปีที่แล้ว
                                </p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md={6} lg={6} xl={6} xxl={3}>
                    <Card className="mini-stats-wid">
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
                                style={{ background: "#0061ff" }}
                                className="avatar-title rounded-circle "
                              >
                                <i class="fa-solid fa-user-group-crown font-size-24"></i>
                              </span>
                            </div>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <h6 className="card-title font-size-14">
                                  ผู้บังคับบัญชา
                                </h6>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <h3>172</h3>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Progress
                                  animated
                                  style={{ height: "6px" }}
                                  value={40}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p
                                  className="mb-0 mt-2"
                                  style={{ fontSize: "10px" }}
                                >
                                  เพิ่มขึ้น 2% เมื่อเทียบกับปีที่แล้ว
                                </p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md={6} lg={6} xl={6} xxl={3}>
                    <Card className="mini-stats-wid">
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
                                style={{ background: "#ff378f" }}
                                className="avatar-title rounded-circle"
                              >
                                <i class="fa-solid fa-building-shield font-size-24"></i>
                              </span>
                            </div>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <h6 className="card-title font-size-14">
                                  หน่วยงาน
                                </h6>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <h3>25</h3>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Progress
                                  animated
                                  style={{ height: "6px" }}
                                  value={15}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p
                                  className="mb-0 mt-2"
                                  style={{ fontSize: "10px" }}
                                >
                                  เพิ่มขึ้น 1% เมื่อเทียบกับปีที่แล้ว
                                </p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md={6} lg={6} xl={6} xxl={3}>
                    <Card className="mini-stats-wid">
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
                              >
                                <i class="fa-regular fa-user-astronaut font-size-24"></i>
                              </span>
                            </div>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <h6 className="card-title font-size-14">
                                  ผู้ดูแลระบบ
                                </h6>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <h3>17</h3>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Progress
                                  animated
                                  style={{ height: "6px" }}
                                  value={10}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p
                                  className="mb-0 mt-2"
                                  style={{ fontSize: "10px" }}
                                >
                                  เพิ่มขึ้น 1% เมื่อเทียบกับปีที่แล้ว
                                </p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col lg={8} xl={9} xxl={9}>
                    <Card className="pb-0">
                      <CardBody className="pb-0">
                        <CardTitle>
                          <i class="fa-solid fa-briefcase font-size-18 me-2"></i>
                          ภาพรวมการลาปฏิบัติงาน
                        </CardTitle>
                        <Row className="mb-0">
                          <Col lg={12} xl={12}>
                            <Card>
                              <CardBody>
                                <Nav
                                  tabs
                                  pills
                                  className="navtab-bg nav-justified mt-3"
                                >
                                  <NavItem>
                                    <NavLink
                                      style={{ cursor: "pointer" }}
                                      className={classnames({
                                        active: activeTab1 === "5",
                                      })}
                                      onClick={() => {
                                        this.toggle1("5");
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
                                        this.toggle1("6");
                                      }}
                                    >
                                      ประเภทการลา
                                    </NavLink>
                                  </NavItem>
                                  <NavItem></NavItem>
                                </Nav>
                                <TabContent
                                  activeTab={activeTab1}
                                  className="p-3 text-muted"
                                >
                                  <TabPane tabId="5" style={{ color: "white" }}>
                                    <CardTitle className="mb-3">
                                      <i class="fa-solid fa-memo-circle-info font-size-16 me-1"></i>
                                      ข้อมูลการลา
                                    </CardTitle>
                                    <Row
                                      className="mb-0"
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Col
                                        lg={12}
                                        xl={12}
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          height: "270px",
                                        }}
                                      >
                                        <DonutChart />
                                      </Col>
                                      <Col>
                                        <Row className="mb-2">
                                          <Col className="text-start">
                                            คำขอลาเวลาปฏิบัติงาน
                                          </Col>
                                          <Col
                                            lg={2}
                                            xl={2}
                                            className="text-end"
                                          >
                                            33
                                          </Col>
                                        </Row>
                                        <Row className="mb-1">
                                          <Col className="text-start">
                                            <i
                                              style={{ color: "#7180ff" }}
                                              class="fa-solid fa-square me-2"
                                            ></i>
                                            อนุญาตใบลา
                                          </Col>
                                          <Col lg={2} className="text-end">
                                            15
                                          </Col>
                                        </Row>
                                        <Row className="mb-1">
                                          <Col className="text-start">
                                            <i
                                              style={{ color: "#4dff62" }}
                                              class="fa-solid fa-square me-2"
                                            ></i>
                                            อนุมัติใบลา
                                          </Col>
                                          <Col lg={2} className="text-end">
                                            10
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col className="text-start">
                                            <i
                                              style={{ color: "#ff6868" }}
                                              class="fa-solid fa-square me-2"
                                            ></i>
                                            ยกเลิกใบลา
                                          </Col>
                                          <Col lg={2} className="text-end">
                                            8
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </TabPane>
                                  <TabPane tabId="6" style={{ color: "white" }}>
                                    <CardTitle>
                                      <i className="fa-solid fa-house-person-leave font-size-18 me-1"></i>
                                      ประเภทการลา
                                    </CardTitle>
                                    <Row>
                                      <Col lg={12}>
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
                  </Col>
                  <Col sm={12} lg={4} xl={3} xxl={3}>
                    <Card>
                      <CardHeader style={{ fontSize: "1.1em" }}>
                        <i class="fa-solid fa-sun-cloud font-size-18 me-1"></i>
                        ลงเวลาปฏิบัติงาน
                      </CardHeader>
                      <CardBody className="pt-3">
                        <Row className="mb-3">
                          {/* <Col sm={1} lg={1}></Col> */}
                          <Col
                            xs={6}
                            sm={6}
                            lg={6}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <h5 style={{ fontSize: "15px" }}>เวลาเข้างาน</h5>
                          </Col>
                          <Col xs={6} sm={6} lg={6}>
                            <h5 style={{ fontSize: "15px" }}>เวลาออกงาน</h5>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          {/* <Col sm={1} lg={1}></Col> */}
                          <Col
                            xs={6}
                            sm={6}
                            lg={6}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <h5>{timeNow.toLocaleTimeString()}</h5>
                          </Col>
                          <Col xs={6} sm={6} lg={6}>
                            <h5>-</h5>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          {/* <Col sm={1} lg={1}></Col> */}
                          <Col
                            xs={6}
                            sm={6}
                            lg={6}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button color="success">
                              <i class="fa-solid fa-right-to-bracket"></i>{" "}
                              เข้างาน
                            </Button>
                          </Col>
                          <Col
                            xs={6}
                            sm={6}
                            lg={6}
                            style={{ display: "flex", justifyContent: "start" }}
                          >
                            <Button color="danger" outline>
                              ออกงาน{" "}
                              <i class="fa-solid fa-right-from-bracket"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="mt-4">
                          <Col
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <h6>เวลาประมาณการ</h6>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <p>ต้องออกงานหลังเวลา 15:30 น.</p>
                          </Col>
                        </Row>
                      </CardBody>
                      <CardHeader
                        className="mt-0"
                        style={{ fontSize: "1.1em" }}
                      >
                        <Row style={{ display: "flex", alignItems: "center" }}>
                          <Col xs={6} sm={6} md={6} lg={8} xl={8}>
                            <i class="fa-regular fa-newspaper font-size-17 me-1"></i>
                            Popular Topic
                          </Col>
                          <Col
                            xs={6}
                            sm={6}
                            md={6}
                            lg={4}
                            xl={4}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              color="primary"
                              style={{ fontSize: "10px", padding: "5px" }}
                            >
                              อ่านทั้งหมด
                            </Button>
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody className="mt-3">
                        <Row>
                          <Col lg={2}>
                            <h5>
                              <Badge pill>01</Badge>
                            </h5>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <h6>แบบฟอร์ม HR</h6>
                              </Col>
                            </Row>
                            <Row className="d-flex align-items-center">
                              <Col>
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h4>
                                    <Badge color="info">HR</Badge>
                                  </h4>{" "}
                                  &nbsp;8 ตุลาคม 2562
                                </span>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col lg={2}>
                            <h5>
                              <Badge pill>02</Badge>
                            </h5>
                          </Col>
                          <Col>
                            <Row>
                              <Col lg={10}>
                                <h6>
                                  รายชื่อข้าราชการตามมอบหมาย ณ 1 กุมภาพันธ์ 2565
                                </h6>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} md={12} lg={12} xl={9}>
                    <Card>
                        <CardBody>
                          <Col style={{}}>
                            <MixChart />
                          </Col>
                        </CardBody>
                      <Row className="mt-0 mb-3">
                        <Col
                          xs={3}
                          sm={3}
                          md={2}
                          lg={2}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          625
                          <br />
                          ใบลา
                        </Col>
                        <Col
                        xs={3}
                          sm={3}
                          md={3}
                          lg={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          567
                          <br />
                          อนุมัติ
                        </Col>
                        <Col
                        xs={3}
                          sm={3}
                          md={3}
                          lg={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          58
                          <br />
                          ยกเลิก
                        </Col>
                        <Col
                        xs={3}
                          sm={3}
                          md={3}
                          lg={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          4,536 ชม.
                          <br />
                          รวมจำนวนชั่วโมงการลา
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col xl={3}>
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>
                            <CardTitle>INTRANET</CardTitle>
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
                    </Row>
                    <Row>
                      <Col>
                        <Card>
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
                    </Row>
                    <Row>
                      <Col>
                        <Card>
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
                    </Row>
                    <Row>
                      <Col>
                        <Card>
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
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xl={3} lg={12} md={12} sm={12} xs={12}>
                <Calendar />
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} xs={12}>
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
              <Col xl={3} lg={12} md={12} sm={12} xs={12}>
                <TextCard2 />
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <TableA />
              </Col>
            </Row>
            <Row>
              <Col>
                <ChartA />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}