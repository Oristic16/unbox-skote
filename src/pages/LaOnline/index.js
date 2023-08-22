import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import FormTypeLar from './FormTypeLar'

const index = () => {
  return (
    <div className='page-content'>
        <Container fluid>
            <Row>
                <Col xl={12} className='d-flex justify-content-end'>
                    <FormTypeLar />
                </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default index