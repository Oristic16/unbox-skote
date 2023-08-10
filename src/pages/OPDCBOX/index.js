import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";

import classnames from "classnames";

function OPDCBox({ isDragging, text}) {
  const [activeTab1, setactiveTab1] = useState("5");

  const toggle1 = (tab) => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab);
    }
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="OPDC BOX" breadcrumbItem="OPDC BOX" />
        <Row>
          <Col lg={9}>
            <Card className="border border-red">
              <CardBody>
                <Row className="mb-3">
                  <Col>
                    <h3 className="card-title">
                      <i className="fa-solid fa-folder-tree fa-lg"></i> โฟลเดอร์
                    </h3>
                  </Col>
                </Row>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-folder-open"></i>&nbsp;
                          <h6>IMPORT ระบบสินทรัพย์</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-folder-open"></i>&nbsp;
                          <h6>internet-explorer</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-folder-open"></i>&nbsp;
                          <h6>OPDC OLD DOC</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-folder-open"></i>&nbsp;
                          <h6>ก.พ.ร.</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-folder-open"></i>&nbsp;
                          <h6>ข้อมูลสินทรัพย์ 60</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-folder-open"></i>&nbsp;
                          <h6>นำเข้าเพิ่ม 5 พ.ค.</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex align-items-center">
                          <i className="fa-solid fa-folder-open fa-lg"></i>
                          &nbsp;<h6>ปัญหา โอน ทรัพย์</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}></Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="border border-red">
              <CardBody>
                <Row className="mb-3">
                  <Col>
                    <h3 className="card-title">
                      <i className="fa-solid fa-files fa-lg"></i> ไฟล์
                    </h3>
                  </Col>
                </Row>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-file-word"></i>&nbsp;
                          <h6>1-ปก2.docx</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-file-pdf"></i>&nbsp;
                          <h6>2 สารบัญเล่ม 2.pdf</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-file-pdf"></i>&nbsp;
                          <h6>2-เล่ม 2 คตป-1.pdf</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-file-excel"></i>&nbsp;
                          <h6>ศูนย์ความปลอดภัย.xlsx</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-file-pdf"></i>&nbsp;
                          <h6>5 WorkFlow.pdf</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ border: "2px solid #6f8db7" }}>
                      <CardBody>
                        <span className="d-flex">
                          <i className="fa-solid fa-file-powerpoint"></i>&nbsp;
                          <h6>Training_PPT.ppt</h6>
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={3}></Col>
                  <Col lg={3}></Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <CardTitle>
                  <i class="fa-solid fa-list-check"></i> บริหารจัดการ
                </CardTitle>
                <Nav pills className="navtab-bg nav-justified mt-3">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "5",
                      })}
                      onClick={() => {
                        toggle1("5");
                      }}
                    >
                      โฟลเดอร์ใหม่
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "6",
                      })}
                      onClick={() => {
                        toggle1("6");
                      }}
                    >
                      อัพโหลดไฟล์
                    </NavLink>
                  </NavItem>
                  <NavItem></NavItem>
                  <NavItem></NavItem>
                </Nav>

                <TabContent activeTab={activeTab1} className="p-3 text-muted">
                  <TabPane tabId="5" style={{ color: "white" }}>
                    <Row className=" mt-3 d-flex align-items-center">
                      <Col lg={3} className="d-flex justify-content-center">
                        <Label>ชื่อโฟลเดอร์</Label>
                      </Col>
                      <Col lg={9}>
                        <Input
                          type="text"
                          placeholder="....กรุณาใส่ชื่อโฟล์เดอร์ที่ต้องการสร้าง"
                        />
                      </Col>
                    </Row>
                    <Row className=" mt-3 d-flex align-items-center">
                      <Col lg={3} className="d-flex justify-content-center">
                        <Label>คีย์เวิร์ด</Label>
                      </Col>
                      <Col lg={9}>
                        <Input
                          type="text"
                          placeholder="....กรุณาใส่คีย์เวิร์ด"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-end">
                        <div className="mt-3">
                          <Button color="primary">
                            <i className="fa-solid fa-plus fa-lg"></i>{" "}
                            สร้างโฟล์เดอร์ใหม่
                          </Button>
                          <Button className="ms-2" color="danger">
                            <i className="fa-solid fa-xmark fa-xl"></i> ยกเลิก
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="6" style={{ color: "white" }}>
                    <Form>
                      <Row
                        className="mt-2"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Col
                          lg={6}
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          
                        </Col>
                      </Row>
                      <Row className="my-2" style={{display:"flex", alignItems:"center"}}>
                        <Col>
                            <div className="d-flex">
                            <h1 className="card-title">
                                <i className="fa-solid fa-cloud-arrow-up"></i>{" "}
                                อัพโหลดไฟล์
                                </h1>
                        </div>
                        </Col>
                        <Col lg={3}>
                        <Input type="select">
                            <option>กรุณาเลือกโฟลเดอร์</option>
                            <option>IMPORT ระบบสินทรัพย์</option>
                            <option>internet-explorer</option>
                            <option>OPDC OLD DOC</option>
                            <option>ก.พ.ร.</option>
                            <option>ข้อมูลสินทรัพย์ 60</option>
                            <option>นำเข้าเพิ่ม 5 พ.ค.</option>
                            <option>ปัญหา โอน ทรัพย์</option>
                          </Input>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          lg={12}
                          style={{ display: "flex", justifyContent: "start" }}
                        >
                            <div className="p-4 d-block text-center" style={{width:"100%", height:"100%", border:"2px dashed #6f8db7"}}>
                                <p style={{color:"red", cursor:"pointer"}}><u>Click here</u></p>
                                <p>or</p>
                                <p>Drag files in here</p>
                            </div>
                          {/* <Input style={{width:"100%", height:"100px"}} type="file" multiple={true} /> */}
                        </Col>
                      </Row>
                      <Row>
                      <Col className="d-flex justify-content-end">
                        <div className="mt-3">
                          <Button color="primary">
                            <i className="fa-solid fa-plus fa-lg"></i>{" "}
                            อัพโหลดไฟล์ไฟล์เข้าโฟล์เดอร์
                          </Button>
                          <Button className="ms-2" color="danger">
                            <i className="fa-solid fa-xmark fa-xl"></i> ล้างค่า
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    </Form>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OPDCBox;
