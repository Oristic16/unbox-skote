import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const ModalToolType = () => {

    const baseURL = "http://localhost:8000"

  const [opentoolType, setToolType] = React.useState(false);

  const toggleModal2 = () => {
    setToolType(!opentoolType);
  };

  const [data, setData] = useState({
    dateSubmit: new Date().toLocaleString(),
    typeName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(baseURL + '/addtooltype', data)
    .then(() => {
        toggleModal2();
    }).then(() => {
        setData(prev => ({
            ...prev, 
            typeName: "",
            dateSubmit: new Date().toLocaleString()
        }))
    }).catch((err) => {
        console.error(err);
    })
    
  };

  const handleChange = (e, field) => {
    setData(prev => ({
        ...prev, [field] : e.target.value
    }))
  }
  
  console.log(data)

  return (
    <div>
      <Button color="info" onClick={toggleModal2}>
        เพิ่มประเภทอุปกรณ์
      </Button>
      <Modal centered isOpen={opentoolType} toggle={toggleModal2}>
        <ModalHeader>รายละเอียดประเภทอุปกรณ์</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody className="pb-0">
            <FormGroup row style={{ display: "flex", justifyContent: "end" }}>
              <Label className="text-end" xl={3}>
                วันที่บันทึก
              </Label>
              <Col xl={5}>
                <Input disabled type="text" value={data.dateSubmit} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label xl={3}>ชื่อประเภทอุปกรณ์</Label>
              <Col>
                <Input placeholder="ระบุชื่อประเภทอุปกรณ์" value={data.typeName} onChange={(e) => handleChange(e, "typeName")} />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal2}>
              ยกเลิก
            </Button>
            <Button color="success" type="submit">
              บันทึก
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalToolType;
