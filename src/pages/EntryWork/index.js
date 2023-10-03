import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import profileImg from "../../assets/images/profile-img.png";
import axios from "axios";
import monthNames from "../../common/data/monthName";
import { lastIndexOf } from "lodash";
import { useMemo } from "react";
import TableContainer from "../../components/Common/TableContainer";

const EntryWork = () => {

  const baseURL = "http://localhost:8000/";
  
  const colums = useMemo(() => [
    {
      Header: "วันที่",
      accessor: "date",
    },
    {
      Header: "เข้างาน",
      accessor: "timeIn",
    },
    {
      Header: "ออกงาน",
      accessor: "timeOut",
    },
    {
      Header: "สถานะ",
      accessor: "status",
    },
    {
      Header: "หมายเหตุ",
      accessor: "note",
    },
  ]);

  const [isEntry, setIsEntry] = useState(false);
  const [id, setId] = useState(0);

  const handleCheckEntry = () => {
    axios
      .get(baseURL + "getentry")
      .then((res) => {
        let lastEleDate = res.data[res.data.length - 1].date;
        let lastEleTimeIn = res.data[res.data.length - 1].timeIn;
        let lastEleTimeOut = res.data[res.data.length - 1].timeOut;
        let idData = res.data[res.data.length - 1].eid;
        console.log(lastEleDate);
        console.log(idData);
        setId(idData);
        if (lastEleDate !== new Date().toLocaleDateString()) {
          return setIsEntry(false);
        }
        if (
          lastEleDate === new Date().toLocaleDateString() &&
          lastEleTimeOut === null
        ) {
          return setIsEntry(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleCheckEntry();
  }, []);

  const month = new Date().getMonth();

  const amountDays = [18, 1, 0, 0];

  const [data, setData] = useState([]);

  const [timeNow, setTimeNow] = useState(new Date());

  const toggleEntry = () => {
    setIsEntry(!isEntry);
  };

  const setTimeAuto = () => {
    setInterval(() => {
      setTimeNow(new Date());
    }, 1000);
  };

  useEffect(() => {
    setTimeAuto();
  }, []);

  const getData = () => {
    axios
      .get(baseURL + "getentry")
      .then((res) => {
        setData(res.data);
        console.log("Entry Data: ", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, []);

  const handleEntryWork = async (time) => {
    await axios
      .post(baseURL + "addentrywork", {
        date: time.toLocaleDateString(),
        timeIn: time.toLocaleTimeString(),
      })
      .then(() => {
        toggleEntry();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleOutWork = (time, id) => {
    console.log(id);
    axios
      .put(baseURL + `update/${id}`, {
        timeOut: time.toLocaleTimeString(),
      })
      .then(() => {
        toggleEntry();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col xxl={7}>
            <Row>
              <Col xl={6} xxl={6}>
                <Card>
                  <CardBody>
                    <FullCalendar
                      plugins={[
                        BootstrapTheme,
                        dayGridPlugin,
                        interactionPlugin,
                      ]}
                      slotDuration={"00:15:00"}
                      handleWindowResize={true}
                      themeSystem="bootstrap"
                      height="420px"
                      headerToolbar={{
                        start: "prev",
                        center: "title",
                        end: "next",
                      }}
                      editable={true}
                      selectable={true}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6} xxl={6}>
                <Card style={{ minHeight: "460px" }}>
                  <div className="bg-primary bg-soft">
                    <Row>
                      <Col xs="8">
                        <div className="text-primary p-4">
                          <h4 className="text-primary" style={{fontFamily:"Kanit"}}>อรุณสวัสดิ์คุณ .....</h4>
                          <h6>ยินดีต้อนรับเข้าสู่ สำนักงาน ก.พ.ร</h6>
                        </div>
                      </Col>
                      <Col xs="4" className="align-self-end">
                        <img src={profileImg} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody style={{ position: "relative" }}>
                    <CardTitle className="text-end">
                      {/* <h4>ขณะนี้เวลา: {timeNow.toLocaleTimeString()}</h4> */}
                    </CardTitle>

                    <Row>
                      <Col
                        style={{ display: "flex", justifyContent: "center" }}
                      ></Col>
                      <Col
                        style={{ display: "flex", justifyContent: "center" }}
                      ></Col>
                    </Row>
                    {isEntry ? (
                      <Row
                        className="me-2"
                        style={{ position: "absolute", bottom: 0, right: 0 }}
                      >
                        <Col>
                          <h4 style={{color:"rgba(255,100,100,0.8)",fontFamily:"Noto Sans Thai"}}>
                            คุณสามารถออกงานได้ในเวลา +8 ชั่วโมง
                          </h4>
                        </Col>
                      </Row>
                    ) : null}
                  </CardBody>

                  <CardFooter className="text-end">
                    <Button
                      className="me-3"
                      size="lg"
                      color="success"
                      disabled={isEntry ? true : false}
                      onClick={() => {
                        handleEntryWork(new Date());
                      }}
                    >
                      เข้างาน
                    </Button>
                    <Button
                      size="lg"
                      color="danger"
                      disabled={isEntry ? false : true}
                      onClick={() => {
                        handleOutWork(new Date(), id);
                      }}
                    >
                      ออกงาน
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row >
              <Col xxl={12} >
                <Card>
                  <CardBody className="pb-3">
                    <h1></h1>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xxl={5}>
            <Row>
              <Col xl={6} xxl={12}>
                <h3 className="me-3" style={{fontFamily:"Noto Sans Thai"}}>เดือน {monthNames[month]}</h3>
                <hr className="mt-2" />
                <Card>
                  <CardBody className="pb-0">
                    <Row>
                      <Col xl={6} xxl={3} lg={3} xs={6} sm={3}>
                        <Card
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="bg-success bg-gradient p-2"
                        >
                          <Row>
                            <Col>
                              <h4>เต็มเวลา</h4>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>{amountDays[0]} วัน</h5>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xl={6} xxl={3} lg={3} xs={6} sm={3}>
                        <Card
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="bg-danger bg-gradient p-2"
                        >
                          <Row>
                            <Col>
                              <h4>ขาด</h4>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>{amountDays[1]} วัน</h5>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xl={6} xxl={3} lg={3} xs={6} sm={3}>
                        <Card
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="bg-success bg-gradient p-2"
                        >
                          <Row>
                            <Col>
                              <h4>ครึ่งวัน</h4>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>{amountDays[2]} วัน</h5>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xl={6} xxl={3} lg={3} xs={6} sm={3}>
                        <Card
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="bg-danger bg-gradient p-2"
                        >
                          <Row>
                            <Col>
                              <h4>สาย</h4>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>{amountDays[3]} วัน</h5>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card style={{ minHeight: "180px" }}>
                  <CardBody>
                    <TableContainer
                      columns={colums}
                      data={data}
                      customPageSize={5}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xxl={6}>
                {/* <Card style={{ minHeight: "180px" }}>
                  <CardBody>
                    <TableContainer
                      columns={colums}
                      data={data}
                      customPageSize={5}
                    />
                  </CardBody>
                </Card> */}
              </Col>
            </Row>
          </Col>
          <Col xxl={4}>
            <Row>
            <Col xl={12}>
            <Card style={{ minHeight: "400px" }}>
              <CardBody></CardBody>
            </Card>
          </Col>
            </Row>
          </Col>
          
          
          <Col xl={5}>
            <Card style={{ minHeight: "400px" }}>
              <CardBody></CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card style={{ minHeight: "400px" }}>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EntryWork;
