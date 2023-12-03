import React, { useEffect } from "react";
import {
  Button,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import axios from "axios";
import { useState } from "react";
import { GetCookieToken } from "../Cookie/GetCookie";
import Flatpickr from "react-flatpickr";
import FadeIn from "react-fade-in/lib/FadeIn";
import LoadingData from "../TESTPage/LoadingData";

const TableForm = ({
  userInfo,
  user_id,
  currentPage,
  totalPage,
  leaveData,
  setLeaveData,
  setCurrentPage,
  getLeaveDataTable,
}) => {
  const token = GetCookieToken("userToken");

  const baseURL = process.env.REACT_APP_API_CORS;

  const [modalLeaveData, setModalLeaveData] = useState(false);

  const [leaveDataEdit, setLeaveDataEdit] = useState({
    user_name: userInfo?.user_name,
    user_position_name: userInfo?.user_position_name,
    cont_to_name_1: userInfo?.cont_to_name_1
  });

  const [isloading, setIsLoading] = useState(true);

  const OpenModalLeaveData = (id) => {
    setModalLeaveData(true); ///api/leave/:id
    axios
      .get(baseURL + `/api/leave/data/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Leave Data ID: ", res);
        setLeaveDataEdit(prev => ({...prev, ...res.data.result}));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const CloseModalLeaveData = () => {
    setModalLeaveData(false);
    setLeaveDataEdit("");
  };

  const handleInputChange = (e, field) => {
    setLeaveData((prev) => ({
      ...prev, [field]: e.target.value,
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const [modalState, setModalState] = useState()

  return (
    <React.Fragment>
      <div>
        <Row>
          <Col>
            {isloading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "370px",
                }}
              >
                <LoadingData />
              </div>
            ) : (
              <>
              <FadeIn>
                {leaveData?.length === 0 ? (
                  <h1>ไม่มีข้อมูล</h1>
                ) : (
                  <>
                    {/* <div style={{ overflow: "scroll" }}> */}
                      <Table
                        striped
                        hover
                        style={{
                          verticalAlign: "middle",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <thead className="table-dark">
                          <tr>
                            <th>id</th>
                            <th>เรื่อง</th>
                            <th className="text-center">ตั้งแต่วันที่</th>
                            <th className="text-center">ถึงวันที่</th>
                            <th className="text-center">รวม</th>
                            <th className="text-center">สถานะ</th>
                            <th className="text-center"></th>
                          </tr>
                        </thead>
                        <tbody className="table-light">
                          {leaveData.map((item, idx) => {
                            const leaveFromDate =
                              item.leave_from_date.split("T");
                            const formDate = leaveFromDate[0];
                            const leaveToDate = item.leave_to_date.split("T");
                            const ToDate = leaveToDate[0];

                            let status_name = "";
                            if (item.approve_status === "0")
                              status_name = "รออนุมัติ";
                            if (item.approve_status === "1")
                              status_name = "อนุมัติ";
                            if (item.approve_status === "2")
                              status_name = "ส่งกลับเพื่อแก้ไข";
                            if (item.approve_status === null)
                              status_name = "ไม่มีข้อมูล";

                            return (
                              <tr key={idx} style={{ cursor: "pointer" }}>
                                <td
                                  onClick={() => {
                                    OpenModalLeaveData(item.leave_data_id);
                                  }}
                                >
                                  {item.leave_data_id}
                                </td>
                                <td
                                  onClick={() => {
                                    OpenModalLeaveData(item.leave_data_id);
                                  }}
                                >
                                  {item.leave_name}
                                </td>
                                <td
                                  onClick={() => {
                                    OpenModalLeaveData(item.leave_data_id);
                                  }}
                                  className="text-center"
                                >
                                  {formDate}
                                </td>
                                {/* <td className='text-center'>{item.leave_from_date.split("T")}</td> */}
                                <td
                                  onClick={() => {
                                    OpenModalLeaveData(item.leave_data_id);
                                  }}
                                  className="text-center"
                                >
                                  {ToDate}
                                </td>
                                <td
                                  onClick={() => {
                                    OpenModalLeaveData(item.leave_data_id);
                                  }}
                                  className="text-center"
                                >
                                  {item.leave_days}
                                </td>
                                <td
                                  onClick={() => {
                                    OpenModalLeaveData(item.leave_data_id);
                                  }}
                                  className="text-center"
                                >
                                  {status_name}
                                </td>
                                <td className="text-center">
                                  <UncontrolledDropdown className="dropdown">
                                    <DropdownToggle
                                      className="text-muted font-size-16"
                                      tag="a"
                                      color="white"
                                    >
                                      <i className="mdi mdi-dots-horizontal"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                      <DropdownItem
                                        onClick={() => {
                                          setModalState("view")
                                          OpenModalLeaveData(
                                            item.leave_data_id
                                          );
                                        }}
                                      >
                                        ดูรายละเอียด
                                      </DropdownItem>
                                      <DropdownItem 
                                        onClick={() => {
                                          setModalState("edit")
                                        }}
                                      >แก้ไข</DropdownItem>
                                      <DropdownItem>ยกเลิก</DropdownItem>
                                      {/* <div className="dropdown-divider"></div> */}
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    {/* </div> */}
                    <Row>
                      <Col xxl={6} >
                        {/* <h3>ทั้งหมด {totalRows} รายการ</h3> */}
                      </Col>
                      <Col xxl={6} className="d-flex justify-content-end">
                        <Pagination aria-label="Page navigation example">
                          <PaginationItem disabled={currentPage === 1}>
                            <PaginationLink
                              onClick={() => getLeaveDataTable(1)}
                            >
                              <i className="fas fa-angle-double-left"></i>
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem disabled={currentPage === 1}>
                            <PaginationLink
                              onClick={() => getLeaveDataTable(currentPage - 1)}
                            >
                              Previous
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem active>
                            <PaginationLink>
                              Page {currentPage} of {totalPage}
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem disabled={currentPage === totalPage}>
                            <PaginationLink
                              onClick={() => getLeaveDataTable(currentPage + 1)}
                            >
                              Next
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem disabled={currentPage === totalPage}>
                            <PaginationLink
                              onClick={() => getLeaveDataTable(totalPage)}
                            >
                              <i className="fas fa-angle-double-right "></i>
                            </PaginationLink>
                          </PaginationItem>
                        </Pagination>
                      </Col>
                      
                    </Row>
                  </>
                )}
              </FadeIn>
              </>
            )}
          </Col>
        </Row>
      </div>
      <Modal
        centered
        size="xl"
        isOpen={modalLeaveData}
        toggle={CloseModalLeaveData}
      >
        <ModalHeader>{modalState === "view" ? "รายละเอียดการลา" : "แก้ไขการลา"}</ModalHeader>
        <ModalBody>
          {/* {console.log("leaveDataEdit in Modal: ",leaveDataEdit)} */}
          <Form>
            <FormGroup row>
              <Label className="text-end" xxl={2}>
                หมายเลขใบลา
              </Label>
              <Col xxl={3}>
                <Input
                  defaultValue={leaveDataEdit.leave_data_id}
                  disabled
                  type="text"
                  onChange={(e) =>
                    setLeaveDataEdit((prev) => ({
                      ...prev,
                      leave_data_id: e.target.value,
                    }))
                  }
                />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-3">
              <Label className="text-end" xl={2}>
                เขียนที่
              </Label>
              <Col xl={4}>
                <Input
                  type="text"
                  defaultValue={leaveDataEdit.write_place}
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
                  defaultValue={leaveDataEdit.write_date}
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
                  onChange={(e) => handleInputChange(e, "leave_name")}
                  value={leaveDataEdit.leave_name}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เรียน
              </Label>
              <Col xl={4}>
                <Input
                  type="text"
                  readOnly
                  disabled
                  value={leaveDataEdit.send_to}
                  onChange={(e) => handleInputChange(e, "send_to")}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ชื่อ
              </Label>
              <Col xl={4}>
                <Input
                  type="text"
                  readOnly
                  disabled
                  value={leaveDataEdit.created_user}
                  onChange={(e) => handleInputChange(e, "user_name")}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตำแหน่ง
              </Label>
              <Col xl={4}>
                <Input
                  type="text"
                  readOnly
                  disabled
                  value={leaveDataEdit.user_position_name}
                  onChange={(e) => handleInputChange(e, "user_position_name")}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สังกัด/กอง
              </Label>
              <Col xl={5}>
                <Input
                  type="text"
                  readOnly
                  disabled
                  value={leaveDataEdit.cont_to_name_1}
                  onChange={(e) => handleInputChange(e, "groupName")}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ขอลา
              </Label>
              <Col>
                <Input disabled={modalState === "view" ? true : false} defaultValue={leaveDataEdit.leave_type_id} type="select">
                  <option value="">กรุณาระบุ</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เนื่องจาก
              </Label>
              <Col>
                <Input
                  disabled={modalState === "view" ? true : false}
                  onChange={(e) => handleInputChange(e, "leave_reason")}
                  defaultValue={leaveDataEdit.leave_reason}
                  style={{ height: "75px" }}
                  type="textarea"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ตั้งแต่วันที่
              </Label>
              <Col xl={3}>
                <Flatpickr
                  disabled={modalState === "view" ? true : false}
                  className="form-control d-block"
                  placeholder="วัน/เดือน/ปี"
                  options={{
                    // altInput: true,
                    dateFormat: "d-m-Y",
                    ariaDateFormat: "F j, Y",
                    locale: "th",
                  }}
                  defaultValue={leaveDataEdit.leave_from_date}
                />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                ช่วงเวลา
              </Label>
              <Col xl={3}>
                <Input
                  disabled={modalState === "view" ? true : false}
                  type="select"
                  defaultValue={leaveDataEdit.leave_from_timetype}
                  onChange={(e) =>
                    setLeaveData((prev) => ({
                      ...prev,
                      leave_from_timetype: e.target.value,
                    }))
                  }
                >
                  <option value="1">9.30</option>
                  <option value="2">13.00</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ถึงวันที่
              </Label>
              <Col xl={3}>
                <Flatpickr
                  disabled={modalState === "view" ? true : false}
                  className="form-control d-block"
                  placeholder="วัน/เดือน/ปี"
                  options={{
                    // altInput: true,
                    dateFormat: "d-m-Y",
                    ariaDateFormat: "F j, Y",
                    locale: "th",
                  }}
                  defaultValue={leaveDataEdit.leave_to_date}
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
                <Input
                  disabled={modalState === "view" ? true : false}
                  type="select"
                  defaultValue={leaveDataEdit.leave_to_timetype}
                  onChange={(e) =>
                    setLeaveData((prev) => ({
                      ...prev,
                      leave_to_timetype: e.target.value,
                    }))
                  }
                >
                  <option value="1">12.00</option>
                  <option value="2">17.30</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                กำหนด
              </Label>
              <Col xl={4}>
                <Input
                  disabled
                  type="text"
                  defaultValue={leaveDataEdit.leave_days}
                  readOnly
                  onChange={(e) => handleInputChange(e, "leave_days")}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                สถานที่ติดต่อ
              </Label>
              <Col>
                <Input
                  disabled={modalState === "view" ? true : false}
                  onChange={(e) => handleInputChange(e, "contact_address")}
                  defaultValue={leaveDataEdit.contact_address}
                  style={{ height: "75px" }}
                  type="textarea"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col>
                <Input
                  disabled={modalState === "view" ? true : false}
                  onChange={(e) => handleInputChange(e, "note")}
                  defaultValue={leaveDataEdit.note}
                  style={{ height: "75px" }}
                  type="textarea"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                แนบเอกสาร{" "}
              </Label>
              <Col>
                <Input
                  disabled={modalState === "view" ? true : false}
                  type="file"
                  onChange={(e) =>
                    setLeaveData((prevData) => ({
                      ...prevData,
                      file_data: e.target.files[0],
                    }))
                  }
                />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Label className="text-end" xl={2}>
                ส่งผู้อนุมัติ
              </Label>
              <Col xl={3}>
                <Input
                  readOnly
                  disabled
                  defaultValue={leaveDataEdit.approve_user}
                  type="text"
                  onChange={(e) => handleInputChange(e, "approve_user")}
                />
              </Col>
              <Col xl={3}>
                {/* <div className="form-check form-check-primary mb-3"> */}
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="customCheckcolor1"
                  value={leaveData.approve_final}
                  onChange={(e) => {
                    if (e.target.checked === true)
                      setLeaveData((prevData) => ({
                        ...prevData,
                        approve_final: 1,
                      }));
                    if (e.target.checked === false)
                      setLeaveData((prevData) => ({
                        ...prevData,
                        approve_final: 0,
                      }));
                  }}
                />
                <label className="form-check-label" htmlFor="customCheckcolor1">
                  ผู้อนุมัตินี้เป็นลำดับสุดท้าย
                </label>
                {/* </div> */}
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", justifyContent: "end" }}>
              <Col xl={2}></Col>
              <Col xl={2}></Col>
              <Col xl={2}></Col>
              <Col xl={2}>
                <Button color="success" type="submit" style={{ width: "100%" }}>
                  บันทึกและแก้ไข
                </Button>
              </Col>
              <Col xl={2}>
                <Button color="danger" style={{ width: "100%" }}>
                  ยกเลิก
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default TableForm;
