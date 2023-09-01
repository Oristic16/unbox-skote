import React from 'react'
import { Card, CardBody, FormGroup, Input, Label } from 'reactstrap'

const ListComp = () => {
  return (
    <div>
      <Card>
        <CardBody>
        <FormGroup check>
            <Input
              id="checkbox2"
              type="checkbox"
            />
            {' '}
            <Label check>
              WelcomeComp
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="checkbox2"
              type="checkbox"
            />
            {' '}
            <Label check>
              ภาพรวมการลา
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="checkbox2"
              type="checkbox"
            />
            {' '}
            <Label check>
              การจองออนไลน์
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="checkbox2"
              type="checkbox"
            />
            {' '}
            <Label check>
              ปฏิทิน
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="checkbox2"
              type="checkbox"
            />
            {' '}
            <Label check>
            Recent Files
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="checkbox2"
              type="checkbox"
            />
            {' '}
            <Label check>
              ประกาศ
            </Label>
          </FormGroup>
        </CardBody>
      </Card>
    </div>
  )
}

export default ListComp