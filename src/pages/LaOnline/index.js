import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import FormTypeLar from "./FormTypeLar";
import TableForm from "./TableForm";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ReportType from "./ReportLar/ReportType";
import SelectReport from "./ReportLar/SelectReport";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import TableApprove from "./WaitApprove/TableApprove";
import NonApproveLeave from "./NonApproveLeave";
import TableFormInstead from "./TableFormInstead";

const LarOnline = (args) => {
  const baseURL = "http://localhost:8000";

  const [data, setData] = useState([]);
  const [dataValue, setDataValue] = useState({
    formType: "",
    writeFrom: "สำนักงาน ก.พ.ร.",
    writeDate: new Date().toLocaleDateString(),
    title: "",
    writeTo: "ผู้อำนวยการสำนักงานเลขาธิการ",
    userName: "นวสรณ์ สร้อยโพธิ์พันธุ์",
    position: "นักวิชาการคอมพิวเตอร์ชำนาญการพิเศษ",
    groupName: "สังกัด/กองของผู้ใช้",
    sickType: "",
    leaveReason: "",
    leaveFromDate: "",
    leaveFromTimetype: "",
    leaveToDate: "",
    leaveToTimetype: "",
    leaveDays: "",
    contactAddress: "",
    note: "",
    file: "",
    approveUser: "นภนง ขวัญยืน",
    sendFinal: false,
    status: "รออนุมัติ",
  });
  const [openMenu, setOpenMenu] = useState(false);
  const [approve, setApprove] = useState(true);
  const [tableForm, setTableForm] = useState(true);
  const [radialChart, setRadialChart] = useState(true);
  const [tableFormInstead, setTableFormInstead] = useState(true);
  const [reportLar, setReportLar] = useState(true);

  const [selectReport, setSelectReport] = useState(null);

  const getData = () => {
    axios
      .get(baseURL + "/getform1")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const total = 30;

  const [series, setSeries] = useState([90, 80, 50, 40]);
  const [options, setOptions] = useState({
    stroke: {
      lineCap: "round",
    },
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    labels: ["วันลาคงเหลือ", "ลากิจ", "ลาป่วย", "ลาพักผ่อน"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 80,
      offsetY: 30,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
  });

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="Home" breadcrumbItem="การลาออนไลน์" />
        <Row className="">
          <Col
            xl={12}
            style={
              {
                // alignItems: "center",
                // justifyContent: "center",
              }
            }
          >
            <Row className="mb-3">
              {openMenu === false ? (
                <Col xl={12}>
                  <Button color="dark" onClick={() => setOpenMenu(!openMenu)}>
                    Menu<i className="ms-1 fas fa-angle-double-right "></i>
                  </Button>
                </Col>
              ) : null}
              {/* {openMenu === true ? ( */}
              <Collapse isOpen={openMenu}>
                <Col className="">
                  <Button color="dark" onClick={() => setOpenMenu(!openMenu)}>
                    <i className="fas fa-angle-left"></i>
                  </Button>
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                    onClick={() => setApprove(!approve)}
                  >
                    รายการรออนุมัติ{" "}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {data.length}
                    </span>
                  </button>
                  <Button
                    color="primary"
                    onClick={() => setTableForm(!tableForm)}
                  >
                    ตารางแสดงข้อมูลการลา
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => setReportLar(!reportLar)}
                  >
                    รายงานการลา
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => setTableFormInstead(!tableFormInstead)}
                  >
                    สร้างใบลาแทนเจ้าหน้าที่
                  </Button>
                </Col>
              </Collapse>
              {/* ) : null} */}
            </Row>
          </Col>
          {tableForm === true ? (
            <Col xl={5}>
              <Card style={{ minHeight: "450px" }}>
                <CardBody>
                  <Row
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Col xl={9} className="">
                      <h5 className="font-size-16 card-title">
                        <i className="fa-solid fa-circle-check font-size-16 me-2"></i>
                        ตารางแสดงข้อมูลการลา
                      </h5>
                    </Col>
                    <Col xl={3} className="d-flex justify-content-end">
                      <FormTypeLar />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                      <TableForm data={data} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ) : null}
          {approve === true ? (
            <Col xl={4}>
              <Card style={{ minHeight: "450px" }}>
                <CardBody>
                  <Row
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Col xl={9} className="">
                      <h5 className="font-size-16 card-title">
                        <i className="fa-solid fa-circle-check font-size-16 me-2"></i>
                        รายการรออนุมัติ
                      </h5>
                    </Col>
                    <Col xl={3} className="d-flex justify-content-end"></Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                      <TableApprove />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ) : null}
          {radialChart === true ? (
            <Col
              xl={3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Row>
                <Col xl={9} className="">
                  <div id="wallet-balance-chart">
                    <ReactApexChart
                      options={options}
                      series={series}
                      type="radialBar"
                      width="500"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          ) : null}
          {tableFormInstead === true ? (
            <Col xl={4}>
              <Card style={{ minHeight: "420px" }}>
                <CardBody>
                  <Row
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Col xl={9} className="">
                      <h5 className="font-size-16 card-title">
                        <i className="fa-solid fa-circle-check font-size-16 me-2"></i>
                        สร้างใบลาแทนเจ้าหน้าที่
                      </h5>
                    </Col>
                    <Col xl={3} className="d-flex justify-content-end">
                      <FormTypeLar />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                      <TableFormInstead data={data} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ) : null}
          {reportLar === true ? (
            <Col xl={4}>
              <Card style={{ minHeight: "280px" }}>
                <CardBody>
                  <Row
                    className=""
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Col className="">
                      <h5 className="font-size-16 card-title">
                        <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                        รายงานการลา
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                      >
                        <Label className="text-end" xl={3}>
                          ประเภทการลา
                        </Label>
                        <Col xl={4}>
                          <Input
                            type="select"
                            onChange={(e) => setSelectReport(e.target.value)}
                          >
                            <option value={null}>กรุณาระบุ</option>
                            {ReportType.map((item, idx) => {
                              return (
                                <option key={idx} value={item.no}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </Input>
                        </Col>
                      </Row>
                      {selectReport && <SelectReport idReport={selectReport} />}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ) : null}
          <Col xl={4}>
            <Card style={{ minHeight: "280px" }}>
              <CardBody>
                <Row
                  className="mb-3"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Col className="">
                    <h5 className="font-size-16 card-title">
                      <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                      การลาที่ยังไม่อนุมัติ
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NonApproveLeave />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LarOnline;
