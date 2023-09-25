import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import axios from "axios";
import TableContainer from "../../../components/Common/TableContainer";

const NonApproveLeave = () => {

    const columns = useMemo(
        () => [
            {
                Header: "ลำดับ",
                accessor: "id",
            },
            {
                Header: "ชื่อ-นามสกุล",
                accessor: "userName",
            },
            {
                Header: "ตั้งแต่วันที่",
                accessor: "leaveFromDate",
            },
            {
                Header: "ถึงวันที่",
                accessor: "leaveToDate",
            },
            {
                Header: "รวม",
                accessor: "leaveDays",
            },
            {
                Header: "วันที่ส่งใบลา",
                accessor: "writeDate",
            },
            {
                Header: "สถานะ",
                accessor: "status",
            },
        ],
        []
    )

    const columns2 = useMemo(
        () => [
            {
                Header: "ลำดับ",
                accessor: "id",
            },
            {
                Header: "ชื่อ-นามสกุล",
                accessor: "userName",
            },
            {
                Header: "ประเภท",
                accessor: "title",
            },
            {
                Header: "เรื่อง",
                accessor: "leaveReq",
            },
            {
                Header: "ตั้งแต่วันที่",
                accessor: "leaveFromDate",
            },
            {
                Header: "ถึงวันที่",
                accessor: "leaveToDate",
            },
            {
                Header: "รวม",
                accessor: "leaveDays",
            },
            {
                Header: "วันที่ส่งใบลา",
                accessor: "writeDate",
            },
            {
                Header: "สถานะ",
                accessor: "status",
            },
        ],
        []
    )

  const baseURL = "http://localhost:8000";

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [employeeName, setEmployeeName] = useState([])

  const getData = () => {
    axios
      .get(baseURL + "/getnonapprove/rest")
      .then((res) => {
        setData(res.data);
        console.log("Data NoApprove of Rest: ", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getData2 = () => {
    axios
      .get(baseURL + "/getnonapprove/abroad")
      .then((res) => {
        setData2(res.data);
        console.log("Data NoApprove of Abroad: ", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getEmployeeName = () => {
    axios
      .get(baseURL + "/getemployeename")
      .then((res) => {
        setEmployeeName(res.data);
        console.log("Data Employee Name: ",res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
    getData2();
    getEmployeeName();
  }, []);

  const [activeTab1, setactiveTab1] = useState("5");

  const toggle1 = (tab) => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab);
    }
  };
  const toggleModal1 = () => {
    setopenListRest(!openListRest);
  };
  const toggleModal2 = () => {
    setopenListAbroad(!openListAbroad);
  };
  const toggleModal3 = () => {
    setOpenModalEmp(!openModalEmp);
  };

  const [leaveRestData, setLeaveRestData] = useState({
    leaveFromDate: "",
    leaveToDate: "",
    employeeName: "",
  });

  const [openModalEmp, setOpenModalEmp] = useState(false);
  const [openListRest, setopenListRest] = useState(false);
  const [openListAbroad, setopenListAbroad] = useState(false);

  return (
    <React.Fragment>
          <Nav pills className="navtab-bg nav-justified">
            <NavItem>
              <NavLink
                style={{ cursor: "pointer", fontWeight: "bolder" }}
                className={classnames({
                  active: activeTab1 === "5",
                })}
                onClick={() => {
                  toggle1("5");
                }}
              >
                ลาพักผ่อน
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer", fontWeight: "bolder" }}
                className={classnames({
                  active: activeTab1 === "6",
                })}
                onClick={() => {
                  toggle1("6");
                }}
              >
                ลาไปต่างประเทศ
              </NavLink>
            </NavItem>
          </Nav>
          <div className="my-3" style={{ border: "2px solid #3a40cd" }}></div>
          <TabContent activeTab={activeTab1}>
            <TabPane tabId="5">
              <h5>รายการลาพักผ่อนที่ยังไม่ได้รับอนุมัติ</h5>
              <Form className="mt-3">
                <Row>
                  <Label className="text-end" xl={2}>
                    ช่วงวันที่
                  </Label>
                  <Col xl={4}>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="วัน/เดือน/ปี"
                      options={{
                        // altInput: true,
                        dateFormat: "d-m-Y",
                        ariaDateFormat: "F j, Y",
                        locale: "th",
                      }}
                      value={leaveRestData.leaveFromDate}
                      onChange={(e) => {
                        setLeaveRestData((prev) => ({
                          ...prev,
                          leaveFromDate: e[0],
                        }));
                      }}
                    />
                  </Col>
                  <Label className="text-end" xl={2}>
                    ถึงวันที่
                  </Label>
                  <Col xl={4}>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="วัน/เดือน/ปี"
                      options={{
                        // altInput: true,
                        dateFormat: "d-m-Y",
                        ariaDateFormat: "F j, Y",
                        locale: "th",
                      }}
                      value={leaveRestData.leaveFromDate}
                      onChange={(e) => {
                        setLeaveRestData((prev) => ({
                          ...prev,
                          leaveFromDate: e[0],
                        }));
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-2 d-flex justify-content-end">
                  <Col xl={3}>
                    <Button
                      color="info"
                      onClick={() => setOpenModalEmp(!openModalEmp)}
                    >
                      เลือกเจ้าหน้าที่
                    </Button>
                  </Col>
                  <Col xl={8}>
                    <Input
                      value={leaveRestData.employeeName}
                      disabled
                      placeholder="กรุณาเลือกเจ้าหน้าที่"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-end">
                    <Button
                      className="position-relative"
                      onClick={() => setopenListRest(!openListRest)}
                      color="warning"
                      size="lg"
                    >
                      ค้นหา
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success font-size-20">
                        {data.length}{" "}
                      </span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </TabPane>

            <TabPane tabId="6">
              <h5>รายการลาไปต่างประเทศที่ยังไม่ได้รับอนุมัติ</h5>
              <Form className="mt-3">
                <Row>
                  <Label className="text-end" xl={2}>
                    ช่วงวันที่
                  </Label>
                  <Col xl={4}>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="วัน/เดือน/ปี"
                      options={{
                        // altInput: true,
                        dateFormat: "d-m-Y",
                        ariaDateFormat: "F j, Y",
                        locale: "th",
                      }}
                      value={leaveRestData.leaveFromDate}
                      onChange={(e) => {
                        setLeaveRestData((prev) => ({
                          ...prev,
                          leaveFromDate: e[0],
                        }));
                      }}
                    />
                  </Col>
                  <Label className="text-end" xl={2}>
                    ถึงวันที่
                  </Label>
                  <Col xl={4}>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="วัน/เดือน/ปี"
                      options={{
                        // altInput: true,
                        dateFormat: "d-m-Y",
                        ariaDateFormat: "F j, Y",
                        locale: "th",
                      }}
                      value={leaveRestData.leaveFromDate}
                      onChange={(e) => {
                        setLeaveRestData((prev) => ({
                          ...prev,
                          leaveFromDate: e[0],
                        }));
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-2 d-flex justify-content-end">
                  <Col xl={3}>
                    <Button
                      color="info"
                      onClick={() => setOpenModalEmp(!openModalEmp)}
                    >
                      เลือกเจ้าหน้าที่
                    </Button>
                  </Col>
                  <Col xl={8}>
                    <Input
                      value={leaveRestData.employeeName}
                      disabled
                      placeholder="กรุณาเลือกเจ้าหน้าที่"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-end">
                    <Button
                      className="position-relative"
                      onClick={() => setopenListAbroad(!openListAbroad)}
                      color="warning"
                      size="lg"
                    >
                      ค้นหา
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success font-size-20">
                        {data2.length}{" "}
                      </span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </TabPane>
          </TabContent>
      <Modal isOpen={openModalEmp} toggle={toggleModal3}>
        <ModalBody>
          <Input type="select">
            <option></option>
            {employeeName.map((item) => {
                return (
                    <option key={item.id}>{item.userName}</option>
                )
            })}
          </Input>
        </ModalBody>
      </Modal>
      <Modal size="lg" centered isOpen={openListRest} toggle={toggleModal1}>
        <ModalBody >
          <Card style={{minHeight:"300px"}}>
            <CardBody>
          <TableContainer
            columns={columns}
            data={data}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={5}
            className="custom-header-css"
          />
          
              
          </CardBody>
          </Card>
        </ModalBody>
      </Modal>
      <Modal size="xl" centered isOpen={openListAbroad} toggle={toggleModal2}>
        <ModalBody>
        <Card style={{minHeight:"300px"}}>
            <CardBody>
        <TableContainer
            columns={columns2}
            data={data2}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={5}
            className="custom-header-css"
          />
          </CardBody>
          </Card>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default NonApproveLeave;
