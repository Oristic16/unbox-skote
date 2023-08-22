import React, { useState } from 'react'
import { Button, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Container, Col, Row } from 'reactstrap'
import LaType from './LaType'
import SelectForm from './SelectForm'

const FormTypeLar = () => {

    const [open, setOpen] = useState(false)
    const [formNum, setFormNum] = useState(null)
    
    const toggleCanvas = () => {
        setOpen(!open)
    }

  return (
    <React.Fragment>
        <div>
        <Button color='primary' onClick={toggleCanvas}>เพิ่มฟอร์มการลา</Button>

        <Offcanvas style={{width:"45%"}} direction='end' isOpen={open} toggle={toggleCanvas}>
            <OffcanvasHeader style={{background:"#374863"}} toggle={toggleCanvas}>เพิ่มฟอร์มการลา</OffcanvasHeader>
            <OffcanvasBody>
            <Container fluid>
                    <Row style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
                        <Label xl={2}>ประเภทการลา</Label>
                    <Col xl={4}>
                    <Input className='my-3' type='select' onChange={(e) => setFormNum(e.target.value)}>
                            <option value="">กรุณาระบุ</option>
                            {LaType.map((item,idx) => {
                                return (
                                    <option key={idx} value={item.no}>{item.name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                    </Row>
                    {formNum && <SelectForm idForm={formNum} />}
                </Container>
            </OffcanvasBody>
        </Offcanvas>
        </div>
    </React.Fragment>
  )
}

export default FormTypeLar