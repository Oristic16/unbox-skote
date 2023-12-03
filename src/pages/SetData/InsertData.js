import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  Spinner,
  Table,
} from "reactstrap";

import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FetchAxiosGet, FetchAxiosFile, FetchAxiosPost } from "../../api/axios";
import { GetCookieToken } from "../Cookie/GetCookie";
import ModalConID from "./ModalConID";
import { useInsertConText } from "../Context/InsertContext";
import LoadingData from "../TESTPage/LoadingData";
import FadeIn from "react-fade-in/lib/FadeIn";

const API_URL = process.env.REACT_APP_API_CORS;

function InsertData(props) {
  const { onButtonClick } = props;
  const token = GetCookieToken("userToken");

  const [tableData, setTableData] = useState([]);
  const [timeId, setTimeId] = useState(0);
  const [value_name_cont_1, setValue_name_cont_1] = useState("");
  const [value_name_cont_2, setValue_name_cont_2] = useState("");
  const [value_name_cont_3, setValue_name_cont_3] = useState("");
  const [value_name_cont_4, setValue_name_cont_4] = useState("");
  const [value_name_cont_5, setValue_name_cont_5] = useState("");
  const [value_name_cont_6, setValue_name_cont_6] = useState("");
  const [value_name_cont_7, setValue_name_cont_7] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [dataProvinces, setDataProvinces] = useState([]);
  const [masterdata, setMasterdata] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const { insert, setInsert } = useInsertConText();
  const [modal, setModal] = useState(false);
  const [picandTime, setPicandTime] = useState({
    start_date: null,
    user_pic: null,
  });
  const [user_title_id, setUserTitleId] = useState(null);
  const [user_title_name, setUserTitleName] = useState(null);
  const [user_name, setUserName] = useState(null);
  const [user_nickname, setUserNickname] = useState(null);
  const [user_name_en, setUserNameEn] = useState(null);
  const [user_idcard, setUserIdcard] = useState(null);
  const [user_address, setUserAddress] = useState(null);
  const [user_email, setUserEmail] = useState(null);
  const [user_mobile, setUserMobile] = useState(null);
  const [user_phone, setUserPhone] = useState(null);
  const [user_intercom, setUserIntercom] = useState(null);
  const [user_fax, setUserFax] = useState(null);
  const [cont_to_id, setContToId] = useState(null);
  const [cont_to_id2, setContToId2] = useState(null);
  const [cont_to_id3, setContToId3] = useState(null);
  const [cont_to_id4, setContToId4] = useState(null);
  const [cont_to_id5, setContToId5] = useState(null);
  const [cont_to_id6, setContToId6] = useState(null);
  const [cont_to_id7, setContToId7] = useState(null);
  const [user_education_id, setUserEducationId] = useState(null);
  const [user_education_name, setUserEducationName] = useState(null);
  const [user_sex_id, setUserSexId] = useState(null);
  const [user_sex_name, setUserSexName] = useState(null);
  const [user_religion_id, setUserReligionId] = useState(null);
  const [user_religion_name, setUserReligionName] = useState(null);
  const [user_status_id, setUserStatusId] = useState(null);
  const [user_status_name, setUserStatusName] = useState(null);
  const [user_domicile_id, setUserDomicileId] = useState(null);
  const [user_domicile_name, setUserDomicileName] = useState(null);
  const [user_birthday, setUserBirthday] = useState(null);
  const [user_start_date, setUserStartDate] = useState(null);
  const [user_start_opdc_date, setUserStartOpdcDate] = useState(null);
  const [user_no_position, setUserNoPosition] = useState(null);
  const [user_start_posit, setUserStartPosit] = useState(null);
  const [user_category_id, setUserCategoryId] = useState(null);
  const [user_category_name, setUserCategoryName] = useState(null);
  const [user_position_name, setUserPositionName] = useState(0);
  const [user_level_id, setUserLevelId] = useState(null);
  const [user_level_name, setUserLevelName] = useState(null);
  const [user_employee_id, setUserEmployeeId] = useState(null);
  const [user_employee_type_id, setUserEmployeeTypeId] = useState(null);
  const [user_employee_type_name, setUserEmployeeTypeName] = useState(null);
  const [user_start_work_id, setUserStartWorkId] = useState(null);
  const [user_start_work_name, setUserStartWorkName] = useState(null);
  const [user_login, setUserLogin] = useState(null);
  const [user_password, setUserPassword] = useState(null);
  const [RFID_code, setRFIDCode] = useState(null);
  const [user_finger_print, setUserFingerPrint] = useState(null);
  const [user_finger_print_type, setUserFingerPrintType] = useState(null);
  const [user_id_status, setUserIdStatus] = useState(null);
  const [date_resign, setDateResign] = useState(null);
  const [date_transfer, setDateTransfer] = useState(null);
  const [date_move, setDateMove] = useState(null);
  const [date_retire, setDateRetire] = useState(null);
  const [date_withhold, setDateWithhold] = useState(null);
  const [user_name_status, setUserNameStatus] = useState(null);
  const [user_note, setUserNote] = useState(null);
  const [remark, setRemark] = useState(null);
  const [show_dialog_search, setShowDialogSearch] = useState(null);
  const [user_commander, setUserCommander] = useState(null);
  const [user_trial, setUserTrial] = useState(null);
  const [pin_code, setPinCode] = useState(null);
  const [user_special, setUserSpecial] = useState(null);
  const [user_generation, setUserGeneration] = useState(null);
  const [user_new_id, setUserNewId] = useState(null);
  const [user_new_name, setUserNewName] = useState(null);
  const [group_id, setGroupId] = useState(null);
  const [section_id, setSectionId] = useState(null);
  const [leadergroup, setLeaderGroup] = useState(null);
  const [leadersection, setLeaderSection] = useState(null);
  const [user_line, setUserLine] = useState(null);
  const [flexadmin, setFlexAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleRightCanvas = () => {
    setLoading(true);
    setOpen(!open);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const toggleRightCanvasSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setOpen(!open);
      onButtonClick();
      setLoading(false);
    }, 1500);
  };

  const data = {
    user_title_id: user_title_id,
    user_title_name: user_title_name,
    user_name: user_name,
    user_nickname: user_nickname,
    user_name_en: user_name_en,
    user_idcard: user_idcard,
    user_address: user_address,
    user_email: user_email,
    user_mobile: user_mobile,
    user_phone: user_phone,
    user_intercom: user_intercom,
    user_fax: user_fax,
    cont_to_id: cont_to_id,
    cont_to_id2: cont_to_id2,
    cont_to_id3: cont_to_id3,
    cont_to_id4: cont_to_id4,
    cont_to_id5: cont_to_id5,
    cont_to_id6: cont_to_id6,
    cont_to_id7: cont_to_id7,
    user_education_id: user_education_id,
    user_education_name: user_education_name,
    user_sex_id: user_sex_id,
    user_sex_name: user_sex_name,
    user_religion_id: user_religion_id,
    user_religion_name: user_religion_name,
    user_status_id: user_status_id,
    user_status_name: user_status_name,
    user_domicile_id: user_domicile_id,
    user_domicile_name: user_domicile_name,
    user_birthday: user_birthday,
    user_start_date: user_start_date,
    user_start_opdc_date: user_start_opdc_date,
    user_no_position: user_no_position,
    user_start_posit: user_start_posit,
    user_category_id: user_category_id,
    user_category_name: user_category_name,
    user_position_name: user_position_name,
    user_level_id: user_level_id,
    user_level_name: user_level_name,
    user_employee_id: user_employee_id,
    user_employee_type_id: user_employee_type_id,
    user_employee_type_name: user_employee_type_name,
    user_start_work_id: user_start_work_id,
    user_start_work_name: user_start_work_name,
    user_login: user_login,
    user_password: user_password,
    RFID_code: RFID_code,
    user_finger_print: user_finger_print,
    user_finger_print_type: user_finger_print_type,
    user_id_status: user_id_status,
    date_resign: date_resign,
    date_transfer: date_transfer,
    date_move: date_move,
    date_retire: date_retire,
    date_withhold: date_withhold,
    user_name_status: user_name_status,
    user_note: user_note,
    remark: remark,
    show_dialog_search: show_dialog_search,
    user_commander: user_commander,
    user_trial: user_trial,
    pin_code: pin_code,
    user_special: user_special,
    user_generation: user_generation,
    user_new_id: user_new_id,
    user_new_name: user_new_name,
    group_id: group_id,
    section_id: section_id,
    leadergroup: leadergroup,
    leadersection: leadersection,
    user_line: user_line,
    flexadmin: flexadmin,
  };

  const handleSubmit = () => {
    const url = "/api/users";
    const url_userTime = "/api/usersTime/save";

    FetchAxiosPost(url, data, token)
      .then(item => {
        if (picandTime.user_pic !== null) {
          const url_image = `/api/users/image/${item}`;
          FetchAxiosFile(url_image, token, picandTime.user_pic);
        }
        if (picandTime.start_date !== null) {
          const data_userTime = {
            user_id: item,
            user_start_work_id: user_start_work_id,
            user_start_work_name: user_start_work_name,
            start_date: picandTime.start_date,
            status: "1",
          };
          FetchAxiosPost(url_userTime, data_userTime, token);
        }
      })
      .catch(error => {
        console.error(error);
      });
    setTimeout(() => {
      setUserTitleId(null);
      setUserName(null);
      setUserIdcard(null);
      setUserEmail(null);
      setUserStartWorkId(null);
      setPicandTime(prev => ({
        ...prev,
        start_date: null,
      }));
      setUserLogin(null);
      setUserPassword(null);
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  useEffect(() => {
    const fetchProvinceData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/province/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data);
        setDataProvinces(response.data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const fetchMasterData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/users/config/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data);
        setMasterdata(response.data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMasterData();
    fetchProvinceData();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (insert.task === "สำนัก/กอง/กลุ่ม") {
      setContToId(insert.insert_id);
      setValue_name_cont_1(insert.insert_name);
    }
    if (insert.task === "สำนัก/กอง/กลุ่ม2") {
      setContToId2(insert.insert_id);
      setValue_name_cont_2(insert.insert_name);
    }
    if (insert.task === "สำนัก/กอง/กลุ่ม3") {
      setContToId3(insert.insert_id);
      setValue_name_cont_3(insert.insert_name);
    }
    if (insert.task === "สำนัก/กอง/กลุ่ม4") {
      setContToId4(insert.insert_id);
      setValue_name_cont_4(insert.insert_name);
    }
    if (insert.task === "สำนัก/กอง/กลุ่ม5") {
      setContToId5(insert.insert_id);
      setValue_name_cont_5(insert.insert_name);
    }
    if (insert.task === "สำนัก/กอง/กลุ่ม6") {
      setContToId6(insert.insert_id);
      setValue_name_cont_6(insert.insert_name);
    }
    if (insert.task === "สำนัก/กอง/กลุ่ม7") {
      setContToId7(insert.insert_id);
      setValue_name_cont_7(insert.insert_name);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [insert]);

  const handledelete = task => {
    setLoading(true);
    if (task === "สำนัก/กอง/กลุ่ม2") {
      setContToId2(0);
      setValue_name_cont_2("");
    }
    if (task === "สำนัก/กอง/กลุ่ม3") {
      setContToId3(0);
      setValue_name_cont_3("");
    }
    if (task === "สำนัก/กอง/กลุ่ม4") {
      setContToId4(0);
      setValue_name_cont_4("");
    }
    if (task === "สำนัก/กอง/กลุ่ม5") {
      setContToId5(0);
      setValue_name_cont_5("");
    }
    if (task === "สำนัก/กอง/กลุ่ม6") {
      setContToId6(0);
      setValue_name_cont_6("");
    }
    if (task === "สำนัก/กอง/กลุ่ม7") {
      setContToId7(0);
      setValue_name_cont_7("");
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleinsertTime = () => {
    const newRow = {};
    setTimeId(prev => prev + 1);
    // console.log(timeId, "ame");
    setTableData([...tableData, newRow]);
  };

  const handleDeleteRow = index => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  const typeEMP = masterdata.user_type_emp?.find(
    i => i.type_emp_id === parseInt(user_category_id, 10)
  );

  // console.log(state.user_birthday);

  const handleImageChange = e => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setPicandTime(prev => ({
        ...prev,
        user_pic: file,
      }));
    }
  };

  const handleClearImage = e => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = null;
      setSelectedImage(null);
      setPicandTime(prev => ({
        ...prev,
        user_pic: null,
      }));
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.click();
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button className="mt-1" onClick={toggleRightCanvas} color="primary">
        <i className="fa-solid fa-user-plus"></i> เพิ่มเจ้าหน้าที่
      </Button>
      <Offcanvas
        style={{ width: "50%", border: "none" }}
        autoFocus
        direction="end"
        isOpen={open}
        toggle={toggleRightCanvas}
        fade
        className="fade"
      >
        <OffcanvasHeader style={{ background: "#2a3042", color: "white" }}>
          <i className="fa-solid fa-plus"></i> เพิ่มข้อมูลเจ้าหน้าที่
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
                  toggleRightCanvasSubmit();
                }}
              >
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>คำนำหน้าชื่อ</Label>
                      <Input
                        required
                        name="user_title_id"
                        type="select"
                        onChange={e => {
                          setUserTitleName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserTitleId(e.target.value);
                        }}
                        invalid={!user_title_id}
                      >
                        <option value="">กรุณาเลือก</option>
                        {masterdata.user_title?.map((masterdata, index) => (
                          <option value={masterdata.id} key={index}>
                            {masterdata.name}
                          </option>
                        ))}
                      </Input>
                      {!user_title_id && (
                        <FormFeedback>โปรดเลือกคำนำหน้า</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>ชื่อ-นามสกุล</Label>
                      <Input
                        required
                        name="user_name"
                        placeholder="กรุณาใส่ชื่อ-นามสกุล..."
                        type="text"
                        invalid={!user_name}
                        onChange={e => setUserName(e.target.value)}
                      />
                      {!user_name && <FormFeedback>โปรดใส่ชื่อ</FormFeedback>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>ชื่อเล่น</Label>
                      <Input
                        name="user_nickname"
                        placeholder="กรุณาใส่ชื่อเล่น..."
                        type="text"
                        onChange={e => setUserNickname(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Name Surname</Label>
                      <Input
                        name="user_name_en"
                        placeholder="กรุณาใส่ชื่อเล่น..."
                        type="text"
                        onChange={e => setUserNameEn(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>ที่อยู่</Label>
                      <Input
                        name="user_address"
                        style={{ height: "5rem" }}
                        placeholder="กรุณาใส่ที่อยู่..."
                        type="text"
                        onChange={e => setUserAddress(e.target.value)}
                      ></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>เลขที่บัตรประชาชน</Label>
                      <Input
                        required
                        name="user_idcard"
                        placeholder="กรุณาใส่เลขที่บัตรประชาชน..."
                        type="text"
                        invalid={!user_idcard}
                        onChange={e => setUserIdcard(e.target.value)}
                      />
                      {!user_idcard && (
                        <FormFeedback>โปรดกรอกเลขบัตรประชาชน</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>อีเมลล์</Label>
                      <Input
                        required
                        name="user_email"
                        placeholder="กรุณาใส่อีเมลล์..."
                        type="email"
                        invalid={!user_email}
                        onChange={e => setUserEmail(e.target.value)}
                      />
                      {!user_email && (
                        <FormFeedback>โปรดกรอกอีเมล</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>หมายเลขโทรศัพท์มือถือ</Label>
                      <Input
                        name="user_mobile"
                        placeholder="กรุณาใส่หมายเลขโทรศัพท์มือถือ..."
                        type="text"
                        onChange={e => setUserMobile(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>หมายเลขโทรศัพท์</Label>
                      <Input
                        name="user_phone"
                        placeholder="กรุณาใส่หมายเลขโทรศัพท์..."
                        type="text"
                        onChange={e => setUserPhone(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>หมายเลขภายใน</Label>
                      <Input
                        name="user_intercom"
                        placeholder="กรุณาใส่หมายเลขภายใน..."
                        type="text"
                        onChange={e => setUserIntercom(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>ลำดับ</Label>
                      <Input
                        name="user_title_name"
                        placeholder="เรียงตามอาวุโส"
                        type="text"
                        onChange={e => setUserFax(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>ระดับการศึกษา</Label>
                      <Input
                        name="user_education_id"
                        className="custom-select"
                        type="select"
                        onChange={e => {
                          setUserEducationName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserEducationId(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {masterdata.user_education?.map((masterdata, index) => (
                          <option value={masterdata.id} key={index}>
                            {masterdata.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>เพศ</Label>
                      <Input
                        name="user_sex_id"
                        className="custom-select"
                        type="select"
                        onChange={e => {
                          setUserSexName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserSexId(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {masterdata.user_sex?.map((masterdata, index) => (
                          <option value={masterdata.id} key={index}>
                            {masterdata.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>ศาสนา</Label>
                      <Input
                        name="user_religion_id"
                        className="custom-select"
                        type="select"
                        onChange={e => {
                          setUserReligionName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserReligionId(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {masterdata.user_religion?.map((masterdata, index) => (
                          <option value={masterdata.id} key={index}>
                            {masterdata.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>สถานะภาพ</Label>
                      <Input
                        name="user_status_id"
                        className="custom-select"
                        type="select"
                        onChange={e => {
                          setUserStatusName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserStatusId(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {masterdata.user_status?.map((masterdata, index) => (
                          <option value={masterdata.id} key={index}>
                            {masterdata.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>ภูมิลำเนา </Label>
                      <Input
                        name="user_domicile_id"
                        className="custom-select"
                        type="select"
                        onChange={e => {
                          setUserDomicileName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserDomicileId(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {dataProvinces.map((province, index) => (
                          <option value={province.province_id} key={index}>
                            {province.province_name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>วันเกิด</Label>
                      <Input
                        name="user_birthday"
                        type="date"
                        onChange={e => setUserBirthday(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>วันที่เริ่มบรรจุ</Label>
                      <Input
                        name="user_start_date"
                        type="date"
                        onChange={e => setUserStartDate(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>วันที่เริ่มงานกับ ก.พ.ร.</Label>
                      <Input
                        name="user_start_opdc_date"
                        type="date"
                        onChange={e => setUserStartOpdcDate(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>ประเภทเจ้าหน้าที่ </Label>
                      <Input
                        name="user_employee_type_id"
                        className="custom-select"
                        type="select"
                        onChange={e => {
                          setUserEmployeeTypeName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserEmployeeTypeId(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {masterdata.user_employee_type?.map(
                          (masterdata, index) => (
                            <option value={masterdata.id} key={index}>
                              {masterdata.name}
                            </option>
                          )
                        )}
                      </Input>
                      {user_employee_type_name === "นปร." ? (
                        <Fragment>
                          <Label className="pt-2">รุ่น</Label>
                          <Input
                            name="user_generation"
                            className="custom-select w-50"
                            type="text"
                            onChange={e => setUserGeneration(e.target.value)}
                          ></Input>
                        </Fragment>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>ประเภท</Label>
                      <Input
                        name="user_category_id"
                        className="custom-select"
                        type="select"
                        onChange={e => {
                          setUserCategoryName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserCategoryId(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {masterdata.user_type_emp?.map((masterdata, index) => (
                          <option value={masterdata.type_emp_id} key={index}>
                            {masterdata.type_emp_name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>ระดับ </Label>
                      {typeEMP ? (
                        <Input
                          name="user_level_id"
                          className="custom-select"
                          type="select"
                          onChange={e => {
                            setUserLevelName(
                              e.target.options[e.target.selectedIndex].text
                            );
                            setUserLevelId(e.target.value);
                          }}
                        >
                          <option> กรุณาเลือก </option>
                          {typeEMP.user_level_emp.map(i => (
                            <option value={i.level_emp_id} key={i.level_emp_id}>
                              {i.level_emp_name}
                            </option>
                          ))}
                        </Input>
                      ) : (
                        <Input
                          disabled
                          className="custom-select"
                          name="user_level_id"
                          type="select"
                        >
                          <option>กรุณาเลือกเจ้าหน้าที่และประเภท</option>
                        </Input>
                      )}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>เลขที่ตำแหน่ง</Label>
                      <Input
                        name="user_no_position"
                        placeholder="กรุณาใส่เลขที่ตำแหน่ง..."
                        type="text"
                        onChange={e => setUserNoPosition(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>ตำแหน่ง</Label>
                      <Input
                        disabled
                        // placeholder="กรุณาใส่ตำแหน่ง..."
                        type="text"
                        onChange={e => setUserPositionName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>วันที่ครองตำแหน่ง</Label>
                      <Input
                        name="user_start_posit"
                        type="date"
                        onChange={e => setUserStartPosit(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>กลุ่มเวลาเข้างาน</Label>
                      <Card>
                        <CardBody>
                          <Table>
                            <thead>
                              <tr>
                                <th>เวลาเข้างาน</th>
                                <th>วันที่</th>
                                <th>ลบ</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tableData.length > 0 ? (
                                tableData.map((row, index) => (
                                  // console.log(index, row),
                                  <tr key={index}>
                                    <td>
                                      <Input
                                        required
                                        name="user_start_work_id"
                                        className="custom-select"
                                        type="select"
                                        invalid={!user_start_work_id}
                                        onChange={e => {
                                          setUserStartWorkName(
                                            e.target.options[
                                              e.target.selectedIndex
                                            ].text
                                          );
                                          setUserStartWorkId(e.target.value);
                                        }}
                                      >
                                        <option>กรุณาเลือก</option>
                                        {masterdata.user_start_work?.map(
                                          (masterdata, index) => (
                                            <option
                                              value={
                                                masterdata.user_start_work_id
                                              }
                                              key={index}
                                            >
                                              {masterdata.user_start_work_name}
                                            </option>
                                          )
                                        )}
                                      </Input>
                                      {!user_start_work_id && (
                                        <FormFeedback>
                                          โปรดเลือกกลุ่มเวลา
                                        </FormFeedback>
                                      )}
                                    </td>
                                    <td>
                                      <Input
                                        required
                                        invalid={!picandTime.start_date}
                                        name="start_date"
                                        type="date"
                                        onChange={e =>
                                          setPicandTime(prev => ({
                                            ...prev,
                                            start_date: e.target.value,
                                          }))
                                        }
                                      />
                                      {!picandTime.start_date && (
                                        <FormFeedback>
                                          โปรดเลือกวันที่
                                        </FormFeedback>
                                      )}
                                    </td>
                                    <td>
                                      <Button
                                        color="danger"
                                        onClick={() => handleDeleteRow(index)}
                                      >
                                        <i className="fa-solid fa-xmark fa-lg pe-2"></i>
                                        ลบ
                                      </Button>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan="3" className="text-center">
                                    กรุณากรอกข้อมูล
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </Table>
                          {tableData.length === 0 ? (
                            <Button color="primary" onClick={handleinsertTime}>
                              + เพิ่ม
                            </Button>
                          ) : (
                            ""
                          )}
                        </CardBody>
                      </Card>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>Log In Name</Label>

                      <Input
                        required
                        name="user_login"
                        placeholder="กรุณาใส่..."
                        type="text"
                        invalid={!user_login}
                        onChange={e => setUserLogin(e.target.value)}
                      />
                      {!user_login && (
                        <FormFeedback>โปรดกรอกข้อมูล</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Password</Label>
                      <InputGroup>
                        <Input
                          required
                          name="user_password"
                          invalid={!user_password}
                          placeholder="กรุณาใส่..."
                          type={showPassword ? "text" : "password"}
                          onChange={e => setUserPassword(e.target.value)}
                        />
                        {!user_password && (
                          <FormFeedback>โปรดกรอกรหัสผ่าน</FormFeedback>
                        )}
                        <Button
                          color="secondary"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? "ซ่อน" : "แสดง"}
                        </Button>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>หมายเลขบัตร RFID</Label>
                      <Input
                        name="RFID_code"
                        placeholder="กรุณาใส่..."
                        type="text"
                        onChange={e => setRFIDCode(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>หมายเลขสำหรับเครื่องสแกนนิ้ว</Label>
                      <Input
                        name="user_finger_print"
                        placeholder="กรุณาใส่..."
                        type="text"
                        onChange={e => setUserFingerPrint(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>PIN CODE</Label>
                      <Input
                        name="pin_code"
                        placeholder="กรุณาใส่..."
                        type="password"
                        onChange={e => setPinCode(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      {/*มาสร้างเงื่อนไขด้วย*/}
                      <Label>สถานะผู้ใช้งาน </Label>
                      <Input
                        name="user_id_status"
                        className="custom-select mb-2"
                        type="select"
                        onChange={e => {
                          setUserNameStatus(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserIdStatus(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {masterdata.user_id_status?.map((masterdata, index) =>
                          masterdata.id !== 5 ? (
                            <option value={masterdata.id} key={index}>
                              {masterdata.name}
                            </option>
                          ) : null
                        )}
                      </Input>
                      {user_name_status === "ลาออก" ? (
                        <Input
                          name="date_resign"
                          type="date"
                          placeholder="วันที่ลาออก"
                          onChange={e => setDateResign(e.target.value)}
                        />
                      ) : (
                        ""
                      )}
                      {user_name_status === "โอน" ? (
                        <Input
                          name="date_transfer"
                          type="date"
                          placeholder="วันที่โอน"
                          onChange={e => setDateTransfer(e.target.value)}
                        />
                      ) : (
                        ""
                      )}
                      {user_name_status === "ย้าย" ? (
                        <Input
                          name="date_move"
                          type="date"
                          placeholder="วันที่ย้าย"
                          onChange={e => setDateMove(e.target.value)}
                        />
                      ) : (
                        ""
                      )}
                      {user_name_status === "เกษียณ" ? (
                        <Input
                          name="date_retire"
                          type="date"
                          placeholder="วันที่เกษียณ"
                          onChange={e => setDateRetire(e.target.value)}
                        />
                      ) : (
                        ""
                      )}
                      {user_name_status === "ระงับใช้" ? (
                        <Input
                          name="date_withhold"
                          type="date"
                          placeholder="วันที่ระงับใช้"
                          onChange={e => setDateWithhold(e.target.value)}
                        />
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>สำนัก/กอง/กลุ่ม</Label>
                      <InputGroup>
                        <Input
                          defaultValue={value_name_cont_1}
                          name="cont_to"
                          placeholder="กรุณาใส่..."
                          type="text"
                        />

                        <ModalConID user_id={null} task="สำนัก/กอง/กลุ่ม" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>สำนัก/กอง/กลุ่ม2</Label>
                      <InputGroup>
                        <Input
                          defaultValue={value_name_cont_2}
                          placeholder="กรุณาใส่..."
                          type="text"
                        />
                        <ModalConID user_id={null} task="สำนัก/กอง/กลุ่ม2" />
                        <Button
                          color="danger"
                          onClick={() => handledelete("สำนัก/กอง/กลุ่ม2")}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>สำนัก/กอง/กลุ่ม3</Label>
                      <InputGroup>
                        <Input
                          defaultValue={value_name_cont_3}
                          placeholder="กรุณาใส่..."
                          type="text"
                        />
                        <ModalConID user_id={null} task="สำนัก/กอง/กลุ่ม3" />
                        <Button
                          color="danger"
                          onClick={() => handledelete("สำนัก/กอง/กลุ่ม3")}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>สำนัก/กอง/กลุ่ม4</Label>
                      <InputGroup>
                        <Input
                          defaultValue={value_name_cont_4}
                          placeholder="กรุณาใส่..."
                          type="text"
                        />
                        <ModalConID user_id={null} task="สำนัก/กอง/กลุ่ม4" />
                        <Button
                          color="danger"
                          onClick={() => handledelete("สำนัก/กอง/กลุ่ม4")}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>สำนัก/กอง/กลุ่ม5</Label>
                      <InputGroup>
                        <Input
                          defaultValue={value_name_cont_5}
                          placeholder="กรุณาใส่..."
                          type="text"
                        />
                        <ModalConID user_id={null} task="สำนัก/กอง/กลุ่ม5" />
                        <Button
                          color="danger"
                          onClick={() => handledelete("สำนัก/กอง/กลุ่ม5")}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>สำนัก/กอง/กลุ่ม6</Label>
                      <InputGroup>
                        <Input
                          defaultValue={value_name_cont_6}
                          placeholder="กรุณาใส่..."
                          type="text"
                        />
                        <ModalConID user_id={null} task="สำนัก/กอง/กลุ่ม6" />
                        <Button
                          color="danger"
                          onClick={() => handledelete("สำนัก/กอง/กลุ่ม6")}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>สำนัก/กอง/กลุ่ม7</Label>
                      <InputGroup>
                        <Input
                          defaultValue={value_name_cont_7}
                          placeholder="กรุณาใส่..."
                          type="text"
                        />
                        <ModalConID user_id={null} task="สำนัก/กอง/กลุ่ม7" />
                        <Button
                          color="danger"
                          onClick={() => handledelete("สำนัก/กอง/กลุ่ม7")}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>รูปเจ้าหน้าที่</Label>
                      <br />
                      <Button
                        className="mb-2"
                        type="button"
                        onClick={handleButtonClick}
                      >
                        <i className="fa-solid fa-upload"></i>{" "}
                        อัพโหลดรูปเจ้าหน้าที่
                      </Button>
                      <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      {selectedImage && (
                        <Row>
                          <Col>
                            <img
                              onClick={() => setModal(true)}
                              style={{ width: "65px", height: "90px" }}
                              src={selectedImage}
                              alt="รูปเจ้าหน้าที่"
                            />
                          </Col>
                          <Col lg={12}>
                            <Button
                              className="mt-2"
                              color="danger"
                              onClick={handleClearImage}
                            >
                              Clear
                            </Button>
                          </Col>
                        </Row>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>กำหนดหน้าที่พิเศษ </Label>
                      <Input
                        name="user_new_id"
                        className="custom-select"
                        type="select"
                        onChange={e => {
                          setUserNewName(
                            e.target.options[e.target.selectedIndex].text
                          );
                          setUserNewId(e.target.value);
                        }}
                      >
                        <option> กรุณาเลือก </option>
                        {masterdata.user_new?.map((masterdata, index) => (
                          <option value={masterdata.id} key={index}>
                            {masterdata.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>หมายเหตุ</Label>
                      <Input
                        name="remark"
                        placeholder=""
                        type="text"
                        onChange={e => setRemark(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <FormGroup>
                      <Row>
                        <Col>
                          <Label className="pe-2">
                            แสดงในรายการเจ้าหน้าที่ :{" "}
                          </Label>
                        </Col>
                        <Col>
                          <Input
                            name="show_dialog_search"
                            type="checkbox"
                            checked={show_dialog_search === 1}
                            onChange={e =>
                              setShowDialogSearch(e.target.checked ? 1 : 0)
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label className="pe-2">ผู้บังคับบัญชา : </Label>
                        </Col>
                        <Col>
                          <Input
                            name="user_commander"
                            type="checkbox"
                            checked={user_commander === 1}
                            onChange={e =>
                              setUserCommander(e.target.checked ? 1 : 0)
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label className="pe-2">
                            ยังไม่ผ่านการทดลองงาน :{" "}
                          </Label>
                        </Col>
                        <Col>
                          <Input
                            name="user_trial"
                            type="checkbox"
                            checked={user_trial === 1}
                            onChange={e =>
                              setUserTrial(e.target.checked ? 1 : 0)
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label className="pe-2">USERกลาง : </Label>
                        </Col>
                        <Col>
                          <Input
                            name="user_special"
                            type="checkbox"
                            checked={user_special === 1}
                            onChange={e =>
                              setUserSpecial(e.target.checked ? 1 : 0)
                            }
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col xl={6} />
                </Row>
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
                      disabled={user_start_work_id === null}
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
                      onClick={toggleRightCanvas}
                    >
                      ยกเลิก
                    </Button>
                  </Col>
                </Row>
              </Form>
            </FadeIn>
          )}

          {/* <Button
            disabled={user_start_work_id === null}
            type="submit"
            color="success"
            onClick={handleSubmit}
            style={{ width: "100%" }}
          >
            บันทึก
          </Button> */}
        </OffcanvasBody>
      </Offcanvas>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="text-center">
          <img
            src={selectedImage}
            alt="รูปเจ้าหน้าที่"
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              margin: "auto",
              display: "block",
            }}
          />
        </ModalBody>
      </Modal>
    </>
  );
}

export default InsertData;
