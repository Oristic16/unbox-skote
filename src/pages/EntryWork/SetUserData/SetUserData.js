import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Menu1 from './Menu/Menu1';
import Menu2 from './Menu/Menu2';
import Menu4 from './Menu/Menu4';
import Menu3 from './Menu/Menu3';
import Breadcrumb from '../../../components/Common/Breadcrumb';
import LoadingSetData from '../../TESTPage/LoadingSetData';
import FadeIn from 'react-fade-in/lib/FadeIn';

const SetUserData = () => {

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
            <Breadcrumb title="การลงเวลาออนไลน์" breadcrumbItem="กำหนดข้อมูล" isBack={true} path="/entrywork" />
            <Row className='mt-1'>
                <Col xxl={12}>
                <Row
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <Col xxl={3}>
                      <Card className={menu === "1" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} 
                        onClick={() => {
                          setMenu("1")
                          navigate("/entrywork/setdata?menuName=1")
                        }}
                      >
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
                          <h4 className={menu === "1" ? 'text-white' : null }>ค้นหารายงาน</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xxl={3}>
                      <Card className={menu === "2" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("2")
                        navigate("/entrywork/setdata?menuName=2")
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
                          <h4 className={menu === "2" ? 'text-white' : null }>ค้นหาข้อมูลคำขอ</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    
                    <Col xxl={3}>
                      <Card className={menu === "3" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("3")
                        navigate("/entrywork/setdata?menuName=3")
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
                          <h4 className={menu === "3" ? 'text-white' : null }>ค้นหาข้อมูลเข้าทำงาน</h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xxl={3}>
                      <Card className={menu === "4" ? 'bg-primary bg-opacity-75' : null } style={{cursor:"pointer"}} onClick={() => {
                        setMenu("4")
                        navigate("/entrywork/setdata?menuName=4")
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
                          <h4 className={menu === "4" ? 'text-white' : null }>จัดการข้อมูลพนักงาน</h4>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                
                <Col xxl={12}>
                    {
                        menu === "1" ? <Menu1 /> : 
                        menu === "2" ? <Menu2 /> :
                        menu === "3" ? <Menu3 /> :
                        menu === "4" ? <Menu4 /> : <Menu1 />
                    }
                </Col>
            </Row>
        </Container>
        </FadeIn>}
    </div>
  )
}

export default SetUserData