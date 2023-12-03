import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

const Menu1 = () => {
  return (
    <FadeIn>
      <Card>
        <CardBody className="pb-2">
          <CardTitle>กำหนดข้อมูลวันลา</CardTitle>
          <Form>
            <FormGroup row>
              <Label className="text-end" xxl={2} xl={3} xs={3}>
                ปีงบประมาณ
              </Label>
              <Col xxl={2} xl={9} xs={9}>
                <Input type="select">
                  <option value="">กรุณาระบุ</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={4} xl={12} xs={12} className="mt-3">
                <Row>
                  <Label xxl={6} xl={3} xs={4} className="text-end">
                    ลาป่วย
                  </Label>
                  <Col xxl={6} xl={9} xs={8}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xxl={7} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={3} xl={3}>
                    ลาพักผ่อน :{" "}
                  </Label>
                  <Label className="text-end" xxl={3} xl={3}>
                    ได้วันลาพักผ่อนปีละ
                  </Label>
                  <Col xxl={4} xl={6}>
                    <InputGroup>
                      <Input type="text" value={10} />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xxl={1} xl={3}></Col>
                  <Label className="text-end" xxl={5} xl={3}>
                    อายุราชการ ไม่ถึง 10 ปี สะสมได้ไม่เกิน
                  </Label>
                  <Col xxl={4} xl={6}>
                    <InputGroup>
                      <Input type="text" value={10} />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xxl={1} xl={3}></Col>
                  <Label className="text-end" xxl={5} xl={3}>
                    อายุราชการ เกิน 10 ปี สะสมได้ไม่เกิน{" "}
                  </Label>
                  <Col xxl={4} xl={6}>
                    <InputGroup>
                      <Input type="text" value={20} />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={5} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={6} xl={3}>
                    ลากิจส่วนตัว
                  </Label>
                  <Col xxl={6} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xxl={7} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={4} xl={3}>
                    ลาไปปฏิบัติราชการ
                  </Label>
                  <Col xxl={4} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={5} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={6} xl={3}>
                    ลาคลอดบุตร
                  </Label>
                  <Col xxl={6} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xxl={7} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={4} xl={3}>
                    รับรองการมาปฏิบัติราชการ
                  </Label>
                  <Col xxl={4} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={5} xl={12} className="mt-3"> 
                <Row>
                  <Label className="text-end" xxl={6} xl={3}>
                    ลาไปต่างประเทศ
                  </Label>
                  <Col xxl={6} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xxl={7} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={4} xl={3}>
                    ลากิจส่วนตัวเพื่อเลี้ยงดูบุตร
                  </Label>
                  <Col xxl={4} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={5} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={6} xl={3}>
                    ลาอุปสมบท
                  </Label>
                  <Col xxl={6} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xxl={7} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={4} xl={3}>
                    ลาไปช่วยเหลือภริยาที่คลอดบุตร
                  </Label>
                  <Col xxl={4} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={5} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={6} xl={3}>
                    ลาไปพิธีฮัจญ์
                  </Label>
                  <Col xxl={6} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xxl={7} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={4} xl={3}>
                    ลาไปฟื้นฟูสมรรถภาพด้านอาชีพ
                  </Label>
                  <Col xxl={4} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row >
              <Col xxl={5} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={6} xl={3}>
                    เข้าตรวจเลือก/เตรียมพล
                  </Label>
                  <Col xxl={6} xl={9} >
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={5} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={6} xl={3}>
                    ลาศึกษาต่อ
                  </Label>
                  <Col xxl={6} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={5} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={6} xl={3}>
                    ลาติดตามคู่สมรส
                  </Label>
                  <Col xxl={6} xl={9}>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupText>วัน</InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={6} xl={12} className="mt-3">
                <Row>
                  <Label className="text-end" xxl={5} xl={3}>
                    กำหนดเจ้าหน้าที่
                  </Label>
                  <Col xxl={7} xl={9}>
                    <InputGroup>
                      <Input disabled type="text" />
                      <Button color="info">ระบุเจ้าหน้าที่</Button>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xxl={5} xl={12} className="mt-3">
                <Row className="d-flex justify-content-end">
                  <Col xl={3}></Col>
                  <Col xxl={6} xl={9} >
                    <Button className="w-100" color="success">
                      บันทึก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </FadeIn>
  );
};

export default Menu1;
