import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import { Chart as ChartJS, registerables } from "chart.js";

import Breadcrumbs from "../../components/Common/Breadcrumb";

import Calendar from "./Calendar";
import TextCard from "./TextCard";
import ChartA from "./ChartA";
import Karnlar from "./KarnLar/Karnlar";
import WaterBall from "./WaterBall/WaterBall";
import WelcomeComp from "./WelcomeComp/WelcomeComp";
import EntryWork from "./EntryWork/EntryWork";
import Reservation from "./Reservation";
import Announce from "./Announce/Announce";
import RecentFile from "./OPDCBOX/RecentFile";
import CalendarList from "./CalendarList";
import ListComp from "./ListComponent/ListComp";

ChartJS.register(...registerables);

const Dashboard2 = () => {
  document.title = "Dashboard | Skote - React Admin & Dashboard Template";

  const [role, setRole] = useState(null);
  const [timeNow, setTimeNow] = useState(new Date());
  const [checkedMenu, setCheckedMenu] = useState({
    checkedWel: true,
    checkedKarnLar: true,
    checkedReserve: true,
    checkedCalendar: true,
    checkedRecentFiles: true,
    checkedAnnounce: true,
    checkedCalendarList: true,
  });

  const checkRole = () => {
    const getStorage = localStorage.getItem("authUser");
    const roleJSON = JSON.parse(getStorage);
    setRole(roleJSON.role);
  };

  // const handleClick = () => {
  //   window.open("https://www.youtube.com");
  // };

  // const handleRedirect = () => {
  //   return (window.location.href = "http://www.google.com");
  // };

  useEffect(() => {
    checkRole();
  }, []);

  // console.log(checkedMenu);

  if (role === "user") {
    return (
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Home" breadcrumbItem="Dashboard" />
          <Row>
            <Col lg={12}>
              <Row style={{ display: "flex" }}>
                <Col xl={3}>
                  <Row>
                    <Col xl={12}>
                      {checkedMenu.checkedWel === true ? <WelcomeComp /> : null}
                    </Col>
                    <Col xl={12}></Col>
                    <Col>
                      {checkedMenu.checkedCalendar === true ? (
                        <Calendar />
                      ) : null}
                    </Col>
                  </Row>
                </Col>
                <Col xl={4}>
                  <Row>
                    <Col xl={12}>
                      {checkedMenu.checkedReserve === true ? (
                        <Reservation />
                      ) : null}
                    </Col>
                    <Col>
                      {checkedMenu.checkedRecentFiles === true ? (
                        <RecentFile />
                      ) : null}
                    </Col>
                  </Row>
                </Col>
                <Col xl={3}>
                  <Row>
                    <Col>
                      {checkedMenu.checkedKarnLar === true ? <Karnlar /> : null}
                    </Col>
                    <Col xl={12}>
                      {checkedMenu.checkedAnnounce === true ? (
                        <Announce />
                      ) : null}
                    </Col>
                  </Row>
                </Col>
                <Col xl={2}>
                  <Row>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                      <WaterBall />
                    </Col>
                    <Col>
                      <EntryWork />
                    </Col>
                    <Col xl={12}>
                      <Card>
                        <CardBody>
                          <Row>
                            <Col xl={6}>
                              <div className="form-check form-check-primary mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheckcolor1"
                                  checked={checkedMenu.checkedWel}
                                  onChange={(e) => {
                                    setCheckedMenu((prev) => ({
                                      ...prev,
                                      checkedWel: e.target.checked,
                                    }));
                                  }}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="customCheckcolor1"
                                >
                                  WelcomeComp
                                </label>
                              </div>
                            </Col>
                            <Col xl={6}>
                              <div className="form-check form-check-primary mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheckcolor2"
                                  checked={checkedMenu.checkedKarnLar}
                                  onChange={(e) => {
                                    setCheckedMenu((prev) => ({
                                      ...prev,
                                      checkedKarnLar: e.target.checked,
                                    }));
                                  }}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="customCheckcolor2"
                                >
                                  ภาพรวมการลา
                                </label>
                              </div>
                            </Col>
                            <Col xl={6}>
                              <div className="form-check form-check-primary mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="reservation"
                                  checked={checkedMenu.checkedReserve}
                                  onChange={(e) => {
                                    setCheckedMenu((prev) => ({
                                      ...prev,
                                      checkedReserve: e.target.checked,
                                    }));
                                  }}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="reservation"
                                >
                                  การจองออนไลน์
                                </label>
                              </div>
                            </Col>
                            <Col xl={6}>
                              <div className="form-check form-check-primary mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="calendar"
                                  checked={checkedMenu.checkedCalendar}
                                  onChange={(e) => {
                                    setCheckedMenu((prev) => ({
                                      ...prev,
                                      checkedCalendar: e.target.checked,
                                    }));
                                  }}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="calendar"
                                >
                                  ปฏิทิน
                                </label>
                              </div>
                            </Col>
                            <Col xl={6}>
                              <div className="form-check form-check-primary mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="recentfiles"
                                  checked={checkedMenu.checkedRecentFiles}
                                  onChange={(e) => {
                                    setCheckedMenu((prev) => ({
                                      ...prev,
                                      checkedRecentFiles: e.target.checked,
                                    }));
                                  }}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="recentfiles"
                                >
                                  Recent Files
                                </label>
                              </div>
                            </Col>
                            <Col xl={6}>
                              <div className="form-check form-check-primary mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="announce"
                                  checked={checkedMenu.checkedAnnounce}
                                  onChange={(e) => {
                                    setCheckedMenu((prev) => ({
                                      ...prev,
                                      checkedAnnounce: e.target.checked,
                                    }));
                                  }}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="announce"
                                >
                                  ประกาศ
                                </label>
                              </div>
                            </Col>
                            <Col xl={6}>
                              <div className="form-check form-check-primary mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="calendarList"
                                  checked={checkedMenu.checkedCalendarList}
                                  onChange={(e) => {
                                    setCheckedMenu((prev) => ({
                                      ...prev,
                                      checkedCalendarList: e.target.checked,
                                    }));
                                  }}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="calendarList"
                                >
                                  CalendarList
                                </label>
                              </div>
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
};

export default Dashboard2;
