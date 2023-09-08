import React, { Fragment } from "react";
import { Card, CardBody, Col, Row, Table } from "reactstrap";

function TextCard(props) {
  const { day, month, date, detail } = props;
  return (
    <Fragment>
      <Row>
        <Col lg={3}>
          <Row>
            <Col>
              <h5>วันที่ {day}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>เดือน {month}</h6>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "start",
                marginLeft: 0,
                paddingLeft: 0,
              }}
            >
              {detail}
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Table responsive>
        <tbody>
          <tr 
          // style={{ borderBottom: '1px solid #000', borderTop: '0px' }}
          >
            <td 
            // className="p-0" 
            // style={{ display: 'flex' }}
            >
              <div 
              style={{ flexGrow: 0 }}
              style={{ display: 'flex' }}
              >
                <Card
                  className="m-0 p-2"
                  style={{ width: '50px', textAlign: 'center' }}
                > 
                  <h4>{day}</h4>
                  <h6> {detail}</h6>
                  {month}
                </Card> 
              </div>
              <div 
               className="p-2"
              >
                <h6> {detail}</h6> 

                <span>{date}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>*/}
      {/* <ListGroup>
        <ListGroupItem>
          <Row>
            <Col xs={2}>
              <Card
                className="m-0 p-2"
                style={{ width: 'fit-content', textAlign: 'center' }}
              >
                <h4>{day}</h4>
                {month}
              </Card>
            </Col>
            <Col>
              <div className="p-2">
                <h6> {detail}</h6>

                <span>{date}</span>
              </div>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup> */}
    </Fragment>
  );
}

export default TextCard;
