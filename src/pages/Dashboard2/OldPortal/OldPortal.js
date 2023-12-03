import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const OldPortal = () => {
  return (
    <Col xl={4}>
      <Row>
        <Col xl={3}>
          <Card style={{ backgroundColor: "#ffc74f" }}>
            <CardBody>
              <CardTitle style={{ color: "#" }}>INTRANET</CardTitle>
              <Row>
                <Col lg={9}>
                  <Row>
                    <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                  </Row>
                  <Row>
                    <Col>158 รายการ</Col>
                  </Row>
                </Col>
                <Col
                  lg={3}
                  className="d-flex justify-content-end align-items-center"
                >
                  <i className="fa-solid fa-database fa-3x"></i>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl={3}>
          <Card style={{ background: "#91a4ff" }}>
            <CardBody>
              <CardTitle>ระบบสารบรรณ</CardTitle>
              <Row>
                <Col lg={9}>
                  <Row>
                    <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                  </Row>
                  <Row>
                    <Col>123 รายการ</Col>
                  </Row>
                </Col>
                <Col
                  lg={3}
                  className="d-flex justify-content-end align-items-center"
                >
                  <i className="fa-solid fa-paper-plane fa-3x"></i>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl={3}>
          <Card style={{ background: "#f9a3ff" }}>
            <CardBody className="">
              <CardTitle>ระบบจองห้องประชุม</CardTitle>
              <Row>
                <Col lg={9} xl={9}>
                  <Row>
                    <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                  </Row>
                  <Row>
                    <Col>19 คำขอ</Col>
                  </Row>
                </Col>
                <Col
                  lg={3}
                  className="d-flex justify-content-end align-items-center"
                >
                  <i className="fa-solid fa-screen-users fa-3x"></i>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl={3}>
          <Card style={{ background: "#86eeb1" }}>
            <CardBody>
              <CardTitle>ระบบจองยานพาหนะ</CardTitle>
              <Row>
                <Col lg={9} xl={9}>
                  <Row>
                    <Col>รายการ ณ วันที่ปัจจุบัน</Col>
                  </Row>
                  <Row>
                    <Col>27 คำขอ</Col>
                  </Row>
                </Col>
                <Col
                  lg={3}
                  className="d-flex justify-content-end align-items-center"
                >
                  <i className="fa-solid fa-cars fa-3x"></i>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default OldPortal;
