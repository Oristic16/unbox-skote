import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';

const EntryWork = () => {
  const cellSpacing = [10, 10];
    let panels = [
        { 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, content: '<div class="content">0</div>' },
        { 'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, content: '<div class="content">1</div>' },
        { 'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, content: '<div class="content">2</div>' },
        { 'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, content: '<div class="content">3</div>' },
        { 'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, content: '<div class="content">4</div>' },
        { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, content: '<div class="content">5</div>' },
        { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content: '<div class="content">6</div>' }
    ];
    function onDragStart() {
        console.log("Drag start");
    }
    //Dashboard Layout's drag event function
    function onDrag(args) {
        console.log("Dragging");
    }
    //Dashboard Layout's dragstop event function
    function onDragOver(e) {
      e.preventDefault()
    }
  return (
    <div className='page-content'>
      <Container fluid>
        <Row>
          <Col xl={3} draggable>
            <Card style={{minHeight:"400px"}}>
              <CardBody>
                <h1>Heelo</h1>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} onDragOver={(e) => onDragOver(e)}>
            <Card style={{minHeight:"400px"}}>
              <CardBody>
            
              </CardBody>
            </Card>
          </Col>
          <Col xl={6}>
            <Card style={{minHeight:"400px"}}>
              <CardBody>
            
              </CardBody>
            </Card>
          </Col>
          <Col xl={4}>
            <Card style={{minHeight:"400px"}}>
              <CardBody>
            
              </CardBody>
            </Card>
          </Col>
          <Col xl={5}>
            <Card style={{minHeight:"400px"}}>
              <CardBody>
            
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card style={{minHeight:"400px"}}>
              <CardBody>
            
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EntryWork