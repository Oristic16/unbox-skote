import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import Breadcrumb from '../../../components/Common/Breadcrumb';
import { useState } from 'react';
import Menu1 from './Menu/Menu1';
import Menu2 from './Menu/Menu2';
import Menu3 from './Menu/Menu3';

import classNames from 'classnames';
import FadeIn from 'react-fade-in/lib/FadeIn';

const SetDataTool = props => {

    const navigate = useNavigate()

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paramName = params.get("menuName");

    const [menu, setMenu] = useState(paramName)
    
  return (<FadeIn>
    <div className='page-content'>
      
        <Container fluid>
            <Breadcrumb title="ทรัพยากรออนไลน์" breadcrumbItem="กำหนดข้อมูล" isBack={true} path="/resorceonline" />
            <Row className='mt-1'>
                <Col xxl={2}>
                <Row
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <Col xxl={12}>
                      <Card className={menu === "1" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("1")
                        navigate("/resorceonline/setdata?menuName=1")
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
                          <h4 className={menu === "1" ? 'text-white' : null }>ประเภทอุปกรณ์</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xxl={12}>
                      <Card className={menu === "2" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("2")
                        navigate("/resorceonline/setdata?menuName=2")
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
                          <h4 className={menu === "2" ? 'text-white' : null }>ข้อมูลอุปกรณ์</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    
                    <Col xxl={12}>
                      <Card className={menu === "3" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("3")
                        navigate("/resorceonline/setdata?menuName=3")
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
                          <h4 className={menu === "3" ? 'text-white' : null }>กำหนดผู้ดูแลระบบ</h4>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col xxl={10}>
                    {
                        menu === "1" ? <Menu1 /> : 
                        menu === "2" ? <Menu2 /> :
                        menu === "3" ? <Menu3 /> : <Menu1 />
                    }
                </Col>
            </Row>
        </Container>
        
    </div></FadeIn>
  )
}

export default SetDataTool