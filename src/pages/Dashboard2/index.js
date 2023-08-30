import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Progress,
  Row,
} from "reactstrap";
import { Chart as ChartJS, registerables } from "chart.js";

import Breadcrumbs from "../../components/Common/Breadcrumb";
import { MixChart } from "./MixChart";
import { WaterballChart } from "./WaterballChart";

import Calendar from "./Calendar";
import TextCard from "./TextCard";
import TextCard2 from "./TextCard2";
import TableA from "./TableA";
import ChartA from "./ChartA";
import Karnlar from "./KarnLar/Karnlar";

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

    document.title = "Dashboard | Skote - React Admin & Dashboard Template";

    const { role, timeNow, } = this.state;

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
                <Row className="mb-3">
                  <Col  xl={3}>
                    <div style={{height:"500px", width:"500px", border:"2px solid black",background:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    {/* <WaterballChart /> */}
                      <div style={{height:"450px", width:"450px", border:"2px solid red", borderRadius:"100%", background:"red", display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <div style={{height:"400px", width:"400px", border:"2px solid blue",borderRadius:"100%", position:"absolute", background:"blue"}}>

                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} md={6} lg={6} xl={6} xxl={3}>
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
                                  className={
                                    "icon-card fa-solid fa-users font-size-24"
                                  }
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
                                    border:"2px solid #d5d5d5"
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
                                  <span
                                    className={
                                      "badge bg-" +
                                      "success" +
                                      " font-size-12"
                                    }
                                  >
                                    เพิ่มขึ้น 5%
                                  </span> เมื่อเทียบกับปีที่แล้ว
                                </h6>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md={6} lg={6} xl={6} xxl={3}>
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
                                    border:"2px solid #d5d5d5"
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
                                  <span
                                    className={
                                      "badge bg-" +
                                      "danger" +
                                      " font-size-12"
                                    }
                                  >
                                    ลดลง 1%
                                  </span> เมื่อเทียบกับปีที่แล้ว
                                </h6>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md={6} lg={6} xl={6} xxl={3}>
                    <Card className="mini-stats-wid" id="card3">
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
                                style={{ background: "#ff529e" }}
                                className="avatar-title rounded-circle"
                                id="iconCard"
                              >
                                <i
                                  className="fa-solid fa-building-shield font-size-24"
                                  id="icon3"
                                ></i>
                              </span>
                            </div>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <h6 style={{}} className="card-title font-size-14">
                                  <b>หน่วยงาน</b>
                                </h6>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <h3 id="header-rightbar">25</h3>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Progress
                                  color="danger"
                                  animated
                                  style={{
                                    height: "10px",
                                    background: "#e5e5e5",
                                    border:"2px solid #d5d5d5"
                                  }}
                                  value={40}
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
                                  <span
                                    className={
                                      "badge bg-" +
                                      "success" +
                                      " font-size-12"
                                    }
                                  >
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
                  </Col>
                  <Col sm={6} md={6} lg={6} xl={6} xxl={3}>
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
                                    border:"2px solid #d5d5d5"
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
                                  <span
                                    className={
                                      "badge bg-" +
                                      "success" +
                                      " font-size-12"
                                    }
                                  >
                                    เพิ่มขึ้น 5%
                                  </span> เมื่อเทียบกับปีที่แล้ว
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
                  <Col lg={8} xl={6}>
                    <Karnlar />
                  </Col>
                  <Col sm={12} lg={4} xl={3} xxl={3}>
                    <Card>
                      <CardBody>
                        <CardTitle style={{color:"#483fd3"}} className="mb-3">
                          <i className="fa-solid fa-sun-cloud font-size-18 me-1"></i>
                          ลงเวลาปฏิบัติงาน
                        </CardTitle>
                        <Row className="mb-3">
                          <Col sm={1} lg={1}>
                            <div className="event-timeline-dot">
                              <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right text-primary" />
                            </div>
                          </Col>
                          <Col
                            xs={6}
                            sm={6}
                            lg={5}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <h5 style={{ fontSize: "15px" }}>เวลาเข้างาน</h5>
                          </Col>
                          <Col xs={6} sm={6} lg={5}>
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
                            <Button color="success" onClick={this.handleEntry}>
                              <i className="fa-solid fa-right-to-bracket"></i>{" "}
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
                              <i className="fa-solid fa-right-from-bracket"></i>
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
                            <h6 id="header-rightbar">เวลาประมาณการ</h6>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <p style={{ color: "#8c8c8c" }}>
                              ต้องออกงานหลังเวลา 15:30 น.
                            </p>
                          </Col>
                        </Row>
                        <CardTitle style={{color:"#483fd3"}} className="mt-0 mb-3">
                          <Row
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Col xs={6} sm={6} md={6} lg={8} xl={8}>
                              <i className="fa-regular fa-newspaper font-size-17 me-1"></i>
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
                        </CardTitle>
                        <Row>
                          <Col lg={2}>
                            <h5>
                              <Badge color="primary" pill>
                                01
                              </Badge>
                            </h5>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <h6 id="header-rightbar">แบบฟอร์ม HR</h6>
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
                              <Badge color="primary" pill>
                                02
                              </Badge>
                            </h5>
                          </Col>
                          <Col>
                            <Row>
                              <Col lg={10}>
                                <h6 id="header-rightbar">
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
                        <Col>
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
                        <Card style={{ backgroundColor: "#ffc74f" }}>
                          <CardBody>
                            <CardTitle style={{color:"#"}} >INTRANET</CardTitle>
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
                    </Row>
                    <Row>
                      <Col>
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
                    </Row>
                    <Row>
                      <Col>
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
