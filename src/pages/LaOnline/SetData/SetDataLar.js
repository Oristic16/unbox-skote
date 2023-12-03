import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Menu1 from './Menu/Menu1'
import Menu2 from './Menu/Menu2'
import Menu3 from './Menu/Menu3'
import Menu4 from './Menu/Menu4'
import Menu5 from './Menu/Menu5'
import Menu6 from './Menu/Menu6'
import LoadingSetData from '../../TESTPage/LoadingSetData'
import FadeIn from 'react-fade-in/lib/FadeIn'

const SetDataLar = () => {

    const navigate = useNavigate()

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paramName = params.get("menuName");

    const [menu, setMenu] = useState(paramName)

    const [loading, setLoading] = useState(false)

    React.useEffect(() => {
      setTimeout(() => {
        setLoading(true)
      },1000)
    },[])

  return (
    <div className='page-content'>
      {!loading ? <LoadingSetData /> : <FadeIn>
        <Container fluid>
            <Breadcrumb title="การลาออนไลน์" breadcrumbItem="กำหนดข้อมูล" isBack={true} path="/laonline" />
            <Row className='mt-1'>
                <Col xxl={2}>
                <Row
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <Col xxl={12}>
                      <Card className={menu === "1" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("1")
                        navigate("/laonline/setdata?menuName=1")
                      }}>
                        <CardBody onMouseLeave={(e) => {
                          e.currentTarget.style.background = "initial"
                          e.currentTarget.style.color = "initial"
                        }}
                          onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white"
                          e.currentTarget.style.background = "#a2abdc"
                          e.currentTarget.style.borderRadius = "0.25rem"
                          e.currentTarget.style.transition = "background-color 0.4s linear, color 0.4s linear"
                        }} className="d-flex justify-content-center">
                          <h4 className={menu === "1" ? 'text-white' : null }>กำหนดข้อมูลวันลา</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xxl={12}>
                      <Card className={menu === "2" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("2")
                        navigate("/laonline/setdata?menuName=2")
                      }}>
                        <CardBody onMouseLeave={(e) => {
                          e.currentTarget.style.background = "initial"
                          e.currentTarget.style.color = "initial"
                        }}
                          onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white"
                          e.currentTarget.style.background = "#a2abdc"
                          e.currentTarget.style.borderRadius = "0.25rem"
                          e.currentTarget.style.transition = "background-color 0.4s linear, color 0.4s linear"
                        }} className="d-flex justify-content-center">
                          <h4 className={menu === "2" ? 'text-white' : null }>มอบหมายการปฏิบัติราชการ</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    
                    <Col xxl={12}>
                      <Card className={menu === "3" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("3")
                        navigate("/laonline/setdata?menuName=3")
                      }}>
                        <CardBody onMouseLeave={(e) => {
                          e.currentTarget.style.background = "initial"
                          e.currentTarget.style.color = "initial"
                        }}
                          onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white"
                          e.currentTarget.style.background = "#a2abdc"
                          e.currentTarget.style.borderRadius = "0.25rem"
                          e.currentTarget.style.transition = "background-color 0.4s linear, color 0.4s linear"
                        }} className="d-flex justify-content-center">
                          <h4 className={menu === "3" ? 'text-white' : null }>คำนวณวันลาสะสม</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xxl={12}>
                      <Card className={menu === "4" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("4")
                        navigate("/laonline/setdata?menuName=4")
                      }}>
                        <CardBody onMouseLeave={(e) => {
                          e.currentTarget.style.background = "initial"
                          e.currentTarget.style.color = "initial"
                        }}
                          onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white"
                          e.currentTarget.style.background = "#a2abdc"
                          e.currentTarget.style.borderRadius = "0.25rem"
                          e.currentTarget.style.transition = "background-color 0.4s linear, color 0.4s linear"
                        }} className="d-flex justify-content-center">
                          <h4 className={menu === "4" ? 'text-white' : null }>คำนวณวันทำงานย้อนหลัง</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xxl={12}>
                      <Card className={menu === "5" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("5")
                        navigate("/laonline/setdata?menuName=5")
                      }}>
                        <CardBody onMouseLeave={(e) => {
                          e.currentTarget.style.background = "initial"
                          e.currentTarget.style.color = "initial"
                        }}
                          onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white"
                          e.currentTarget.style.background = "#a2abdc"
                          e.currentTarget.style.borderRadius = "0.25rem"
                          e.currentTarget.style.transition = "background-color 0.4s linear, color 0.4s linear"
                        }} className="d-flex justify-content-center">
                          <h4 className={menu === "5" ? 'text-white' : null }>ปฏิทินวันหยุด</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xxl={12}>
                      <Card className={menu === "6" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("6")
                        navigate("/laonline/setdata?menuName=6")
                      }}>
                        <CardBody onMouseLeave={(e) => {
                          e.currentTarget.style.background = "initial"
                          e.currentTarget.style.color = "initial"
                        }}
                          onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white"
                          e.currentTarget.style.background = "#a2abdc"
                          e.currentTarget.style.borderRadius = "0.25rem"
                          e.currentTarget.style.transition = "background-color 0.4s linear, color 0.4s linear"
                        }} className="d-flex justify-content-center">
                          <h4 className={menu === "6" ? 'text-white' : null }>กำหนดสิทธิและบทบาท</h4>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col xxl={10}>
                    {
                        menu === "1" ? <Menu1 /> : 
                        menu === "2" ? <Menu2 /> :
                        menu === "3" ? <Menu3 /> :
                        menu === "4" ? <Menu4 /> :
                        menu === "5" ? <Menu5 /> :
                        menu === "6" ? <Menu6 /> : <Menu1 />
                    }
                </Col>
            </Row>
        </Container>
        </FadeIn>}
    </div>
  )
}

export default SetDataLar