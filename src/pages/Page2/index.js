import React from 'react'
import { Card, CardBody, Container } from 'reactstrap'

const Page2 = () => {
  return (
    <div className='page-content'>
        <Container fluid>
        <h1>Page2</h1>
        
            <Card>
                <CardBody>
                    <h1>Hi, this is Page2</h1>
                </CardBody>
            </Card>
        </Container>
    </div>
  )
}

export default Page2