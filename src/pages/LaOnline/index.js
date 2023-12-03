import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
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
import TableApprove from "./WaitApprove/TableApprove";
import NonApproveLeave from "./NonApproveLeave";
import { GetCookieData, GetCookieToken } from "../Cookie/GetCookie";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingPage from "../TESTPage/LoadingPage";
import FadeIn from "react-fade-in/lib/FadeIn";
import TableWaitingLeader from "./WaitApprove/TableWaitingLeader";
import OtherMenu from "./OtherMenu";

const LarOnline = (args) => {
  const location = useLocation();
  const paramValue =
    new URLSearchParams(location.search).get("exitbefore") || "";

  const user = GetCookieData("userData");
  const user_id = user?.user_id;

  const user_position = user?.position
  const getPositionFromCookie = (positionArr) => {
    if(!positionArr) return false
    if(positionArr?.length === 0) return false
    if(positionArr.find(item => item.position_id !== 8)) {
      return true
    } else return false
  }

  const baseURL = process.env.REACT_APP_API_CORS;

  const [leaveData, setLeaveData] = useState([]);
  const [currentPage, setCurrentPage] = useState("1");
  const [totalPage, setTotalPage] = useState(null);
  const [totalRows, setTotalRows] = useState(null);

  document.title = "การลาออนไลน์ | Flexible-Time";

  const token = GetCookieToken("userToken");

  const navigate = useNavigate();
  const [reportLar, setReportLar] = useState(true);

  const [selectReport, setSelectReport] = useState(null);

  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = () => {
    axios
      .get(baseURL + "/api/users/info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("users info from LarOnline:", res.data.result);
        setUserInfo(res.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const getLeaveDataTable = (page) => {
    axios
      .get(
        baseURL +
          `/api/leave/datatable?page=${page}&size=5&order[0]=created_date&order[1]=DESC&filter[user_id][0]=${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Leave Datatable: ", res);
        setLeaveData(res.data.result);
        setCurrentPage(res.data.info.currentPage);
        setTotalPage(res.data.info.totalPage);
        setTotalRows(res.data.info.totalRows);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getLeaveDataTable(currentPage);
  }, []);

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="page-content">
      {!loading ? (
        <LoadingPage />
      ) : (
        <FadeIn>
          <Container fluid >
            <Breadcrumb title="Home" breadcrumbItem="การลาออนไลน์" />
            <OtherMenu />
            <Row>
              <Col xxl={6} xl={12}>
                <Card>
                  <CardBody className="pb-0">
                    <Row
                      className="mb-4"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Col xxl={8} xl={7}>
                        <Button
                          color="primary"
                          onClick={() => {
                            navigate("/laonline/tableleave");
                          }}
                          className="pb-0"
                        >
                          <h5 className="font-size-16 card-title ">
                            <i className="fas fa-list font-size-16 me-2"></i>
                            ตารางแสดงข้อมูลการลา
                          </h5>
                        </Button>
                      </Col>
                      <Col
                        xxl={4}
                        xl={5}
                        className="d-flex justify-content-end"
                      >
                        <FormTypeLar
                          paramValue={paramValue}
                          getLeaveDataTable={getLeaveDataTable}
                          userInfo={userInfo}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={12} style={{ minHeight: "380px" }}>
                        <TableForm
                          userInfo={userInfo}
                          user_id={user_id}
                          leaveData={leaveData}
                          currentPage={currentPage}
                          totalPage={totalPage}
                          setLeaveData={setLeaveData}
                          setCurrentPage={setCurrentPage}
                          getLeaveDataTable={getLeaveDataTable}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {getPositionFromCookie(user_position) && (
                <Col xxl={6} xl={12}>
                  <Card style={{}}>
                    <CardBody className="pb-0">
                      <Row
                        className="mb-4"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Col xl={9} className="">
                          <Button color="primary" className="pb-0">
                            <h5 className="font-size-16 card-title">
                              <i className="fas fa-calendar-check font-size-16 me-2"></i>
                              รายการรอหัวหน้าอนุมัติ
                            </h5>
                          </Button>
                        </Col>
                        <Col xl={3} className="d-flex justify-content-end">
                          <Button></Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={12} style={{ minHeight: "380px" }}>
                          <TableWaitingLeader />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              )}
                <Col xxl={6} xl={12}>
                  <Card>
                    <CardBody className="pb-0">
                      <Row
                        className="mb-4"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Col xl={9} className="">
                          <Button color="primary" className="pb-0">
                            <h5 className="font-size-16 card-title">
                              <i className="fas fa-calendar-check font-size-16 me-2"></i>
                              รายการรออนุมัติ
                            </h5>
                          </Button>
                        </Col>
                        <Col xl={3} className="d-flex justify-content-end">
                          <Button color="primary">อนุมัติทั้งหมด</Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={12} style={{ minHeight: "380px" }}>
                          <TableApprove />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              <Col xxl={5} xl={5}>
                <Card style={{ minHeight: "430px" }}>
                  <CardBody className="pb-0">
                    <Row
                      className=""
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Col className="">
                        <Button color="primary" className="pb-0">
                          <h5 className="font-size-16 card-title">
                            <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                            รายงานการลา
                          </h5>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row
                          className="mt-3"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                          }}
                        >
                          <Label className="text-end" xxl={3} xl={4} xs={4}>
                            ประเภทการลา
                          </Label>
                          <Col xxl={6} xl={5} xs={7}>
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
                        {selectReport && (
                          <SelectReport idReport={selectReport} />
                        )}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xxl={5} xl={6}>
                <Card style={{ minHeight: "430px" }}>
                  <CardBody>
                    <Row
                      className="mb-3"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Col className="">
                        <Button color="primary" className="pb-0">
                          <h5 className="font-size-16 card-title">
                            <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                            การลาที่ยังไม่อนุมัติ
                          </h5>
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col>
                        <NonApproveLeave />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xxl={4}>
                
                {/* <Card style={{ minHeight: "430px" }}>
                  <Card>
                    <CardBody>
                      <Row className="mt-2">
                        <Col
                          xxl={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className={styles.div}>
                          
                            <i 
                            id="TooltipTop" 
                            className="fa-solid fa-square-sliders"
                            onMouseOver={toggleTooltip}
                            onMouseOut={toggleTooltip}
                            ></i>
                          </div>
                          <Tooltip
                            placement="top"
                            isOpen={tooltipOpen}
                            target="TooltipTop"
                            toggle={toggleTooltip}
                            transition="all 0.3s"
                          >
                            กำหนดการลา
                          </Tooltip>
                        </Col>
                        <Col
                          xxl={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className={styles.div}></div>
                        </Col>
                        <Col
                          xxl={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className={styles.div}></div>
                        </Col>
                        <Col
                          xxl={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className={styles.div}></div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Card> */}
              </Col>
              <Col xxl={12}>
                {/* <Card style={{ minHeight: "450px" }}>
                <CardBody> */}
                {/* <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col xxl={4}>
                    <Card
                      className="bg-primary bg-gradient bg-opacity-75"
                      onClick={() => navigate("/laonline/setdata?menuName=1")}
                    >
                      <CardBody
                        style={{ cursor: "pointer" }}
                        className="d-flex justify-content-center"
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "initial")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#33438e";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                        }}
                      >
                        <h4 className="text-white">กำหนดข้อมูลวันลา</h4>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xxl={4}>
                    <Card
                      className="bg-info bg-gradient"
                      onClick={() => navigate("/laonline/setdata?menuName=2")}
                    >
                      <CardBody
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "initial")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#30628e";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                        }}
                        style={{ cursor: "pointer" }}
                        className="d-flex justify-content-center"
                      >
                        <h4 className="text-white">มอบหมายการปฏิบัติราชการ</h4>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xxl={4}>
                    <Card
                      className="bg-success bg-gradient"
                      onClick={() => navigate("/laonline/setdata?menuName=3")}
                    >
                      <CardBody
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "initial")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#1e6c50";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                        }}
                        style={{ cursor: "pointer" }}
                        className="d-flex justify-content-center"
                      >
                        <h4 className="text-white">คำนวณวันลาสะสม</h4>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xxl={4}>
                    <Card
                      className="bg-secondary bg-gradient"
                      onClick={() => navigate("/laonline/setdata?menuName=4")}
                    >
                      <CardBody
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "initial")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#4c4d53";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                        }}
                        style={{ cursor: "pointer" }}
                        className="d-flex justify-content-center"
                      >
                        <h4 className="text-white">คำนวณวันทำงานย้อนหลัง</h4>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xxl={4}>
                    <Card
                      className="bg-warning bg-gradient"
                      onClick={() => navigate("/laonline/setdata?menuName=5")}
                    >
                      <CardBody
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "initial")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#87652b";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                        }}
                        style={{ cursor: "pointer" }}
                        className="d-flex justify-content-center"
                      >
                        <h4 className="text-white">ปฏิทินวันหยุด</h4>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xxl={4}>
                    <Card
                      className="bg-danger bg-gradient"
                      onClick={() => navigate("/laonline/setdata?menuName=6")}
                    >
                      <CardBody
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "initial")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#7f3b3b";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                        }}
                        style={{ cursor: "pointer" }}
                        className="d-flex justify-content-center"
                      >
                        <h4 className="text-white">กำหนดสิทธิและบทบาท</h4>
                      </CardBody>
                    </Card>
                  </Col>
                </Row> */}
                {/* </CardBody>
              </Card> */}
              </Col>
              {/* {radialChart === true ? (
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
                    
                  </div>
                </Col>
              </Row>
            </Col>
          ) : null} */}
              {/* <Col xl={4}>
                <Card style={{ minHeight: "430px" }}>
                  <CardBody className="pb-0">
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
                        </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </Container>
        </FadeIn>
      )}
    </div>
  );
};

export default LarOnline;
