import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  Spinner,
} from "reactstrap";
import ModalConID from "../ModalConID";
import { useInsertConText } from "../../Context/InsertContext";
import ModalUser from "./ModalUser";
import axios from "axios";
import { GetCookieData, GetCookieToken } from "../../Cookie/GetCookie";
import { FetchAxiosPost } from "../../../api/axios";
import LoadingData from "../../TESTPage/LoadingData";
import FadeIn from "react-fade-in/lib/FadeIn";

const API_URL = process.env.REACT_APP_API_CORS;

function AddCommander(props) {
  const { onButtonClick } = props;
  const { insert, setInsert } = useInsertConText();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);
  const [userID, setUserID] = useState(null);
  const [orgName, setOrgName] = useState(null);
  const [orgId, setOrgId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState(null);
  const [isDefault, setIsDefault] = useState(0);
  const [position_Name, setPosition_Name] = useState(null);
  const [position_ID, setPosition_ID] = useState(null);
  const [fileUp, setFileUp] = useState(null);
  const [masterdata, setMasterdata] = useState([]);
  const [checkAssingStatus, setCheckAssingStatus] = useState(false);

  const token = GetCookieToken("userToken");
  const userData = GetCookieData("userData");
  const is_default = JSON.stringify(userData.position?.map(i => i.is_default));
  const positionURL = "/api/users/position/save";

  // console.log(userData);

  const toggleRightCanvasT = () => {
    setLoading(true);
    setUserID(null);
    setUserName(null);
    setOrgId(null);
    setOrgName(null);
    setOpen(!open);
    fetchMasterData();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const toggleRightCanvasF = () => {
    setLoading(true);
    onButtonClick();
    setTimeout(() => {
      setLoading(false);
      setOpen(!open);
    }, 2500);
  };

  const toggleRightCanvasFS = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setUserID(null);
      setUserName(null);
      setOrgId(null);
      setOrgName(null);
      setOpen(!open);
    }, 300);
  };

  const fetchMasterData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/users/config/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMasterdata(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const data = {
    position_id: position_ID,
    position_name: position_Name,
    user_id: userID,
    is_default: isDefault,
    date_start: startDate,
    date_end: endDate,
    org_id: orgId,
    status: status,
    assign: 0,
  };

  const handleSubmit = () => {
    FetchAxiosPost(positionURL, data, token);
    setTimeout(() => {
      setUserID(null);
      setUserName(null);
      setOrgId(null);
      setOrgName(null);
    }, 500);
  };

  useEffect(() => {
    if (insert.task === "สำนัก/กอง/กลุ่ม_ผู้บังคับบัญชา") {
      setOrgId(insert.insert_id);
      setOrgName(insert.insert_name);
    }
    if (insert.task === "user_ผู้บังคับบัญชา") {
      setUserID(insert.insert_id);
      setUserName(insert.insert_name);
    }
  }, [insert, userName]);

  const handleButtonFileClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setFileUp(file);
    }
  };

  return (
    <Fragment>
      <Button className="mt-1" onClick={toggleRightCanvasT} color="primary">
        <i className="fa-solid fa-user-plus"></i> เพิ่มใหม่
      </Button>
      <Offcanvas
        style={{ width: "50%", border: "none" }}
        autoFocus
        direction="end"
        isOpen={open}
        toggle={toggleRightCanvasFS}
        fade
        className="fade"
      >
        <OffcanvasHeader style={{ background: "#2a3042", color: "white" }}>
          <i className="fa-solid fa-plus"></i> รายละเอียดข้อมูลผู้บังคับบัญชา
        </OffcanvasHeader>
        <OffcanvasBody>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "400px",
              }}
            >
              <LoadingData />
            </div>
          ) : (
            <FadeIn>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  handleSubmit();
                  toggleRightCanvasF();
                }}
              >
                <Row>
                  <Col lg={9}>
                    <FormGroup>
                      <Label>เจ้าหน้าที่</Label>
                      <InputGroup>
                        <Input
                          readOnly
                          defaultValue={userName}
                          name="user_name"
                          placeholder=""
                          type="text"
                          invalid={!userName}
                        />
                        <ModalUser task="user_ผู้บังคับบัญชา" />
                      </InputGroup>
                      {!userName && <FormFeedback>โปรดกรอกข้อมูล</FormFeedback>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9}>
                    <FormGroup>
                      {masterdata.users_position?.map((masterdata, index) =>
                        masterdata.users_position_id !== 1 &&
                        masterdata.users_position_id !== 8 ? (
                          <InputGroup className="my-2" key={index}>
                            <InputGroupText>
                              <Input
                                addon
                                type="radio"
                                name="users_position_id"
                                onChange={e => {
                                  setPosition_ID(
                                    e.target.checked
                                      ? masterdata.users_position_id
                                      : null
                                  );
                                  setPosition_Name(
                                    e.target.checked
                                      ? masterdata.users_position_name
                                      : null
                                  );
                                }}
                              />
                            </InputGroupText>
                            <Input
                              readOnly
                              defaultValue={masterdata.users_position_name}
                              style={{
                                cursor: "pointer",
                                transition: "background-color 0.3s",
                              }}
                            />
                          </InputGroup>
                        ) : (
                          ""
                        )
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9}>
                    <FormGroup>
                      <Label>สำนัก/กอง/กลุ่ม</Label>
                      <InputGroup>
                        <Input
                          readOnly
                          defaultValue={orgName}
                          name="org_name"
                          placeholder=""
                          type="text"
                          invalid={!orgName}
                        />
                        <ModalConID
                          user_id={userID}
                          task="สำนัก/กอง/กลุ่ม_ผู้บังคับบัญชา"
                        />
                      </InputGroup>
                      {!orgName && <FormFeedback>โปรดกรอกข้อมูล</FormFeedback>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>วันที่เริ่ม</Label>
                      <Input
                        name="start_date"
                        type="date"
                        onChange={e => setStartDate(e.target.value)}
                        invalid={!startDate}
                      />
                      {!startDate && (
                        <FormFeedback>โปรดกรอกข้อมูล</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col lg={1}></Col>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>วันที่สิ้นสุด</Label>
                      <Input
                        name="date_end"
                        type="date"
                        onChange={e => setEndDate(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <InputGroup className="my-2">
                      <Input
                        readOnly
                        placeholder="Check it out"
                        defaultValue="สถานะ"
                        style={{
                          cursor: "pointer",
                          transition: "background-color 0.3s",
                        }}
                      />
                      <InputGroupText>
                        <Input
                          addon
                          type="checkbox"
                          name="user_commander"
                          onChange={e => setStatus(e.target.checked ? 1 : 0)}
                        />
                      </InputGroupText>
                    </InputGroup>
                  </Col>
                  <Col lg={1} />
                  <Col lg={4}>
                    <InputGroup className="my-2">
                      <Input
                        readOnly
                        placeholder="Check it out"
                        defaultValue="ตำแหน่งหลัก"
                        style={{
                          cursor: "pointer",
                          transition: "background-color 0.3s",
                        }}
                      />
                      <InputGroupText>
                        <Input
                          addon
                          type="checkbox"
                          name="is_default"
                          onChange={e => setIsDefault(e.target.checked ? 1 : 0)}
                        />
                      </InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={4} lg={6} xl={6}></Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={3}
                    xl={3}
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <Button
                      disabled={
                        position_ID === null ||
                        position_Name === null ||
                        userID === null ||
                        isDefault === null ||
                        startDate === null ||
                        orgId === null ||
                        status === null
                      }
                      type="submit"
                      color="success"
                      onClick={() =>
                        window.confirm(
                          "คุณต้องการที่จะ submit ฟอร์มนี้ใช่หรือไม่?"
                        )
                      }
                      style={{ width: "100%" }}
                    >
                      บันทึก
                    </Button>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={3}
                    xl={3}
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <Button
                      color="danger"
                      style={{ width: "100%" }}
                      onClick={toggleRightCanvasFS}
                    >
                      ยกเลิก
                    </Button>
                  </Col>
                </Row>
              </Form>
            </FadeIn>
          )}
        </OffcanvasBody>
      </Offcanvas>
    </Fragment>
  );
}

export default AddCommander;
