import React, { useState } from "react";
import { Card, CardBody, FormGroup, Input, Label } from "reactstrap";

const ListComp = (props) => {
  const [checkedMenu, setCheckedMenu] = useState({
    checkedWel: false,
    checkedKarnLar: false,
    checkedReserve: false,
    checkedCalendar: false,
    checkedRecentFiles: false,
    checledAnnounce: false,
  });

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="form-check form-check-primary mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="customCheckcolor1"
              checked={checkedMenu.checkedWel}
              onChange={(e) => {
                setCheckedMenu((prev) => ({
                  ...prev,
                  checkedWel: e.target.checked,
                }));
              }}
            />

            <label className="form-check-label" htmlFor="customCheckcolor1">
              WelcomeComp
            </label>
          </div>
          <div className="form-check form-check-primary mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="customCheckcolor2"
              checked={checkedMenu.checkedKarnLar}
              onChange={(e) => {
                setCheckedMenu((prev) => ({
                  ...prev,
                  checkedKarnLar: e.target.checked,
                }));
              }}
            />

            <label className="form-check-label" htmlFor="customCheckcolor2">
              ภาพรวมการลา
            </label>
          </div>
          <div className="form-check form-check-primary mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="reservation"
              checked={checkedMenu.checkedReserve}
              onChange={(e) => {
                setCheckedMenu((prev) => ({
                  ...prev,
                  checkedReserve: e.target.checked,
                }));
              }}
            />

            <label className="form-check-label" htmlFor="reservation">
              การจองออนไลน์
            </label>
          </div>
          <div className="form-check form-check-primary mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="calendar"
              checked={checkedMenu.checkedCalendar}
              onChange={(e) => {
                setCheckedMenu((prev) => ({
                  ...prev,
                  checkedCalendar: e.target.checked,
                }));
              }}
            />

            <label className="form-check-label" htmlFor="calendar">
              ปฏิทิน
            </label>
          </div>
          <div className="form-check form-check-primary mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="recentfiles"
              checked={checkedMenu.checkedRecentFiles}
              onChange={(e) => {
                setCheckedMenu((prev) => ({
                  ...prev,
                  checkedRecentFiles: e.target.checked,
                }));
              }}
            />

            <label className="form-check-label" htmlFor="recentfiles">
              Recent Files
            </label>
          </div>
          <div className="form-check form-check-primary mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="announce"
              onChange={(e) => {
                setCheckedMenu((prev) => ({
                  ...prev,
                  checkedAnnounce: e.target.checked,
                }));
              }}
            />

            <label className="form-check-label" htmlFor="announce">
              ประกาศ
            </label>
          </div>
          <div className="form-check form-check-primary mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="announce"
              checked={checkedMenu.checkedCalendarList}
              onChange={(e) => {
                setCheckedMenu((prev) => ({
                  ...prev,
                  checkedCalendarList: e.target.checked,
                }));
              }}
            />

            <label className="form-check-label" htmlFor="announce">
              CalendarList
            </label>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ListComp;
