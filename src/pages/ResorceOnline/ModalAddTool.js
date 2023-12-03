import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const ModalAddTool = () => {

    const baseURL = "http://localhost:8000"

  const [opentoolType, setopenToolType] = React.useState(false);

  const toggleModal2 = () => {
    setopenToolType(!opentoolType);
  };

  const [data, setData] = useState({
    toolType: "",
    toolName: "",
    serialNum: "",
    toolBrand: "",
    toolGen: "",
    opdcId: "",
    countUnit: "",
    toolImg: "",
    status: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(baseURL + '/addtooldata', data)
    .then(() => {
        toggleModal2();
    }).then(() => {
        setData(prev => ({
          ...prev, 
            toolType: "",
            toolName: "",
            serialNum: "",
            toolBrand: "",
            toolGen: "",
            opdcId: "",
            countUnit: "",
            toolImg: "",
            status: false,
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

  const [toolType, setToolType] = useState([])

  const getToolType = () => {
    axios.get(baseURL + "/gettooltype")
    .then((res) => {
        setToolType(res.data)
        console.log("getToolType: ", res.data)
    }).catch((err) => {
        console.error(err);
    })
}

  return (
    <div>
        <Button color="info" onClick={toggleModal2}>
        เพิ่มประเภทอุปกรณ์
      </Button>
      <Modal centered isOpen={opentoolType} toggle={toggleModal2} onOpened={getToolType}>
        <ModalHeader>รายละเอียดประเภทอุปกรณ์</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody className="pb-0">
            <FormGroup row>
              <Label className='text-end' xl={3}>ประเภทอุปกรณ์</Label>
              <Col>
                <Input type='select' placeholder="เลือกประเภทประเภทอุปกรณ์" value={data.toolType} onChange={(e) => handleChange(e, "toolType")}>
                    <option label='<--- เลือกประเภท --->'></option>
                    {toolType.map((item) => {
                        return (
                            <option value={item.typeName} key={item.id}>{item.typeName}</option>
                        )
                    })}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-end' xl={3}>ชื่ออุปกรณ์</Label>
              <Col>
                <Input placeholder="ระบุชื่ออุปกรณ์" value={data.toolName} onChange={(e) => handleChange(e, "toolName")} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-end' xl={3}>Serial Number</Label>
              <Col>
                <Input placeholder="ระบุ Serial Number ของอุปกรณ์" value={data.serialNum} onChange={(e) => handleChange(e, "serialNum")} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-end' xl={3}>ยี่ห้อ</Label>
              <Col>
                <Input placeholder="ระบุยี่ห้อของอุปกรณ์" value={data.toolBrand} onChange={(e) => handleChange(e, "toolBrand")} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-end' xl={3}>รุ่น</Label>
              <Col>
                <Input placeholder="ระบุรุ่นของอุปกรณ์" value={data.toolGen} onChange={(e) => handleChange(e, "toolGen")} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-end' xl={3}>รหัสครุภัณฑ์</Label>
              <Col>
                <Input placeholder="ระบุรหัสครุภัณฑ์ของอุปกรณ์" value={data.opdcId} onChange={(e) => handleChange(e, "opdcId")} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-end' xl={3}>หน่วยนับ</Label>
              <Col>
                <Input type='select' placeholder="ระบุชื่อประเภทอุปกรณ์" value={data.countUnit} onChange={(e) => handleChange(e, "countUnit")}>
                    <option label='<--- เลือกหน่วย --->'></option>
                    <option value="ชิ้น">ชิ้น</option>
                    
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-end' xl={3}>รูปอุปกรณ์</Label>
              <Col>
                <Input type='file' value={data.toolImg} onChange={(e) => handleChange(e, "toolImg")} />
              </Col>
            </FormGroup>
            <FormGroup row style={{display:"flex", alignItems:"center"}}>
              <Label className='text-end' xl={3}>สถานะ</Label>
              <Col xl={1}>
                <Input type='checkbox' value={data.status} onChange={(e) => setData(prev => ({...prev, status: e.target.checked }))} />
              </Col>
              {data.status === false ? <Label xl={2}>ไม่ใช้งาน</Label> : <Label xl={2}>ใช้งาน</Label>}
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
  )
}

export default ModalAddTool