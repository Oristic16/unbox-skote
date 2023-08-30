import React, { Fragment, useState } from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Table,
  TabPane,
} from 'reactstrap';

function TableA() {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <Fragment>
      <Card>
        <CardTitle style={{color:"#483fd3"}}>
          <div className="ps-4 pt-3">
            <i className="fa-solid fa-circle-check"></i> การจองออนไลน์
          </div>
        </CardTitle>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink className="active" onClick={() => setActiveTab('1')}>
                รายการจองห้องประชุม
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="" onClick={() => setActiveTab('2')}>
                รายการจองยานพาหนะ
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              {/* <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row> */}
              <Table
                bordered
                // striped
                responsive
              >
                <thead>
                  <tr>
                    <th>วันที่ เวลา</th>
                    <th>ถึงวันที่ เวลา</th>
                    <th>ห้องประชุม</th>
                    <th>ประเภทการประชุม</th>
                    <th>หัวข้อการประชุม</th>
                    <th>ประธานการประชุม</th>
                    <th>วันที่ เวลา บันทึก</th>
                    <th>สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30/3/2566</td>
                    <td>30/3/2566</td>
                    <td>ห้องประชุม 201</td>
                    <td>อื่นๆ</td>
                    <td>การจัดตั้งศูนย์ข้อมูลฯ และการประเมินหน่วยงาน</td>
                    <td>-</td>
                    <td>28/03/2566</td>
                    <td>
                      <Badge className="p-2" color="success">
                        อนุมัติ
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>30/3/2566</td>
                    <td>30/3/2566</td>
                    <td>ห้องประชุม 201</td>
                    <td>อื่นๆ</td>
                    <td>ชี้แจงทีมกองกฎหมายสนับสนุนงานกอง PO</td>
                    <td>-</td>
                    <td>28/03/2566</td>
                    <td>
                      <Badge className="p-2" color="warning">
                        รอดำเนินการ
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </TabPane>
            <TabPane tabId="2">
              {/* <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row> */}
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default TableA;
