import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormFeedback,
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

const Form4 = ({ idForm, closeCanvas }) => {

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
      ordinate_temple: "", 
      ordinate_temple_place: "", 
      ordinate_date: "",
      ordinate_live_temple: "", 
      ordinate_live_place: "",
    },
    validationSchema: Yup.object().shape({
      ordinate_temple: Yup.string().required("กรุณาระบุข้อมูล"),
      ordinate_temple_place: Yup.string().required("กรุณาระบุข้อมูล"),
      ordinate_date: Yup.date().required("กรุณาระบุข้อมูล"),
      ordinate_live_temple: Yup.string().required("กรุณาระบุข้อมูล"),
      ordinate_live_place: Yup.string().required("กรุณาระบุข้อมูล")
    })
  })

  //กำหนดข้อมูลที่ต้องการ Sumit
  const [data, setData] = useState({
    formType: idForm,
    writeFrom: "สำนักงาน ก.พ.ร.",
    writeDate: formattedDate,
    title: "ขอลาอุปสมบท",
    writeTo: "ผู้อำนวยการสำนักงานเลขาธิการ",
    userName: "นวสรณ์ สร้อยโพธิ์พันธุ์",
    position: "นักวิชาการคอมพิวเตอร์ชำนาญการพิเศษ",
    groupName: "กลุ่มเทคโนโลยีสารสนเทศ",
    ordinateEver: "",
    ordinateTemple: "",
    ordinateTemplePlace: "",
    ordinateDate: "",
    ordinateLiveTemple: "",
    ordinateLivePlace: "",
    leaveFromDate: "",
    leaveToDate: "",
    leaveDays: "",
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
        ordinateEver: data.ordinateEver,
        ordinateTemple: data.ordinateTemple,
        ordinateTemplePlace: data.ordinateTemplePlace,
        ordinateDate: data.ordinateDate.toLocaleDateString(),
        ordinateLiveTemple: data.ordinateLiveTemple,
        ordinateLivePlace: data.ordinateLivePlace,
        leaveFromDate: data.leaveFromDate.toLocaleDateString(),
        leaveToDate: data.leaveToDate.toLocaleDateString(),
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

  return (
    <Form
      onSubmit={(e) => {
        // e.preventDefault();
        // handleSubmit();
        e.preventDefault()
        formValidate.handleSubmit()
        return false
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
            readOnly
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
                <Col xl={1}><Input name="ordinateEver"type="radio" onChange={(e) => setData(prev => ({ ...prev, ordinateEver: "ยังไม่เคยอุปสมบท" }))} /></Col>
                <Col xl={3}><Label check>ยังไม่เคยอุปสมบท</Label></Col>
                <Col xl={1}><Input name="ordinateEver" type="radio" onChange={(e) => setData(prev => ({ ...prev, ordinateEver: "เคยอุปสมบท" }))} /></Col>
                <Col ><Label check>เคยอุปสมบท</Label></Col>
            </Row>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
        <span className="me-1 text-danger">*</span>จะอุปสมบท ณ วัด
        </Label>
        <Col xl={5}>
          <Input
            name="ordinate_temple"
            type="text"
            onBlur={formValidate.handleBlur}
            onChange={(e) => handleInputChange(e, 'ordinateTemple')}
            value={formValidate.values.ordinate_temple}
            invalid={formValidate.touched.ordinate_temple && formValidate.errors.ordinate_temple ? true : false}
            valid={formValidate.touched.ordinate_temple && !formValidate.errors.ordinate_temple ? true : false}
          />
          {formValidate.touched.ordinate_temple && formValidate.errors.ordinate_temple ? (
            <FormFeedback type="invalid">{formValidate.errors.ordinate_temple}</FormFeedback>
          ) : <FormFeedback valid>สามารถใช้งานได้</FormFeedback>}
        </Col>
        
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
        <span className="me-1 text-danger">*</span>ตั้งอยู่ ณ
        </Label>
        <Col xl={4}>
          <Input 
          name="ordinate_temple_place" 
          onBlur={formValidate.handleBlur} 
          onChange={(e) => {
            handleInputChange(e, 'ordinate_temple_place');
            formValidate.handleChange(e)
            }} 
            value={formValidate.values.ordinate_temple_place} 
            type="text"
            invalid={formValidate.touched.ordinate_temple_place && formValidate.errors.ordinate_temple_place ? true : false}
            valid={formValidate.touched.ordinate_temple_place && !formValidate.errors.ordinate_temple_place ? true : false}
            />
            {formValidate.touched.ordinate_temple_place && formValidate.errors.ordinate_temple_place ? (
              <FormFeedback type="invalid">{formValidate.errors.ordinate_temple_place}</FormFeedback>
            ) : <FormFeedback valid>สามารถใช้งานได้</FormFeedback>}
        </Col>
        <Label className="text-end" xl={2}>
        <span className="me-1 text-danger">*</span>วันที่อุปสมบท
        </Label>
        <Col xl={3}>
        <Flatpickr
          name="ordinate_date"
            className="form-control d-block"
            placeholder="วัน/เดือน/ปี"
            options={{
              // altInput: true,
              dateFormat: "d-m-Y",
              ariaDateFormat: "F j, Y",
              locale: "th"
            }}
            value={formValidate.values.ordinate_date}
            invalid={formValidate.touched.ordinate_date && formValidate.errors.ordinate_date ? true : false}
            valid={formValidate.touched.ordinate_date && !formValidate.errors.ordinate_date ? true : false}
            onBlur={formValidate.handleBlur}
            onChange={(e) => {
                setData((prev) => ({ ...prev, ordinateDate: e[0] }))
                formValidate.handleChange(e)
            }}
          />
          {formValidate.touched.ordinate_date && formValidate.errors.ordinate_date ? (
            <FormFeedback type="invalid">{formValidate.errors.ordinate_date}</FormFeedback>
          ) : <FormFeedback valid>สามารถใช้งานได้</FormFeedback>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
        <span className="me-1 text-danger">*</span>จำพรรษา ณ วัด
        </Label>
        <Col xl={4}>
          <Input
          name="ordinate_live_temple"
          onBlur={formValidate.handleBlur}
          onChange={(e) => handleInputChange(e, 'ordinateLiveTemple')}
          value={data.ordinateLiveTemple} 
          type="text"
          invalid={formValidate.touched.ordinate_live_temple && formValidate.errors.ordinate_live_temple ? true : false} 
          valid={formValidate.touched.ordinate_live_temple && !formValidate.errors.ordinate_live_temple ? true : false}
          />
          {formValidate.touched.ordinate_live_temple && formValidate.errors.ordinate_live_temple ? (
            <FormFeedback type="invalid">{formValidate.errors.ordinate_live_temple}</FormFeedback>
          ) : <FormFeedback valid>สามารถใช้งานได้</FormFeedback>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
        <span className="me-1 text-danger">*</span>ตั้งอยู่ ณ
        </Label>
        <Col xl={4}>
          <Input
          name="ordinate_live_place"
          onBlur={formValidate.handleBlur}
          onChange={(e) => {
            handleInputChange(e, 'ordinateLivePlace');
            formValidate.handleChange(e)
          }}
          value={formValidate.values.ordinate_live_place} 
          type="text"
          invalid={formValidate.touched.ordinate_live_place && formValidate.errors.ordinate_live_place ? true : false}
          valid={formValidate.touched.ordinate_live_place && !formValidate.errors.ordinate_live_place ? true : false}
          />
          {formValidate.touched.ordinate_live_place && formValidate.errors.ordinate_live_place ? (
            <FormFeedback type="invalid">{formValidate.errors.ordinate_live_place}</FormFeedback>
          ) : <FormFeedback valid>สามารถใช้งานได้</FormFeedback>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
        <span className="me-1 text-danger">*</span>ตั้งแต่วันที่
        </Label>
        <Col xl={3}>
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
            value={data.leaveFromDate}
            onChange={(e) => {
                const newSinceD = e[0]
                const newToD = data.leaveToDate
                if(data.leaveToDate !== "") {
                    const difference = differenceInDays(newToD,newSinceD)+1;
                    setData((prev) => ({ ...prev, leaveFromDate: e[0], leaveDays: difference}));
                }
                setData((prev) => ({ ...prev, leaveFromDate: e[0] }))
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="text-end" xl={2}>
        <span className="me-1 text-danger">*</span>ถึงวันที่
        </Label>
        <Col xl={3}>
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
            value={data.leaveToDate}
            onChange={(e) => {
                const newToD = e[0]
                const newSinceD = data.leaveFromDate
              if(data.leaveFromDate !== "") {
                const difference = differenceInDays(newToD,newSinceD)+1;
                setData((prev) => ({ ...prev, leaveToDate: e[0], leaveDays: difference}));
              }
              setData((prev) => ({ ...prev, leaveToDate: e[0],}))
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
          setData({...data, file:null});
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

export default Form4;
