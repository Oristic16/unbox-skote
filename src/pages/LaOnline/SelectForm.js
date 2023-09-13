import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import monthNames from "../../common/data/monthName";
import Flatpickr from "react-flatpickr";
import DropUpload from "./DropUpload";
import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/themes/material_blue.css";
import { Thai } from "flatpickr/dist/l10n/th.js";
import { differenceInDays } from "date-fns";
import Form1 from "./Form 11 Case/Form1";
import Form2 from "./Form 11 Case/Form2";

const SelectForm = ({ idForm, closeCanvas }) => {

  //เก็บค่าของ วัน เดือน ปี
  const [Day, setDay] = useState(new Date().getDate());
  const [Month, setMonth] = useState(new Date().getMonth());
  const [Year, setYear] = useState(new Date().getFullYear() + 543);
  //วันที่ของฟอร์ม
  const monthThai = monthNames[Month];
  const formattedDate = `${Day} ${monthThai} ${Year}`;

  const [sinceDate, setSinceDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  useEffect(() => {
    setSinceDate(null);
    setToDate(null);
  },[idForm])

  const SinceDatePicker = () => {
    return (
      <Flatpickr
        className="form-control d-block"
        placeholder="วัน/เดือน/ปี"
        options={{
          altInput: true,
          altFormat: "j F Y",
          dateFormat: "d-m-Y",
          locale: Thai,
        }}
        value={sinceDate}
        onChange={(e) => setSinceDate(e[0])}
      />
    )
  }
  const ToDatePicker = () => {
    return (
      <Flatpickr
        className="form-control d-block"
        placeholder="วัน/เดือน/ปี"
        options={{
          altInput: true,
          altFormat: "j F Y",
          dateFormat: "d-m-Y",
          locale: Thai,
        }}
        value={toDate}
        onChange={(e) => setToDate(e[0])}
      />
    )
  }
  const TimePicker = () => {
    return (
      <Flatpickr
        className="form-control d-block"
        placeholder="ระบุเวลา"
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: "H:i",
          locale: Thai,
          time_24hr: true,
          // defaultDate: new Date().getTime(),
        }}
      />
    )
  }

  //select กรณี ลาป่วย ลากิจส่วนตัว ลาคลอดบุตร
  const [selectValue, setSelectValue] = useState("");

  const difference = differenceInDays(toDate,sinceDate)+1

  //Drag and Drop Files
  const [selectedFiles, setselectedFiles] = useState([]);
  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }
  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const checkIdForm = () => {

    switch (idForm) {
      case "1":
        return (<Form1 idForm={idForm} closeCanvas={closeCanvas} />);
      case "2":
        return (<Form2 idForm={idForm} closeCanvas={closeCanvas} />);
      case "3":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input type="text" disabled value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col xl={4}>
                <Input value="ขอลาพักผ่อน" disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                วันลาพักผ่อนสะสม
              </Label>
              <Col xl={3}>
                <Input type="type" />
              </Col>
              <Label xl={7}>
                มีสิทธิลาพักผ่อนปีนี้อีก 22 วันทำการ (นับรวมการลาที่ยังไม่อนุมัติ)
              </Label>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                รวมเป็น
              </Label>
              <Col xl={3}>
                <Input type="type" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col xl={3}>
                <SinceDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col xl={3}>
                <ToDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สถานที่ติดต่อ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                  <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      case "4":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input type="text" disabled value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col xl={4}>
                <Input value="ขอลาพักผ่อน" disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                วันลาพักผ่อนสะสม
              </Label>
              <Col xl={3}>
                <Input type="type" />
              </Col>
              <Label xl={7}>
                มีสิทธิลาพักผ่อนปีนี้อีก 22 วันทำการ (นับรวมการลาที่ยังไม่อนุมัติ)
              </Label>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                รวมเป็น
              </Label>
              <Col xl={3}>
                <Input type="type" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col xl={3}>
                <SinceDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col xl={3}>
                <ToDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สถานที่ติดต่อ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      case "5":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input disabled type="text" value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input disabled type="text" value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col xl={4}>
                <Input value="ขอลาพักผ่อน" disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input type="text" value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input type="text" value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input type="text" value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input type="text" value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                วันลาพักผ่อนสะสม
              </Label>
              <Col xl={3}>
                <Input type="type" />
              </Col>
              <Label xl={7}>
                มีสิทธิลาพักผ่อนปีนี้อีก 22 วันทำการ (นับรวมการลาที่ยังไม่อนุมัติ)
              </Label>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                รวมเป็น
              </Label>
              <Col xl={3}>
                <Input type="type" />
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
                    altInput: true,
                    altFormat: "j F Y",
                    dateFormat: "d-m-Y",
                    locale: Thai,
                  }}
                  value={sinceDate}
                  onChange={(e) => setSinceDate(e[0])}
                />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <Flatpickr
                  className="form-control d-block"
                  placeholder="ระบุเวลา"
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                    locale: Thai,
                  }}
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
                    altInput: true,
                    altFormat: "j F Y",
                    dateFormat: "d-m-Y",
                    locale: Thai,
                  }}
                  value={toDate}
                  onChange={(e) => setToDate(e[0])}
                />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <Flatpickr
                  className="form-control d-block"
                  placeholder="ระบุเวลา"
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                    locale: Thai,
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สถานที่ติดต่อ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      case "6":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input type="text" disabled value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col xl={4}>
                <Input value="ขอลาพักผ่อน" disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                วันลาพักผ่อนสะสม
              </Label>
              <Col xl={3}>
                <Input disabled type="text" />
              </Col>
              <Label xl={7}>
                มีสิทธิลาพักผ่อนปีนี้อีก 22 วันทำการ (นับรวมการลาที่ยังไม่อนุมัติ)
              </Label>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                รวมเป็น
              </Label>
              <Col xl={3}>
                <Input disabled type="text" value="" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col xl={3}>
                <SinceDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col xl={3}>
                <ToDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สถานที่ติดต่อ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      case "7":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input disabled type="text" value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input disabled type="text" value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col>
                <Input type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input disabled type="text" value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input disabled type="text" value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input disabled type="text" value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input disabled type="text" value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ณ ประเทศ
              </Label>
              <Col xl={6}>
                <Input type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ด้วยทุน(ถ้ามี)
              </Label>
              <Col xl={6}>
                <Input type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col>
                <SinceDatePicker />
              </Col>
              <Label xl={2}>เวลา</Label>
              <Col>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col>
                <ToDatePicker />
              </Col>
              <Label xl={2}>เวลา</Label>
              <Col>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      case "8":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input disabled type="text" value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input disabled type="text" value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col xl={4}>
                <Input
                  value="ขอลาติดตามคู่สมรส"
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                มีความประสงค์จะลา
              </Label>
              <Col xl={4}>
                <Input type="type" disabled value="ติดตามคู่สมรส" />
              </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col>
                <SinceDatePicker />
              </Col>
              <Label className="text-end" xl={1}>
                เวลา
              </Label>
              <Col>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col>
                <ToDatePicker />
              </Col>
              <Label className="text-end" xl={1}>
                เวลา
              </Label>
              <Col>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อคู่สมรส
              </Label>
              <Col>
                <Input type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่งคู่สมรส
              </Label>
              <Col>
                <Input type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัดคู่สมรส
              </Label>
              <Col>
                <Input type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ปฏิบัติงาน ณ ประเทศ
              </Label>
              <Col>
                <Input type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col xl={4}>
                <SinceDatePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col xl={4}>
                <ToDatePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      case "9":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input type="text" disabled value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col xl={4}>
                <Input value="การไปปฏิบัติราชการนอกสำนักงาน ก.พ.ร." disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สถานที่
              </Label>
              <Col xl={6}>
                <Input type="type" />
              </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col>
                <SinceDatePicker />
              </Col>
              <Label className="text-end" xl={1}>
                เวลา
              </Label>
              <Col>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col>
                <ToDatePicker />
              </Col>
              <Label className="text-end" xl={1}>
                เวลา
              </Label>
              <Col>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
  
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      case "10":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input type="text" disabled value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col xl={4}>
                <Input value="การลงเวลาปฏิบัติราชการ" disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={4}>
                ไม่สามารถลงเวลาปฏิบัติราชการเมื่อวันที่
              </Label>
              <Col>
                <SinceDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xl={2}></Col>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col>
                <ToDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เหตุผล
              </Label>
              <Col>
                <Input type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      case "11":
        return (
          <Form>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สำนักงาน ก.พ.ร." />
              </Col>
              <Label xl={2}>วันที่</Label>
              <Col xl={4}>
                <Input type="text" disabled value={formattedDate} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรื่อง
              </Label>
              <Col xl={4}>
                <Input value={selectValue} disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้บังคับบัญชาของสังกัด" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ชื่อผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="ตำแหน่งงานผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value="สังกัด/กองของผู้ใช้" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                มีความประสงค์จะลา
              </Label>
              <Col xl={5}>
                <Input
                  type="select"
                  onChange={(e) => setSelectValue(e.target.value)}
                >
                  <option>กรุณาระบุ</option>
                  <option>ลากิจส่วนตัวเพื่อนเลี้ยงดูบุตร</option>
                  <option>ลาไปช่วยเหลือภรรยาที่คลอดบุตร</option>
                  <option>ลาไปฟื้นฟูสมรรถภาพด้านอาชีพ</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เนื่องจาก
              </Label>
              <Col>
                <Input type="textarea" style={{ height: "75px" }} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col xl={3}>
                <SinceDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col xl={3}>
                <ToDatePicker />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                เวลา
              </Label>
              <Col xl={3}>
                <TimePicker />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input type="text" disabled value={!isNaN(difference) ? difference : ""} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input style={{ height: "75px" }} type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <DropUpload />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input type="text" />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
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
                <Button color="success" style={{ width: "100%" }}>
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
      default:
        return "";
    }
  }
  

  return (
    <div>
      {checkIdForm()}
    </div>
  )
};

export default SelectForm;
