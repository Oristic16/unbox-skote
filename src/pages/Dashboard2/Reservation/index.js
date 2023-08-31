import React, { useState } from 'react'
import { Badge, Card, CardBody, CardTitle, Nav, NavItem, NavLink, TabContent, TabPane, Table } from 'reactstrap'
import MeetingRoom from './MeetingRoom';
import Vehicle from './Vehicle';
import { Link } from 'react-router-dom';

const Reservation = () => {

    const [activeTab, setActiveTab] = useState('1');

  return (
    <div>
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
              <MeetingRoom />
            </TabPane>
            <TabPane tabId="2">
                <Vehicle />
            </TabPane>
          </TabContent>
          <div className="mt-4" style={{ textAlign: "end" }}>
                        <Link to="" className="btn btn-primary  btn-sm">
                          View Profile{" "}
                          <i className="mdi mdi-arrow-right ms-1"></i>
                        </Link>
                      </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Reservation