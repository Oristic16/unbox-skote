import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import Lottie from 'react-lottie'
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import * as accessDenied from '../Login/accessDenied.json'
import { useNavigate } from 'react-router-dom'

const ModalExitBeforeTime = ({ exitBeforeTime, handleCloseModalExitBeforeTime }) => {

  const navigate = useNavigate()

  return (
    <Modal size='lg' centered isOpen={exitBeforeTime} toggle={handleCloseModalExitBeforeTime}>
        <ModalHeader toggle={handleCloseModalExitBeforeTime}>ออกงานก่อนเวลา</ModalHeader>
        <ModalBody>
            <Row>
                <Col xxl={12} className='d-flex justify-content-center'>
                    <h1>คุณต้องการออกงานก่อนเวลาใช่ไหม</h1>
                    
                </Col>
            <Col xxl={12} className='d-flex justify-content-center mt-4'>
                    <div
            className="p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              border: "5px solid black",
            }}
          >
              <FadeIn>
              <Lottie options={{
                  loop: true,
                  autoplay: true,
                  animationData: accessDenied.default,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
              }} width={180} height={100} />
            </FadeIn>
          </div>
          
                </Col>
                <Col className='mt-4' xxl={12}>
                        <Row>
                            <Col xxl={6} className='d-flex justify-content-end'>
                                <Button onClick={() => {
                                  navigate("/laonline?exitbefore=1")
                                }} size='lg' color='success'>ตกลง</Button>
                            </Col>
                            <Col xxl={6} className='d-flex justify-content-start'>
                                <Button size='lg' color='danger'>ยกเลิก</Button>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </ModalBody>
    </Modal>
  )
}

export default ModalExitBeforeTime