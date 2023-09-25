import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "#8c8c8c" }}>ต้องออกงานหลังเวลา 15:30 น.</p>
            </Col>
          </Row>
          <div className="" style={{textAlign:"center"}}>
                  <Link to="/entrywork" className="btn btn-primary  btn-md">
                    ดูภาพรวม <i className="mdi mdi-arrow-right ms-1"></i>
                  </Link>
                </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EntryWork;
