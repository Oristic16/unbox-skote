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

const Menu3 = () => {
  return (
    <FadeIn>
      <Card>
        <CardBody className="">
          <CardTitle>คำนวณวันลาสะสม</CardTitle>
          <Form>
            <FormGroup row>
              <Label className="text-end" xxl={2}>
                คำนวณถึงวันที่
              </Label>
              <Col xxl={2}>
                <Input type="text" placeholder="กรุณาระบุวันที่" />
              </Col>
              <Col xxl={2}>
                <Button color="info"><i className="fas fa-search me-2"></i>คำนวณวันลาสะสม</Button>
              </Col>
            </FormGroup>
            
          </Form>
        </CardBody>
      </Card>
    </FadeIn>
  );
};

export default Menu3;
