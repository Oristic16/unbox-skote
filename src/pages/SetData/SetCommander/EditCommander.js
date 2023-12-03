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
import { FetchAxiosPut } from "../../../api/axios";
import dayjs from "dayjs";
import LoadingData from "../../TESTPage/LoadingData";
import FadeIn from "react-fade-in/lib/FadeIn";

const API_URL = process.env.REACT_APP_API_CORS;

function EditCommander(props) {
  const { id, onButtonClick } = props;
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
  const [isDefault, setIsDefault] = useState(null);
  const [position_Name, setPosition_Name] = useState(null);
  const [position_ID, setPosition_ID] = useState(null);
  const [masterdata, setMasterdata] = useState([]);
  const [userEditData, setUserEditData] = useState([]);
  const [editIDData, setEditIDData] = useState(null);
  const [editIDUser, setEditIDUser] = useState(null);
  const [editIDPosition, setEditIDPosition] = useState(null);
  const [editNamePosition, setEditNamePosition] = useState(null);
  const [editIsDefault, setEditIsDefault] = useState(null);
  const [editStartDate, setEditStartDate] = useState(null);
  const [editEndDate, setEditEndDate] = useState(null);
  const [editStatus, setEditStatus] = useState(null);
  const [editID, setEditID] = useState(null);
  const [positionCheck, setPositionCheck] = useState(0);
  const [positionID1Check, setPositionID1Check] = useState(0);
  const [positionID2Check, setPositionID2Check] = useState(0);
  const [positionID3Check, setPositionID3Check] = useState(0);
  const [positionID4Check, setPositionID4Check] = useState(0);
  const [positionID5Check, setPositionID5Check] = useState(0);
  const [positionID6Check, setPositionID6Check] = useState(0);
  const [positionID7Check, setPositionID7Check] = useState(0);

  const token = GetCookieToken("userToken");

  // console.log(userData);

  const toggleRightCanvasT = () => {
    setLoading(true);
    fetchData();
    fetchMasterData();
    setOpen(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const toggleRightCanvasF = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      onButtonClick(id);
    }, 2500);
  };

  const toggleRightCanvasFS = () => {
    setLoading(false);

    setTimeout(() => {
      setLoading(false);
      setOpen(!open);
    }, 300);
  };

  const fetchData = () => {
    const url = `${API_URL}/api/users/position/datatable`;
    const params = new URLSearchParams({
      page: 1,
      size: 1,
      "order[0]": "position_id",
      "order[1]": "ASC",
      "filter[id][0]": id,

      // search: pushkeyword,
      //   search: "ทดสอบระบบ",
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    };
    axios
      .get(url, config)
      .then(response => {
        console.log(response.data.result, "BB");
        setUserEditData(response.data.result);
        setEditIDUser(response.data.result?.map(i => i.user_id));
        setEditIDPosition(response.data.result?.map(i => i.position_id));
        setEditNamePosition(response.data.result?.map(i => i.position_name));
        setEditIsDefault(response.data.result?.map(i => i.is_default));
        setEditStartDate(response.data.result?.map(i => i.date_start));
        setEditEndDate(response.data.result?.map(i => i.date_end));
        setEditIDData(response.data.result?.map(i => i.org_id));
        setEditStatus(response.data.result?.map(i => i.status));
        setEditID(response.data.result?.map(i => i.id));
        // const userId = response.data.result?.map(i => i.user_id);
      })
      .catch(error => console.error("Error:", error));
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
    position_id: position_ID ? position_ID : `${editIDPosition}`,
    position_name: position_Name ? position_Name : `${editNamePosition}`,
    user_id: userID !== null ? userID : `${editIDUser}`,
    is_default: isDefault !== null ? isDefault : `${editIsDefault}`,
    date_start: startDate ? startDate : `${editStartDate}`,
    date_end: endDate ? endDate : `${editEndDate}`,
    org_id: orgId !== null ? orgId : `${editIDData}`,
    status: status !== null ? status : `${editStatus}`,
  };
  // console.log(status, "testt");

  let filteredData = {};
  for (const key in data) {
    if (data[key] !== null && data[key] !== undefined) {
      filteredData[key] = data[key];
    }
  }

  const handleSubmit = () => {
    const positionURL = `/api/users/position/${editID}`;
    FetchAxiosPut(positionURL, filteredData, token);

    setTimeout(() => {
      setUserID(null);
      setUserName(null);
      setOrgId(null);
      setOrgName(null);
    }, 500);
  };

  useEffect(() => {
    setLoading(true);
    if (insert.task === "สำนัก/กอง/กลุ่ม_ผู้บังคับบัญชา") {
      setOrgId(insert.insert_id);
      setOrgName(insert.insert_name);
    }
    if (insert.task === "user_ผู้บังคับบัญชา") {
      setUserID(insert.insert_id);
      setUserName(insert.insert_name);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [insert, userName]);

  const fetchOrgData = async (id, setValue) => {
    try {
      const response = await axios.get(`${API_URL}/api/orgInner/id/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data, "ORG");
      if (id !== 0 && id !== null) {
        setValue(response.data.result.org_name);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchDataUser = (id, setValue) => {
    const url = `${API_URL}/api/users/datatable`;
    const params = new URLSearchParams({
      page: 1,
      size: 1,
      "order[0]": "user_name",
      "order[1]": "ASC",
      "filter[user_id][0]": id,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    };
    axios
      .get(url, config)
      .then(response => {
        //   console.log("result :", response.data, "info :", response.data.info);
        setValue(() => response.data.result?.map(i => i.user_name));
      })
      .catch(error => console.error("Error:", error));
  };

  useEffect(() => {
    // console.log(typeof parseInt(editIDData), "EDIT");
    if (editIDData !== null) {
      fetchOrgData(parseInt(editIDData), setOrgName);
    }
  }, [editIDData]);

  useEffect(() => {
    // console.log(editIDUser, "FUji");
    if (editIDUser !== null) {
      fetchDataUser(editIDUser, setUserName);
    }
  }, [editIDUser]);

  useEffect(() => {
    const EditPositonCheck = userEditData.map(userEdit => userEdit.position_id);
    console.log(`${EditPositonCheck}`);
    if (`${EditPositonCheck}` === "1") {
      setPositionCheck(1);
      setPositionID1Check(2);
      setPositionID2Check(3);
      setPositionID3Check(4);
      setPositionID4Check(5);
      setPositionID5Check(6);
      setPositionID6Check(7);
      setPositionID7Check(8);
    }
    if (`${EditPositonCheck}` === "2") {
      setPositionCheck(2);
      setPositionID1Check(1);
      setPositionID2Check(3);
      setPositionID3Check(4);
      setPositionID4Check(5);
      setPositionID5Check(6);
      setPositionID6Check(7);
      setPositionID7Check(8);
    }
    if (`${EditPositonCheck}` === "3") {
      setPositionCheck(3);
      setPositionID1Check(2);
      setPositionID2Check(1);
      setPositionID3Check(4);
      setPositionID4Check(5);
      setPositionID5Check(6);
      setPositionID6Check(7);
      setPositionID7Check(8);
    }
    if (`${EditPositonCheck}` === "4") {
      setPositionCheck(4);
      setPositionID1Check(2);
      setPositionID2Check(3);
      setPositionID3Check(1);
      setPositionID4Check(5);
      setPositionID5Check(6);
      setPositionID6Check(7);
      setPositionID7Check(8);
    }
    if (`${EditPositonCheck}` === "5") {
      setPositionCheck(5);
      setPositionID1Check(2);
      setPositionID2Check(3);
      setPositionID3Check(4);
      setPositionID4Check(1);
      setPositionID5Check(6);
      setPositionID6Check(7);
      setPositionID7Check(8);
    }
    if (`${EditPositonCheck}` === "6") {
      setPositionCheck(6);
      setPositionID1Check(2);
      setPositionID2Check(3);
      setPositionID3Check(4);
      setPositionID4Check(5);
      setPositionID5Check(1);
      setPositionID6Check(7);
      setPositionID7Check(8);
    }
    if (`${EditPositonCheck}` === "7") {
      setPositionCheck(7);
      setPositionID1Check(2);
      setPositionID2Check(3);
      setPositionID3Check(4);
      setPositionID4Check(5);
      setPositionID5Check(6);
      setPositionID6Check(1);
      setPositionID7Check(8);
    }
    if (`${EditPositonCheck}` === "8") {
      setPositionCheck(8);
      setPositionID1Check(2);
      setPositionID2Check(3);
      setPositionID3Check(4);
      setPositionID4Check(5);
      setPositionID5Check(6);
      setPositionID6Check(7);
      setPositionID7Check(1);
    }
  }, [userEditData]);

  // console.log(status, ": Status");

  return (
    <Fragment>
      <Button className="mt-1" onClick={toggleRightCanvasT} color="warning">
        <i className="fa-solid fa-pen-to-square"></i> แก้ไข
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
                          placeholder="กรุณาใส่ชื่อเล่น..."
                          type="text"
                        />
                        <ModalUser task="user_ผู้บังคับบัญชา" />
                      </InputGroup>
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
                          placeholder="กรุณาใส่ชื่อเล่น..."
                          type="text"
                        />
                        <ModalConID task="สำนัก/กอง/กลุ่ม_ผู้บังคับบัญชา" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                {userEditData.map((userEdit, index) => {
                  return (
                    <Fragment>
                      <Row>
                        <Col lg={9}>
                          <FormGroup>
                            {masterdata.users_position?.map(
                              (masterdata, index) => (
                                <InputGroup className="my-2" key={index}>
                                  {masterdata.users_position_id !== 1 &&
                                  masterdata.users_position_id !== 8 ? (
                                    userEdit.position_id === positionCheck &&
                                    masterdata.users_position_id !==
                                      positionID1Check &&
                                    masterdata.users_position_id !==
                                      positionID2Check &&
                                    masterdata.users_position_id !==
                                      positionID3Check &&
                                    masterdata.users_position_id !==
                                      positionID4Check &&
                                    masterdata.users_position_id !==
                                      positionID5Check &&
                                    masterdata.users_position_id !==
                                      positionID6Check &&
                                    masterdata.users_position_id !==
                                      positionID7Check ? (
                                      <>
                                        <InputGroupText>
                                          <Input
                                            addon
                                            defaultChecked
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
                                          defaultValue={
                                            masterdata.users_position_name
                                          }
                                          style={{
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                          }}
                                        />
                                      </>
                                    ) : masterdata.users_position_id !==
                                      positionCheck ? (
                                      <>
                                        <InputGroupText>
                                          <Input
                                            addon
                                            // defaultChecked={userEdit.position_id}
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
                                          defaultValue={
                                            masterdata.users_position_name
                                          }
                                          style={{
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                          }}
                                        />
                                      </>
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    ""
                                  )}
                                </InputGroup>
                              )
                            )}
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={4}>
                          <FormGroup>
                            <Label>วันที่เริ่ม</Label>
                            <Input
                              defaultValue={dayjs
                                .utc(userEdit.date_start)
                                .format("YYYY-MM-DD")}
                              name="start_date"
                              type="date"
                              onChange={e => setStartDate(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={4}>
                          {userEdit.is_default === 1 &&
                          userEdit.status === 1 ? (
                            <FormGroup>
                              <Label>วันที่สิ้นสุด</Label>
                              <Input
                                disabled
                                defaultValue={dayjs
                                  .utc(userEdit.date_end)
                                  .format("YYYY-MM-DD")}
                                name="date_end"
                                type="date"
                                invalid={true}
                                // onChange={e => setEndDate(e.target.value)}
                              />
                              <FormFeedback>
                                ตำแหน่งหลักและสถานะการใช้งานจะไม่สามารถเปิดใช้งานพร้อมกันได้
                              </FormFeedback>
                            </FormGroup>
                          ) : (
                            <FormGroup>
                              <Label>วันที่สิ้นสุด</Label>
                              <Input
                                defaultValue={dayjs
                                  .utc(userEdit.date_end)
                                  .format("YYYY-MM-DD")}
                                name="date_end"
                                type="date"
                                invalid={true}
                                onChange={e => setEndDate(e.target.value)}
                              />
                            </FormGroup>
                          )}
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
                                defaultChecked={userEdit.status === 1}
                                type="checkbox"
                                name="status"
                                onChange={e =>
                                  setStatus(e.target.checked ? 1 : 0)
                                }
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
                                defaultChecked={userEdit.is_default === 1}
                                type="checkbox"
                                name="is_default"
                                onChange={e =>
                                  setIsDefault(e.target.checked ? 1 : 0)
                                }
                              />
                            </InputGroupText>
                          </InputGroup>
                        </Col>
                      </Row>
                    </Fragment>
                  );
                })}

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

export default EditCommander;
