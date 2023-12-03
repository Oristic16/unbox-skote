import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { differenceInDays } from "date-fns";
import monthNames from "../../../common/data/monthName";
import Flatpickr from "react-flatpickr";
import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/themes/material_blue.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useEffect } from "react";
import { GetCookieToken } from "../../Cookie/GetCookie";

const Form5 = ({ idForm, closeCanvas }) => {

  const token = GetCookieToken("userToken");

  const baseURL = process.env.REACT_APP_API_CORS;
const [holiday, setHoliday] = useState([]);

  const [fileKey, setFileKey] = useState(0)
  //เก็บค่าของ วัน เดือน ปี
  const [Day, setDay] = useState(new Date().getDate());
  const [Month, setMonth] = useState(new Date().getMonth());
  const [Year, setYear] = useState(new Date().getFullYear() + 543);

  //วันที่ของฟอร์ม
  const monthThai = monthNames[Month];
  const formattedDate = `${Day} ${monthThai} ${Year}`;

  const formValidate = useFormik({
    enableReinitialize: true,

    initialValues: {

    },

    validationSchema: Yup.object().shape({

    })
  })

  //กำหนดข้อมูลที่ต้องการ Sumit
  const [data, setData] = useState({
    formType: idForm,
    writeFrom: "สำนักงาน ก.พ.ร.",
    writeDate: formattedDate,
    title: "ขอลาไปประกอบพิธีฮัจญ์",
    writeTo: "ผู้อำนวยการสำนักงานเลขาธิการ",
    userName: "นวสรณ์ สร้อยโพธิ์พันธุ์",
    position: "นักวิชาการคอมพิวเตอร์ชำนาญการพิเศษ",
    groupName: "กลุ่มเทคโนโลยีสารสนเทศ",
    hujjEver: "",
    leave_from_date: new Date(),
    leave_from_timetype: "1",
    leave_to_date: new Date(),
    leave_to_timetype: "2",
    leave_days: "",
    note: "",
    file: "",
    approveUser: "นภนง ขวัญยืน",
    sendFinal: false,
    status: "รออนุมัติ",
});

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:8000/uploadform`, {
        formType: data.formType,
        writeFrom: data.writeFrom,
        writeDate: data.writeDate,
        title: data.title,
        writeTo: data.writeTo,
        userName: data.userName,
        position: data.position,
        groupName: data.groupName,
        hujjEver: data.hujjEver,
        leaveFromDate: data.leaveFromDate.toLocaleDateString(),
        leaveFromTimetype: data.leaveFromTimetype,
        leaveToDate: data.leaveToDate.toLocaleDateString(),
        leaveToTimetype: data.leaveToTimetype,
        leaveDays: data.leaveDays,
        note: data.note,
        file: data.file,
        approveUser: data.approveUser,
        sendFinal: data.sendFinal,
        status: data.status,
      })
      // await getData();
      await closeCanvas();
    } catch (err) {
      console.error(err);
    }
  };
  console.log(data)

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
        // if (!isWeekend(i) && !isThaiPublic(i)) {
          sum++;
        // }
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
        // if (!isWeekend(i) && !isThaiPublic(i)) {
          sum++;
        // }
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
        // if (!isWeekend(i) && !isThaiPublic(i)) {
          sum++;
        // }
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
        // if (!isWeekend(i) && !isThaiPublic(i)) {
          sum++;
        // }
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
        e.preventDefault();
        handleSubmit();
      }}
    >
      <FormGroup row className="mt-3">
        <Label className="text-end" xl={2}>
          เขียนที่
        </Label>
        <Col xl={4}>
          <Input
            type="text"
            value={data.writeFrom}
            disabled
            readOnly
            onChange={(e) => handleInputChange(e, "writeFrom")}
          />
        </Col>
        <Label className="text-end" xl={2}>
          วันที่เขียน
        </Label>
        <Col xl={4}>
          <Input
            readOnly
            type="text"
            value={formattedDate}
            disabled
            onChange={(e) => handleInputChange(e, "writeDate")}
          />
          {/* <Input type='text' value={`${Day} ${monthThai} ${Year}`}/> */}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          เรื่อง
        </Label>
        <Col xl={4}>
          {/* <Input value={data.askFor !== "" ? data.askFor : "กรุณาระบุ"} onChange={(e) => handleInputChange(e, 'title')} /> */}
          <Input
            disabled
            value={data.title}
            onChange={(e) => handleInputChange(e, "title")}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          เรียน
        </Label>
        <Col xl={4}>
          <Input type="text" readOnly disabled value={data.writeTo} onChange={(e) => handleInputChange(e, '')} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          ชื่อ
        </Label>
        <Col xl={4}>
          <Input type="text" readOnly disabled value={data.userName} onChange={(e) =>handleInputChange(e, 'userName')} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          ตำแหน่ง
        </Label>
        <Col xl={4}>
          <Input type="text" readOnly disabled value={data.position} onChange={(e) => handleInputChange(e, 'position')} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          สังกัด/กอง
        </Label>
        <Col xl={4}>
          <Input type="text" readOnly disabled value={data.groupName} onChange={(e) => handleInputChange(e, 'groupName')} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xl={2}></Col>
        <Col xl={8}>
            <Row>
                <Col xl={1}><Input name="hujjEver"type="radio" onChange={(e) => setData(prev => ({ ...prev, hujjEver: "ยังไม่เคยไปประกอบพิธีฮัจญ์ " }))} /></Col>
                <Col xl={4}><Label check>ยังไม่เคยไปประกอบพิธีฮัจญ์ </Label></Col>
                <Col xl={1}><Input name="hujjEver" type="radio" onChange={(e) => setData(prev => ({ ...prev, hujjEver: "เคยไปประกอบพิธีฮัจญ์" }))} /></Col>
                <Col ><Label check>เคยไปประกอบพิธีฮัจญ์</Label></Col>
            </Row>
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
        <Label className="text-end" xl={2}>
          หมายเหตุ
        </Label>
        <Col>
          <Input onChange={(e) => handleInputChange(e, 'note')} value={data.note} style={{ height: "75px" }} type="textarea" />
        </Col>
      </FormGroup>
      <FormGroup row className="d-flex align-items-center">
        <Label className="text-end" xl={2}>
          แนบเอกสาร{" "}
        </Label>
        <Col>
          
          <Input key={fileKey} type="file" multiple onChange={(e) => setData((prevData) => ({...prevData, file: e.target.value}))} />
        </Col>
        <Col>
          <Button onClick={() => {
            setData({...data, file:null})
            setFileKey(prev => prev+1)
          }} className="btn-close"></Button>
            </Col>
      </FormGroup>
      <FormGroup row style={{ display: "flex", alignItems: "center" }}>
        <Label className="text-end" xl={2}>
          ส่งผู้อนุมัติ
        </Label>
        <Col xl={3}>
          <Input readOnly disabled value={data.approveUser} type="text" onChange={(e) => handleInputChange(e, 'approveUser')} />
        </Col>
        <Col xl={3}>
          {/* <div className="form-check form-check-primary mb-3"> */}
          <input
            type="checkbox"
            className="form-check-input me-1"
            id="customCheckcolor1"
            checked={data.sendFinal}
            onChange={(e) => setData((prevData) => ({...prevData, sendFinal: e.target.checked}))}
          />
          <label className="form-check-label" htmlFor="customCheckcolor1">
            ผู้อนุมัตินี้เป็นลำดับสุดท้าย
          </label>
          {/* </div> */}
        </Col>
      </FormGroup>
      <FormGroup row style={{ display: "flex", justifyContent: "end" }}>
        {/* <Col xl={2}>
          <Button color="warning" style={{ width: "100%" }}>
            บันทึกแบบร่าง
          </Button>
        </Col> */}
        <Col xl={2}></Col>
        <Col xl={2}></Col>
        <Col xl={2}>
        <Button color="success" type="submit" style={{ width: "100%" }}>
            บันทึกและส่ง
          </Button>
        </Col>
        <Col xl={2}>
          <Button color="danger" style={{ width: "100%" }}>
            ยกเลิก
          </Button>
        </Col>
      </FormGroup>
      
    </Form>
  );
};

export default Form5;
