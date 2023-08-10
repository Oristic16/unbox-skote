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
  Row,
} from "reactstrap";

import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

import Breadcrumbs from "../../components/Common/Breadcrumb";

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
    const { role, timeNow } = this.state;

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
            <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard" />
            <Row>
              <Col lg={12}>
                <Row>
                  <Col sm={6} md={6} lg={3} xl={3}>
                    <Card>
                      <CardBody>
                        <Button
                          onClick={this.handleRedirect}
                          style={{ width: "100%" }}
                        >
                          Link1
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md={6} lg={3} xl={3}>
                    <Card>
                      <CardBody>
                        <Button
                          onClick={this.handleClick}
                          style={{ width: "100%" }}
                        >
                          Link1
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md={6} lg={3} xl={3}>
                    <Card>
                      <CardBody>
                        <Button style={{ width: "100%" }}>Link1</Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md={6} lg={3} xl={3}>
                    <Card>
                      <CardBody>
                        <Button style={{ width: "100%" }}>Link1</Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9}>
                    <Card className="pb-0">
                      <CardBody className="pb-0">
                        <CardTitle>ภาพรวมการลาปฏิบัติงาน</CardTitle>
                        <Row>
                          <Col lg={4}>
                            <Card>
                              <CardBody>
                                <CardTitle className="mb-3">
                                  ข้อมูลการลา
                                </CardTitle>
                                <Row className="mb-3">
                                  <Col lg={2}></Col>
                                  <Col>
                                    <DonutChart />
                                  </Col>
                                  <Col lg={2}></Col>
                                </Row>
                                <Row>
                                  <Col className="text-start">
                                    คำขอลาเวลาปฏิบัติงาน
                                  </Col>
                                  <Col lg={2} className="text-end">
                                    33
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className="text-start">อนุญาตใบลา</Col>
                                  <Col lg={2} className="text-end">
                                    15
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className="text-start">อนุมัติใบลา</Col>
                                  <Col lg={2} className="text-end">
                                    10
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className="text-start">ยกเลิกใบลา</Col>
                                  <Col lg={2} className="text-end">
                                    8
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg={8}>
                            <CardTitle>ประเภทการลา</CardTitle>
                            <HorizonBarChart />
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card>
                      <CardHeader style={{ fontSize: "1.1em" }}>
                        <i class="fa-solid fa-sun-cloud"></i> ลงเวลาปฏิบัติงาน
                      </CardHeader>
                      <CardBody className="pt-2">
                        <Row className="mb-2">
                          <Col lg={1}></Col>
                          <Col
                            lg={5}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <h5>เวลาเข้างาน</h5>
                          </Col>
                          <Col lg={5}>
                            <h5>เวลาออกงาน</h5>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col lg={1}></Col>
                          <Col
                            lg={5}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <h5>{timeNow.toLocaleTimeString()}</h5>
                          </Col>
                          <Col lg={5}>
                            <h5>-</h5>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col lg={1}></Col>
                          <Col
                            lg={5}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button color="success">
                              <i class="fa-solid fa-right-to-bracket"></i>{" "}
                              เข้างาน
                            </Button>
                          </Col>
                          <Col lg={5}>
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
                        <Row className="d-flex align-items-center">
                          <Col lg={8}>
                            <i class="fa-regular fa-newspaper"></i> Popular
                            Topic
                          </Col>
                          <Col
                            lg={4}
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
                      <CardBody>
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
                                  8 ตุลาคม 2562
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
                                <h6>รายชื่อข้าราชการตามมอบหมาย ณ 1 กุมภาพันธ์ 2565</h6>
                              </Col>
                            </Row>
                            
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9}>
                    <Card>
                      <CardBody>
                        <MixChart />
                      </CardBody>
                      <Row className="mt-4">
                        <Col
                          lg={2}
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          625
                          <br />
                          ใบลา
                        </Col>
                        <Col
                          lg={3}
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          567
                          <br />
                          อนุมัติ
                        </Col>
                        <Col
                          lg={3}
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          58
                          <br />
                          ยกเลิก
                        </Col>
                        <Col
                          lg={3}
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          4,536 ชม.
                          <br />
                          รวมจำนวนชั่วโมงการลา
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>
                            <CardTitle>INTRANET</CardTitle>
                            <Row>
                              <Col lg={8}>
                                <Row>
                                  <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                                </Row>
                                <Row>
                                  <Col>158 รายการ</Col>
                                </Row>
                              </Col>
                              <Col
                                lg={4}
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
                              <Col lg={8}>
                                <Row>
                                  <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                                </Row>
                                <Row>
                                  <Col>123 รายการ</Col>
                                </Row>
                              </Col>
                              <Col
                                lg={4}
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
                              <Col lg={8}>
                                <Row>
                                  <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                                </Row>
                                <Row>
                                  <Col>19 คำขอ</Col>
                                </Row>
                              </Col>
                              <Col
                                lg={4}
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
                            <CardTitle>ระบบสารบรรณ</CardTitle>
                            <Row>
                              <Col lg={8}>
                                <Row>
                                  <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                                </Row>
                                <Row>
                                  <Col>27 คำขอ</Col>
                                </Row>
                              </Col>
                              <Col
                                lg={4}
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
          </Container>
        </div>
      );
    }
  }
}

export const DonutChart = () => {
  const data = {
    labels: ["อนุญาตใบลา", "อนุมัติใบลา", "ยกเลิกใบลา"],
    datasets: [
      {
        data: [15, 10, 8],
        backgroundColor: ["#7180ff", "#4dff62", "#ff6868"],
        hoverOffset: 15,
        borderColor: "transparent",
        borderWidth: 10,
        offset: 5,
      },
    ],
  };

  const option = {
    // responsive: true,
    plugins: {
      legend: false,
    },
  };

  return <Doughnut data={data} options={option} />;
};

export const HorizonBarChart = () => {
  const labels = [
    "ลาป่วย ลากิจ ลาคลอดบุตร",
    "ลาพักผ่อน",
    "ขออนุญาติไปต่างประเทศ",
    "ลาอุปสมบท",
    "ลาประกอบพิธีฮัจญ์",
    "เข้ารับการตรวจเลือก/เตรียมพล",
    "ลาศึกษา/ฝึกอบรม ดูงาน",
    "ลาติดตามคู่สมรส",
    "ปฏิบัติราชการนอกสำนักงาน",
    "ลากรณีพิเศษ",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [25, 10, 2, 2, 1, 2, 5, 4, 12, 15],
        backgroundColor: ["#7180ff"],
        hoverOffset: 8,
      },
    ],
  };

  const option = {
    // responsive: true,
    indexAxis: "y",
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 13,
            // family: 'angasnaNew'
          },
        },
      },
      x: {
        ticks: {},
      },
    },
  };

  return <Bar data={data} options={option} />;
};

export const MixChart = () => {
  const labels = [
    "ม.ค.",
    "ก.พ.",
    "มี.ต.",
    "เม.ย.",
    "พ.ศ.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        type: "bar",
        // fill: true,
        barThickness: 10,
        label: "ใบลา",
        backgroundColor: "#7180ff",
        data: [26, 16, 31, 48, 8, 24, 30, 12, 32, 30, 55, 70],
      },
      {
        type: "line",
        fill: true,
        label: "อนุมัติ",
        backgroundColor: "rgb(92, 255, 92, 0.1)",
        borderColor: "#5ff160",
        pointBackgroundColor: "#94ff95",
        data: [25, 15, 30, 47, 7, 23, 29, 11, 31, 28, 53, 68],
      },
      {
        type: "line",
        // fill: true,
        barThickness: 10,
        label: "ยกเลิก",
        borderColor: "#ff775f",
        borderDash: [6, 6],
        data: [4, 2, 10, 8, 6, 2, 5, 3, 14, 7, 15, 17],
      },
    ],
  };

  const option = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        // labels: { borderRadius }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={option} />;
};
