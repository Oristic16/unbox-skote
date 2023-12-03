import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import MonthName from './MonthName'
import { Thai } from "flatpickr/dist/l10n/th.js";
import Flatpickr from "react-flatpickr";
import ModalCardLeave from './ModalCardLeave';

const SelectReport = ({ idReport }) => {

    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)

    const [cardLeave, setCardLeave] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    const toggleModal2 = () => {
        setModal2(!modal2)
    }

    const handleOpenCardLeave = () => {
        setCardLeave(!cardLeave)
    }

    const checkIdReport = () => {
        switch (idReport) {
            case "1":
                return (
                    <>
                        <ModalCardLeave cardLeave={cardLeave} handleOpenCardLeave={handleOpenCardLeave} />
                        <Form className='mt-3'>
                            <FormGroup className='' row>
                                <Label className='text-end' xxl={4} xl={4} xs={4}>ปีงบประมาณ</Label>
                                <Col xxl={8} xl={8} xs={8}>
                                    <Input type='select'>
                                        <option value={null}>กรุณาระบุปีงบประมาณ</option>
                                        <option value={null}>{new Date().getFullYear()+543-3}</option>
                                        <option value={null}>{new Date().getFullYear()+543-2}</option>
                                        <option value={null}>{new Date().getFullYear()+543-1}</option>
                                        <option value={null}>{new Date().getFullYear()+543+0}</option>
                                        <option value={null}>{new Date().getFullYear()+543+1}</option>
                                        <option value={null}>{new Date().getFullYear()+543+2}</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup className='' row>
                                <Label className='text-end' xxl={4} xs={4}>เดือน</Label>
                                <Col xl={8} xs={8}>
                                    <Input type='select'>
                                        <option value={null}>กรุณาระบุเดือน</option>
                                        {MonthName.map((item,idx) => {
                                            return (
                                                <option key={idx} value={item.no}>{item.name}</option>
                                            )
                                        })}
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup className='d-flex align-items-start' row>
                            <Label className='text-end' xxl={4} xs={4}>รูปแบบรายงาน</Label>
                                <Col xxl={8} xs={8}>
                                    <Input type='select'>
                                        <option value={null}>กรุณาระบุประเภทการลา</option>
                                        <option value={1}>1. ลาป่วย ลากิจ สาย ขาด ลาพักผ่อน </option>
                                        <option value={2}>2. เลี้ยงดูบุตร, ลาคลอด, ศึกษาต่อ/อบรม/ดูงาน,ติดตามคู่สมรส,เตรียมพล/ฮัจญ์/อุปสมบท</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                                <Label className='text-end' xxl={2} xs={4}>เจ้าหน้าที่</Label>
                                <Col xxl={3} xl={8} xs={8}>
                                    <Button onClick={toggleModal} color='info'>เลือกเจ้าหน้าที่</Button>
                                </Col>
                                <Col xxl={7} xs={8}>
                                    <Input type='text' disabled placeholder='กรุณาระบุเจ้าหน้าที่' />
                                </Col>
                            </FormGroup>
                            <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                                <Col xxl={4} lg={4} md={4} sm={4} xs={4}>
                                    <Button color='success' className='w-100' onClick={handleOpenCardLeave}>ค้นหา</Button>
                                </Col>
                                <Col xxl={4} lg={4} md={4} sm={4} xs={4}>
                                    <Button color='danger' className='w-100'>ยกเลิก</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </>
                );
            case "2":
                return (
                    <Form className='mt-3'>
                        <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                            <Label className='text-end' xxl={3} xs={4}>ปีงบประมาณ</Label>
                            <Col xxl={6} xs={8}>
                                <Input type='select'>
                                        <option value={null}>กรุณาระบุปีงบประมาณ</option>
                                        <option value={null}>{new Date().getFullYear()+543-3}</option>
                                        <option value={null}>{new Date().getFullYear()+543-2}</option>
                                        <option value={null}>{new Date().getFullYear()+543-1}</option>
                                        <option value={null}>{new Date().getFullYear()+543+0}</option>
                                        <option value={null}>{new Date().getFullYear()+543+1}</option>
                                        <option value={null}>{new Date().getFullYear()+543+2}</option>
                                </Input>
                            </Col>
                        </FormGroup>  
                        <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                            <Label className='text-end' xxl={2} xs={4}>ช่วงวันที่</Label>
                            <Col xxl={4} xs={8}>
                                <Flatpickr
                                    className="form-control d-block"
                                    placeholder="วัน/เดือน/ปี"
                                    options={{
                                    altInput: true,
                                    altFormat: "j F Y",
                                    dateFormat: "d-m-Y",
                                    locale: Thai,
                                    }}
                                />
                            </Col>
                            <Label className='text-end' xxl={2} xs={4}>ถึงวันที่</Label>
                            <Col xxl={4} xs={8}>
                                <Flatpickr
                                    className="form-control d-block"
                                    placeholder="วัน/เดือน/ปี"
                                    options={{
                                    altInput: true,
                                    altFormat: "j F Y",
                                    dateFormat: "d-m-Y",
                                    locale: Thai,
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                                <Label className='text-end' xxl={2} xs={4}>เจ้าหน้าที่</Label>
                                <Col xxl={3} xs={8}>
                                    <Button onClick={toggleModal} color='info'>เลือกเจ้าหน้าที่</Button>
                                </Col>
                                <Col xxl={7} xs={8}>
                                    <Input type='text' disabled placeholder='กรุณาระบุเจ้าหน้าที่' />
                                </Col>
                            </FormGroup>
                            <FormGroup row className='d-flex justify-content-end'>
                                
                            </FormGroup>
                        <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                            <Col xxl={4} xs={8}>
                                <Button color='success' className='w-100'>พิมพ์</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                )
            case "3":
                return (
                    <Form className='mt-2'>
                        <FormGroup row>
                            <Label className='text-end' xl={3}>ปีงบประมาณ</Label>
                            <Col xl={5}>
                                <Input type='select'>
                                    <option value={null}></option>
                                    <option value={null}>2561</option>
                                    <option value={null}>2562</option>
                                    <option value={null}>2563</option>
                                    <option value={null}>2564</option>
                                </Input>
                            </Col>
                        </FormGroup>  
                        <FormGroup row>
                            <Label className='text-end' xl={3}>ช่วงวันที่</Label>
                            <Col xl={3}>
                                <Flatpickr
                                    className="form-control d-block"
                                    placeholder="วัน/เดือน/ปี"
                                    options={{
                                    altInput: true,
                                    altFormat: "j F Y",
                                    dateFormat: "d-m-Y",
                                    locale: Thai,
                                    }}
                                />
                            </Col>
                            <Label  className='text-end' xl={3}>ถึงวันที่</Label>
                            <Col xl={3}>
                                <Flatpickr
                                    className="form-control d-block"
                                    placeholder="วัน/เดือน/ปี"
                                    options={{
                                    altInput: true,
                                    altFormat: "j F Y",
                                    dateFormat: "d-m-Y",
                                    locale: Thai,
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className='text-end' xl={3}>ประเภทเจ้าหน้าที่</Label>
                            <Col xl={5}>
                                <Input type='select'>
                                    <option value={null}></option>
                                    <option value={null}>ข้าราชการ</option>
                                    <option value={null}>ลูกจ้างชั่วคราว</option>
                                    <option value={null}>นักบริหารการเปลี่ยนแปลงรุ่นใหม่</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className='text-end' xl={3}>สำนัก/กอง/กลุ่ม</Label>
                            <Col xl={5}>
                                <Button onClick={toggleModal2} color='info'>เลือกสำนัก/กอง/กลุ่ม</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className='text-end' xl={3}>เจ้าหน้าที่</Label>
                            <Col xl={5}>
                                <Button onClick={toggleModal} color='info'>เลือกเจ้าหน้าที่</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                            <Col xl={4}>
                                <Button color='success' className='w-100'>ค้นหา</Button>
                            </Col>
                            <Col xl={4}>
                                <Button color='danger' className='w-100'>ยกเลิก</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                )
                case "4":
                return (
                    <Form className='mt-3'>
                        <FormGroup row>
                            <Label className='text-end' xl={2}>ช่วงวันที่</Label>
                            <Col xl={3}>
                                <Flatpickr
                                    className="form-control d-block"
                                    placeholder="วัน/เดือน/ปี"
                                    options={{
                                    altInput: true,
                                    altFormat: "j F Y",
                                    dateFormat: "d-m-Y",
                                    locale: Thai,
                                    }}
                                />
                            </Col>
                            <Label className='text-end' xl={2}>ถึงวันที่</Label>
                            <Col xl={3}>
                                <Flatpickr
                                    className="form-control d-block"
                                    placeholder="วัน/เดือน/ปี"
                                    options={{
                                    altInput: true,
                                    altFormat: "j F Y",
                                    dateFormat: "d-m-Y",
                                    locale: Thai,
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className='text-end' xl={2}>เจ้าหน้าที่</Label>
                            <Col xl={5}>
                                <Button onClick={toggleModal} color='info'>เลือกเจ้าหน้าที่</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                            <Col xl={4}>
                                <Button color='success' className='w-100'>ค้นหา</Button>
                            </Col>
                            <Col xl={4}>
                                <Button color='danger' className='w-100'>ยกเลิก</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                )
                case "5":
                return (
                    <Form className='mt-3'>
                        <FormGroup row>
                            <Label className='text-end' xl={3}>ปีงบประมาณ</Label>
                            <Col xl={5}>
                                <Input type='select'>
                                    <option value={null}></option>
                                    <option value={null}>2561</option>
                                    <option value={null}>2562</option>
                                    <option value={null}>2563</option>
                                    <option value={null}>2564</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup className='' row>
                            <Label className='text-end' xl={3}>เดือน</Label>
                            <Col xl={5}>
                                <Input type='select'>
                                    <option value={null}></option>
                                    {MonthName.map((item,idx) => {
                                        return (
                                            <option key={idx} value={item.no}>{item.name}</option>
                                        )
                                    })}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className='text-end' xl={3}>ประเภทเจ้าหน้าที่</Label>
                            <Col xl={5}>
                                <Input type='select'>
                                    <option value={null}></option>
                                    <option value={null}>ข้าราชการ</option>
                                    <option value={null}>ลูกจ้างชั่วคราว</option>
                                    <option value={null}>นักบริหารการเปลี่ยนแปลงรุ่นใหม่</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className='text-end' xl={3}>สำนัก/กอง/กลุ่ม</Label>
                            <Col xl={5}>
                                <Button onClick={toggleModal2} color='info'>เลือกสำนัก/กอง/กลุ่ม</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                            <Col xl={4}>
                                <Button color='success' className='w-100'>ค้นหา</Button>
                            </Col>
                            <Col xl={4}>
                                <Button color='danger' className='w-100'>ยกเลิก</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                )
            default:
                return "";
        }
    }

  return (
    <div>
        {checkIdReport()}
        <Modal centered isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>เลือกเจ้าหน้าที่</ModalHeader>
            <ModalBody>
                <Input type='search' placeholder='ค้นหาพนักงาน...' />
                <Input type='select'>
                    <option>กรุณาเลือก</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                </Input>
            </ModalBody>
        </Modal>
        <Modal centered isOpen={modal2} toggle={toggleModal2}>
            <ModalHeader toggle={toggleModal2}>เลือกสำนัก/กอง/กลุ่ม</ModalHeader>
            <ModalBody>
                <Input type='search' placeholder='ค้นหาสำนัก/กอง/กลุ่ม...' />
                <Input type='select'>
                    <option>กรุณาเลือก</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                </Input>
            </ModalBody>
        </Modal>
    </div>
  )
}

export default SelectReport