import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import {
  Alert,
  Button,
  Card,
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
import {
  FetchAxiosFile,
  FetchAxiosPost,
  FetchAxiosPut,
} from "../../../api/axios";
import ModalAssignUser from "./ModalAssignUser";
import LoadingData from "../../TESTPage/LoadingData";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const API_URL = process.env.REACT_APP_API_CORS;
function EditAssign(props) {
  const { onButtonClick, id } = props;
  const { insert, setInsert } = useInsertConText();
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userAssignName, setUserAssignName] = useState(null);
  const [userAssignID, setUserAssignID] = useState(null);
  // const [orgName, setOrgName] = useState(null);
  // const [orgId, setOrgId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState(null);
  // const [isDefault, setIsDefault] = useState(0);
  const [position_Name, setPosition_Name] = useState(null);
  const [position_ID, setPosition_ID] = useState(null);
  const [userAssignData, setUserAssignData] = useState(null);
  const [userAssignDataOrg, setUserAssignDataOrg] = useState(null);
  const [assignOrgId, setAssignOrgId] = useState(null);
  const [assignId, setAssignId] = useState(null);
  const [assignUserId, setAssignUserId] = useState(null);
  const [assignOrgName, setAssignOrgName] = useState(null);
  const [fileUp, setFileUp] = useState(null);
  const [masterdata, setMasterdata] = useState([]);
  // const [alertFile, setAlertFile] = useState(false);
  // const [alertsetAssignOrgId, setAlertsetAssignOrgId] = useState(false);
  // const [alertassignUserId, setAlertAssignUserId] = useState(false);
  // const [alertassignUserName, setAlertAssignUserName] = useState(false);
  // const [alertStartDate, setAlertStartDate] = useState(false);
  // const [alertUserName, setAlertUserName] = useState(false);
  const [userEditData, setUserEditData] = useState([]);
  const [editIDData, setEditIDData] = useState(null);
  const [editIDUser, setEditIDUser] = useState(null);
  const [editIDPosition, setEditIDPosition] = useState(null);
  const [editNamePosition, setEditNamePosition] = useState(null);
  const [assignUser, setAssignUser] = useState(null);
  const [assignUserID, setAssignUserID] = useState(null);
  const [editStartDate, setEditStartDate] = useState(null);
  const [editEndDate, setEditEndDate] = useState(null);
  const [editStatus, setEditStatus] = useState(null);
  const [editID, setEditID] = useState(null);
  const [EditFile, setEditFile] = useState(null);
  const [positionCheck, setPositionCheck] = useState(0);
  const [positionID1Check, setPositionID1Check] = useState(0);
  const [positionID2Check, setPositionID2Check] = useState(0);
  const [positionID3Check, setPositionID3Check] = useState(0);
  const [positionID4Check, setPositionID4Check] = useState(0);
  const [positionID5Check, setPositionID5Check] = useState(0);
  const [positionID6Check, setPositionID6Check] = useState(0);
  const [positionID7Check, setPositionID7Check] = useState(0);

  const token = GetCookieToken("userToken");

  const positionURL = `/api/users/position/${id}`;

  // console.log(userData);

  const toggleRightCanvasT = () => {
    setLoading(true);
    console.log(id);
    setUserAssignName(null);
    setUserAssignID(null);
    setAssignUserId(null);
    setUserID(null);
    setUserName(null);
    // setOrgId(null);
    // setOrgName(null);
    setOpen(!open);
    fetchMasterData();
    fetchData();
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
    handleClearFile();
    setTimeout(() => {
      setLoading(false);
      setUserAssignName(null);
      setUserAssignID(null);
      setAssignUserId(null);
      setUserID(null);
      setUserName(null);
      // setAlertFile(false);
      // setAlertUserName(false);
      // setAlertAssignUserId(false);
      // setAlertStartDate(false);
      // setAlertsetAssignOrgId(false);
      // setAlertAssignUserName(false);
      setUserAssignDataOrg(null);
      setUserAssignData(null);
      setAssignId(null);
      setOpen(!open);
    }, 1000);
  };

  const fetchMasterData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/users/config/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.result, "MASTER");
      setMasterdata(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const data = {
    position_id: position_ID,
    position_name: position_Name,
    user_id: userID !== null ? userID : `${editIDUser}`,
    is_default: 0,
    date_start: startDate ? startDate : `${editStartDate}`,
    date_end: endDate ? endDate : `${editEndDate}`,
    // org_id: assignOrgId,
    org_id: assignOrgId !== null ? assignOrgId : `${editIDData}`,
    status: status !== null ? status : `${editStatus}`,
    assigned_by_user_id:
      assignUserId !== null ? assignUserId : `${assignUserID}`,
    assign: 1,
  };

  const handleSubmit = () => {
    console.log(data);
    if (
      fileUp !== null &&
      userID !== null &&
      assignUserId !== null &&
      status !== null &&
      assignOrgId !== null &&
      startDate !== null
    ) {
      setLoading(true);
      // FetchAxiosPut(positionURL, data, token)
      //   .then(item => {
      //     if (fileUp !== null) {
      //       const url_file = `/api/users/position/file/${item}`;

      //       FetchAxiosFile(url_file, token, fileUp);
      //     }
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
      setUserAssignName(null);
      setUserAssignID(null);
      setAssignUserId(null);
      setUserID(null);
      setUserName(null);
      // setAlertFile(false);
      // setAlertAssignUserId(false);
      // setAlertAssignUserName(false);
      // setAlertStartDate(false);
      // setAlertsetAssignOrgId(false);
      setUserAssignDataOrg(null);
      setUserAssignData(null);
      setAssignId(null);

      setTimeout(() => {
        // toggleRightCanvasF();
        setLoading(false);
      }, 1000);
    }
    // else {
    //   if (fileUp === null) {
    //     setAlertFile(true);
    //   }

    //   if (assignUserId === null) {
    //     setAlertAssignUserId(true);
    //   }
    //   if (userAssignName === null) {
    //     setAlertAssignUserName(true);
    //   }

    //   if (startDate === null) {
    //     setAlertStartDate(true);
    //   }
    //   if (assignOrgId === null) {
    //     setAlertsetAssignOrgId(true);
    //   }
    //   if (userName === null) {
    //     setAlertUserName(true);
    //   }
    // }
  };

  const fetchData = () => {
    const url = `${API_URL}/api/users/position/datatable`;
    const params = new URLSearchParams({
      page: 1,
      size: 1,
      "order[0]": "position_id",
      "order[1]": "ASC",
      "filter[id][0]": id,
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
        setAssignUserID(response.data.result?.map(i => i.assigned_by_user_id));
        setEditStartDate(response.data.result?.map(i => i.date_start));
        setEditEndDate(response.data.result?.map(i => i.date_end));
        setEditIDData(response.data.result?.map(i => i.org_id));
        setEditStatus(response.data.result?.map(i => i.status));
        setEditFile(
          response.data.result?.map(i => i.assign_doc?.split("public/")[1])
        );
        setEditID(response.data.result?.map(i => i.assign_org_id));
      })
      .catch(error => console.error("Error:", error));
  };

  useEffect(() => {
    setLoading(true);
    // if (insert.task === "สำนัก/กอง/กลุ่ม_ผู้บังคับบัญชา") {
    //   setOrgId(insert.insert_id);
    //   setOrgName(insert.insert_name);
    // }

    if (insert.task === "user_ผู้บังคับบัญชา") {
      setUserID(insert.insert_id);
      setUserName(insert.insert_name);
      // setAlertUserName(false);
    }
    if (insert.task === "Assign_ผู้บังคับบัญชา") {
      setUserAssignName(insert.insert_name);
      setUserAssignID(insert.insert_id);
      // fetchUserData(insert.insert_id);
      // setAlertAssignUserName(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [insert]);

  // console.log(userAssignData, "insert.insert_name");

  const fetchUserData = id => {
    if (id !== null) {
      const url = `${API_URL}/api/users/position/datatable`;
      const params = new URLSearchParams({
        page: 1,
        size: 10,
        "order[0]": "position_id",
        "order[1]": "ASC",
        // search: pushkeyword,
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
          console.log(response.data, "TEST1");
          setUserAssignData(response.data.result);
        })
        .catch(error => console.error("Error:", error));
    } else {
      console.log(id);
    }
  };

  const fetchOrgIdData = (assign_id, id) => {
    console.log(id, assign_id, "fetchOrgIdData");
    const url = `${API_URL}/api/users/position/datatable`;
    const params = new URLSearchParams({
      page: 1,
      size: 10,
      "order[0]": "position_id",
      "order[1]": "ASC",
      // search: pushkeyword,
      "filter[id][0]": assign_id,
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
        console.log(response.data.result, "response.data.result");
        setUserAssignDataOrg(response.data.result);
      })
      .catch(error => console.error("Error:", error));
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

  const fetchDataAssignUser = (id, setValue) => {
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
    if (userAssignID !== null) {
      fetchUserData(userAssignID);
      setUserAssignDataOrg(null);
    }
  }, [userAssignID]);

  // useEffect(() => {
  //   if (userAssignID !== null) {
  //     console.log(userAssignID, "userAssignID");
  //     setUserAssignData(null);
  //     fetchUserData(userAssignID);
  //   }
  // }, [userAssignID]);

  useEffect(() => {
    if (assignId !== null) {
      console.log(assignId, "y");
      fetchOrgIdData(assignId, userAssignID);
    }
  }, [assignId]);

  useEffect(() => {
    // console.log(editIDUser, "FUji");
    if (editIDUser !== null) {
      fetchDataUser(editIDUser, setUserName);
    }
  }, [editIDUser]);

  useEffect(() => {
    // console.log(editIDUser, "FUji");
    if (assignUserID !== null) {
      fetchDataAssignUser(assignUserID, setUserAssignName);
      fetchUserData(assignUserID);
    }
  }, [assignUserID]);

  useEffect(() => {
    if (editID !== null) {
      fetchOrgIdData(editID.toString(), assignUserID);
    }
  }, [editID]);

  const handleButtonFileClick = () => {
    const fileInput = document.getElementById("file-input");

    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setFileUp(file);
      // setAlertFile(false);
    }
  };

  const handleClearFile = e => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = null;
      setFileUp(null);
    }
  };

  useEffect(() => {
    if (userAssignDataOrg !== null) {
      const EditPositonCheck = userAssignDataOrg?.map(
        userOrgData => userOrgData.position_id
      );
      // console.log(`${EditPositonCheck}`, "TTT");
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
    }
  }, [userAssignDataOrg]);

  useEffect(() => {
    if (userAssignData !== null) {
      const configPoID = userAssignDataOrg?.map(assign => assign.position_id);

      const foundData = masterdata.users_position.find(
        i => i.users_position_id === parseInt(configPoID)
      );
      setPosition_ID(foundData?.users_position_id);
      setPosition_Name(foundData?.users_position_name);
    }
  }, [userAssignDataOrg]);

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
          <i className="fa-solid fa-plus"></i>{" "}
          รายละเอียดกำหนดการปฏิบัติราชการแทน
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
            <Form
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <Row>
                <Col lg={9}>
                  <FormGroup>
                    <Label>ผู้รับมอบอำนาจ</Label>
                    <InputGroup>
                      <Input
                        readOnly
                        defaultValue={userName}
                        name="user_name"
                        placeholder=""
                        type="text"
                        // invalid={!userName}
                      />
                      <ModalUser task="user_ผู้บังคับบัญชา" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              {/* {alertUserName === true ? (
                <Row className="mb-2">
                  <Col lg={9}>
                    <div id="liveAlertPlaceholder">
                      <Alert
                        color="danger"
                        className="text-danger"
                        isOpen={alertUserName}
                      >
                        กรุณาเลือก ผู้รับมอบอำนาจ
                      </Alert>
                    </div>
                  </Col>
                </Row>
              ) : (
                ""
              )} */}

              <Row>
                <Col lg={4}>
                  <InputGroup className="my-2">
                    <Input
                      readOnly
                      placeholder="Check it out"
                      defaultValue="ปฏิบัติราชการแทน"
                      style={{
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col lg={9}>
                  <FormGroup>
                    <Label>ผู้มอบอำนาจ</Label>
                    <InputGroup>
                      <Input
                        readOnly
                        defaultValue={userAssignName}
                        name="user_name"
                        placeholder=""
                        type="text"
                        invalid={!userAssignName}
                      />
                      <ModalAssignUser task="Assign_ผู้บังคับบัญชา" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              {/* {alertassignUserName === true ? (
                <Row className="mb-2">
                  <Col lg={9}>
                    <div id="liveAlertPlaceholder">
                      <Alert
                        color="danger"
                        className="text-danger"
                        isOpen={alertassignUserName}
                      >
                        กรุณาเลือก ผู้มอบอำนาจ
                      </Alert>
                    </div>
                  </Col>
                </Row>
              ) : (
                ""
              )} */}

              {userAssignData !== null ? (
                <Fragment>
                  <Row>
                    <Col lg={9}>
                      <FormGroup>
                        <Label>สำนัก/กอง/กลุ่ม ที่ได้รับการดูแล</Label>
                        {userAssignData?.map((assignData, index) => {
                          if (assignData.assign === 0) {
                            return assignId !== null ? (
                              <InputGroup className="my-2" key={index}>
                                <InputGroupText>
                                  <Input
                                    addon
                                    type="checkbox"
                                    // defaultChecked={
                                    //   editID.toString() === assignData.id
                                    // }
                                    checked={assignData.id === assignId}
                                    name="users_position_id"
                                    onChange={e => {
                                      setAssignId(
                                        e.target.checked ? assignData.id : null
                                      );
                                      setAssignUserId(
                                        e.target.checked
                                          ? assignData.user_id
                                          : null
                                      );
                                      setAssignOrgId(
                                        e.target.checked
                                          ? assignData.org_id
                                          : null
                                      );

                                      setAssignOrgName(
                                        e.target.checked
                                          ? assignData.org_name
                                          : null
                                      );
                                      // setAlertsetAssignOrgId(
                                      //   e.target.checked ? false : null
                                      // );
                                    }}
                                  />
                                </InputGroupText>
                                <Input
                                  readOnly
                                  defaultValue={assignData.org_name}
                                  style={{
                                    cursor: "pointer",
                                    transition: "background-color 0.3s",
                                  }}
                                />
                              </InputGroup>
                            ) : editID !== null ? (
                              <InputGroup className="my-2" key={index}>
                                <InputGroupText>
                                  <Input
                                    addon
                                    type="checkbox"
                                    defaultChecked={
                                      editID.toString() === assignData.id
                                    }
                                    // checked={assignData.id === assignId}
                                    name="users_position_id"
                                    onChange={e => {
                                      setAssignId(
                                        e.target.checked ? assignData.id : null
                                      );
                                      setAssignUserId(
                                        e.target.checked
                                          ? assignData.user_id
                                          : null
                                      );
                                      setAssignOrgId(
                                        e.target.checked
                                          ? assignData.org_id
                                          : null
                                      );

                                      setAssignOrgName(
                                        e.target.checked
                                          ? assignData.org_name
                                          : null
                                      );
                                      // setAlertsetAssignOrgId(
                                      //   e.target.checked ? false : null
                                      // );
                                    }}
                                  />
                                </InputGroupText>
                                <Input
                                  readOnly
                                  defaultValue={assignData.org_name}
                                  style={{
                                    cursor: "pointer",
                                    transition: "background-color 0.3s",
                                  }}
                                />
                              </InputGroup>
                            ) : (
                              ""
                            );
                          }
                        })}
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* {alertsetAssignOrgId === true ? (
                    <Row className="mb-2">
                      <Col lg={9}>
                        <div id="liveAlertPlaceholder">
                          <Alert
                            color="danger"
                            className="text-danger"
                            isOpen={alertFile}
                          >
                            กรุณาเลือก สำนัก/กอง/กลุ่ม ที่ได้รับการดูแล
                          </Alert>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )} */}

                  {editID !== null ? (
                    <Row>
                      <Col lg={9}>
                        <FormGroup>
                          {userAssignDataOrg?.map((assign, assignIndex) => {
                            return (
                              <>
                                <Label>ตำแหน่ง ที่ได้รับการดูแล</Label>
                                {masterdata.users_position?.map(
                                  (config, configIndex) => (
                                    <InputGroup
                                      className="my-2"
                                      key={`assign_${assignIndex}_config_${configIndex}`}
                                    >
                                      {config.users_position_id !== 1 &&
                                      config.users_position_id !== 8 ? (
                                        assign.position_id === positionCheck &&
                                        config.users_position_id !==
                                          positionID1Check &&
                                        config.users_position_id !==
                                          positionID2Check &&
                                        config.users_position_id !==
                                          positionID3Check &&
                                        config.users_position_id !==
                                          positionID4Check &&
                                        config.users_position_id !==
                                          positionID5Check &&
                                        config.users_position_id !==
                                          positionID6Check &&
                                        config.users_position_id !==
                                          positionID7Check ? (
                                          <>
                                            <InputGroupText>
                                              <Input
                                                disabled
                                                defaultChecked
                                                type="radio"
                                                name="users_position_id"
                                                onChange={e => {
                                                  setPosition_ID(
                                                    e.target.checked
                                                      ? config.users_position_id
                                                      : null
                                                  );
                                                  setPosition_Name(
                                                    e.target.checked
                                                      ? config.users_position_name
                                                      : null
                                                  );
                                                }}
                                              />
                                            </InputGroupText>
                                            <Input
                                              readOnly
                                              defaultValue={
                                                config.users_position_name
                                              }
                                              style={{
                                                cursor: "pointer",
                                                transition:
                                                  "background-color 0.3s",
                                              }}
                                            />
                                          </>
                                        ) : config.users_position_id !==
                                          positionCheck ? (
                                          <>
                                            <InputGroupText
                                              key={`assign_1${assignIndex}_config_${configIndex}`}
                                            >
                                              <Input
                                                disabled
                                                addon
                                                type="radio"
                                                name="users_position_id"
                                                onChange={e => {
                                                  setPosition_ID(
                                                    e.target.checked
                                                      ? config.users_position_id
                                                      : null
                                                  );

                                                  setPosition_Name(
                                                    e.target.checked
                                                      ? config.users_position_name
                                                      : null
                                                  );
                                                }}
                                              />
                                            </InputGroupText>
                                            <Input
                                              readOnly
                                              defaultValue={
                                                config.users_position_name
                                              }
                                              style={{
                                                cursor: "pointer",
                                                transition:
                                                  "background-color 0.3s",
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
                              </>
                            );
                          })}
                        </FormGroup>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}
                </Fragment>
              ) : (
                ""
              )}
              {userEditData.map((edit, index) => {
                return (
                  <div key={index}>
                    <Row>
                      <Col lg={5}>
                        <FormGroup>
                          <Label>คำสั่งการมอบหมายตำแหน่งข้าราชการแทน</Label>
                          <br />
                          <Button
                            className=""
                            type="button"
                            onClick={handleButtonFileClick}
                          >
                            <i className="fa-solid fa-upload"></i>
                            อัพโหลดไฟล์
                          </Button>
                          <input
                            id="file-input"
                            type="file"
                            accept=".pdf*"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                          />
                        </FormGroup>
                        {EditFile !== null && fileUp === null ? (
                          <Row className="mb-2">
                            <Col lg={12}>
                              <Alert color="success">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <i
                                      className="fa-solid fa-file-pdf fa-2xl fa-beat"
                                      style={{ color: "#07e449" }}
                                    ></i>
                                  </Col>
                                  <Col>
                                    <a
                                      href={`${API_URL}/${EditFile}`}
                                      target="_blank"
                                      className="text-muted font-weight-bold"
                                      rel="noreferrer"
                                    >
                                      <p className="mb-0">
                                        <strong className="text-success ">
                                          ไฟล์ที่อัพโหลด
                                        </strong>
                                      </p>
                                    </a>
                                  </Col>
                                </Row>
                              </Alert>
                            </Col>
                          </Row>
                        ) : (
                          ""
                        )}
                        {fileUp !== null ? (
                          <Row className="mb-2">
                            <Col lg={12}>
                              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                                <div className="p-2">
                                  <Row className="align-items-center">
                                    <Col className="col-auto">
                                      <i
                                        className="fa-solid fa-file-pdf fa-2xl fa-beat"
                                        style={{ color: "#f81212" }}
                                      ></i>
                                    </Col>
                                    <Col>
                                      <Link
                                        to="#"
                                        className="text-muted font-weight-bold"
                                      >
                                        {fileUp.name}
                                      </Link>
                                      <p className="mb-0">
                                        <strong>{fileUp.formattedSize}</strong>
                                      </p>
                                    </Col>
                                    <Col className="col-auto">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-sm text-danger"
                                        onClick={() => {
                                          handleClearFile();
                                        }}
                                      >
                                        <i className="fa-solid fa-xmark-large"></i>
                                      </button>
                                    </Col>
                                  </Row>
                                </div>
                              </Card>
                            </Col>
                          </Row>
                        ) : (
                          ""
                        )}
                        {/* {alertFile === true ? (
                          <Row className="mb-2">
                            <Col lg={12}>
                              <div id="liveAlertPlaceholder">
                                <Alert
                                  color="danger"
                                  className="text-danger"
                                  isOpen={alertFile}
                                >
                                  กรุณาแนบเอกสารคำสั่งการมอบหมายตำแหน่งข้าราชการแทน
                                </Alert>
                              </div>
                            </Col>
                          </Row>
                        ) : (
                          ""
                        )} */}
                      </Col>
                      <br />
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
                              defaultChecked={edit.status === 1}
                              type="checkbox"
                              name="status"
                              onChange={e =>
                                setStatus(e.target.checked ? 1 : 0)
                              }
                            />
                          </InputGroupText>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <FormGroup>
                          <Label>วันที่เริ่ม</Label>
                          <Input
                            name="start_date"
                            defaultValue={dayjs
                              .utc(edit.date_start)
                              .format("YYYY-MM-DD")}
                            type="date"
                            onChange={e => {
                              setStartDate(e.target.value);
                              // setAlertStartDate(false);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={1}></Col>
                      <Col lg={4}>
                        <FormGroup>
                          <Label>วันที่สิ้นสุด</Label>
                          <Input
                            name="date_end"
                            defaultValue={dayjs
                              .utc(edit.date_end)
                              .format("YYYY-MM-DD")}
                            type="date"
                            onChange={e => setEndDate(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* {alertStartDate === true ? (
                      <Row className="mb-2">
                        <Col lg={4}>
                          <div id="liveAlertPlaceholder">
                            <Alert
                              color="danger"
                              className={alertStartDate ? "text-danger" : ""}
                            >
                              กรุณากรอกวันที่เริ่ม
                            </Alert>
                          </div>
                        </Col>
                      </Row>
                    ) : (
                      ""
                    )} */}
                  </div>
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
          )}
        </OffcanvasBody>
      </Offcanvas>
    </Fragment>
  );
}

export default EditAssign;
