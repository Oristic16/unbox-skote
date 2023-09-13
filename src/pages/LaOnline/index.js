import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import FormTypeLar from "./FormTypeLar";
import TableForm from "./TableForm";
import TableHistory from "./TableHistory";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ReportType from "./ReportLar/ReportType";
import SelectReport from "./ReportLar/SelectReport";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const LarOnline = () => {
  const baseURL = "http://localhost:8000";

  const [data, setData] = useState([]);

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

  const [option, setOption] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    stroke: {
      lineCap: "round",
    },
  });

  const [series, setSeries] = useState([10, 50, 90]);

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="Home" breadcrumbItem="การลาออนไลน์" />
        <Row>
          <Col
            xl={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row>
              <Col xl={6}>
                <Row>
                  <div>
                    {/* <div id="wallet-balance-chart"> */}
                    <ReactApexChart
                      options={option}
                      series={series}
                      type="radialBar"
                      // height={300}
                      width="500"
                      className="apex-charts"
                    />
                    {/* </div> */}
                  </div>
                </Row>
              </Col>
              <Col xl={6}>
                <Row>
                  <div>
                    {/* <div id="wallet-balance-chart"> */}
                    <ReactApexChart
                      options={option}
                      series={series}
                      type="radialBar"
                      // height={300}
                      width="500"
                      // className="apex-charts"
                    />
                    {/* </div> */}
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={6}>
            <Row
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Col xl={9} className="pt-3">
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
                <TableForm data={data}  />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="">
          <Col xl={4}>
            <Row>
              <Col>
                <h5 className="font-size-16 card-title">
                  <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                  ประวัติการลา
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <TableHistory />
              </Col>
            </Row>
          </Col>
          <Col xl={4}>
            <Row>
              <Col>
                <h5 className="font-size-16 card-title">
                  <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                  รายงานการลา
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ minHeight: "280px" }}>
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl={4}>
            <Row>
              <Col>
                <h5 className="font-size-16 card-title">
                  <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                  ประวัติการลา
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <TableHistory />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LarOnline;
