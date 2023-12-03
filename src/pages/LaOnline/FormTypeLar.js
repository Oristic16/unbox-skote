import React, { useState } from 'react'
import { Button, Fade, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Container, Col, Row } from 'reactstrap'
import SelectForm from './SelectForm'
import { GetCookieToken } from "../Cookie/GetCookie";
import axios from 'axios';
import { useEffect } from 'react';

const FormTypeLar = ({ paramValue, getLeaveDataTable, userInfo }) => {

    const baseURL = process.env.REACT_APP_API_CORS;

    const [configForm, setConfigForm] = useState([])
    const token = GetCookieToken("userToken")
    const getConfigAll = () => {
        axios
        .get(baseURL+"/api/leave/config/all", {
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setConfigForm(res.data.form_leave)
            console.log("Config All: ",res.data.form_leave);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    useEffect(() => {
        getConfigAll();
    }, []);

    // console.log(configForm);
    // console.log("Form leave: ", configForm[0]);

    const [open, setOpen] = useState(false)
    const [formNum, setFormNum] = useState(null)
    
    const openCanvas = () => {
        setOpen(true)
    }
    const closeCanvas = () => {
        setOpen(false)
        setFormNum("")
    }

  return (
    <React.Fragment>
        <div>
            <Button color='primary' onClick={openCanvas}>เพิ่มฟอร์มการลา</Button>

            <Offcanvas
                style={{width:"50%"}}
                direction="end"
                isOpen={paramValue === 1 || open}
                toggle={() => {
                    closeCanvas();
                }}
            >
                <OffcanvasHeader className='bg-light' toggle={closeCanvas}>เพิ่มฟอร์มการลา</OffcanvasHeader>
                <OffcanvasBody>
                <Container fluid>
                        <Row style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
                            <Label className='text-end' xl={3} lg={4} md={4}>ประเภทการลา</Label>
                            <Col xl={4} lg={5} md={8}>
                                <Input className='my-3' type='select' onChange={(e) => setFormNum(e.target.value)}>
                                    <option value="">กรุณาระบุ</option>
                                    {configForm.map((item,idx) => {
                                        return (
                                            <option key={idx} value={item.form_type}>{item.form_name}</option>
                                        )
                                    })}
                                </Input>
                            </Col>
                        </Row>
                        {formNum !== "" ? <>
                            <SelectForm userInfo={userInfo} configForm={configForm[formNum-1]} idForm={formNum} closeCanvas={closeCanvas} getLeaveDataTable={getLeaveDataTable} />
                        </>  : null}
                    </Container>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    </React.Fragment>
  )
}

export default FormTypeLar