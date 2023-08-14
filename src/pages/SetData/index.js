import React, { useEffect, useMemo, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import "./custom-select.scss";

function SetData() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1)

  const toggleRightCanvas = () => {
    setOpen(!open);
  };

  const handleRedirect = () => {
    return (window.location.href = "http://www.google.com");
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="กำหนดข้อมูล" breadcrumbItem="กำหนดข้อมูล" />
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={3} xxl={3}>
            <Card>
              <CardBody className="p-2">
                <Row className="mb-3">
                  <Col>
                    <Button
                      color="light"
                      className="w-100"
                      style={{ textAlign: "center" }}
                    >
                      <i class="fa-solid fa-users"></i> เจ้าหน้าที่
                      <Badge
                        className="ms-1"
                        style={{ verticalAlign: "middle" }}
                        pill
                        color="info"
                      >
                        <h6 style={{fontSize:"10px"}} className="m-auto">333</h6>
                      </Badge>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button
                      color="light"
                      className="w-100"
                      style={{ textAlign: "center" }}
                    >
                      <i class="fa-solid fa-place-of-worship"></i> หน่วยงาน
                      ก.พ.ร.
                      <Badge
                        className="ms-1"
                        style={{ verticalAlign: "middle" }}
                        pill
                        color="info"
                      >
                        <h6 style={{fontSize:"10px"}} className="m-auto">25</h6>
                      </Badge>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button
                      color="light"
                      className="w-100"
                      style={{ textAlign: "center" }}
                    >
                      <i class="fa-solid fa-user-crown"></i> ผู้บังคับบัญชา
                      <Badge
                        className="ms-1"
                        style={{ verticalAlign: "middle" }}
                        pill
                        color="info"
                      >
                        <h6 style={{fontSize:"10px"}} className="m-auto">172</h6>
                      </Badge>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button
                      color="light"
                      className="w-100"
                      style={{ textAlign: "center" }}
                    >
                      <i class="fa-solid fa-percent"></i> ลดหย่อนในภาษี
                      <Badge
                        className="ms-1"
                        style={{ verticalAlign: "middle" }}
                        pill
                        color="info"
                      >
                        <h6 style={{fontSize:"10px"}} className="m-auto">4</h6>
                      </Badge>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button
                      color="light"
                      className="w-100"
                      style={{ textAlign: "center" }}
                    >
                      <i class="fa-solid fa-file-import"></i> นำเข้าใบภาษี
                      <Badge
                        className="ms-1"
                        style={{ verticalAlign: "middle" }}
                        pill
                        color="info"
                      >
                        <h6 style={{fontSize:"10px"}} className="m-auto">4</h6>
                      </Badge>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button
                      color="light"
                      className="w-100"
                      style={{ textAlign: "center" }}
                    >
                      <i class="fa-sharp fa-regular fa-location-dot"></i>{" "}
                      จังหวัด
                      <Badge
                        className="ms-1"
                        style={{ verticalAlign: "middle" }}
                        pill
                        color="info"
                      >
                        <h6 style={{fontSize:"10px"}} className="m-auto">77</h6>
                      </Badge>
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button
                      color="light"
                      className="w-100"
                      style={{ textAlign: "center" }}
                    >
                      <i class="fa-solid fa-hashtag"></i> เลขที่ตำแหน่ง
                      <Badge
                        className="ms-1"
                        style={{ verticalAlign: "middle" }}
                        pill
                        color="info"
                      >
                        <h6 style={{fontSize:"10px"}} className="m-auto">422</h6>
                      </Badge>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      color="light"
                      className="w-100"
                      style={{ textAlign: "center" }}
                    >
                      <i class="fa-solid fa-users-gear"></i> ประเภทเจ้าหน้าที่
                      <Badge
                        className="ms-1"
                        style={{ verticalAlign: "middle" }}
                        pill
                        color="info"
                      >
                        <h6 style={{fontSize:"10px"}} className="m-auto">5</h6>
                      </Badge>
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} lg={8} xl={9} xxl={9}>
            <Row className="mb-3">
              <Col lg={5}>
                <InputGroup>
                  <Input
                    type="search"
                    placeholder="...กรุณาใส่คำที่ต้องการค้นหา"
                  />
                  <Button style={{display:"flex", alignItems:"center"}} color="primary">
                    <i className="fa-sharp fa-solid fa-magnifying-glass fa-xl"></i>&nbsp;ค้นหา
                  </Button>
                </InputGroup>
              </Col>
              <Col style={{ display: "flex", justifyContent: "end" }}>
                <Button className="mt-1" onClick={toggleRightCanvas} color="primary">
                  <i className="fa-solid fa-user-plus"></i>{" "}
                  เพิ่มเจ้าหน้าที่
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table
                striped
                style={{ 
                  textAlign: "center",
                  overflow:"scroll" 
                }} 
                responsive>
                  <thead 
                  className="table-light"
                  style={{whiteSpace:"nowrap"}}>
                    <tr>
                      <th>ลำดับ</th>
                      <th>ชื่อ-นามสกุล</th>
                      <th>ประเภทเจ้าหน้าที่</th>
                      <th>
                        <i class="fa-solid fa-envelope"></i> อีเมลล์
                      </th>
                      <th>
                        <i class="fa-solid fa-id-card"></i> เลขประจำตัวประชาชน
                      </th>
                      <th>
                        <i class="fa-solid fa-phone-volume"></i> เบอร์โทรศัพท์
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ verticalAlign: "middle" }}>
                    <tr>
                      <td scope="row" style={{ fontSize: "16px" }}>1</td>
                      <td>กนกพร</td>
                      <td><Badge
                                      color="success"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-success fs-6">ข้าราชการ</span></Badge></td>
                      <td>kanokporn_xx@email.com</td>
                      <td>310200146xxxx</td>
                      <td>098765xxxx</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "16px" }}>2</td>
                      <td>กมลา</td>
                      <td><Badge
                                      color="success"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-success fs-6">ข้าราชการ</span></Badge></td>
                      <td>kammala_xx@email.com</td>
                      <td>310200146xxxx</td>
                      <td>098765xxxx</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "16px" }}>3</td>
                      <td>กฤตพน</td>
                      <td><Badge
                                      color="primary"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-primary fs-6">ลูกจ้างชั่วคราว</span></Badge></td>
                      <td>kanokporn_xx@email.com</td>
                      <td>310200146xxxx</td>
                      <td>098765xxxx</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "16px" }}>4</td>
                      <td>กฤตวิทย์</td>
                      <td><Badge
                                      color="warning"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-warning fs-6">นปร.</span></Badge></td>
                      <td>krittawit_xx@email.com</td>
                      <td>310200146xxxx</td>
                      <td>098765xxxx</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "16px" }}>5</td>
                      <td>กฤษณา</td>
                      <td><Badge
                                      color="warning"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-warning fs-6">นปร.</span></Badge></td>
                      <td>kritsana_xx@email.com</td>
                      <td>310200146xxxx</td>
                      <td>098765xxxx</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "16px" }}>6</td>
                      <td>กาญจนา</td>
                      <td><Badge
                                      color="primary"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-primary fs-6">ลูกจ้างชั่วคราว</span></Badge></td>
                      <td>kanjana_xx@email.com</td>
                      <td>310200146xxxx</td>
                      <td>098765xxxx</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              
              <Col className="d-flex justify-content-end">
                <Pagination aria-label="Page navigation example">
                  <PaginationItem disabled>
                    <PaginationLink first href="#" />
                  </PaginationItem>
                  <PaginationItem disabled>
                    <PaginationLink href="#" previous />
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem >
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" next />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" last />
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Button onClick={handleRedirect}>Redirect</Button> */}
        <Offcanvas
          style={{ width: "40%",border:"none" }}
          autoFocus
          direction="end"
          isOpen={open}
          toggle={toggleRightCanvas}
          fade
          className="fade"
        >
          {/* toggle={toggleRightCanvas} */}
          <OffcanvasHeader  style={{background:"#2a3042"}} >
            <i className="fa-solid fa-plus"></i> เพิ่มข้อมูลเจ้าหน้าที่
          </OffcanvasHeader>
          <OffcanvasBody>
            <Form>
              <Row>
                <Col lg={5}>
                  <FormGroup>
                    <Label>คำนำหน้าชื่อ</Label>
                    <Input type="select">
                      <option style={{paddingTop:"10px"}}>นาย</option>
                      <option>นาง</option>
                      <option>นางสาว</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>ชื่อ-นามสกุล</Label>
                    <Input placeholder="กรุณาใส่ชื่อ-นามสกุล..." type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={5}>
                  <FormGroup>
                    <Label>เพศ</Label>
                    <Input className="custom-select" type="select">
                      <option>ชาย</option>
                      <option>หญิง</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>อีเมลล์</Label>
                    <Input placeholder="กรุณาใส่อีเมลล์..." type="email" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={5}>
                  <FormGroup>
                    <Label>หมายเลขโทรศัพท์</Label>
                    <Input type="text" placeholder="Ex. 0945xxxxxx" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>ระดับการศึกษา</Label>
                    <Input placeholder="ปวช. หรือเทียบเท่า" type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={5}>
                  <FormGroup>
                    <Label>วันเกิด</Label>
                    <Input type="date" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>วันที่เริ่มบรรจุ</Label>
                    <Input type="date" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={5}>
                  <FormGroup>
                    <Label>ตำแหน่ง</Label>
                    <Input placeholder="กรุณาใส่ตำแหน่ง..." type="text" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>วันที่ครองตำแหน่ง</Label>
                    <Input type="date" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label>ที่อยู่</Label>
                    <Input
                      style={{ height: "5rem" }}
                      placeholder="กรุณาใส่ที่อยู่..."
                      type="text"
                    ></Input>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <Row>
                <Col md={4} lg={6} xl={6}></Col>
                <Col xs={12} sm={12} md={4} lg={3} xl={3} style={{display:"flex", justifyContent:"end"}}>
                  <Button color="success" style={{width:"100%"}}>บันทึก</Button>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl={3} style={{display:"flex", justifyContent:"end"}}>
                  <Button color="danger" style={{width:"100%"}}>ล้างค่า</Button>
                </Col>
              </Row>
          </OffcanvasBody>
        </Offcanvas>
      </Container>
    </div>
  );
}

export default SetData;
