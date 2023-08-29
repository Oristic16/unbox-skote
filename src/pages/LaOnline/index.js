import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import FormTypeLar from './FormTypeLar'
import TableForm from './TableForm'

const index = () => {
  return (
    <div className='page-content'>
        <Container fluid>
            <Row className='mb-3'>
                <Col xl={12} className='d-flex justify-content-end'>
                    <FormTypeLar />
                </Col>
            </Row>
            <Row>
              <Col >
                <Card>
                  <CardBody>
                    <TableForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default index