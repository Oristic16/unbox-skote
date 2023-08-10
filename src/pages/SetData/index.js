import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, CardBody, Col, Container, Input, InputGroup, InputGroupText, Label, Row, Table } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import TableContainer from "../../components/Common/TableContainer";

function SetData() {

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="กำหนดข้อมูล" breadcrumbItem="กำหนดข้อมูล" />
        <Row>
          <Col lg={2}>
            <Card>
              <CardBody>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign:"center" }}>
                      <h5>เจ้าหน้าที่</h5>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign:"center" }}>
                      <h5>หน่วยงาน ก.พ.ร.</h5>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign:"center" }}>
                      <h5>ผู้บังคับบัญชา</h5>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign:"center" }}>
                      <h5>ลดหย่อนในภาษี</h5>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign:"center" }}>
                      <h5>นำเข้าใบภาษี</h5>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign:"center" }}>
                      <h5>จังหวัด</h5>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign:"center" }}>
                      <h5>เลขที่ตำแหน่ง</h5>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className="w-100" style={{ textAlign:"center" }}>
                      <h5 className="">ประเภทเจ้าหน้าที่</h5>
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={10}>
            <Row>
                <Col lg={5}>
                <InputGroup>
                    <Input type="search" placeholder="...กรุณาใส่คำที่ต้องการค้นหา" />
                    <Button color="primary"><h6><i className="fa-sharp fa-solid fa-magnifying-glass fa-xl"></i> ค้นหา</h6></Button>
                </InputGroup>
                </Col>
                <Col style={{display:"flex", justifyContent:"end"}}>
                <Button color="primary">เพิ่มเจ้าหน้าที่</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>ลำดับ</th>
                                <th>ชื่อ-นามสกุล</th>
                                <th>ประเภทเจ้าหน้าที่</th>
                                <th>เลขประจำตัวประชาชน</th>
                                <th>เบอร์โทรศัพท์</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SetData;
