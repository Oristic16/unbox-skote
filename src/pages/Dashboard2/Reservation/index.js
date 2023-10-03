import React, { useState } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";
import MeetingRoom from "./MeetingRoom";
import Vehicle from "./Vehicle";
import { Link } from "react-router-dom";
import classnames from "classnames";

const Reservation = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle1 = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div>
      <Card>
        <CardBody>
          <h5 className="me-3">
            <i className="fa-solid fa-circle-check font-size-20 me-2"></i>
            การจองออนไลน์
          </h5>
          <hr className="mt-2" />
          <Nav
            // tabs
            pills
            className="navtab-bg"
            fill
          >
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: activeTab === "1",
                })}
                onClick={() => {
                  toggle1("1");
                }}
              >
                รายการจองห้องประชุม
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: activeTab === "2",
                })}
                onClick={() => {
                  toggle1("2");
                }}
              >
                รายการจองยานพาหนะ
              </NavLink>
            </NavItem>
          </Nav>
          <div
                className="my-3"
                style={{ border: "2px solid #3a40cd" }}
              ></div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <MeetingRoom />
            </TabPane>
            <TabPane tabId="2">
              <Vehicle />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
};

export default Reservation;
