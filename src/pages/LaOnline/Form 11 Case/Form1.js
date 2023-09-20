import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { differenceInDays } from "date-fns";
import monthNames from "../../../common/data/monthName";
import Flatpickr from "react-flatpickr";
import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/themes/material_blue.css";
import axios from "axios";

const Form1 = ({ idForm, closeCanvas, getData }) => {
  //เก็บค่าของ วัน เดือน ปี
  const [Day, setDay] = useState(new Date().getDate());
  const [Month, setMonth] = useState(new Date().getMonth());
  const [Year, setYear] = useState(new Date().getFullYear() + 543);

  //วันที่ของฟอร์ม
  const monthThai = monthNames[Month];
  const formattedDate = `${Day} ${monthThai} ${Year}`;

  //กำหนดข้อมูลที่ต้องการ Sumit
  const [data, setData] = useState({
    formType: idForm,
    writeFrom: "สำนักงาน ก.พ.ร.",
    writeDate: new Date().toLocaleDateString(),
    title: "",
    writeTo: "ผู้อำนวยการสำนักงานเลขาธิการ",
    userName: "นวสรณ์ สร้อยโพธิ์พันธุ์",
    position: "นักวิชาการคอมพิวเตอร์ชำนาญการพิเศษ",
    groupName: "สังกัด/กองของผู้ใช้",
    sickType: "",
    leaveReason: "",
    leaveFromDate: "",
    leaveFromTimetype: "",
    leaveToDate: "",
    leaveToTimetype: "",
    leaveDays: "",
    contactAddress: "",
    note: "",
    file: "",
    approveUser: "นภนง ขวัญยืน",
    sendFinal: false,
    status: "รออนุมัติ"
  });

  const handleSubmit = async (idForm) => {
    // const formData = new FormData();
    // formData.append('writeFrom', data.writeFrom);
    // formData.append('writeDate', data.writeDate);
    // formData.append('title', data.title);
    // formData.append('writeTo', data.writeTo);
    // formData.append('userName', data.userName);
    // formData.append('position', data.position);
    // formData.append('groupName', data.groupName);
    // formData.append('askFor', data.askFor);
    // formData.append('dueTo', data.dueTo);
    // formData.append('sinceD', data.sinceD);
    // formData.append('sinceT', data.sinceT);
    // formData.append('toD', data.toD);
    // formData.append('toT', data.toT);
    // formData.append('amountD', data.amountD);
    // formData.append('place', data.place);
    // formData.append('note', data.note);
    // formData.append('file', data.file);
    // formData.append('sendTo', data.sendTo);
    // console.log(formData)
    
    try {
      await axios.post(`http://localhost:8000/uploadform/`, {
        formType: data.formType,
        writeFrom: data.writeFrom,
        writeDate: data.writeDate,
        title: data.title,
        writeTo: data.writeTo,
        userName: data.userName,
        position: data.position,
        groupName: data.groupName,
        sickType: data.sickType,
        leaveReason: data.leaveReason,
        leaveFromDate: data.leaveFromDate.toLocaleDateString(),
        leaveFromTimetype: data.leaveFromTimetype,
        leaveToDate: data.leaveToDate.toLocaleDateString(),
        leaveToTimetype: data.leaveToTimetype,
        leaveDays: data.leaveDays,
        contactAddress: data.contactAddress,
        note: data.note,
        file: data.file,
        approveUser: data.approveUser,
        sendFinal: data.sendFinal,
        status: data.status
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

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(idForm);
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
            value={data.writeDate}
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
            readOnly
            disabled
            onChange={(e) => handleInputChange(e, "title")}
            value={data.title === "" ? "" : `ขอลา${data.title}`}
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
        <Label className="text-end" xl={2}>
          ขอลา
        </Label>
        <Col>
          <Input
            type="select"
            onChange={(e) => {
              setData({...data, sickType: e.target.value, title: e.target.value });
              // setData({...data, title: e.target.value });
            }}
            value={data.sickType}
          >
            <option value="">กรุณาระบุ</option>
            <option value="ลาป่วย">ลาป่วย</option>
            <option value="ลากิจส่วนตัว">ลากิจส่วนตัว</option>
            <option value="ลาคลอดบุตร">ลาคลอดบุตร</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          เนื่องจาก
        </Label>
        <Col>
          <Input onChange={(e) => handleInputChange(e, 'leaveReason')} value={data.leaveReason} style={{ height: "75px" }} type="textarea" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          ตั้งแต่วันที่
        </Label>
        <Col xl={3}>
        <Flatpickr
            className="form-control d-block"
            placeholder="วัน/เดือน/ปี"
            options={{
              // altInput: true,
              dateFormat: "d-m-Y",
              ariaDateFormat: "F j, Y",
              locale: "th"
            }}
            value={data.leaveFromDate}
            onChange={(e) => {
                const newSinceD = e[0]
                const newToD = data.leaveToDate
                if(data.leaveToDate !== "") {
                    const difference = differenceInDays(newToD,newSinceD)+1;
                    setData((prev) => ({ ...prev, leaveFromDate: e[0], leaveDays: difference}));
                }
                setData((prev) => ({ ...prev, leaveFromDate: e[0]}))
            }}
          />
        </Col>
        <Label style={{ textAlign: "end" }} xl={1}>
          ช่วงเวลา
        </Label>
        <Col xl={3}>
          <Flatpickr
            className="form-control d-block"
            placeholder="ระบุเวลา"
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
              time_24hr: true,
              // defaultDate: new Date().getTime(),
            }}
            value={data.leaveFromTimetype}
            onChange={(e) => setData(prev => ({...prev, leaveFromTimetype: e[0].toLocaleTimeString()}))}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          ถึงวันที่
        </Label>
        <Col xl={3}>
          <Flatpickr
              className="form-control d-block"
              placeholder="วัน/เดือน/ปี"
              options={{
                // altInput: true,
                dateFormat: "d-m-Y",
                ariaDateFormat: "F j, Y",
                locale: "th"
              }}
              value={data.leaveToDate}
              onChange={(e) => {
                  const newToD = e[0]
                  const newSinceD = data.leaveFromDate
                if(data.leaveFromDate !== "") {
                  const difference = differenceInDays(newToD,newSinceD)+1;
                  setData((prev) => ({ ...prev, leaveToDate: e[0], leaveDays: difference}));
                }
                setData((prev) => ({ ...prev, leaveToDate: e[0]}))
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
        <Label style={{ textAlign: "end" }} xl={1}>
          ช่วงเวลา
        </Label>
        <Col xl={3}>
          <Flatpickr
              className="form-control d-block"
              placeholder="ระบุเวลา"
              options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                time_24hr: true,
                // defaultDate: new Date().getTime(),
              }}
              value={data.leaveToTimetype}
              onChange={(e) => setData(prev => ({...prev, leaveToTimetype: e[0].toLocaleTimeString()}))}
          />
        </Col>
      </FormGroup>
      <FormGroup row style={{display:"flex",alignItems:"center"}}>
        <Label className="text-end" xl={2}>
          กำหนด
        </Label>
        <Col xl={4}>
          <Input
            disabled
            type="text"
            value={data.leaveDays}
            readOnly
            onChange={(e) => handleInputChange(e, 'leaveDays')}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
          สถานที่ติดต่อ
        </Label>
        <Col>
          <Input onChange={(e) => handleInputChange(e, 'contactAddress')} value={data.contactAddress} style={{ height: "75px" }} type="textarea" />
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
      <FormGroup row>
        <Label className="text-end" xl={2}>
          แนบเอกสาร{" "}
        </Label>
        <Col>
          
          <Input type="file" multiple onChange={(e) => setData((prevData) => ({...prevData, file: e.target.value}))} />
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
        <Col xl={2}>
          <Button color="warning" style={{ width: "100%" }}>
            บันทึกแบบร่าง
          </Button>
        </Col>
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

export default Form1;
