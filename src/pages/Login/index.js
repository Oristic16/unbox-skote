import React from 'react'
import { Card, CardBody, Container } from 'reactstrap'

function Login() {
  return (
    <React.Fragment>
      <div className='page-cotent'>
        <Container>
        <Card>
          <CardBody>
            <h1 className='text-center'>This is Login</h1>
          </CardBody>
        </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login