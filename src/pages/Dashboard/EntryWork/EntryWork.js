import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { GetCookieData, GetCookieToken } from "../../Cookie/GetCookie";
import axios from "axios";

const EntryWork = ( props ) => {

  const baseURL = process.env.REACT_APP_API_CORS

  const user = GetCookieData("userData")
  const user_id = user.user_id

  const { token } = props

  useEffect(() => {
  },[])

  const [timeNow, setTimeNow] = useState(null);
  const [timeOut, setTimeOut] = useState(new Date());
  const timeOutWork = new Date(new Date().setHours(16,30,0)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'})

  const [isEntry, setIsEntry] = useState(false)
  const [outW, setOutW] = useState(false)

  // const intervalID = useRef(null)

  // const startTimer = useCallback(() => {
  //   intervalID.current = setInterval(() => {
  //     setTimeNow(new Date());
  //   },1000)
  // },[])

  // const stopTimer = () => {
  //   clearInterval(intervalID.current)

  //   intervalID.current = null

  //   console.log(timeNow.toLocaleTimeString())

  //   setIsEntry(true)
  // }

  useEffect(() => {

    // startTimer();

    // return () => clearInterval(intervalID.current)

  }, []);

  // const setTimeAuto = () => {
  //   var timer = setInterval(() => {
  //     setTimeNow(new Date());
  //   }, 1000);

  //   return function cleanup() {
  //     clearInterval(timer);
  //   };
  // };

  const isTodayLogin = (id) => {
    axios
      .get(baseURL + `/api/time/checkEntryExit/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Check Today Entry Dashboard: ",res);
        setIsEntry(res.data.status);
        setTimeNow(res.data.timeEntry)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    isTodayLogin(user_id)
  },[])

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
        setTimeNow(res.data.timeEntry)
      })
      .then(() => {
        setIsEntry(true);
        // setTimeNow(new Date());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const CheckOutWork = () => {
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
  };

  const covertTime = (timeNow) => {

    let part1 = timeNow?.split('T')[1]
    let part2 = part1?.split('.')[0]

    return part2
  }

  // useEffect(() => {
  //   covertTime()
  // },[])
 
  return (
    <div>
      <Card className="">
        <CardBody>
          <CardTitle className="mb-3">
            <i className="fa-solid fa-sun-cloud font-size-18 me-1"></i>
            ลงเวลาปฏิบัติงาน
          </CardTitle>
          <Row className="mb-3 d-flex">
            <Col xs={1} sm={1} lg={1}></Col>
            <Col
              xs={5}
              sm={5}
              lg={5}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <h5>เวลาเข้างาน</h5>
            </Col>
            <Col xs={5} sm={5} lg={5}>
              <h5>เวลาออกงาน</h5>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col
              xs={6}
              sm={6}
              lg={6}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <h5>{!timeNow ? "ไม่ลงเวลาเข้างาน" : covertTime(timeNow)}</h5>
              {/* <h5>{timeNow.toLocaleTimeString()}</h5> */}
            </Col>
            <Col xs={6} sm={6} lg={6}>
              <h5>{outW === true ? timeOut.toLocaleTimeString() : "-"}</h5>
              {/* <h5>{outW === true ? timeOut.toLocaleTimeString() : "-"}</h5> */}
            </Col>
          </Row>
          <Row className="mb-3 d-flex align-items-center">
            <Col xs={1} sm={2} md={2} lg={2} xl={2} xxl={1}>
              {/* <div className="event-timeline-dot">
                <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right text-primary" />
              </div> */}
            </Col>
            <Col
              xs={5}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              xxl={5}
              style={{ display: "flex", justifyContent: "end", alignItems:"center" }}
            >
              {/* <div className="event-timeline-dot me-4">
                <i className="bx bxs-right-arrow-circle font-size-20 bx-fade-right text-primary" />
              </div> */}
              <Button
              className="w-100"
              color="success" 
              disabled={isEntry ? true : false} 
              onClick={() => {
                CheckInWork();
                // stopTimer();
                }}>
                <i className="fa-solid fa-right-to-bracket me-2"></i>เข้างาน
              </Button>
            </Col>
            <Col
              xs={5}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              xxl={5}
              style={{ display: "flex", justifyContent: "start" }}
            >
              <Button className="w-100" onClick={() => {
                CheckOutWork()
                setOutW(true);
                setTimeOut(new Date())
              }}
                 
                color="danger" 
                outline={!isEntry ? true : false}>
                ออกงาน<i className="fa-solid fa-right-from-bracket ms-2"></i>
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
              <p style={{ color: "#8c8c8c" }}>{isEntry ? `ออกงานได้หลังเวลา ${timeOutWork}` : ""}</p>
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
