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

const Menu4 = () => {
  return (
    <FadeIn>
      <Card>
        <CardBody className="">
        <CardTitle>คำนวณวันทำงานย้อนหลัง</CardTitle>
          <Form>
          <FormGroup row>
              <Label className="text-end" xxl={2}>
                เจ้าหน้าที่
              </Label>
              <Col xxl={2}>
                <Input type="select">
                  <option value="">กรุณาระบุ</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label xxl={2} className="text-end">
                ช่วงวันที่
              </Label>
              <Col xxl={6}>
                <InputGroup>
                  <InputGroupText>ตั้งแต่</InputGroupText>
                  <Input type="text" placeholder="กรุณาระบุวันที่">
                    <option>ประเภทอุปกรณ์ทั้งหมด</option>
                  </Input>
                  <InputGroupText>ถึง</InputGroupText>
                  <Input type="text" placeholder="กรุณาระบุวันที่">
                    <option>ประเภทอุปกรณ์ทั้งหมด</option>
                  </Input>
                </InputGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xxl={2}></Col>
              <Col xxl={2}>
                <Button color="success" className="w-100"><i className=""></i>คำนวณ</Button>
              </Col>
              <Col xxl={2}>
                <Button color="danger" className="w-100"><i className=""></i>ยกเลิก</Button>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </FadeIn>
  );
};

export default Menu4;
