import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import FadeIn from "react-fade-in/lib/FadeIn";
import LoadingData from "../TESTPage/LoadingData";
import { GetCookieData, GetCookieToken } from "../Cookie/GetCookie";
import ModalDeleteBorrowTable from "./TableBorrowPage/ModalDeleteBorrowTable";
import ModalBorrowTable from "./TableBorrowPage/ModalBorrowTable";

const BorrowedTable = ({
  currentPage,
  totalPage,
  modalState,
  setModalState,
  openBorrow,
  toggleModal,
  fromIndex,
  borrowData,
  getBorrowDataTable,
  deleteBorrow,
  deleteRowBorrow,
  handleToggleModalDeleteBorrow
}) => {
  const baseURL = process.env.REACT_APP_API_CORS;
  const token = GetCookieToken("userToken");
  const user = GetCookieData("userData");

  const [selectID, setSelectID] = useState();
  const [modal1, setModal1] = useState(false);

  const toggleViewModal = () => setModal1(!modal1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const convetToSplitDateTime = (dateTime) => {
    let OBJdateTime = {
      date: dateTime.split("T")[0],
      time: dateTime.split("T")[1].split(".")[0],
    };
    return OBJdateTime;
  };

  const [dataEdit, setDataEdit] = useState({
    users_name_borrow: '',
    users_id_borrow: '',
    date_borrow: '',
    date_return: '',
    equipment_id: '',
    status: 0,
  })
  
  const getBorrowById = (id) => {
    axios.get(baseURL+`/api/borrow/equipment/datatable?page=1&size=1&order[0]=created_date&order[1]=ASC&filter[id][0]=${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setDataEdit({
        users_name_borrow: res.data.result[0].users_name_borrow,
        users_id_borrow: res.data.result[0].users_id_borrow,
        date_borrow: res.data.result[0].date_borrow,
        date_return: res.data.result[0].date_return,
        equipment_id: res.data.result[0].equipment_id,
        status: res.data.result[0].status,
      })
      console.log("Get Borrow Datatable by ID: ",res)
    }).then(() => {
      toggleModal()
    }).catch((err) => {
      console.error(err);
    })
  }

  useEffect(() => {
    getBorrowDataTable()
  },[])

  return (
    <div>
      {!loading ? (
        <div style={{ height: "550px" }} className="d-flex align-items-center">
          <LoadingData />
        </div>
      ) : (
        <FadeIn>
          <ModalBorrowTable
            setDataEdit={setDataEdit}
            getBorrowDataTable={getBorrowDataTable}
            dataEdit={dataEdit}
            modalState={modalState}
            setModalState={setModalState}
            user={user} 
            openBorrow={openBorrow} 
            toggleModal={toggleModal} 
          />
          <ModalDeleteBorrowTable
            id={selectID}
            deleteBorrow={deleteBorrow}
            handleToggleModalDeleteBorrow={handleToggleModalDeleteBorrow}
            deleteRowBorrow={deleteRowBorrow}
            getBorrowDataTable={getBorrowDataTable}
          />
          <Row>
            <Col>
              {/* <div style={{ overflow: "scroll" }}> */}
              <Table striped style={{ verticalAlign: "middle" }}>
                <thead className="table-dark text-nowrap">
                  <tr>
                    <th className="text-center">ลำดับ</th>
                    {fromIndex ? null : <th>ประเภทอุปกรณ์</th>}
                    <th>ชื่ออุปกรณ์</th>
                    <th>วันที่ เวลา ยืม</th>
                    <th>วันที่ เวลา คืน</th>
                    <th className="text-center">สถานะ</th>
                    <th>เพื่อใช้งาน</th>
                    {fromIndex ? null : <th>วันที่ เวลา ทำรายการ</th>}
                    <th>ผู้ยืม</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {borrowData?.map((item, idx) => {
                    const dateBorrowCVT = convetToSplitDateTime(
                      item.date_borrow
                    );
                    const dateReturnCVT = convetToSplitDateTime(
                      item.date_return
                    );
                    const dateCreateCVT = convetToSplitDateTime(
                      item.created_date
                    );

                    return (
                        <tr key={item.id}>
                          <td className="text-center">{idx + 1}</td>
                          {fromIndex ? null : <td>{item.type}</td>}
                          <td>{item.equipment_id}</td>
                          <td>
                            {dateBorrowCVT.date} {dateBorrowCVT.time}
                          </td>
                          <td>
                            {dateReturnCVT.date} {dateReturnCVT.time}
                          </td>
                          <td className="text-center font-size-16">
                            <Badge
                              pill
                              color={
                                item.status === 0
                                  ? "primary"
                                  : item.status === 1
                                  ? "danger"
                                  : item.status === 2
                                  ? "success"
                                  : "warning"
                              }
                            >
                              {item.status === 0
                                ? "จองแล้ว"
                                : item.status === 1
                                ? "ยกเลิก"
                                : item.status === 2
                                ? "คืนแล้ว"
                                : "จ่าย"}
                            </Badge>
                          </td>
                          <td>{item.forUse}</td>
                          {fromIndex ? null : (
                            <td>
                              {dateCreateCVT.date} {dateCreateCVT.time}
                            </td>
                          )}
                          <td>{item.users_name_borrow}</td>
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
                                  onClick={() => {
                                    setModalState("view");
                                    getBorrowById(item.id);
                                  }}
                                >
                                  รายละเอียด
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() => {
                                    setModalState("edit");
                                    getBorrowById(item.id);
                                  }}
                                >
                                  แก้ไข
                                </DropdownItem>
                                <DropdownItem>จ่าย</DropdownItem>
                                <DropdownItem
                                  onClick={() => {
                                    handleToggleModalDeleteBorrow();
                                    setSelectID(item.id);
                                  }}
                                >
                                  ลบ
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
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end">
              <Pagination aria-label="Page navigation example">
                <PaginationItem disabled={currentPage === 1}>
                  <PaginationLink
                    onClick={() => getBorrowDataTable(1, user.user_id)}
                  >
                    <i className="fas fa-angle-double-left"></i>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={currentPage === 1}>
                  <PaginationLink
                    onClick={() =>
                      getBorrowDataTable(currentPage - 1)
                    }
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
                    onClick={() =>
                      getBorrowDataTable(currentPage + 1)
                    }
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={currentPage === totalPage}>
                  <PaginationLink
                    onClick={() => getBorrowDataTable(totalPage, user.user_id)}
                    href="#"
                  >
                    <i className="fas fa-angle-double-right "></i>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </FadeIn>
      )}
    </div>
  );
};

export default BorrowedTable;
