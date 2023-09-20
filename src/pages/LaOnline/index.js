import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Collapse,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledCarousel,
  UncontrolledCollapse,
} from "reactstrap";
import FormTypeLar from "./FormTypeLar";
import TableForm from "./TableForm";
import TableHistory from "./TableHistory";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ReportType from "./ReportLar/ReportType";
import SelectReport from "./ReportLar/SelectReport";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import TableContainer from "../../components/Common/TableContainer";
import TableApprove from "./WaitApprove/TableApprove";
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import NonApproveLeave from "./NonApproveLeave";

const items = [
  {
    src: "https://picsum.photos/id/123/1200/400",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

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

  const [collapMenu, setCollapMenu] = useState(false);

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

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
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
            <Row className="">
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
                  <TableForm data={data} />
                </Col>
              </Row>
            </Col>
          ) : null}
          {approve === true ? (
            <Col xl={3}>
              <Row
                className="mb-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Col xl={9} className="pt-3">
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
            </Col>
          ) : null}
          {radialChart === true ? (
            <Col xl={3}>
              <Row
                className="mb-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Col xl={9} className="pt-3">
                  <div id="wallet-balance-chart">
                    <ReactApexChart
                      options={option}
                      series={series}
                      type="radialBar"
                      // height={300}
                      width="500"
                      // className="apex-charts"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          ) : null}
          {tableFormInstead === true ? (
            <Col xl={4}>
              <Row
                className="mb-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Col xl={9} className="pt-3">
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
                  <TableForm data={data} />
                </Col>
              </Row>
            </Col>
          ) : null}
          {reportLar === true ? (
            <Col xl={4}>
              <Row
                className="mb-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Col className="pt-3">
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
          ) : null}
          <Col xl={4}>
            <Row
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Col className="pt-3">
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
          </Col>

          {/* <Col xl={4}>
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
              <Card style={{ minHeight: "280px" }}>
                  <CardBody>
                    </CardBody>
                    </Card>
              </Col>
            </Row>
          </Col> */}
          {/* <div id="wallet-balance-chart"> 
                    <ReactApexChart
                      options={option}
                      series={series}
                      type="radialBar"
                      // height={300}
                      width="500"
                      className="apex-charts"
                    />
                    </div> */}
          {/* */}
        </Row>
        <Row>
          <Col>
            <Carousel
              fade
              interval={3000}
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              {...args}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LarOnline;
