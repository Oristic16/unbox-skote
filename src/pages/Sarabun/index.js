import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import TableContainer from "../../components/Common/TableContainer";
import { useMemo } from "react";
import axios from "axios";

const Sarabun = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const colums = useMemo(() => [
    {
      Header: "เลขทะเบียนกอง",
      accessor: "userId",
    },
    {
      Header: "เลขทะเบียนกลาง",
      accessor: "id",
    },
    // {
    //     Header: "เลขที่หนังสือ",
    //     accessor: "",
    // },
    {
      Header: "หนังสือลงวันที่",
      accessor: "body",
    },
    // {
    //     Header: "จาก",
    //     accessor: "",
    // },
    // {
    //     Header: "เรียน",
    //     accessor: "",
    // },
    {
      Header: "เรื่อง",
      accessor: "title",
    },
    // {
    //     Header: "ผู้รับผิดชอบ",
    //     accessor: "",
    // },
    // {
    //     Header: "วันเวลาส่ง",
    //     accessor: "",
    // },
    // {
    //     Header: "วันเวลารับ",
    //     accessor: "",
    // },
  ]);

  const [open, setOpen] = useState(false);
  const handleOpenSearch = () => {
    setOpen(!open);
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col xl={6}>
            <Card>
              <CardBody>
                <Button color="info" onClick={handleOpenSearch}><i className="fa-solid fa-book-open-cover me-2"></i>สืบค้นหนังสือ</Button>
                {/* <h1 className="card-title font-size-16">
                  <i className="fa-solid fa-book-open-cover me-2"></i>
                  สืบค้นหนังสือ
                </h1> */}
                
              </CardBody>
            </Card>
          </Col>
          <Col xl={12}>
            <Card>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                      <th>เลขทะเบียนกอง</th>
                      <th>เลขทะเบียนกลาง</th>
                      <th>เลขที่หนังสือ</th>
                      <th>หนังสือลงวันที่</th>
                      <th>จาก</th>
                      <th>เรียน</th>
                      <th>เรื่อง</th>
                      <th>ผู้รับผิดชอบ</th>
                      <th>วันเวลาส่ง</th>
                      <th>วันเวลารับ</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </Table>
                {/* <TableContainer
                  columns={colums}
                  data={data}
                  customPageSize={10}
                  isShowSelect={true}
                  isGlobalFilter={true}
                /> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal
                  size="lg"
                  centered
                  isOpen={open}
                  toggle={handleOpenSearch}
                >
                  <ModalHeader>สืบค้นข้อมูลหนังสือ</ModalHeader>
                  <Form>
                    <ModalBody className="pb-0">
                      <FormGroup row>
                        <Label className="text-end" xl={2}>
                          เลือกตู้หนังสือ
                        </Label>
                        <Col>
                          <Input type="select">
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                            <option>e</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup
                        row
                      >
                        <Col xl={12}>
                          <Row style={{ display: "flex", alignItems: "center" }}>
                            <Col
                              xl={2}
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              <Input type="radio" name="searchFrom" />
                            </Col>
                            <Label className="text-start" xl={3}>
                              ค้นจากวันที่สร้างในปี พ.ศ
                            </Label>
                            <Col xl={3} className="d-flex justify-content-start">
                              <Input type="text" />
                            </Col>
                          </Row>
                          <Row style={{ display: "flex", alignItems: "center" }}>
                            <Col
                              xl={2}
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              <Input type="radio" name="searchFrom" />
                            </Col>
                            <Label className="text-start" xl={3}>
                              ค้นจากช่วงวันที่สร้างข้อมูล
                            </Label>
                            <Col xl={3} className="d-flex justify-content-start">
                              <Input type="text" />
                            </Col>
                            <Label className="text-start" xl={1}>
                              ถึง
                            </Label>
                            <Col xl={3} className="d-flex justify-content-start">
                              <Input type="text" />
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label className="text-end" xl={2}>
                          เลขทะเบียนกลาง
                        </Label>
                        <Col xl={4}>
                          <Input type="text" />
                        </Col>
                        <Label className="text-end" xl={2}>
                          เลขทะเบียนกอง
                        </Label>
                        <Col xl={4}>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label className="text-end" xl={2}>
                          เลขที่หนังสือ
                        </Label>
                        <Col xl={4}>
                          <Input type="text" />
                        </Col>
                        <Label className="text-end" xl={1} >
                          เรื่อง
                        </Label>
                        <Col xl={5}>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label className="text-end" xl={2}>
                          จากหน่วยงาน
                        </Label>
                        <Col xl={4}>
                          <Input type="text" />
                        </Col>
                        <Label className="text-end" xl={2}>
                          ถึงหน่วยงาน
                        </Label>
                        <Col xl={4}>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label className="text-end" xl={2}>
                          หนังสือลงวันที่
                        </Label>
                        <Col>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label className="text-end" xl={2}>
                          ชั้นความลับ
                        </Label>
                        <Col>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label className="text-end" xl={2}>
                          ความเร่งด่วน
                        </Label>
                        <Col>
                          <Input type="text" />
                        </Col>
                        <Label className="text-end" xl={1}>
                          เพื่อ
                        </Label>
                        <Col xl={5}>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row className="d-flex justify-content-end">
                        <Label className="text-end" xl={4}>
                          คำสำคัญ (Keyword/hashtag)
                        </Label>
                        <Col xl={8}>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row className="d-flex justify-content-end">
                        <Label className="text-end" xl={2}>
                          สถานะ
                        </Label>
                        <Col xl={5}>
                          <Input type="select">
                            <option>ทั้งหมด</option>
                            <option>จบงานแล้ว</option>
                            <option>ยังไม่จบงาน</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row className="d-flex justify-content-end">
                        <Label className="text-end" xl={2}>
                          ผู้ส่งคนล่าสุด
                        </Label>
                        <Col xl={5}>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row className="d-flex justify-content-end">
                        <Label className="text-end" xl={3}>
                          ผู้ที่เกี่ยวข้องในหนังสือ1
                        </Label>
                        <Col xl={5}>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup row className="d-flex justify-content-end">
                        <Label className="text-end" xl={3}>
                          ผู้ที่เกี่ยวข้องในหนังสือ2
                        </Label>
                        <Col xl={5}>
                          <Input type="text" />
                        </Col>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" onClick={handleOpenSearch}>Close</Button>
                      <Button color="success" onClick={handleOpenSearch}>Search</Button>
                    </ModalFooter>
                  </Form>
                </Modal>
    </div>
  );
};

export default Sarabun;
