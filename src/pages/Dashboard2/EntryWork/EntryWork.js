import React, { useCallback, useEffect, useRef, useState } from "react";
import { Badge, Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const EntryWork = () => {
  const [timeNow, setTimeNow] = useState(new Date());

  const [entry, setEntry] = useState(false)

  const intervalID = useRef(null)

  const startTimer = useCallback(() => {
    intervalID.current = setInterval(() => {
      setTimeNow(new Date());
    },1000)
  },[])

  const stopTimer = () => {
    clearInterval(intervalID.current)
    console.log(timeNow.toLocaleTimeString())
    intervalID.current = null

    setEntry(true)
    setTimeNow()
  }

  // const setTimeAuto = () => {
  //   var timer = setInterval(() => {
  //     setTimeNow(new Date());
  //   }, 1000);

  //   return function cleanup() {
  //     clearInterval(timer);
  //   };
  // };

  useEffect(() => {
    startTimer();

    return () => clearInterval(intervalID.current)
    // setTimeAuto();
  }, []);
  return (
    <div>
      <Card className="mt-4">
        <CardBody>
          <CardTitle className="mb-3">
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
            <Col
              xs={6}
              sm={6}
              lg={6}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <h5>{timeNow.toLocaleTimeString()}</h5>
            </Col>
            <Col xs={6} sm={6} lg={6}>
              <h5>{entry === true ? timeNow.getHours() + 8 : "-"}</h5>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col
              xs={6}
              sm={6}
              lg={6}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Button color="success" onClick={stopTimer}>
                <i className="fa-solid fa-right-to-bracket"></i> เข้างาน
              </Button>
            </Col>
            <Col
              xs={6}
              sm={6}
              lg={6}
              style={{ display: "flex", justifyContent: "start" }}
            >
              <Button color="danger" outline>
                ออกงาน <i className="fa-solid fa-right-from-bracket"></i>
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
          <Row className="mb-2">
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "#8c8c8c" }}>ต้องออกงานหลังเวลา 15:30 น.</p>
            </Col>
          </Row>
          {/* <CardTitle style={{ color: "#483fd3" }} className="mt-0 mb-3">
            <Row style={{ display: "flex", alignItems: "center" }}>
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
          </Row> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default EntryWork;
