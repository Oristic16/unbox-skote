import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
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
import { useNavigate } from "react-router-dom";

ChartJS.register(...registerables);

const Dashboard2 = () => {
  document.title = "Dashboard | Skote - React Admin & Dashboard Template";

  const navigate = useNavigate();

  const [role, setRole] = useState(null);
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

  useEffect(() => {
    checkRole();
  }, []);

  // console.log(checkedMenu);

  const data = [
    {
      id: "07320/2566",
      from: "บริัษัท โตชิบา เทค (ประเทศไทย) จำกัด",
      title: "ใบวางบิล IS2309T3979 รวม 22,015.58 บาท",
    },
    {
      id: "07209/2566",
      from: "ศาลากลางจังหวัดจันทบุรี",
      title:
        "ขอรับโอนข้าราชการพลเรือนสามัญ (นางสาวพรฤทัย เชื้อบัณฑิตพร) (สแกน 1 แผ่น)",
    },
    {
      id: "04201/2566",
      from: "ศูนย์อำนวยความปลอดภัยทางถนน",
      title: "แผนแม่บทความปลอดภัยทางถนน พ.ศ. 2565-2570 (สแกน 4 แผ่น)",
    },
  ];

  if (role === "user") {
    return (
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Home" breadcrumbItem="Dashboard" />
          <Row>
            {/* Columns span 10 at Content */}
            <Col xxl={9} xl={9}>
              {/* <Row>
                <Col xl={3} xxl={3} style={{ minHeight: "100px" }}>
                  <Card
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(
                        "https://lookerstudio.google.com/reporting/8ab0787d-97a0-4043-b02a-79b32e54d7e3",
                        "_blank"
                      )
                    }
                  >
                    <img
                      className="img-fluid"
                      src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1282569/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png"
                      alt="database korporror"
                    />
                  </Card>
                </Col>
                <Col xl={3} xxl={3}>
                  <Card
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(
                        "https://lookerstudio.google.com/reporting/d3d90509-95fa-47ed-96f2-2ae5c4a98afb/page/p_cw7yeysu4c",
                        "_blank"
                      )
                    }
                  >
                    <CardImg
                      className="img-fluid"
                      src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1282569/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png"
                      alt="database korporror"
                    />
                  </Card>
                </Col>
                <Col xl={3} xxl={3}>
                  <Card
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(
                        "https://opdcoffice365.sharepoint.com/sites/opdc2/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fopdc2%2FShared%20Documents%2FGeneral%2F%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3&p=true&ga=1",
                        "_blank"
                      )
                    }
                  >
                    <CardImg
                      className="img-fluid"
                      src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1282569/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png"
                      alt="database korporror"
                    />
                  </Card>
                </Col>
                <Col xl={3} xxl={3}>
                  <Card>
                    <CardImg
                      className="img-fluid"
                      src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1282569/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png"
                      alt="database korporror"
                    />
                  </Card>
                </Col>
              </Row> */}
              <Row style={{ display: "flex" }}>
                <Col xl={4}>
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
                <Col xl={4}>
                  <Row>
                    <Col>
                      {checkedMenu.checkedKarnLar === true ? <Karnlar /> : null}
                    </Col>
                    <Col xl={12}>
                      <Card>
                        <CardBody>
                          <Row
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Col>
                              <h5>
                                <i className="fa-solid fa-books font-size-20 me-2"></i>
                                สารบรรณ
                              </h5>
                            </Col>
                            <Col className="text-end">
                              <Button
                                className="position-relative"
                                color="warning"
                                size="lg"
                                onClick={() => navigate("/sarabun")}
                              >
                                ค้นหา
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success font-size-20">
                                  {/* {data2.length}{" "} */}7
                                </span>
                              </Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div style={{ overflow: "scroll" }}>
                                <Table className="mt-2">
                                  <thead style={{ whiteSpace: "nowrap" }}>
                                    <tr>
                                      <th>เลขทะเบียนกลาง</th>
                                      <th>จาก</th>
                                      <th>เรื่อง</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {data.map((item, idx) => {
                                      return (
                                        <tr key={idx}>
                                          <td>{item.id}</td>
                                          <td>{item.from}</td>
                                          <td>{item.title}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </Table>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                      {/* {checkedMenu.checkedAnnounce === true ? (
                        <Announce />
                      ) : null} */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            {/* Columns span 2 at Water Loop */}
            <Col xxl={3} xl={3}>
              <Row>
                <Col
                  xl={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <WaterBall />
                </Col>
              </Row>
              <Row>
                <Col>
                  <EntryWork />
                </Col>
              </Row>
              {/* <Row>
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
              </Row> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Dashboard2;
