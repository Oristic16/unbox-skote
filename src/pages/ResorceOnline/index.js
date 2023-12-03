import * as React from "react";
import {
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
  Table,
} from "reactstrap";
import BorrowedTable from "./BorrowedTable";

import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import LoadingPage from "../TESTPage/LoadingPage";
import FadeIn from "react-fade-in/lib/FadeIn";
import ModalDailyWithdraw from "./Report/ModalReportDailyWithdraw";
import ModalReportBorrowTool from "./Report/ModalReportBorrowTool";
import ModalBorrowTable from "./TableBorrowPage/ModalBorrowTable";
import { GetCookieData, GetCookieToken } from "../Cookie/GetCookie";
import axios from "axios";
import ModalDeleteBorrowTable from "./TableBorrowPage/ModalDeleteBorrowTable";

const baseURL = process.env.REACT_APP_API_CORS
const user = GetCookieData("userData");
const token = GetCookieToken("userToken")

const ResorceOnline = () => {

  document.title = "ทรัพยากรออนไลน์ | Flexible Time";
  const navigate = useNavigate();
  
  const [modalState, setModalState] = useState("")

  const [openBorrow, setOpenBorrow] = React.useState(false);

  const toggleModal = () => {
    setOpenBorrow(!openBorrow);
  };

  const [selectedReport, setSelectedReport] = useState({
    id: "1",
    name: "การเบิกจ่ายรายวัน",
  });

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const [isHover, setIsHover] = useState(false);

  const [borrowData, setBorrowData] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
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
        <LoadingPage />
      ) : (
        <FadeIn>
          
          
          <Container fluid>
            <Breadcrumbs title="Home" breadcrumbItem="ทรัพยากรออนไลน์" />
            <Row>
              <Col xxl={9} xl={12} lg={8}>
                <Row>
                  <Col>
                    <Card style={{ minHeight: "600px" }}>
                      <CardBody className="pb-0">
                        <Row className="mb-3">
                          <Col>
                            <Button color="primary" className="pb-0"
                              onClick={() => {
                                navigate("/resorceonline/borrowtable")
                              }}
                            >
                              <h5 className="font-size-16 card-title">
                                <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                                รายการยืมอุปกรณ์
                              </h5>
                            </Button>
                          </Col>
                          <Col
                            style={{
                              display: "flex",
                              justifyContent: "end",
                            }}
                          >
                            <Button 
                              color="info" 
                              onClick={() => {
                                setModalState(prev => "add")
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
                                <Col xxl={4} xl={4}>
                                  <InputGroup>
                                    <InputGroupText className="text-center">
                                      วันที่
                                    </InputGroupText>
                                    <Input
                                      type="text"
                                      placeholder="กรุณาระบุวันที่"
                                    />
                                    <InputGroupText className="text-center">
                                      ถึง
                                    </InputGroupText>
                                    <Input
                                      type="text"
                                      placeholder="กรุณาระบุวันที่"
                                    />
                                  </InputGroup>
                                </Col>
                                <Label className="text-end" xxl={1} xl={1}>
                                  เจ้าหน้าที่
                                </Label>
                                <Col xxl={3} xl={2}>
                                  <Input type="select" defaultValue="">
                                    <option value="">เลือกเจ้าหน้าที่</option>
                                  </Input>
                                </Col>
                                <Col xxl={4} xl={4}>
                                  <Row>
                                    <Label className="text-end" xxl={5} xl={4}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={7} xl={8}>
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
                                        <option>
                                          เครืองคอมพิวเตอร์ตั้งโต๊ะ
                                        </option>
                                      </Input>
                                    </Col>
                                  </Row>
                                </Col>
                              </FormGroup>
                              <FormGroup
                                row
                                className="d-flex justify-content-end"
                              >
                                <Col xxl={1} xl={4}>
                                  <Button onClick={() => {
                                    getBorrowDataTable()
                                  }} color="info" className="w-100">Refresh</Button>
                                </Col>
                                <Col xxl={2} xl={4}>
                                  <Row className="d-flex justify-content-end">
                                    <Label className="text-end" xxl={6} xl={3}>
                                      สถานะ
                                    </Label>
                                    <Col xxl={6} xl={4}>
                                      <Input type="select" defaultValue="">
                                        <option value="">ทั้งหมด</option>
                                        <option>จองแล้ว</option>
                                        <option>จ่าย</option>
                                        <option>คืน</option>
                                        <option>ยกเลิก</option>
                                      </Input>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col xxl={2} xl={2}>
                                  <Button className="w-100" color="success">
                                    <i className="me-2 fas fa-search"></i>ค้นหา
                                  </Button>
                                </Col>
                              </FormGroup>
                            </Form>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
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
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xxl={3}>
                <Row>
                  <Col xxl={12}>
                    <Card
                      style={{ cursor: "pointer", overflow: "hidden" }}
                      onClick={() => {
                        navigate("/resorceonline/setdata?menuName=1");
                      }}
                      // className={hover.hover1 ? "bg-danger bg-opacity-75" : "bg-danger" }
                      className="bg-danger"
                    >
                      <CardBody
                        style={{ position: "relative" }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "initial";
                          setIsHover(false);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#a24848";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                          setIsHover(true);
                        }}
                        className="d-flex justify-content-center align-items-center"
                      >
                        {/* {isHover ? <Lottie
                          style={{position:"absolute", left:"-20%"}}
                          options={{
                          loop: true,
                          autoplay: true,
                          animationData: CategoryTools.default,
                          rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice"
                          }
                        }} width={300} height={150} 
                        /> : null }
                         */}
                        <h5 className="text-white">
                          <i className="fas fa-tools me-2"></i>ประเภทอุปกรณ์
                        </h5>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xxl={12}>
                    <Card
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/resorceonline/setdata?menuName=2")
                      }
                      className="bg-primary"
                    >
                      <CardBody
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "initial")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#3c4da0";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                        }}
                        className="d-flex justify-content-center"
                      >
                        <h5 className="text-white">
                          <i className="fas fa-inbox me-2"></i>ข้อมูลอุปกรณ์
                        </h5>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xxl={12}>
                    <Card
                      style={{ cursor: "pointer" }}
                      className="bg-secondary"
                      onClick={() =>
                        navigate("/resorceonline/setdata?menuName=3")
                      }
                    >
                      <CardBody
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "initial")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#464956";
                          e.currentTarget.style.borderRadius = "0.25rem";
                          e.currentTarget.style.transition =
                            "background-color 0.4s linear";
                        }}
                        className="d-flex justify-content-center"
                      >
                        <h5 className="text-white">
                          <i className="fas fa-user-cog me-2"></i>
                          กำหนดผู้ดูแลระบบ
                        </h5>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card style={{ minHeight: "300px" }}>
                      <CardBody className="pb-0">
                        <Row className="d-flex align-items-center">
                          <Col>
                            <h5 className="font-size-16 card-title">
                              <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                              รายงาน{selectedReport.name}
                            </h5>
                          </Col>
                        </Row>
                        <Row style={{ display: "flex", justifyContent: "end" }}>
                          <Label className="text-end" xxl={6}>
                            กรุณาเลือกรายงาน
                          </Label>
                          <Col xxl={6}>
                            <Input
                              type="select"
                              value={selectedReport.id}
                              onChange={(e) => {
                                setSelectedReport({
                                  id: e.target.options[e.target.selectedIndex]
                                    .value,
                                  name: e.target.options[e.target.selectedIndex]
                                    .text,
                                });
                              }}
                            >
                              <option value="1">การเบิกจ่ายรายวัน</option>
                              <option value="2">การยืมอุปกรณ์</option>
                              <option value="3">อุปกรณ์</option>
                              <option value="4">สถิติการใช้อุปกรณ์</option>
                              <option value="5">เกินกำหนดการยืม</option>
                              <option value="6">เกินกำหนดการคืน</option>
                            </Input>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col>
                            {selectedReport.id === "1" ? (
                              <>
                                <Row>
                                  <Col xxl={12}>
                                    <Form
                                      onSubmit={(e) => {
                                        e.preventDefault();
                                      }}
                                    >
                                      <FormGroup row>
                                        <Label className="text-end" xxl={5}>
                                          ประเภทอุปกรณ์
                                        </Label>
                                        <Col xxl={7}>
                                          <Input type="select">
                                            <option>
                                              ประเภทอุปกรณ์ทั้งหมด
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                      <FormGroup row>
                                        <Label className="text-end" xxl={4}>
                                          สถานะ
                                        </Label>
                                        <Col xxl={8}>
                                          <Input type="select">
                                            <option>จ่าย</option>
                                            <option>คืน</option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                      <FormGroup
                                        row
                                        className="d-flex justify-content-end"
                                      >
                                        <Label className="text-end" xxl={2}>
                                          วันที่
                                        </Label>
                                        <Col xxl={8}>
                                          <InputGroup>
                                            <InputGroupText>
                                              ตั้งแต่
                                            </InputGroupText>
                                            <Input
                                              type="text"
                                              placeholder="กรุณาระบุวันที่"
                                            />
                                          </InputGroup>
                                        </Col>
                                      </FormGroup>
                                      <FormGroup
                                        row
                                        className="d-flex justify-content-end"
                                      >
                                        <Col xxl={8}>
                                          <InputGroup>
                                            <InputGroupText>ถึง</InputGroupText>
                                            <Input
                                              type="text"
                                              placeholder="กรุณาระบุวันที่"
                                            />
                                          </InputGroup>
                                        </Col>
                                      </FormGroup>
                                      <FormGroup
                                        row
                                        className="d-flex justify-content-end"
                                      >
                                        <Col
                                          xxl={8}
                                          className="d-flex justify-content-end"
                                        >
                                          <ModalDailyWithdraw />
                                        </Col>
                                      </FormGroup>
                                    </Form>
                                  </Col>
                                  <Col></Col>
                                </Row>
                              </>
                            ) : selectedReport.id === "2" ? (
                              <>
                                <Form>
                                  <FormGroup
                                    row
                                    className="d-flex justify-content-end"
                                  >
                                    <Label className="text-end" xxl={2}>
                                      วันที่
                                    </Label>
                                    <Col xxl={10}>
                                      <InputGroup>
                                        <InputGroupText>ตั้งแต่</InputGroupText>
                                        <Input
                                          type="text"
                                          placeholder="กรุณาระบุวันที่"
                                        />
                                        <InputGroupText>ถึง</InputGroupText>
                                        <Input
                                          type="text"
                                          placeholder="กรุณาระบุวันที่"
                                        />
                                      </InputGroup>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup
                                    row
                                    className="d-flex justify-content-end"
                                  >
                                    <Label className="text-end" xxl={2}>
                                      สถานะ
                                    </Label>
                                    <Col xxl={8}>
                                      <Input type="select">
                                        <option>สถานะทั้งหมด</option>
                                        <option>จอง</option>
                                        <option>จ่าย</option>
                                        <option>คืน</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label className="text-end" xxl={4}>
                                      Serial Number
                                    </Label>
                                    <Col xxl={8}>
                                      <Input
                                        type="text"
                                        placeholder="Serial Number"
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label className="text-end" xxl={4}>
                                      OPDC ID
                                    </Label>
                                    <Col xxl={8}>
                                      <Input
                                        type="text"
                                        placeholder="OPDC ID"
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label className="text-end" xxl={4}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={8}>
                                      <Input type="select">
                                        <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label className="text-end" xxl={4}>
                                      สถานที่
                                    </Label>
                                    <Col xxl={8}>
                                      <Input type="select">
                                        <option>สถานที่ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col xxl={4}>
                                      <Button onClick={() => {

                                      }} className="w-100" color="info">
                                        เลือกเจ้าหน้าที่
                                      </Button>
                                    </Col>
                                    <Col>
                                      <Input type="text" disabled/>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col>
                                      <ModalReportBorrowTool />
                                    </Col>
                                  </FormGroup>
                                </Form>
                              </>
                            ) : selectedReport.id === "3" ? (
                              <>
                                <Form>
                                  <FormGroup
                                    row
                                    className="d-flex justify-content-end"
                                  >
                                    <Label className="text-end" xxl={2}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option> อุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={2}>
                                      <Button className="w-100" color="success">
                                        <i className="fas fa-search me-2"></i>
                                        ค้นหา
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                                <Table bordered>
                                  <thead className="table-light">
                                    <tr>
                                      <th>ลำดับ</th>
                                      <th>ชื่ออุปกรณ์</th>
                                      <th>SERIAL NUMBER</th>
                                      <th>ยี่ห้อ</th>
                                      <th>รุ่น</th>
                                      <th>OPDC ID</th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </Table>
                              </>
                            ) : selectedReport.id === "4" ? (
                              <Form>
                                <FormGroup row>
                                  <Label className="text-end" xxl={2}>
                                    ตั้งแต่วันที่
                                  </Label>
                                  <Col>
                                    <Input
                                      type="text"
                                      placeholder="กรุณาระบุวันที่"
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label className="text-end" xxl={2}>
                                    ถึงวันที่
                                  </Label>
                                  <Col>
                                    <Input
                                      type="text"
                                      placeholder="กรุณาระบุวันที่"
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label className="text-end" xxl={2}>
                                    ประเภทอุปกรณ์
                                  </Label>
                                  <Col>
                                    <Input type="select">
                                      <option>เลือกประเภทอุปกรณ์</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label className="text-end" xxl={2}>
                                    สถานะ
                                  </Label>
                                  <Col>
                                    <Input type="select">
                                      <option>เลือกสถานะ</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                              </Form>
                            ) : selectedReport.id === "5" ? (
                              <>
                                <Form>
                                  <FormGroup
                                    row
                                    className="d-flex justify-content-end"
                                  >
                                    <Label className="text-end" xxl={2}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option> อุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={2}>
                                      <Button className="w-100" color="success">
                                        <i className="fas fa-search me-2"></i>
                                        ค้นหา
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                                <Table bordered>
                                  <thead className="table-light">
                                    <tr>
                                      <th>ลำดับ</th>
                                      <th>วันที่ยืม</th>
                                      <th>กำหนดคืน</th>
                                      <th>ประเภทอุปกรณ์</th>
                                      <th>ชื่ออุปกรณ์</th>
                                      <th>ผู้ยืม</th>
                                      <th>สถานะ</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </Table>
                              </>
                            ) : selectedReport.id === "6" ? (
                              <>
                                <Form>
                                  <FormGroup
                                    row
                                    className="d-flex justify-content-end"
                                  >
                                    <Label className="text-end" xxl={2}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option> อุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={2}>
                                      <Button className="w-100" color="success">
                                        <i className="fas fa-search me-2"></i>
                                        ค้นหา
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                                <Table bordered>
                                  <thead className="table-light">
                                    <tr>
                                      <th>ลำดับ</th>
                                      <th>วันที่ยืม</th>
                                      <th>กำหนดคืน</th>
                                      <th>ประเภทอุปกรณ์</th>
                                      <th>ชื่ออุปกรณ์</th>
                                      <th>ผู้ยืม</th>
                                      <th>สถานะ</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </Table>
                              </>
                            ) : null}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* <Row>
              <Col xxl={6}>
                <Row>
                  <Col>
                    <Card style={{ minHeight: "640px" }}>
                      <CardBody>
                        <Row>
                          <Col>
                            <h5 className="font-size-16 card-title">
                              <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                              รายงาน{selectedReport.name}
                            </h5>
                          </Col>
                          <Col
                            xxl={3}
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <Input
                              type="select"
                              value={selectedReport.id}
                              onChange={(e) => {
                                setSelectedReport({
                                  id: e.target.options[e.target.selectedIndex]
                                    .value,
                                  name: e.target.options[e.target.selectedIndex]
                                    .text,
                                });
                              }}
                            >
                              <option value="1">การเบิกจ่ายรายวัน</option>
                              <option value="2">การยืมอุปกรณ์</option>
                              <option value="3">อุปกรณ์</option>
                              <option value="4">สถิติการใช้อุปกรณ์</option>
                              <option value="5">เกินกำหนดการยืม</option>
                              <option value="6">เกินกำหนดการคืน</option>
                            </Input>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col>
                            {selectedReport.id === "1" ? (
                              <>
                                <Row>
                                  <Col xxl={12}>
                                    <Form
                                      onSubmit={(e) => {
                                        e.preventDefault();
                                      }}
                                    >
                                      <FormGroup row>
                                        <Label className="text-end" xxl={2}>
                                          ประเภทอุปกรณ์
                                        </Label>
                                        <Col xxl={3}>
                                          <Input type="select">
                                            <option>
                                              ประเภทอุปกรณ์ทั้งหมด
                                            </option>
                                          </Input>
                                        </Col>

                                        <Label className="text-end" xxl={2}>
                                          สถานะ
                                        </Label>
                                        <Col xxl={2}>
                                          <Input type="select">
                                            <option>จ่าย</option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                      <FormGroup row>
                                        <Label className="text-end" xxl={2}>
                                          วันที่
                                        </Label>
                                        <Col xxl={7}>
                                          <InputGroup>
                                            <InputGroupText>
                                              ตั้งแต่
                                            </InputGroupText>
                                            <Input
                                              type="text"
                                              placeholder="กรุณาระบุวันที่"
                                            >
                                              <option>
                                                ประเภทอุปกรณ์ทั้งหมด
                                              </option>
                                            </Input>
                                            <InputGroupText>ถึง</InputGroupText>
                                            <Input
                                              type="text"
                                              placeholder="กรุณาระบุวันที่"
                                            >
                                              <option>
                                                ประเภทอุปกรณ์ทั้งหมด
                                              </option>
                                            </Input>
                                          </InputGroup>
                                        </Col>
                                        <Col></Col>
                                        <Col
                                          xxl={2}
                                          className="d-flex justify-content-end"
                                        >
                                          <Button
                                            type="submit"
                                            className="w-100"
                                            color="success"
                                          >
                                            <i className="fas fa-search me-2"></i>
                                            ค้นหา
                                          </Button>
                                        </Col>
                                      </FormGroup>
                                    </Form>
                                  </Col>
                                  <Col></Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <div style={{ overflow: "scroll" }}>
                                      <Table
                                        striped
                                        hover
                                        style={{ verticalAlign: "middle" }}
                                      >
                                        <thead
                                          style={{ whiteSpace: "nowrap" }}
                                          className="table-dark"
                                        >
                                          <tr>
                                            <th className="text-center">
                                              ลำดับ
                                            </th>
                                            <th>วันที่ยืม</th>
                                            <th>กำหนดคืน</th>
                                            <th>ประเภทอุปกรณ์</th>
                                            <th>ชื่ออุปกรณ์</th>
                                            <th>ผู้ยืม</th>
                                            <th>รายละเอียด</th>
                                          </tr>
                                        </thead>
                                        <tbody className="table-light">
                                          {fakeReportData1.map((item, idx) => {
                                            return (
                                              <tr key={idx}>
                                                <td className="text-center">
                                                  {idx + 1}
                                                </td>
                                                <td>{item.borrowDate}</td>
                                                <td>{item.returnDate}</td>
                                                <td>{item.type}</td>
                                                <td>{item.name}</td>
                                                <td>{item.borrower}</td>
                                                <td>{item.detail}</td>
                                              </tr>
                                            );
                                          })}
                                        </tbody>
                                      </Table>
                                    </div>
                                  </Col>
                                </Row>
                              </>
                            ) : selectedReport.id === "2" ? (
                              <>
                                <Form>
                                  <FormGroup row>
                                    <Label className="text-end" xxl={1}>
                                      วันที่
                                    </Label>
                                    <Col xxl={6}>
                                      <InputGroup>
                                        <InputGroupText>ตั้งแต่</InputGroupText>
                                        <Input
                                          type="text"
                                          placeholder="กรุณาระบุวันที่"
                                        >
                                          <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                        </Input>
                                        <InputGroupText>ถึง</InputGroupText>
                                        <Input
                                          type="text"
                                          placeholder="กรุณาระบุวันที่"
                                        >
                                          <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                        </Input>
                                      </InputGroup>
                                    </Col>
                                    <Label className="text-end" xxl={1}>
                                      สถานะ
                                    </Label>
                                    <Col xxl={2}>
                                      <Input type="select">
                                        <option>สถานะทั้งหมด</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label className="text-end" xxl={2}>
                                      Serial Number
                                    </Label>
                                    <Col xxl={3}>
                                      <Input
                                        type="text"
                                        placeholder="Serial Number"
                                      />
                                    </Col>
                                    <Label className="text-end" xxl={2}>
                                      OPDC ID
                                    </Label>
                                    <Col xxl={3}>
                                      <Input
                                        type="text"
                                        placeholder="OPDC ID"
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label className="text-end" xxl={2}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Label className="text-end" xxl={1}>
                                      สถานที่
                                    </Label>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option>สถานที่ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col>
                                      <Button className="w-100" color="info">
                                        เลือกเจ้าหน้าที่
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                                <Table bordered>
                                  <thead className="table-light">
                                    <tr>
                                      <th>ลำดับ</th>
                                      <th>วันที่ยืม</th>
                                      <th>กำหนดคืน</th>
                                      <th>ประเภทอุปกรณ์</th>
                                      <th>ชื่ออุปกรณ์</th>
                                      <th>Serial Number</th>
                                      <th>OPDC ID</th>
                                      <th>ผู้ยืม</th>
                                      <th>สถานะ</th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </Table>
                              </>
                            ) : selectedReport.id === "3" ? (
                              <>
                                <Form>
                                  <FormGroup
                                    row
                                    className="d-flex justify-content-end"
                                  >
                                    <Label className="text-end" xxl={2}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option> อุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={2}>
                                      <Button className="w-100" color="success">
                                        <i className="fas fa-search me-2"></i>
                                        ค้นหา
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                                <Table bordered>
                                  <thead className="table-light">
                                    <tr>
                                      <th>ลำดับ</th>
                                      <th>ชื่ออุปกรณ์</th>
                                      <th>SERIAL NUMBER</th>
                                      <th>ยี่ห้อ</th>
                                      <th>รุ่น</th>
                                      <th>OPDC ID</th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </Table>
                              </>
                            ) : selectedReport.id === "4" ? (
                              <Form>
                                <FormGroup row>
                                  <Label className="text-end" xxl={2}>
                                    ตั้งแต่วันที่
                                  </Label>
                                  <Col>
                                    <Input
                                      type="text"
                                      placeholder="กรุณาระบุวันที่"
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label className="text-end" xxl={2}>
                                    ถึงวันที่
                                  </Label>
                                  <Col>
                                    <Input
                                      type="text"
                                      placeholder="กรุณาระบุวันที่"
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label className="text-end" xxl={2}>
                                    ประเภทอุปกรณ์
                                  </Label>
                                  <Col>
                                    <Input type="select">
                                      <option>เลือกประเภทอุปกรณ์</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label className="text-end" xxl={2}>
                                    สถานะ
                                  </Label>
                                  <Col>
                                    <Input type="select">
                                      <option>เลือกสถานะ</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                              </Form>
                            ) : selectedReport.id === "5" ? (
                              <>
                                <Form>
                                  <FormGroup
                                    row
                                    className="d-flex justify-content-end"
                                  >
                                    <Label className="text-end" xxl={2}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option> อุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={2}>
                                      <Button className="w-100" color="success">
                                        <i className="fas fa-search me-2"></i>
                                        ค้นหา
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                                <Table bordered>
                                  <thead className="table-light">
                                    <tr>
                                      <th>ลำดับ</th>
                                      <th>วันที่ยืม</th>
                                      <th>กำหนดคืน</th>
                                      <th>ประเภทอุปกรณ์</th>
                                      <th>ชื่ออุปกรณ์</th>
                                      <th>ผู้ยืม</th>
                                      <th>สถานะ</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </Table>
                              </>
                            ) : selectedReport.id === "6" ? (
                              <>
                                <Form>
                                  <FormGroup
                                    row
                                    className="d-flex justify-content-end"
                                  >
                                    <Label className="text-end" xxl={2}>
                                      ประเภทอุปกรณ์
                                    </Label>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option>ประเภทอุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={3}>
                                      <Input type="select">
                                        <option> อุปกรณ์ทั้งหมด</option>
                                      </Input>
                                    </Col>
                                    <Col xxl={2}>
                                      <Button className="w-100" color="success">
                                        <i className="fas fa-search me-2"></i>
                                        ค้นหา
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                                <Table bordered>
                                  <thead className="table-light">
                                    <tr>
                                      <th>ลำดับ</th>
                                      <th>วันที่ยืม</th>
                                      <th>กำหนดคืน</th>
                                      <th>ประเภทอุปกรณ์</th>
                                      <th>ชื่ออุปกรณ์</th>
                                      <th>ผู้ยืม</th>
                                      <th>สถานะ</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </Table>
                              </>
                            ) : null}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row> */}
          </Container>
        </FadeIn>
      )}
    </div>
  );
};

export default ResorceOnline;
