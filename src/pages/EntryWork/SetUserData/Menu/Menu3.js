import React, { useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import Flatpickr from "react-flatpickr";

const Menu3 = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const fadeData = [
    {
      id: "1",
      name: "นางสาว กนกนาถ ปาละกูล",
      date: "05/11/2023",
      timeInOut: "",
      status: "วันหยุด",
      hourOT: "0 ชั่วโมง 0 นาที",
    },
    {
      id: "1",
      name: "นางสาว กนกนาถ ปาละกูล",
      date: "04/11/2023",
      timeInOut: "",
      status: "วันหยุด",
      hourOT: "0 ชั่วโมง 0 นาที",
    },
    {
      id: "1",
      name: "นางสาว กนกนาถ ปาละกูล",
      date: "11/11/2023",
      timeInOut: "",
      status: "วันหยุด",
      hourOT: "0 ชั่วโมง 0 นาที",
    },
    {
      id: "1",
      name: "นางสาว กนกนาถ ปาละกูล",
      date: "12/11/2023",
      timeInOut: "",
      status: "วันหยุด",
      hourOT: "0 ชั่วโมง 0 นาที",
    },
    {
      id: "1",
      name: "นางสาว กนกนาถ ปาละกูล",
      date: "18/11/2023",
      timeInOut: "",
      status: "วันหยุด",
      hourOT: "0 ชั่วโมง 0 นาที",
    },
    {
      id: "1",
      name: "นางสาว กนกนาถ ปาละกูล",
      date: "19/11/2023",
      timeInOut: "",
      status: "วันหยุด",
      hourOT: "0 ชั่วโมง 0 นาที",
    },
    {
      id: "2",
      name: "นางสาว กนกพร ศรีวิทยา",
      date: "07/11/2023",
      timeInOut:
        "07:08:05(เครื่องสแกนลายนิ้วมือ)-17:25:30(เครื่องสแกนลายนิ้วมือ)",
      status: "เต็มเวลา ล่วงเวลา",
      hourOT: "2 ชั่วโมง 18 นาที",
    },
    {
      id: "2",
      name: "นางสาว กนกพร ศรีวิทยา",
      date: "08/11/2023",
      timeInOut: "05:57:17(เว็บไซต์)",
      status: " ไม่ลงเวลาออก",
      hourOT: "0 ชั่วโมง 0 นาที",
    },
    {
      id: "2",
      name: "นางสาว กนกพร ศรีวิทยา",
      date: "05/11/2023",
      timeInOut:
        "07:08:05(เครื่องสแกนลายนิ้วมือ)-17:25:30(เครื่องสแกนลายนิ้วมือ)",
      status: "วันหยุด ",
      hourOT: "0 ชั่วโมง 0 นาที",
    },
    {
      id: "2",
      name: "นางสาว กนกพร ศรีวิทยา",
      date: "06/11/2023",
      timeInOut:
        "07:55:57(เครื่องสแกนลายนิ้วมือ)-17:47:50(เครื่องสแกนลายนิ้วมือ)",
      status: "เต็มเวลา ล่วงเวลา",
      hourOT: "1 ชั่วโมง 54 นาที",
    },
  ];
  return (
    <FadeIn>
      <Row className="d-flex justify-content-center">
        <Col xxl={10}>
          <Row>
            <Col xxl={12}>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h4>ค้นหาข้อมูลเข้าทำงาน</h4>
                  </CardTitle>
                  <Form
                    className="mt-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <FormGroup
                      row
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col xxl={4} className="mt-3">
                        <Row
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Label className="text-end" xxl={2} xs={3}>
                            กอง
                          </Label>
                          <Col xxl={10} xs={9}>
                            <Input type="select">
                              <option>ทั้งหมด</option>
                            </Input>
                          </Col>
                        </Row>
                      </Col>
                      <Col xxl={4} className="mt-3">
                        <Row>
                          <Label className="text-end" xxl={2} xs={3}>
                            กลุ่ม
                          </Label>
                          <Col xxl={10} xs={9}>
                            <Input type="select">
                              <option>ทั้งหมด</option>
                            </Input>
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>
                    <FormGroup
                      row
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col xxl={3} xs={12} className="mt-3">
                        <Row >
                          <Label className="text-end" xxl={3} xs={3}>
                            เริ่มวันที่
                          </Label>
                          <Col xxl={9} xs={9}>
                            <Flatpickr
                              className="form-control d-block"
                              placeholder="วัน/เดือน/ปี"
                              value={new Date()}
                              options={{
                                // altInput: true,
                                dateFormat: "d-m-Y",
                                ariaDateFormat: "F j, Y",
                                locale: "th",
                              }}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xxl={3} xs={12} className="mt-3">
                        <Row>
                          <Label className="text-end" xxl={3} xs={3}>
                            ถึงวันที่
                          </Label>
                          <Col xxl={9} xs={9}>
                            <Flatpickr
                              className="form-control d-block"
                              placeholder="วัน/เดือน/ปี"
                              value={new Date()}
                              options={{
                                // altInput: true,
                                dateFormat: "d-m-Y",
                                ariaDateFormat: "F j, Y",
                                locale: "th",
                              }}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={3}></Col>
                      <Col xxl={2} xs={9} className="mt-3">
                        <Button
                          onClick={toggleShow}
                          className="w-100"
                          color="primary"
                        >
                          Search
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            {isShow ? (
              <FadeIn>
                <Col xxl={12}>
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <h4>ข้อมูลวันที่ 2023-01-01 ถึง 2023-11-20</h4>
                      </CardTitle>

                      <Row className="mt-4">
                        <Col>
                          <Form>
                            <FormGroup row>
                              <Col xxl={2}>
                                <Input type="select">
                                  <option>10</option>
                                </Input>
                              </Col>
                              <Label className="text-end" xxl={1}>
                                ค้นหา:{" "}
                              </Label>
                              <Col
                                xxl={4}
                                className="d-flex justify-content-center"
                              >
                                <Input type="text" placeholder="Search..." />
                              </Col>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col xxl={12}>
                          <div style={{ overflow: "scroll" }}>
                            <Table
                              striped
                              hover
                              style={{ whiteSpace: "nowrap" }}
                            >
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center">ไอดี</th>
                                  <th>ชื่อ</th>
                                  <th>วันที่</th>
                                  <th>เวลาเข้า-เวลาออก</th>
                                  <th className="text-center">สถานะ</th>
                                  <th className="text-center">
                                    ชั่วโมงการทำงานล่วงเวลา
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {fadeData.map((item) => {
                                  return (
                                    <tr key={item.id}>
                                      <td className="text-center">{item.id}</td>
                                      <td>{item.name}</td>
                                      <td>{item.date}</td>
                                      <td>{item.timeInOut}</td>
                                      <td className="text-center">
                                        {item.status}
                                      </td>
                                      <td className="text-center">
                                        {item.hourOT}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </div>
                        </Col>
                        <Col xxl={12} className="d-flex justify-content-end">
                          <Pagination>
                            <PaginationItem>
                              <PaginationLink>Previous</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                              <PaginationLink>
                                Page
                                {/* {currentPage} of {totalPage} */}
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink>Next</PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </FadeIn>
            ) : null}
          </Row>
        </Col>
      </Row>
    </FadeIn>
  );
};

export default Menu3;
