import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { addDays, differenceInDays } from "date-fns";
import monthNames from "../../../common/data/monthName";
import Flatpickr from "react-flatpickr";
import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/themes/material_blue.css";
import axios from "axios";
import { GetCookieToken } from "../../Cookie/GetCookie";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Form1 = ({
  userInfo,
  idForm,
  closeCanvas,
  configForm,
  getLeaveDataTable,
}) => {

  // const fileInputRef = useRef()
  const [fileKey, setFileKey] = useState(0);

  const token = GetCookieToken("userToken");

  const baseURL = process.env.REACT_APP_API_CORS;

  //เก็บค่าของ วัน เดือน ปี
  const [Day, setDay] = useState(new Date().getDate());
  const [Month, setMonth] = useState(new Date().getMonth());
  const [Year, setYear] = useState(new Date().getFullYear() + 543);
  const [holiday, setHoliday] = useState([]);

  //วันที่ของฟอร์ม
  const monthThai = monthNames[Month];
  const formattedDate = `${Day} ${monthThai} ${Year}`;

  const formValidate = useFormik({
    enableReinitialize: true,

    initialValues: {
      leave_reason: "",
      leave_from_date: "",
      leave_to_date: "",
      contact_address: "",
    },

    validationSchema: Yup.object().shape({
      leave_reason: Yup.string().required("กรุณาระบุข้อมูล"),
      leave_from_date: Yup.string().required("กรุณาระบุข้อมูล"),
      leave_to_date: Yup.string().required("กรุณาระบุข้อมูล"),
      contact_address: Yup.string().required("กรุณาระบุข้อมูลสถานที่ติดต่อ"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleSubmit();
    },
  });

  //กำหนดข้อมูลที่ต้องการ Sumit
  const [data, setData] = useState({
    //show in form only
    user_name: userInfo.user_name,
    user_position_name: userInfo.user_position_name,
    cont_to_name_1: userInfo.cont_to_name_1,
    writeFrom: "สำนักงาน ก.พ.ร.",
    writeDate: new Date().toLocaleDateString(),
    title: "",

    //required field
    leave_type_id: "",
    form_type: configForm.form_type,
    form_name: configForm.form_name,
    budget_year: "2567",
    leave_name: "",
    send_to: "ผู้อำนวยการสำนักงานเลขาธิการ",
    // send_to: userInfo.cont_to_array[0].user_name_leader,
    leave_from_date: new Date(),
    leave_from_timetype: "1",
    leave_to_date: new Date(),
    leave_to_timetype: "2",
    leave_days: "",
    user_id: userInfo.user_id,
    leave_status: "2",
    approve_status: "0",
    approve_user_id: userInfo.cont_to_array[0].user_id_leader,
    approve_user: userInfo.cont_to_array[0].user_name_leader,

    //non required field
    leave_reason: "",
    leave_years: "",
    leave_months: "",
    contact_address: "",
    abroad_for: "",
    abroad_country: "",
    abroad_ref: "",
    ordinate_ever: "",
    ordinate_temple: "",
    ordinate_temple_place: "",
    ordinate_date: "",
    ordinate_live_temple: "",
    ordinate_live_place: "",
    hujj_ever: "",
    conscription_from: "",
    conscription_place: "",
    conscription_date: "",
    conscription_for: "",
    conscription_to_place: "",
    training_fund_from: "",
    spouse_name: "",
    spouse_position: "",
    spouse_department: "",
    spouse_country: "",
    spouse_from_date: "",
    spouse_to_date: "",
    spouse_years: "",
    spouse_months: "",
    spouse_days: "",
    outside_place: "",
    practice_type: "",
    practice_reason: "",
    note: "",
    leave_group: "",
    file_data: null,
    approve_final: 0,
  });

  const [selectedFiles, setselectedFiles] = useState([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/api/leave/save`,
        {
          leave_type_id: data.leave_type_id,
          form_type: data.form_type,
          form_name: data.form_name,
          budget_year: data.budget_year,
          leave_name: data.leave_name,
          send_to: data.send_to,
          leave_from_date: `${data.leave_from_date.getFullYear()}-${('0' + (data.leave_from_date.getMonth()+1)).slice(-2)}-${('0' + data.leave_from_date.getDate()).slice(-2)}T${data.leave_from_date.toLocaleTimeString()}.000Z`,
          leave_from_timetype: data.leave_from_timetype,
          leave_to_date: `${data.leave_to_date.getFullYear()}-${('0' + (data.leave_to_date.getMonth()+1)).slice(-2)}-${('0' + data.leave_to_date.getDate()).slice(-2)}T${data.leave_to_date.toLocaleTimeString()}.000Z`,
          leave_to_timetype: data.leave_to_timetype,
          leave_days: data.leave_days,
          user_id: data.user_id,
          leave_status: data.leave_status,
          approve_status: data.approve_status,
          approve_user_id: data.approve_user_id,
          approve_user: data.approve_user,

          leave_reason: data.leave_reason,
          contact_address: data.contact_address,
          note: data.note,
          approve_final: data.approve_final,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      await handleSentFile(res.data.insertedId);
      // await getData();
      await closeCanvas();
      await getLeaveDataTable();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSentFile = (id) => {
    const formData = new FormData();
    formData.append("file", data.file_data);
    console.log(data.file_data);
    axios
      .post(baseURL + `/api/leave/file/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    console.log("My Data: ", data);
  }, [data]);

  useEffect(() => {
    console.log("Select Form", configForm);
  }, [configForm]);

  const handleInputChange = (e, field) => {
    setData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
    // console.log(data);
    // setData({...data,[field]: e.target.value});
    // console.log(data);
  };

  const calculateLeaveDays = (
    leavefromDate,
    leavefromTime,
    leavetoDate,
    leavetoTime
  ) => {
    let sum = 0;

    const isWeekend = (date) => {
      const day = new Date(date).getDay();
      return day === 6 || day === 0; // 6 คือวันเสาร์, 0 คือวันอาทิตย์
    };

    const isThaiPublic = (date) => {
      const localDate = new Date(date);
      localDate.setHours(0, 0, 0, 0);
      return holiday.some((item) => {
        const startDate = new Date(item.date_start_holiday).setHours(
          0,
          0,
          0,
          0
        );
        const endDate = new Date(item.date_end_holiday).setHours(0, 0, 0, 0);
        return localDate >= startDate && localDate <= endDate;
      });
    };

    if (leavefromTime === "1" && leavetoTime === "2") {
      for (
        let i = new Date(leavefromDate);
        i <= new Date(leavetoDate);
        i.setDate(i.getDate() + 1)
      ) {
        // for (let i = new Date(leavefromDate); i <= new Date(leavetoDate); i = addDays(i, 1)) {
        if (!isWeekend(i) && !isThaiPublic(i)) {
          sum++;
        }
      }
      sum = sum - 0;
      console.log("Sum: ", sum);
      return sum;
    }
    if (leavefromTime === "1" && leavetoTime === "1") {
      for (
        let i = new Date(leavefromDate);
        i <= new Date(leavetoDate);
        i.setDate(i.getDate() + 1)
      ) {
        if (!isWeekend(i) && !isThaiPublic(i)) {
          sum++;
        }
      }
      sum = sum - 0.5;
      console.log("Sum: ", sum);
      return sum;
    }
    if (leavefromTime === "2" && leavetoTime === "2") {
      for (
        let i = new Date(leavefromDate);
        i <= new Date(leavetoDate);
        i.setDate(i.getDate() + 1)
      ) {
        if (!isWeekend(i) && !isThaiPublic(i)) {
          sum++;
        }
      }
      sum = sum - 0.5;
      console.log("Sum: ", sum);
      return sum;
    }
    if (leavefromTime === "2" && leavetoTime === "1") {
      for (
        let i = new Date(leavefromDate);
        i <= new Date(leavetoDate);
        i.setDate(i.getDate() + 1)
      ) {
        if (!isWeekend(i) && !isThaiPublic(i)) {
          sum++;
        }
      }
      sum = sum - 1;
      console.log("Sum: ", sum);
      return sum;
    }

    // }
  };

  const getHoliday = (year) => {
    axios
      .get(baseURL + `/api/masterdata/holiday/${year}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(`Holiday of ${year}:`, res);
        setHoliday(res.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getHoliday(new Date().getFullYear());
    let leaveDay = calculateLeaveDays(
      data.leave_from_date,
      data.leave_from_timetype,
      data.leave_to_date,
      data.leave_to_timetype
    );
    setData({ ...data, leave_days: leaveDay });
  }, []);

  return (
    <Form
      onSubmit={(e) => {
        // e.preventDefault();
        // 
        e.preventDefault();
        formValidate.handleSubmit();
        handleSubmit();
        return false;
      }}
    >
      <FormGroup row className="mt-3">
        <Label className="text-end mt-3" xl={2} lg={3} md={3}>
          เขียนที่
        </Label>
        <Col xl={4} lg={9} md={9} className="mt-3">
          <Input
            type="text"
            value={data.writeFrom}
            disabled
            readOnly
            onChange={(e) => handleInputChange(e, "writeFrom")}
          />
        </Col>
        <Label className="text-end mt-3" xl={2} lg={3} md={3}>
          วันที่เขียน
        </Label>
        <Col xl={4} lg={9} md={9} className="mt-3">
          <Input
            readOnly
            type="text"
            value={data.writeDate}
            disabled
            onChange={(e) => handleInputChange(e, "writeDate")}
          />
          {/* <Input type='text' value={`${Day} ${monthThai} ${Year}`}/> */}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          เรื่อง
        </Label>
        <Col xl={4} lg={9} md={9}>
          {/* <Input value={data.askFor !== "" ? data.askFor : "กรุณาระบุ"} onChange={(e) => handleInputChange(e, 'title')} /> */}
          <Input
            readOnly
            disabled
            onChange={(e) => handleInputChange(e, "leave_name")}
            value={data.leave_name}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          เรียน
        </Label>
        <Col xl={4} lg={9} md={9}>
          <Input
            type="text"
            readOnly
            disabled
            value={data.send_to}
            onChange={(e) => handleInputChange(e, "send_to")}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          ชื่อ
        </Label>
        <Col xl={4} lg={9} md={9}>
          <Input
            type="text"
            readOnly
            disabled
            value={data.user_name}
            onChange={(e) => handleInputChange(e, "user_name")}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          ตำแหน่ง
        </Label>
        <Col xl={4} lg={9} md={9}>
          <Input
            type="text"
            readOnly
            disabled
            value={data.user_position_name}
            onChange={(e) => handleInputChange(e, "user_position_name")}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          สังกัด/กอง
        </Label>
        <Col xl={5} lg={9} md={9}>
          <Input
            type="text"
            readOnly
            disabled
            value={data.cont_to_name_1}
            onChange={(e) => handleInputChange(e, "groupName")}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          <span className="me-1 text-danger">*</span>ขอลา
        </Label>
        <Col lg={9} md={9}>
          <Input
            type="select"
            onChange={(e) => {
              const selectValueName = e.target.value;
              const selectedItem = configForm.leave_type.find(
                (item) => item.leave_name === selectValueName
              );

              if (selectedItem) {
                const selectedLeaveName = selectedItem.leave_name;
                const selectedLeaveTypeId = selectedItem.leave_type_id;

                setData({
                  ...data,
                  leave_name: `ขอ${selectedLeaveName}`,
                  leave_type_id: selectedLeaveTypeId,
                });
              }
            }}
          >
            <option value="">กรุณาระบุ</option>
            {configForm.leave_type.map((item, idx) => {
              return (
                <option key={idx} value={item.leave_name}>
                  {item.leave_name}
                </option>
              );
            })}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          <span className="me-1 text-danger">*</span>เนื่องจาก
        </Label>
        <Col lg={9} md={9}>
          <Input
            className="form-control"
            type="textarea"
            name="leave_reason"
            onChange={(e) => {
              formValidate.handleChange(e);
              handleInputChange(e, "leave_reason");
            }}
            onBlur={formValidate.handleBlur}
            value={formValidate.values.leave_reason}
            style={{ height: "75px" }}
            invalid={
              formValidate.touched.leave_reason &&
              formValidate.errors.leave_reason
                ? true
                : false
            }
            valid={
              formValidate.touched.leave_reason &&
              !formValidate.errors.leave_reason
                ? true
                : false
            }
          />
          {formValidate.touched.leave_reason &&
          formValidate.errors.leave_reason ? (
            <FormFeedback type="invalid">
              {formValidate.errors.leave_reason}
            </FormFeedback>
          ) : (
            <FormFeedback valid>สามารถใช้งานได้</FormFeedback>
          )}
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label className="text-end mt-3" xl={2} lg={3} md={3}>
          <span className="me-1 text-danger">*</span>ตั้งแต่วันที่
        </Label>
        <Col xl={3} lg={9} md={9} className="mt-3">
          <Flatpickr
            className="form-control d-block"
            placeholder="วัน/เดือน/ปี"
            options={{
              // altInput: true,
              dateFormat: "d-m-Y",
              ariaDateFormat: "F j, Y",
              locale: "th",
              minDate: "today"
            }}
            value={data.leave_from_date}
            onChange={(e) => {
              if (data.leave_to_date !== "") {
                const leaveDays = calculateLeaveDays(
                  e[0],
                  data.leave_from_timetype,
                  data.leave_to_date,
                  data.leave_to_timetype
                );
                console.log("จำนวนวันลา: ", leaveDays);
                setData((prev) => ({
                  ...prev,
                  leave_from_date: e[0],
                  leave_days: leaveDays,
                }));
              }
              setData((prev) => ({ ...prev, leave_from_date: e[0] }));
            }}
          />
        </Col>
        <Label
          className="mt-3"
          style={{ textAlign: "end" }}
          xl={2}
          lg={3}
          md={3}
        >
          ช่วงเวลา
        </Label>
        <Col xl={3} lg={9} md={9} className="mt-3">
          <Input
            type="select"
            value={data.leave_from_timetype}
            onChange={(e) => {
              if (data.leave_from_date && data.leave_to_date) {
                const leaveDays = calculateLeaveDays(
                  data.leave_from_date,
                  e.target.value,
                  data.leave_to_date,
                  data.leave_to_timetype
                );
                console.log("จำนวนวันลา: ", leaveDays);

                setData((prev) => ({
                  ...prev,
                  leave_from_timetype: e.target.value,
                  leave_days: leaveDays,
                }));
              }
              setData((prev) => ({
                ...prev,
                leave_from_timetype: e.target.value,
              }));
            }}
          >
            <option value="1">9.30</option>
            <option value="2">13.00</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end mt-3" xl={2} lg={3} md={3}>
          <span className="me-1 text-danger">*</span>ถึงวันที่
        </Label>
        <Col xl={3} lg={9} md={9} className="mt-3">
          <Flatpickr
            className="form-control d-block"
            placeholder="วัน/เดือน/ปี"
            options={{
              // altInput: true,
              dateFormat: "d-m-Y",
              ariaDateFormat: "F j, Y",
              locale: "th",
              minDate: "today"
            }}
            value={data.leave_to_date}
            onChange={(e) => {
              const newToD = e[0];
              const newSinceD = data.leave_from_date;
              if (data.leave_from_date !== "") {
                const leaveDays = calculateLeaveDays(
                  data.leave_from_date,
                  data.leave_from_timetype,
                  e[0],
                  data.leave_to_timetype
                );
                console.log("จำนวนวันลา: ", leaveDays);
                setData((prev) => ({
                  ...prev,
                  leave_to_date: e[0],
                  leave_days: leaveDays,
                }));
              }

              // const leaveDays = calculateLeaveDays(data.leave_from_date,data.leave_from_timetype,e[0],data.leave_to_timetype)
              // console.log("จำนวนวันลา: ",leaveDays)

              setData((prev) => ({ ...prev, leave_to_date: e[0] }));
            }}
          />
          {/* <Input type="number" onChange={(e) => {
                const newToD = parseInt(e.target.value) || 0
                const newSinceD = parseInt(data.sinceD) || 0
                const newAmountD = newSinceD - newToD;
                setData(prev => ({...prev, toD: newToD, amountD: newAmountD}))
                }} 
            />         */}
        </Col>
        <Label
          style={{ textAlign: "end" }}
          xl={2}
          lg={3}
          md={3}
          className="mt-3"
        >
          ช่วงเวลา
        </Label>
        <Col xl={3} lg={9} md={9} className="mt-3">
          <Input
            type="select"
            value={data.leave_to_timetype}
            onChange={(e) => {
              if (data.leave_from_date && data.leave_to_date) {
                const leaveDays = calculateLeaveDays(
                  data.leave_from_date,
                  data.leave_from_timetype,
                  data.leave_to_date,
                  e.target.value
                );
                console.log("จำนวนวันลา: ", leaveDays);

                setData((prev) => ({
                  ...prev,
                  leave_to_timetype: e.target.value,
                  leave_days: leaveDays,
                }));
              }
              setData((prev) => ({
                ...prev,
                leave_to_timetype: e.target.value,
              }));
            }}
          >
            <option value="1">12.00</option>
            <option value="2">17.30</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row style={{ display: "flex", alignItems: "center" }}>
        <Label className="text-end" xl={2} lg={3} md={3}>
          กำหนด
        </Label>
        <Col xl={4} lg={9} md={9}>
          <Input
            disabled
            type="text"
            value={data.leave_days}
            readOnly
            onChange={(e) => {
              handleInputChange(e, "leave_days");
              const leaveDays = calculateLeaveDays(
                data.leave_from_date,
                data.leave_from_timetype,
                data.leave_to_date,
                data.leave_to_timetype
              );
              console.log("จำนวนวันลา: ", leaveDays);
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          <span className="me-1 text-danger">*</span>สถานที่ติดต่อ
        </Label>
        <Col lg={9} md={9}>
          <Input
            name="contact_address"
            className="form-control"
            onBlur={formValidate.handleBlur}
            onChange={(e) => {
              formValidate.handleChange(e);
              handleInputChange(e, "contact_address");
            }}
            value={formValidate.values.contact_address}
            style={{ height: "75px" }}
            type="textarea"
            invalid={
              formValidate.touched.contact_address &&
              formValidate.errors.contact_address
                ? true
                : false
            }
            valid={
              formValidate.touched.contact_address &&
              !formValidate.errors.contact_address
                ? true
                : false
            }
          />
          {formValidate.touched.contact_address &&
          formValidate.errors.contact_address ? (
            <FormFeedback type="invalid">
              {formValidate.errors.contact_address}
            </FormFeedback>
          ) : (
            <FormFeedback valid>สามารถใช้งานได้</FormFeedback>
          )}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2} lg={3} md={3}>
          หมายเหตุ
        </Label>
        <Col lg={9} md={9}>
          <Input
            onChange={(e) => handleInputChange(e, "note")}
            value={data.note}
            style={{ height: "75px" }}
            type="textarea"
          />
        </Col>
      </FormGroup>
      <FormGroup row style={{display:"flex", alignItems:"center"}}>
        <Label className="text-end" xxl={2} lg={3} md={4}>
          แนบเอกสาร{" "}
        </Label>
        <Col xxl={5} lg={9} md={8}>
          <Input
            key={fileKey}
            // ref={fileInputRef}
            type="file"
            onChange={(e) => {
              setData((prevData) => ({
                ...prevData,
                file_data: e.target.files[0],
              }));
            }}
          />
        </Col>
        <Col>
          <Button onClick={() => {
            setData(prev => ({...prev, file_data: null}));
            // fileInputRef.current.value = '';
            setFileKey((prevKey) => prevKey + 1);
            }} className="btn-close"></Button>
        </Col>
      </FormGroup>
      <FormGroup row style={{ display: "flex", alignItems: "center" }}>
        <Label className="text-end mt-3" xl={2} lg={3} md={3}>
          ส่งผู้อนุมัติ
        </Label>
        <Col xl={4} lg={9} md={9} className="mt-3">
          <Input
            readOnly
            disabled
            value={data.approve_user}
            type="text"
            onChange={(e) => handleInputChange(e, "approve_user")}
          />
        </Col>
        <Col xl={1} lg={3} md={3}></Col>
        <Col xl={5} lg={5} md={8} className="mt-3">
          {/* <div className="form-check form-check-primary mb-3"> */}
          <input
            type="checkbox"
            className="form-check-input me-1"
            id="customCheckcolor1"
            value={data.approve_final}
            onChange={(e) => {
              if (e.target.checked === true)
                setData((prevData) => ({ ...prevData, approve_final: 1 }));
              if (e.target.checked === false)
                setData((prevData) => ({ ...prevData, approve_final: 0 }));
            }}
          />
          <label className="form-check-label" htmlFor="customCheckcolor1">
            ผู้อนุมัตินี้เป็นลำดับสุดท้าย
          </label>
          {/* </div> */}
        </Col>
      </FormGroup>
      <FormGroup row style={{ display: "flex", justifyContent: "end" }}>
        <Col xl={2}>
          {/* <Button color="warning" style={{ width: "100%" }}>
            บันทึกแบบร่าง
          </Button> */}
        </Col>
        <Col xl={2}></Col>
        <Col xl={3} lg={6}>
          <Button
            className="mt-2"
            color="success"
            type="submit"
            style={{ width: "100%" }}
          >
            บันทึกและส่ง
          </Button>
        </Col>
        <Col xl={3} lg={6}>
          <Button className="mt-2" color="danger" style={{ width: "100%" }}>
            ยกเลิก
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Form1;
