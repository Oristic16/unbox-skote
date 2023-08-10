import React, { useEffect, useMemo, useState } from "react";
import {
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
  Row,
  Table,
} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import './custom-select.scss'

function SetData() {
  const [open, setOpen] = useState(false);

  const toggleRightCanvas = () => {
    setOpen(!open);
  };

  const data = [
    {
      id:'',
      name: '',
      type:'',
      email:'',
      perID:'',

    }
  ]

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
                    <Button className="w-100" style={{ textAlign: "center" }}>
                    <i class="fa-solid fa-users"></i> เจ้าหน้าที่
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign: "center" }}>
                    <i class="fa-solid fa-place-of-worship"></i> หน่วยงาน ก.พ.ร.
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign: "center" }}>
                      <i class="fa-solid fa-user-crown"></i> ผู้บังคับบัญชา
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign: "center" }}>
                    <i class="fa-solid fa-percent"></i> ลดหย่อนในภาษี
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign: "center" }}>
                      <i class="fa-solid fa-file-import"></i> นำเข้าใบภาษี
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign: "center" }}>
                     <i class="fa-sharp fa-regular fa-location-dot"></i> จังหวัด
                    </Button>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button className="w-100" style={{ textAlign: "center" }}>
                      <i class="fa-solid fa-hashtag"></i> เลขที่ตำแหน่ง
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className="w-100" style={{ textAlign: "center" }}>
                      <i class="fa-solid fa-users-gear"></i> ประเภทเจ้าหน้าที่
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={10}>
            <Row className="mb-4">
              <Col lg={5}>
                <InputGroup>
                  <Input
                    type="search"
                    placeholder="...กรุณาใส่คำที่ต้องการค้นหา"
                  />
                  <Button color="primary">
                    <h6>
                      <i className="fa-sharp fa-solid fa-magnifying-glass fa-xl"></i>{" "}
                      ค้นหา
                    </h6>
                  </Button>
                </InputGroup>
              </Col>
              <Col style={{ display: "flex", justifyContent: "end" }}>
                <Button onClick={toggleRightCanvas} color="primary">
                  <i className="fa-solid fa-user-plus fa-md"></i>{" "}
                  เพิ่มเจ้าหน้าที่
                </Button>
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
                      <th><i class="fa-solid fa-envelope"></i> อีเมลล์</th>
                      <th>เลขประจำตัวประชาชน</th>
                      <th>เบอร์โทรศัพท์</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>กนกพร</td>
                      <td>ข้าราชการ</td>
                      <td>kanokporn_xx@email.com</td>
                      <td>310200146xxxx</td>
                      <td>098765xxxx</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
        <Offcanvas
          style={{ width: "40%" }}
          autoFocus
          direction="end"
          isOpen={open}
          toggle={toggleRightCanvas}
        >
          <OffcanvasHeader toggle={toggleRightCanvas}>
          <i className="fa-solid fa-plus"></i> เพิ่มข้อมูลเจ้าหน้าที่
          </OffcanvasHeader>
          <OffcanvasBody>
            <Form>
              <Row>
                <Col lg={5}>
                  <FormGroup>
                    <Label>คำนำหน้าชื่อ</Label>
                    <Input type="select">
                      <option>นาย</option>
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
                    <Input
                      type="text"
                      placeholder="Ex. 0945xxxxxx"
                    />
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
                    <Input style={{height:"5rem"}} placeholder="กรุณาใส่ที่อยู่..." type="text"></Input>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </OffcanvasBody>
        </Offcanvas>
      </Container>
    </div>
  );
}

export default SetData;
