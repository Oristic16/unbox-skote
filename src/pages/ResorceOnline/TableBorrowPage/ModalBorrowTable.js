import React, { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import { useState } from "react";
import axios from "axios";
import { GetCookieToken } from "../../Cookie/GetCookie";
import ConvertToISO from "../../Function/ConvertToISO";

const baseURL = process.env.REACT_APP_API_CORS;

const ModalBorrowTable = ({
  getBorrowDataTable,
  dataEdit,
  modalState,
  setModalState,
  user,
  openBorrow,
  toggleModal,
  setDataEdit,
}) => {
  const token = GetCookieToken("userToken");

  //ข้อมูลของ add Data
  const [data, setData] = React.useState({
    users_name_borrow: user.user_name,
    users_id_borrow: user.user_id,
    date_borrow: new Date(),
    date_return: new Date(),
    equipment_id: "",
    status: 0,
  });

  useEffect(() => {
    console.log("DataEdit: ", dataEdit)
    // console.log("DataEdit: ", dataEdit.date_borrow)
    // console.log("DataEdit: ", dataEdit.date_return)
  },[dataEdit])

  useEffect(() => {
    console.log(modalState)
    console.log(data)
  },[data,modalState])

  function addHours(date, hours) {
    date.setHours(date.getHours() + hours);

    return date;
  }

  const convertDate = (date) => {
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
      timeZone: 'UTC',
    }).format(date);

    return formattedDate
  }

  

  //ส่งฟอร์มการยืม
  const handleSubmit = async () => {
    try {
      const res = await axios.post(baseURL + `/api/borrow/equipment/save`,
      
        {
          users_name_borrow: data.users_name_borrow,
          users_id_borrow: data.users_id_borrow, //2023-12-01T11:23:08.000Z
          // date_borrow: `${data.date_borrow.getFullYear()}-${('0' + (data.date_borrow.getMonth()+1)).slice(-2)}-${('0' + data.date_borrow.getDate()).slice(-2)}T${data.date_borrow.toLocaleTimeString()}.000Z`,
          date_borrow: ConvertToISO(data.date_borrow),
          // date_return: `${data.date_return.getFullYear()}-${('0' + (data.date_borrow.getMonth()+1)).slice(-2)}-${('0' + data.date_return.getDate()).slice(-2)}T${data.date_return.toLocaleTimeString()}.000Z`,
          date_return: ConvertToISO(data.date_return),
          equipment_id: data.equipment_id,
          status: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      console.log("Submit Borrow: ", res);
      await toggleModal()
      setData({
        users_name_borrow: user.user_name,
        users_id_borrow: user.user_id,
        date_borrow: new Date(),
        date_return: new Date(),
        equipment_id: "",
        status: 0,
      })
      await getBorrowDataTable()
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   console.log("DataEdit from BorrowID: ",dataEdit)
  // },[dataEdit])

  //ข้อมูลที่ถูกแก้ไขและรอส่ง
  // const [editData, setEditData] = useState({
  //   users_name_borrow: dataEdit?.users_name_borrow || '',
  //   users_id_borrow: dataEdit?.users_id_borrow || '',
  //   date_borrow: dataEdit?.date_borrow || '',
  //   date_return: dataEdit?.date_return || '',
  //   equipment_id: dataEdit?.equipment_id || '',
  //   status: dataEdit?.status,
  // })

  // const setValueEditData = () => {
  //   setEditData({
  //     users_name_borrow: dataEdit?.users_name_borrow,
  //     users_id_borrow: dataEdit?.users_id_borrow,
  //     date_borrow: new Date(dataEdit?.date_borrow),
  //     date_return: new Date(dataEdit?.date_return),
  //     equipment_id: dataEdit?.equipment_id,
  //     status: dataEdit?.status,
  //   });
  // }

  // useEffect(() => {
  //   setValueEditData(dataEdit)
  // }, [dataEdit]);

  // useEffect(() => {
  //   console.log("EditData: ",editData)
  // },[editData])

  //ส่งการแก้ไขการยืม
  const handleUpdate = (id) => {
    axios
      .put(
        baseURL + `/api/borrow/equipment/${id}`,
        {
          users_name_borrow: dataEdit?.users_name_borrow,
          users_id_borrow: dataEdit?.users_id_borrow,
          date_borrow: dataEdit?.date_borrow,
          date_return: dataEdit?.date_return,
          equipment_id: dataEdit?.equipment_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Update Borrow: ", res);
        toggleModal();
        
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [equipment, setEquipment] = useState([]);

  const getEequipmentDatatable = () => {
    axios
      .get(
        baseURL +
          `/api/equipment/datatable?page=1&size=5&order[0]=created_date&order[1]=DESC`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Equipment Datatable from Modal: ", res);
        setEquipment(res.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getEequipmentDatatable();
  }, []);

  const [checkboxs1, setCheckboxs1] = React.useState(true);
  const [checkboxs2, setCheckboxs2] = React.useState(false);

  const convertStringToDateType = (dateTime) => {
    // console.log("Date Time: ",dateTime)
    if(dateTime !== null && dateTime !== undefined && dateTime !== 0) {
      let OBJdateTime = {
        date: dateTime.split("T")[0],
        time: dateTime.split("T")[1].split(".")[0],
      }
      return `${OBJdateTime.date} ${OBJdateTime.time}`
    } else {
      return null
    }
  }

  return (
    <Modal centered isOpen={openBorrow} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>
        {modalState === "add"
          ? "เพิ่มการยืมอุปกรณ์"
          : modalState === "edit"
          ? "แก้ไขข้อมูล"
          : "รายละเอียดข้อมูล"}
      </ModalHeader>
      <ModalBody>
          <Form 
            // onSubmit={ async (e) => {
            // e.preventDefault()
            
          // }}
          >
            <FormGroup row>
              <Label className="text-end" xxl={4}>
                ผู้ใช้งาน
              </Label>
              <Col xxl={7}>
                <Input
                  type="text"
                  value={
                    modalState === "add" 
                    ? data.users_name_borrow 
                    : dataEdit?.users_name_borrow
                  }
                  disabled
                  onChange={(e) => {
                    setDataEdit({...dataEdit, 
                      users_id_borrow: dataEdit?.users_id_borrow,
                      users_name_borrow: e.target.value
                    })
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xxl={4}>
                วันที่ยืม
              </Label>
              <Col xxl={7}>
                <Flatpickr
                  disabled={modalState === "view" && true}
                  className="form-control d-block"
                  placeholder="วัน/เดือน/ปี   เวลา"
                  options={{
                    // altInput: true,
                    enableTime: true,
                    // time_24hr: true,
                    // dateFormat: "d-m-Y",
                    dateFormat: "d-m-Y H:i",
                    ariaDateFormat: "F j, Y",
                    locale: "th",
                  }}
                  value={
                    modalState === "add"
                    ? data?.date_borrow
                    : dataEdit?.date_borrow
                  }
                  onChange={(e) => {
                    if(modalState === "add") {
                      setData((prev) => ({ ...prev, date_borrow: e[0] }));
                    } else if (modalState === "edit") {
                      setDataEdit({...dataEdit, 
                        date_borrow: e[0],
                      })
                    }
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xxl={4}>
                กำหนดคืน
              </Label>
              <Col xxl={7}>
                <Flatpickr
                  disabled={modalState === "view" && true}
                  className="form-control d-block"
                  placeholder="วัน/เดือน/ปี   เวลา"
                  options={{
                    // altInput: true,
                    enableTime: true,
                    // time_24hr: true,
                    // dateFormat: "d-m-Y",
                    dateFormat: "d-m-Y H:i",
                    ariaDateFormat: "F j, Y",
                    locale: "th",
                  }}
                  value={
                    modalState === "add"
                    ? data?.date_return
                    : dataEdit?.date_return
                  }
                  onChange={(e) => {
                    if(modalState === "add") {
                      setData((prev) => ({ ...prev, date_return: e[0] }));
                    } else if (modalState === "edit") {
                      setDataEdit({...dataEdit, 
                        date_return: e[0],
                      })
                    }
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xxl={4}>
                จองอุปกรณ์
              </Label>
              <Col xl={7}>
                <Input
                  disabled={modalState === "view" && true}
                  type="select"
                  value={
                    modalState === "add" 
                    ? data.equipment_id 
                    : dataEdit?.equipment_id
                  }
                  onChange={(e) => {
                    if(modalState === "add") {
                      setData((prev) => ({
                        ...prev,
                        equipment_id: e.target.value,
                      }));
                    } else if (modalState === "edit") {
                      setDataEdit({...dataEdit, 
                        equipment_id: e.target.value,
                      })
                    }
                  }}
                >
                  <option>--- เลือกประเภท ---</option>
                  {equipment.map((item) => {
                    return (
                      <option key={item.equipment_id} value={item.equipment_id}>
                        {item.equipment_name}
                      </option>
                    );
                  })}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xxl={4}>
                รายการอุปกรณ์ที่เลือก
              </Label>
              <Col xl={7}>
                <Input disabled />
              </Col>
            </FormGroup>
            <FormGroup
              row
              check
              style={{ display: "flex", alignItems: "center" }}
            >
              <Col xl={2}></Col>
              <Col xl={1}>
                <Input
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                  className="font-size-16 border border-secondary opacity-75"
                  type="checkbox"
                  defaultChecked={checkboxs1}
                  onClick={(e) => {
                    setCheckboxs1(e.target.checked);
                  }}
                  onChange={(e) => {
                    setCheckboxs2(!e.target.checked);
                    // setCheckboxs(prev => ({
                    //     ...prev,
                    //     box1: e.target.checked,
                    //     box2: !e.target.checked
                    // }))
                  }}
                />
              </Col>
              <Label xl={3}>ภายในองค์กร</Label>
              <Col xl={5}>
                <Input
                  type="text"
                  disabled={checkboxs1 === false || modalState === "view" ? true : false}
                />
              </Col>
            </FormGroup>
            <FormGroup
              row
              check
              style={{ display: "flex", alignItems: "center" }}
            >
              <Col xl={2}></Col>
              <Col xl={1}>
                <Input
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                  className="font-size-16 border border-secondary opacity-75"
                  type="checkbox"
                  defaultChecked={checkboxs2}
                  onClick={(e) => {
                    setCheckboxs2(e.target.checked);
                  }}
                  onChange={(e) => {
                    // setCheckboxs(prev => ({
                    //     ...prev,
                    //     box2: e.target.checked,
                    //     box1: !e.target.checked
                    // }))
                  }}
                />
              </Col>
              <Label xl={3}>ภายนอกองค์กร</Label>
              <Col xl={5}>
                <Input type="text" disabled />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-2">
              <Label className="text-end" xxl={3}>
                เพื่อใช้งาน
              </Label>
              <Col xl={8}>
                <Input
                  style={{ height: "75px" }}
                  type="textarea"
                  placeholder="สำหรับใช้งาน....."
                  disabled={modalState === "view" ? true : false}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={3}>
                หมายเหตุ
              </Label>
              <Col xl={8}>
                <Input style={{ height: "75px" }} disabled={modalState === "view" ? true : false} type="textarea" />
              </Col>
            </FormGroup>
          </Form>
      </ModalBody>
      <ModalFooter>
        {modalState === "add" || modalState === "edit" ?
          <Button
            className=""
            type="submit" 
            color={modalState === "add" ? "success" : "warning"}
            onClick={ async () => {
              if(modalState === "add") {
                await handleSubmit();
              } else if(modalState === "edit") {
                await handleUpdate(dataEdit?.id);
              }
            }}
          >
            {modalState === "add" ? "บันทึก" : "Edit"}
          </Button> : null
        }
        <Button color="danger" onClick={toggleModal} className="me-2">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalBorrowTable;
