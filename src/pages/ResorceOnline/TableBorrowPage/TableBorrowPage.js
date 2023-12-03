import React from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import LoadingSetData from "../../TESTPage/LoadingSetData";
import { useEffect } from "react";
import { useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GetCookieData, GetCookieToken } from "../../Cookie/GetCookie";
import ModalBorrowTable from "./ModalBorrowTable";
import BorrowedTable from "../BorrowedTable";

const TableBorrowPage = () => {

  const user = GetCookieData("userData")

  const baseURL = process.env.REACT_APP_API_CORS
  const token = GetCookieToken("userToken")

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const [borrowData, setBorrowData] = React.useState([]);
  const [openBorrow, setOpenBorrow] = React.useState(false);

  const [modalState, setModalState] = useState("")

  const toggleModal = () => {
    setOpenBorrow(!openBorrow);
  };

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const getBorrowDataTable = (page) => {

    const pageParam = page || 1
    const user_id = user.user_id

    axios.get(baseURL+`/api/borrow/equipment/datatable?page=${pageParam}&size=10&order[0]=created_date&order[1]=DESC&filter[users_id_borrow][0]=${user_id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setBorrowData(res.data.result)
      setCurrentPage(res.data.info.currentPage)
      setTotalPage(res.data.info.totalPage)
      console.log("Borrow Datatable: ",res)
    }).catch((err) => {
      console.error(err);
    })
  }

  React.useEffect(() => {
    getBorrowDataTable(currentPage,user.user_id)
  },[])

  const getEequipmentDatatable = () => {
    axios.get(baseURL+`/api/equipment/datatable?page=1&size=10&order[0]=created_date&order[1]=DESC`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      console.log("Equipment Datatable: ",res)
    }).catch((err) => {
      console.error(err);
    })
  }

  useEffect(() => {
    getEequipmentDatatable();
  },[])

  const convetToSplitDateTime = (dateTime) => {
    let OBJdateTime = {
      date: dateTime.split("T")[0],
      time: dateTime.split("T")[1].split(".")[0],
    }
    return OBJdateTime
  }

  const [deleteBorrow, setDeleteBorrow] = useState(false);
  const handleToggleModalDeleteBorrow = () => {
    setDeleteBorrow(!deleteBorrow);
  };
  const deleteRowBorrow = (id) => {
    setBorrowData((prev) => prev.filter((item) => item.id !== id));
    axios
      .delete(baseURL + `/api/borrow/equipment/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Delete Row Borrow: ", res);
      })
      .catch((err) => {
        console.error(err);
      });
    handleToggleModalDeleteBorrow()
  };
  
  return (
    <div className="page-content">
      {!loading ? (
        <LoadingSetData />
      ) : (
        <FadeIn>
          <Container fluid>
            <Breadcrumb
              title="ทรัพยากรออนไลน์"
              breadcrumbItem="รายการยืมอุปกรณ์"
              isBack={true}
              path="/resorceonline"
            />
            <Card>
              <CardBody>
                <Row className="mb-3">
                  <Col>
                    <h5 className="font-size-16 card-title">
                      <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                      ตารางแสดงรายการยืมอุปกรณ์
                    </h5>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button color="info" 
                      onClick={() => {
                        setModalState("add")
                        toggleModal()
                      }}
                    >
                      <i className="fas fa-plus me-2"></i>เพิ่มการยืม
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <FormGroup
                        row
                        // className="d-flex justify-content-end"
                      >
                        <Col xxl={3} xl={4} className="mt-2">
                          <InputGroup>
                            <InputGroupText className="text-center">
                              วันที่
                            </InputGroupText>
                            <Input type="text" placeholder="กรุณาระบุวันที่" />
                            <InputGroupText className="text-center">
                              ถึง
                            </InputGroupText>
                            <Input type="text" placeholder="กรุณาระบุวันที่" />
                          </InputGroup>
                        </Col>
                        <Col xxl={3} xl={4} className="mt-2">
                            <Row>
                                <Label className="text-end" xxl={3} xl={4}>
                                    เจ้าหน้าที่
                                </Label>
                                <Col xxl={9} xl={8}>
                                    <Input type="select">
                                        <option>เลือกเจ้าหน้าที่</option>
                                    </Input>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col xxl={3} xl={4} className="mt-2">
                          <Row>
                            <Label className="text-end" xxl={4} xl={4}>
                              ประเภทอุปกรณ์
                            </Label>
                            <Col xxl={8} xl={8}>
                              <Input type="select">
                                <option>เลือกประเภท</option>
                                <option>Laser Pointer</option>
                                <option>Projector</option>
                                <option>Notebook</option>
                                <option>Printer</option>
                                <option>รางปลั๊กไฟ</option>
                                <option>Adapter Notebook</option>
                                <option>External DVD</option>
                                <option>เครื่องอัดเสียง</option>
                                <option>เครืองคอมพิวเตอร์ตั้งโต๊ะ</option>
                              </Input>
                            </Col>
                          </Row>
                        </Col>
                        <Col xxl={2} xl={3} className="mt-2">
                          <Row className="d-flex justify-content-end">
                            <Label className="text-end" xxl={4} xl={5}>
                              สถานะ
                            </Label>
                            <Col xxl={8} xl={7}>
                              <Input type="select" value="จองแล้ว" onChange={() => {

                              }}>
                                <option>ทั้งหมด</option>
                                <option>จองแล้ว</option>
                                <option>จ่าย</option>
                                <option>คืน</option>
                                <option>ยกเลิก</option>
                              </Input>
                            </Col>
                          </Row>
                        </Col>
                        <Col xxl={1} xl={2} className="mt-2">
                          <Button className="w-100" color="success">
                            <i className="me-2 fas fa-search"></i>ค้นหา
                          </Button>
                        </Col>
                      </FormGroup>
                      <FormGroup row className="d-flex justify-content-end">
                        
                        <Col xxl={1}></Col>
                        
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
                <BorrowedTable
                  currentPage={currentPage}
                  totalPage={totalPage}
                  deleteBorrow={deleteBorrow}
                  deleteRowBorrow={deleteRowBorrow}
                  borrowData={borrowData}
                  getBorrowDataTable={getBorrowDataTable}
                  modalState={modalState}
                  setModalState={setModalState}
                  openBorrow={openBorrow}
                  toggleModal={toggleModal}
                  fromIndex={true}
                  handleToggleModalDeleteBorrow={handleToggleModalDeleteBorrow}
                />
              </CardBody>
            </Card>
          </Container>
          
        </FadeIn>
        
      )}
    </div>
  );
};

export default TableBorrowPage;
