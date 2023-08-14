import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardTitle, Col, Row, Table } from 'reactstrap';

function TextCard2() {
  return (
    <Fragment>
      <Card>
        <CardTitle className="p-2">
          <br />
          <Row className="px-2">
            <Col>
              <i className="fa-solid fa-database"></i> INTRANET
            </Col>
            <Col className="text-end">
              <Badge className="p-2 bg-opacity-25">
                <Link to="/#" className="has-arrow">
                  HR
                </Link>
              </Badge>
            </Col>
          </Row>
        </CardTitle>
        <CardBody>
          <Row
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '10px',
            }}
          >
            <Col>
              <Badge className="p-2" pill color="primary">
                01
              </Badge>
            </Col>
            <Col>
              <span>
                ประกาศผู้มีผลการประเมินการปฏิบัติงานในระดับดีเด่นและระดับดีมาก
                รอบการประเมินที่ 2/2565 ณ 1 ตุลาคม 2565
              </span>
            </Col>
          </Row>
          <br />
          <Row
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '10px',
            }}
          >
            <Col>
              <Badge className="p-2" pill color="primary">
                02
              </Badge>
            </Col>
            <Col>
              <span>ประกาศสำนักงาน ก.พ.ร.</span>
            </Col>
          </Row>
          <br />
          <Row
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '10px',
            }}
          >
            <Col>
              <Badge className="p-2" pill color="primary">
                03
              </Badge>
            </Col>
            <Col>
              <span>
                ประกาศผู้มีผลการประเมินการปฏิบัติงานในระดับดีเด่นและระดับดีมาก
                รอบการประเมินที่ 2/2565 ณ 1 เมษายน 2565
              </span>
            </Col>
          </Row>
          <br />
          <Row
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '10px',
            }}
          >
            <Col>
              <Badge className="p-2" pill color="primary">
                04
              </Badge>
            </Col>
            <Col>
              <span>รายชื่อข้าราชการตามมอบหมาย</span>
            </Col>
          </Row>
          <br />
          <Row
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '10px',
            }}
          >
            <Col>
              <Badge className="p-2" pill color="primary">
                05
              </Badge>
            </Col>
            <Col>
              <span>คำสั่งสำนักงาน ก.พ.ร.</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default TextCard2;
