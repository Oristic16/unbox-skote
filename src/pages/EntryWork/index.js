import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import React, { useState, useEffect } from "react";
import profileImg from "../../assets/images/profile-img.png";
import axios from "axios";
import monthNames from "../../common/data/monthName";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { GetCookieData, GetCookieToken } from "../Cookie/GetCookie";
import LoadingPage from "../TESTPage/LoadingPage";
import FadeIn from "react-fade-in/lib/FadeIn";
import LoadingData from "../TESTPage/LoadingData";
import TimeHistoryTable from "./TimeHistoryTable";
import ModalExitBeforeTime from "./ModalExitBeforeTime";
import OtherMenu from "./OtherMenu";
import TimeHistoryEmployeeTable from "./TimeHistoryEmployeeTable";

const baseURL = process.env.REACT_APP_API_CORS;
const token = GetCookieToken("userToken");
const user = GetCookieData("userData");
const user_id = user?.user_id;
const user_position = user?.position;
const user_start_work_name = user?.user_start_work_name;

const EntryWork = () => {
  document.title = "ลงเวลาปฏิบัติราชการ | Flexible Time";

  useEffect(() => {
    console.log("Position: ", user_position);
  }, [user_position]);

  const getPositionFromCookie = (positionArr) => {
    if (positionArr.length === 0) return false;
    if (positionArr.find((item) => item.position_id !== 8)) {
      return true;
    } else return false;
  };

  const isMustEntryWork = (positionArr) => {
    if (
      positionArr.find((item) => item.position_id > 1 && item.position_id <= 5)
    )
      return false;
    else return true;
  };

  const [isEntry, setIsEntry] = useState(false);
  const [isOut, setIsOut] = useState(false);

  const [entryWith, setEntryWith] = useState();

  const [timeEntry, setTimeEntry] = useState();
  const [timeExit, setTimeExit] = useState();

  const timeOutWork = new Date(
    new Date().setHours(16, 30, 0)
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  // const formatTime = new Date(timeOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'})

  const [exitBeforeTime, setExitBeforeTime] = useState(false);

  const handleCloseModalExitBeforeTime = () => {
    setExitBeforeTime(false);
  };

  const month = new Date().getMonth();

  const CheckInWork = () => {
    axios
      .post(
        baseURL + "/api/time/entry",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          console.log("CheckInWork status = true");
        }
        console.log("CheckIn Work: ", res);

        setTimeEntry(res.data.timeEntry);
      })
      .then(() => {
        setIsEntry(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const CheckOutWork = (timeNow, timeOut) => {
    if (timeNow < timeOut) {
      setExitBeforeTime(true);
    } else {
      axios
        .post(
          baseURL + "/api/time/exit",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.data.status === true) {
            console.log("CheckOutWork status = true");
          }
          console.log("CheckOut Work: ", res);
        })
        .then(() => {
          setIsEntry(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const isTodayLogin = (id) => {
    axios
      .get(baseURL + `/api/time/checkEntryExit/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("Check Entry: ", res);
        // if(res.data.timeEntry !== "" && res.data.timeExit === null) {
        //   console.log("Check Entry: ", res);
        //   setIsEntry(res.data.status);
        //   setTimeIn(res.data.timeEntry);
        // }
        if (
          res.data.status === true &&
          res.data.timeEntry &&
          !res.data.hasOwnProperty("timeExit")
        ) {
          console.log("Check Entry: ", res);
          setIsEntry(res.data.status);
          setTimeEntry(res.data.timeEntry);
          setEntryWith(res.data.entryWith);
        }
        if (
          res.data.status === true &&
          res.data.timeEntry &&
          res.data.timeExit
        ) {
          // && res.data.timeEntry === null && res.data.timeExit === null
          console.log("Check Entry: ", res);
          setIsEntry(res.data.status);
          setTimeEntry(res.data.timeEntry);
          setTimeExit(res.data.timeExit);
          setIsOut(res.data.status);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    isTodayLogin(user_id);
  }, []);

  const covertTime = (timeNow) => {
    let part1 = timeNow?.split("T")[1];
    let part2 = part1?.split(".")[0];

    return part2;
  };

  const [isloading, setIsLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);
    }, 1000);
  }, []);

  const isEntryLate = () => {
    if (1) {
      let timeLate = user_start_work_name + "45";
      console.log(timeLate);
    }
  };

  useEffect(() => {
    isEntryLate();
  }, []);

  return (
    <div className="page-content">
      {!loading ? (
        <LoadingPage />
      ) : (
        <FadeIn>
          <ModalExitBeforeTime
            exitBeforeTime={exitBeforeTime}
            handleCloseModalExitBeforeTime={handleCloseModalExitBeforeTime}
          />
          <Container fluid>
            <Breadcrumbs title="Home" breadcrumbItem="การลงเวลาออนไลน์" />
            {getPositionFromCookie(user_position) === true ? (
              <OtherMenu />
            ) : null}

            <Row>
              {isMustEntryWork(user_position) && (
                <>
                <Col xxl={4} xl={6}>
                  <Card
                    style={{ minHeight: "480px" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-primary bg-soft">
                      <Row>
                        <Col xs="8">
                          <div className="text-primary p-4">
                            <h5
                              className="text-primary"
                              style={{ fontFamily: "Kanit" }}
                            >
                              อรุณสวัสดิ์คุณ{user.user_name}
                            </h5>
                            <h6>ยินดีต้อนรับเข้าสู่ สำนักงาน ก.พ.ร</h6>
                          </div>
                        </Col>
                        <Col xs="4" className="align-self-end">
                          <img src={profileImg} alt="" className="img-fluid" />
                        </Col>
                      </Row>
                    </div>

                    <CardBody>
                      <Row>
                        <Col
                          xxl={12}
                          style={{ display: "flex", justifyContent: "start" }}
                        >
                          <h3>
                            การเข้างานวันนี้
                            {/* {timeNow.toLocaleDateString()} */}
                          </h3>
                        </Col>
                        <Col xxl={12} xl={12}>
                          <Row
                            className="mt-3 mb-5"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Col
                              xxl={5}
                              xl={6}
                              lg={6}
                              xs={6}
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              <h4>รอบการเข้างาน: </h4>
                            </Col>
                            <Col
                              xxl={7}
                              xl={6}
                              lg={6}
                              xs={6}
                              style={{
                                display: "flex",
                                justifyContent: "start",
                              }}
                            >
                              <h4>{user_start_work_name}</h4>
                            </Col>
                            <Col
                              xxl={5}
                              xl={6}
                              lg={6}
                              xs={6}
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              <h4>เข้างานเวลา: </h4>
                            </Col>
                            <Col
                              xxl={7}
                              xl={6}
                              lg={6}
                              xs={6}
                              style={{
                                display: "flex",
                                justifyContent: "start",
                              }}
                            >
                              {isEntry === true ? (
                                <h4>
                                  {covertTime(timeEntry)} ({entryWith})
                                </h4>
                              ) : (
                                <h4 className="text-danger">
                                  ยังไม่ลงเวลาเข้า
                                </h4>
                              )}
                            </Col>
                            <Col
                              xxl={5}
                              xl={6}
                              lg={6}
                              xs={6}
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              <h4>ออกงานเวลา: </h4>
                            </Col>
                            <Col
                              xxl={7}
                              xl={6}
                              lg={6}
                              xs={6}
                              style={{
                                display: "flex",
                                justifyContent: "start",
                              }}
                            >
                              {isOut ? (
                                <h4>
                                  {covertTime(timeExit)} {""}
                                </h4>
                              ) : (
                                <h4>-</h4>
                              )}
                            </Col>
                            <Col
                              xxl={5}
                              xl={6}
                              lg={6}
                              xs={6}
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              <h4>สถานะ: </h4>
                            </Col>
                            <Col
                              xxl={7}
                              xl={6}
                              lg={6}
                              xs={6}
                              style={{
                                display: "flex",
                                justifyContent: "start",
                              }}
                            >
                              {isEntry === false && isOut === false ? (
                                <h4>ยังไม่เข้างาน</h4>
                              ) : isEntry === true && isOut === false ? (
                                <h4>ยังไม่ลงเวลากลับ</h4>
                              ) : isEntry && isOut ? (
                                <h4>คุณได้ลงเวลาออกแล้ว</h4>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row
                        className="me-2"
                        style={{
                          display: "flex",
                          alignItems: "end",
                        }}
                      >
                        <Col style={{ display: "flex", justifyContent: "end" }}>
                          <h6
                            className="font-size-15"
                            style={{
                              color: "rgba(255,100,100,0.8)",
                            }}
                          >
                            {isEntry ? (
                              <>
                                {" "}
                                {/* คุณสามารถออกงานได้หลังเวลา {timeNow.getHours() + 8}:
                          {timeNow.getMinutes()}:{timeNow.getSeconds()} ชั่วโมง{" "} */}
                              </>
                            ) : null}
                          </h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col xxl={12} className="d-flex justify-content-center">
                          <h5>{isEntry ? "ออกงานได้หลังเวลา" : null}</h5>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-center">
                          <h5 style={{ color: "#8c8c8c" }}>
                            {isEntry ? `${timeOutWork} น.` : null}
                          </h5>
                        </Col>
                      </Row>
                      <Row
                        className=""
                        style={{
                          marginTop: "25px",
                          display: "flex",
                          alignItems: "end",
                        }}
                      >
                        <Col
                          xxl={6}
                          xs={6}
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          <Button
                            className="w-100 btn btn-success waves-effect waves-light"
                            size="lg"
                            disabled={isEntry ? true : false}
                            onClick={() => {
                              CheckInWork();
                            }}
                          >
                            <i className="fa-solid fa-right-to-bracket me-2"></i>
                            เข้างาน
                          </Button>
                        </Col>
                        <Col
                          xxl={6}
                          xs={6}
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          <Button
                            className="w-100"
                            size="lg"
                            color="danger"
                            disabled={isEntry && isOut ? true : false}
                            outline={isEntry && isOut ? false : true}
                            onClick={() => {
                              CheckOutWork(
                                new Date().toLocaleTimeString(),
                                timeOutWork
                              );
                            }}
                          >
                            ออกงาน
                            <i className="fa-solid fa-right-from-bracket ms-2"></i>
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              
              <Col xxl={8} xl={7}>
                <h4
                  className="me-3 mb-3"
                  style={{ fontFamily: "Noto Sans Thai" }}
                >
                  การเข้างาน เดือน{monthNames[month]}
                </h4>
                <Row className="">
                  <Col xxl={12} xl={12}>
                    <Card style={{ minHeight: "440px" }}>
                      <CardBody>
                        {!isloading ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              minHeight: "400px",
                            }}
                          >
                            <LoadingData />
                          </div>
                        ) : (
                          <FadeIn>
                            <TimeHistoryTable />
                          </FadeIn>
                        )}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
              </>
              )}
              {isMustEntryWork(user_position) === false && (
                <Col xxl={12} xl={7}>
                <h4
                  className="me-3 mb-3"
                  style={{ fontFamily: "Noto Sans Thai" }}
                >
                  การเข้างาน เดือน{monthNames[month]} ของบุคลากรในกลุ่ม/กอง
                </h4>
                <Row className="">
                  <Col xxl={12} xl={12}>
                    <Card style={{ minHeight: "440px" }}>
                      <CardBody>
                        {!isloading ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              minHeight: "400px",
                            }}
                          >
                            <LoadingData />
                          </div>
                        ) : (
                          <FadeIn>
                            <TimeHistoryEmployeeTable />
                          </FadeIn>
                        )}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
              )}
              
            </Row>
          </Container>
        </FadeIn>
      )}
    </div>
  );
};

export default EntryWork;
