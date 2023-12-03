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
  Label,
  Row,
} from "reactstrap";
import Flatpickr from "react-flatpickr";

const Menu1 = () => {
  return (
    <FadeIn>
      <Row>
        <Col xxl={3}>
          <Card>
            <CardBody className="pb-1">
              <CardTitle>
                <h4>ค้นหารายงาน</h4>
              </CardTitle>
              <Form className="mt-4">
                <FormGroup row>
                  <Label className="text-end" xxl={4} xs={4}>
                    เริ่มวันที่
                  </Label>
                  <Col>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="วัน/เดือน/ปี"
                      value={new Date()}
                      options={{
                        // altInput: true,
                        dateFormat: "d-m-Y",
                        ariaDateFormat: "F j, Y",
                        locale: "th",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="text-end" xxl={4} xs={4}>
                    ถึงวันที่
                  </Label>
                  <Col>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="วัน/เดือน/ปี"
                      value={new Date()}
                      options={{
                        // altInput: true,
                        dateFormat: "d-m-Y",
                        ariaDateFormat: "F j, Y",
                        locale: "th",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="text-end" xxl={4} xs={4}>
                    กอง
                  </Label>
                  <Col>
                    <Input type="select">
                      <option>กรุณาระบุกอง</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="text-end" xxl={4} xs={4}>
                    กลุ่ม
                  </Label>
                  <Col>
                    <Input type="select">
                      <option>กรุณาระบุกลุ่ม</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="text-end" xxl={4} xs={4}>
                    ชื่อพนักงาน
                  </Label>
                  <Col>
                    <Input type="select">
                      <option>กรุณาระบุพนักงาน</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row className="d-flex align-items-center">
                  <Col xxl={12}>
                    <Row className="d-flex align-items-center">
                      <Label className="text-end" xxl={4} xs={4}>
                        ประเภทไฟล์
                      </Label>
                      <Col xxl={1} xs={1}>
                        <Input
                          name="typeFile"
                          className="border border-secondary border-1 border-opacity-75"
                          style={{
                            fontSize: "20px",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                          type="radio"
                          defaultChecked
                        />
                      </Col>
                      <Label xxl={3} xs={3}>
                        PDF
                      </Label>
                    </Row>
                  </Col>
                  <Col xxl={12}>
                    <Row className="d-flex align-items-center">
                      <Col xxl={4} xs={4}></Col>
                      <Col xxl={1} xs={1}>
                        <Input
                          name="typeFile"
                          className="border border-secondary border-1 border-opacity-75"
                          style={{
                            fontSize: "20px",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                          type="radio"
                        />
                      </Col>
                      <Label xxl={2} xs={2}>
                        CSV
                      </Label>
                    </Row>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xxl={12}>
                    <Row>
                      <Label className="text-end" xxl={5} md={4} sm={4} xs={5}>
                        ประเภทรายงาน
                      </Label>
                    </Row>
                  </Col>
                  <Col xxl={12}>
                    <Row className="d-flex align-items-center">
                      <Col xxl={3} xs={3}></Col>
                      <Col xxl={1} xs={1}>
                        <Input
                          name="typeReport"
                          type="radio"
                          className="border border-secondary border-1 border-opacity-75"
                          style={{
                            fontSize: "20px",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                          defaultChecked
                        />
                      </Col>
                      <Label xxl={6} xs={6}>
                        การลงเวลาปฎิบัติงาน
                      </Label>
                    </Row>
                  </Col>
                  <Col xxl={12} >
                    <Row style={{display:'flex',alignItems:'center'}}>
                      <Col xxl={3} xs={3}></Col>
                      <Col xxl={1} xs={1}>
                        <Input
                          name="typeReport"
                          type="radio"
                          className="border border-secondary border-1 border-opacity-75"
                          style={{
                            fontSize: "20px",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        />
                      </Col>
                      <Label xxl={6} xs={6}>
                        การทำงานล่วงเวลา
                      </Label>
                    </Row>
                  </Col>
                  <Col xxl={12}>
                    <Row className="d-flex align-items-center">
                      <Col xxl={3} xs={3}></Col>
                      <Col xxl={1} xs={1}>
                        <Input
                          name="typeReport"
                          type="radio"
                          className="border border-secondary border-1 border-opacity-75"
                          style={{
                            fontSize: "20px",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        />
                      </Col>
                      <Label xxl={6} xs={6}>
                        ไม่ครบตามรอบเวลา
                      </Label>
                    </Row>
                  </Col>
                  <Col xxl={12}>
                    <Row className="d-flex align-items-center">
                      <Col xxl={3} xs={3}></Col>
                      <Col xxl={1} xs={1}>
                        <Input
                          name="typeReport"
                          type="radio"
                          className="border border-secondary border-1 border-opacity-75"
                          style={{
                            fontSize: "20px",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        />
                      </Col>
                      <Label xxl={6} xs={6}>
                        ขออนุญาตกลับก่อน
                      </Label>
                    </Row>
                  </Col>
                </FormGroup>
                <FormGroup
                  row
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Col xxl={3} xs={3}></Col>
                  <Col>
                    <Button className="w-100" color="success">
                      ค้นหารายงาน
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col xxl={9}>
          <Card style={{ minHeight: "680px" }}>
            <CardBody>
              <Row>
                <Col xxl={12} className="d-flex justify-content-center">
                  <CardTitle>
                    <h3>ตัวอย่างรายงาน</h3>
                  </CardTitle>
                </Col>
                <Col
                  style={{ minHeight: "600px" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <h5 className="text-muted">
                    โปรดใส่วันที่ ประเภทของรายงาน และกดปุ่ม "ค้นหารายงาน"
                    เพื่อค้นหารายงานที่ต้องการ
                  </h5>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </FadeIn>
  );
};

export default Menu1;
