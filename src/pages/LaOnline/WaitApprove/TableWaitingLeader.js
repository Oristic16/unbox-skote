import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../components/Common/TableContainer";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
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
  Spinner,
} from "reactstrap";
import { Box } from "@mui/material";
import { GetCookieData, GetCookieToken } from "../../Cookie/GetCookie";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import FadeIn from "react-fade-in/lib/FadeIn";
import LoadingPage from "../../TESTPage/LoadingPage";
import LoadingData from "../../TESTPage/LoadingData";

const TableWaitingLeader = () => {
  const [leaveData, setLeaveData] = useState([]);

  const token = GetCookieToken("userToken");

  const baseURL = process.env.REACT_APP_API_CORS;

  const user = GetCookieData("userData");
  const user_id = user.user_id;

  // console.log(user)

  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState("1");
  const [totalPage, setTotalPage] = useState(null);
  const [totalRows, setTotalRows] = useState(null);

  const [leaveDataApprove, setLeaveDataEditApprove] = useState({});

  const [isloading, setIsLoading] = useState(true);

  const getApproveDataTable = async (page) => {
    axios
      .get(
        baseURL +
        `/api/leave/datatable?page=${page}&size=5&order[0]=created_date&order[1]=DESC&filter[user_id][0]=${user_id}&filter[approve_status][0]=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setData(res.data.result);
        setCurrentPage(res.data.info.currentPage);
        setTotalPage(res.data.info.totalPage);
        setTotalRows(res.data.info.totalRows);
        console.log("TableApprove: ", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getApproveDataTable(currentPage);
  }, []);

  const previousPage = (page) => {
    axios
      .get(
        baseURL +
        `/api/leave/approve/datatable?page=${page}&size=5&order[0]=created_date&order[1]=DESC&filter[approve_id][0]=${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setData(res.data.result);
        setCurrentPage(res.data.info.currentPage);
        console.log("TableApprove: ", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const nextPage = (page) => {
    axios
      .get(
        baseURL +
        `/api/leave/approve/datatable?page=${page}&size=5&order[0]=created_date&order[1]=DESC&filter[approve_id][0]=${user_id}&filter[approve_final][0]=0&filter[approve_statusl][0]=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setData(res.data.result);
        setCurrentPage(res.data.info.currentPage);
        console.log("TableApprove: ", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const approveData = (leave_approve_id, leave_data_id, approve_status) => {
    axios
      .post(
        baseURL + `/api/leave/approve`,
        {
          leave_approve_id: leave_approve_id,
          leave_data_id: leave_data_id,
          approve_status: approve_status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getApproveDataTable();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [modalEditApprove, setModalEditApprove] = useState(false);

  const OpenDataApprove = (id) => {
    setModalEditApprove(true);
    axios
      .get(baseURL + `/api/leave/data-approve/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Leave Approve ID: ", res.data.result);
        setLeaveDataEditApprove(res.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const CloseDataApprove = () => {
    setModalEditApprove(false);
    setLeaveDataEditApprove("");
  };

  const handleInputChange = (e, field) => {
    setLeaveData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1700);
  }, []);

  return (
    <React.Fragment>
      {/* <div>
        <Row className="mt-1">
          <Col className=""> */}
      {isloading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "370px" }}>
          {/* <Spinner color="primary" ></Spinner>
                 */}
          <LoadingData />
        </div>
      ) : (
        <FadeIn>
          {data?.length === 0 ? (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "370px" }}>
              <h3>ไม่มีรายการอนุมัติ</h3>
            </div>
          ) : (
            <>
              {/* <div style={{ overflow: "scroll" }}> */}
                <Table
                  hover
                  style={{
                    width: "100%",
                    verticalAlign: "middle",
                    whiteSpace: "nowrap",
                  }}
                >
                  <thead className="table-dark">
                    <tr>
                      <th>id</th>
                      <th>เรื่อง</th>
                      <th>ชื่อ</th>
                      <th className="text-center">ตั้งแต่วันที่</th>
                      <th className="text-center">ถึงวันที่</th>
                      <th className="text-center">รวม</th>
                      <th className="text-center">สถานะ</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-light">
                    {data.map((item) => {
                      const leaveFromDate = item.leave_from_date.split("T");
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

                      return (
                        <tr
                          key={item.leave_approve_id}

                          style={{ cursor: "pointer" }}
                        >
                          <td onClick={() =>
                            OpenDataApprove(item.leave_approve_id)
                          }>{item.leave_data_id}</td>
                          <td onClick={() =>
                            OpenDataApprove(item.leave_approve_id)
                          }>{item.leave_name}</td>
                          <td onClick={() =>
                            OpenDataApprove(item.leave_approve_id)
                          }>{item.employee_name}</td>
                          <td onClick={() =>
                            OpenDataApprove(item.leave_approve_id)
                          } className="text-center">{formDate}</td>
                          {/* <td className='text-center'>{item.leave_from_date.split("T")}</td> */}
                          <td onClick={() =>
                            OpenDataApprove(item.leave_approve_id)
                          } className="text-center">{ToDate}</td>
                          <td onClick={() =>
                            OpenDataApprove(item.leave_approve_id)
                          } className="text-center">{item.leave_days}</td>
                          <td onClick={() =>
                            OpenDataApprove(item.leave_approve_id)
                          } className="text-center">{status_name}</td>
                          <td>
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
                                  onClick={() =>
                                    OpenDataApprove(item.leave_approve_id)
                                  }
                                  to="#"
                                >
                                  ตรวจสอบ
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() => {
                                    approveData(
                                      item.leave_approve_id,
                                      item.leave_data_id,
                                      "1"
                                    );
                                  }}
                                >
                                  อนุมัติ
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() => {
                                    approveData(
                                      item.leave_approve_id,
                                      item.leave_data_id,
                                      "2"
                                    );
                                  }}
                                >
                                  ส่งกลับเพื่อแก้ไข
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() => {
                                    approveData(
                                      item.leave_approve_id,
                                      item.leave_data_id,
                                      "3"
                                    );
                                  }}
                                >
                                  ไม่อนุมัติ
                                </DropdownItem>
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
                <Col xxl={12} style={{display:"flex",justifyContent:"end"}}>
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={currentPage === 1}>
                      <PaginationLink
                        onClick={() => getApproveDataTable(1)}
                      >
                        Previous
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink>
                        Page {currentPage} of {totalPage}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem
                      disabled={currentPage === totalPage || totalPage < 1}
                    >
                      <PaginationLink
                        onClick={() => getApproveDataTable(currentPage + 1)}
                      >
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </Col>
                <Col xxl={6} className="d-flex justify-content-end">
                  {/* <h3>ทั้งหมด {totalRows} รายการ</h3> */}
                </Col>
              </Row>

            </>
          )}
        </FadeIn>
      )}
      {/* </Col>
        </Row>
      </div> */}

      <Modal
        centered
        size="xl"
        isOpen={modalEditApprove}
        toggle={CloseDataApprove}
      >
        <ModalHeader toggle={CloseDataApprove}>ตรวจสอบข้อมูล</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label className="text-end" xxl={2}>
                หมายเลขใบลา
              </Label>
              <Col xxl={3}>
                <Input
                  defaultValue={leaveDataApprove.leave_data_id}
                  disabled
                  type="text"
                  onChange={(e) =>
                    setLeaveDataEditApprove((prev) => ({
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
                  defaultValue={leaveDataApprove.write_place}
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
                  defaultValue={leaveDataApprove.write_date}
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
                  value={leaveDataApprove.leave_name}
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
                  value={leaveDataApprove.send_to}
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
                  value={leaveDataApprove.created_user}
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
                  value={leaveDataApprove.user_position_name}
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
                  value={leaveDataApprove.cont_to_name_1}
                  onChange={(e) => handleInputChange(e, "groupName")}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                ขอลา
              </Label>
              <Col>
                <Input
                  defaultValue={leaveDataApprove.leave_type_id}
                  type="select"
                >
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
                  onChange={(e) => handleInputChange(e, "leave_reason")}
                  defaultValue={leaveDataApprove.leave_reason}
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
                  className="form-control d-block"
                  placeholder="วัน/เดือน/ปี"
                  options={{
                    // altInput: true,
                    dateFormat: "d-m-Y",
                    ariaDateFormat: "F j, Y",
                    locale: "th",
                  }}
                  defaultValue={leaveDataApprove.leave_from_date}
                />
              </Col>
              <Label style={{ textAlign: "end" }} xl={1}>
                ช่วงเวลา
              </Label>
              <Col xl={3}>
                <Input
                  type="select"
                  defaultValue={leaveDataApprove.leave_from_timetype}
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
                  className="form-control d-block"
                  placeholder="วัน/เดือน/ปี"
                  options={{
                    // altInput: true,
                    dateFormat: "d-m-Y",
                    ariaDateFormat: "F j, Y",
                    locale: "th",
                  }}
                  defaultValue={leaveDataApprove.leave_to_date}
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
                  type="select"
                  defaultValue={leaveDataApprove.leave_to_timetype}
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
                  defaultValue={leaveDataApprove.leave_days}
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
                  onChange={(e) => handleInputChange(e, "contact_address")}
                  defaultValue={leaveDataApprove.contact_address}
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
                  onChange={(e) => handleInputChange(e, "note")}
                  defaultValue={leaveDataApprove.note}
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
                  defaultValue={leaveDataApprove.approve_user}
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
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default TableWaitingLeader;
