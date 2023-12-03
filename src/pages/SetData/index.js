import React, { useState, Fragment, useEffect } from "react";
import { Badge, Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import "./custom-select.scss";

import ViewData from "./ViewData";
import ViewCommander from "./SetCommander/ViewCommander";
import ViewDataUser from "./ViewDataUser";
import { GetCookieData } from "../Cookie/GetCookie";

import AssignCommander from "./SetCommander/AssignCommander";
import FadeIn from "react-fade-in/lib/FadeIn";
import LoadingPage from "../TESTPage/LoadingPage";
import UserTax from "../Tax/UserTax";

function SetData() {
  const [buttonSection, setButtonSection] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = GetCookieData("userData");
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  return (
    <Fragment>
      {!loading ? (
        <LoadingPage />
      ) : user.position.length !== 0 ? (
        <div className="page-content">
          <Container fluid>
            <Breadcrumb title="Home" breadcrumbItem="ข้อมูลเจ้าหน้าที่" />
            <Row>
              <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={2}>
                <Card>
                  <CardBody className="p-2">
                    <Row className="mb-3">
                      <Col>
                        <Button
                          color="light"
                          className="w-100 font-size-12 btn btn-soft-primary waves-effect waves-light"
                          style={{ textAlign: "left" }}
                          onClick={() => {
                            setButtonSection(0);
                          }}
                        >
                          <i className="fa-solid fa-users pe-2"></i>{" "}
                          ข้อมูลเจ้าหน้าที่
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <Button
                          color="light"
                          className="w-100 font-size-12 btn btn-soft-primary waves-effect waves-light"
                          style={{ textAlign: "left" }}
                          onClick={() => {
                            setButtonSection(1);
                          }}
                        >
                          <i className="fa-solid fa-file-import pe-2"></i>{" "}
                          ใบภาษี
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              {buttonSection === 0 ? (
                <Col md={12} lg={9} xl={9} xxl={10}>
                  <ViewDataUser />
                </Col>
              ) : (
                ""
              )}

              {buttonSection === 1 ? (
                <Col md={12} lg={9} xl={9} xxl={10}>
                  <UserTax />
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Container>
        </div>
      ) : (
        <div className="page-content">
          <FadeIn>
            <Container fluid>
              <Breadcrumb title="Home" breadcrumbItem="กำหนดข้อมูล" />
              <Row>
                <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={2}>
                  <Card>
                    <CardBody className="p-2">
                      <Row className="mb-3">
                        <Col>
                          <Button
                            color="light"
                            className="w-100 font-size-12 btn btn-soft-primary waves-effect waves-light"
                            style={{ textAlign: "left" }}
                            onClick={() => {
                              setButtonSection(0);
                            }}
                          >
                            <i className="fa-solid fa-users"></i> เจ้าหน้าที่
                          </Button>
                        </Col>
                      </Row>
                      {/* <Row className="mb-3">
                          <Col>
                            <Button
                              color="light"
                              className="w-100 font-size-12"
                              style={{ textAlign: "left" }}
                            >
                              <i className="fa-solid fa-place-of-worship"></i>{" "}
                              หน่วยงาน ก.พ.ร.
                            </Button>
                          </Col>
                        </Row> */}
                      <Row className="mb-3">
                        <Col>
                          <Button
                            color="light"
                            className="w-100 font-size-12 btn btn-soft-primary waves-effect waves-light"
                            style={{ textAlign: "left" }}
                            onClick={() => {
                              setButtonSection(1);
                            }}
                          >
                            <i className="fa-solid fa-user-crown"></i>{" "}
                            กำหนดข้อมูลผู้บังคับบัญชา
                          </Button>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col>
                          <Button
                            color="light"
                            className="w-100 font-size-12 btn btn-soft-primary waves-effect waves-light"
                            style={{ textAlign: "left" }}
                            onClick={() => {
                              setButtonSection(3);
                            }}
                          >
                            <i className="fa-solid fa-person-military-to-person fa-lg"></i>{" "}
                            กำหนดการปฏิบัติราชการแทน
                          </Button>
                        </Col>
                      </Row>
                      {/* <Row className="mb-3">
                        <Col>
                          <Button
                            color="light"
                            className="w-100 font-size-12 btn btn-soft-primary waves-effect waves-light"
                            style={{ textAlign: "left" }}
                            onClick={() => {
                              setButtonSection(4);
                            }}
                          >
                            <i className="fa-solid fa-file-import pe-2"></i>{" "}
                            ใบภาษี
                          </Button>
                        </Col>
                      </Row> */}
                      {/* <Row className="mb-3">
                          <Col>
                            <Button
                              color="light"
                              className="w-100 font-size-12"
                              style={{ textAlign: "left" }}
                            >
                              <i className="fa-solid fa-percent"></i> ลดหย่อนในภาษี
                            </Button>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col>
                            <Button
                              color="light"
                              className="w-100 font-size-12"
                              style={{ textAlign: "left" }}
                            >
                              <i className="fa-solid fa-file-import"></i>{" "}
                              นำเข้าใบภาษี
                            </Button>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col>
                            <Button
                              color="light"
                              className="w-100 font-size-12"
                              style={{ textAlign: "left" }}
                            >
                              <i className="fa-sharp fa-regular fa-location-dot"></i>{" "}
                              จังหวัด
                            </Button>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col>
                            <Button
                              color="light"
                              className="w-100 font-size-12"
                              style={{ textAlign: "left" }}
                            >
                              <i className="fa-solid fa-hashtag"></i> เลขที่ตำแหน่ง
                            </Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button
                              color="light"
                              className="w-100 font-size-12"
                              style={{ textAlign: "left" }}
                            >
                              <i className="fa-solid fa-users-gear"></i>{" "}
                              ประเภทเจ้าหน้าที่
                            </Button>
                          </Col>
                        </Row> */}
                    </CardBody>
                  </Card>
                </Col>

                {buttonSection === 0 ? (
                  <Col md={12} lg={9} xl={9} xxl={10}>
                    <ViewData />
                  </Col>
                ) : (
                  ""
                )}

                {buttonSection === 1 ? (
                  <Col md={12} lg={9} xl={9} xxl={10}>
                    <ViewCommander />
                  </Col>
                ) : (
                  ""
                )}

                {buttonSection === 3 ? (
                  <Col md={12} lg={9} xl={9} xxl={10}>
                    <AssignCommander />
                  </Col>
                ) : (
                  ""
                )}

                {/* {buttonSection === 4 ? (
                  <Col md={12} lg={9} xl={9} xxl={10}>
                    <UserTax />
                  </Col>
                ) : (
                  ""
                )} */}
              </Row>
            </Container>
          </FadeIn>
        </div>
      )}
    </Fragment>
  );
}

export default SetData;
