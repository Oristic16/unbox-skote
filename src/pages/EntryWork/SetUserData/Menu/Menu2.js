import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import {
  Form,
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  CardBody,
  Card,
  CardTitle,
  Table,
  Pagination,
  PaginationLink,
  PaginationItem,
} from "reactstrap";

const Menu2 = () => {
  return (
    <FadeIn>
      <Row className="d-flex justify-content-center">
        <Col xxl={10}>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h4>ส่งคำขอ</h4>
                  </CardTitle>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <FormGroup row className="">
                      <Label className="text-end mt-3" xxl={2} xs={3}>
                        คำขอ
                      </Label>
                      <Col className="mt-3" xxl={4} xs={9}>
                        <Input type="select">
                          <option>ทำงานที่บ้าน</option>
                        </Input>
                      </Col>
                      <Label className="text-end mt-3" xxl={1} xs={3}>
                        ผู้ใช้
                      </Label>
                      <Col className="mt-3" xxl={4} xs={9}>
                        <Input type="select">
                          <option>เลือกผู้ใช้</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="">
                      <Label className="text-end mt-3" xxl={2} xs={3}>
                        กอง
                      </Label>
                      <Col className="mt-3" xxl={4} xs={9}>
                        <Input type="select">
                          <option>ทั้งหมด</option>
                        </Input>
                      </Col>
                      <Label className="text-end mt-3" xxl={1} xs={3}>
                        กลุ่ม
                      </Label>
                      <Col className="mt-3" xxl={4} xs={9}>
                        <Input type="select">
                          <option>ทั้งหมด</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row >
                      <Col xxl={8} className="mt-3">
                        <Row>
                          <Label className="text-end" xxl={3} xs={3}>
                            เหตุผล
                          </Label>
                          <Col xs={9}>
                            <Input
                              type="textarea"
                              style={{ height: "90px" }}
                              placeholder="กรุณาระบบุ"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col className="mt-3" xxl={4} xs={12} >
                        <Row>
                          <Col xxl={6}>
                            <Input type="text" placeholder="กรูณาระบุวันที่" />
                          </Col>
                          <Col xxl={9}>
                            <Button
                              type="submit"
                              className="w-100 mt-3"
                              color="primary"
                            >
                              ส่งคำขอ
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h4>ค้นหาข้อมูลคำขอ</h4>
                  </CardTitle>
                  <Row>
                    <Col xxl={12}>
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <FormGroup row>
                          <Col xxl={1} xs={1}></Col>
                          <Label className="text-end" xxl={1} xs={3}>
                            กอง
                          </Label>
                          <Col xxl={4} xs={8}>
                            <Input type="select">
                              <option>ทั้งหมด</option>
                            </Input>
                          </Col>
                          <Label className="text-end" xxl={1} xs={4}>
                            กลุ่ม
                          </Label>
                          <Col xxl={4} xs={8}>
                            <Input type="select">
                              <option>ทั้งหมด</option>
                            </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col xxl={1} xs={1}></Col>
                          <Label className="text-end" xxl={1} xs={3}>
                            เริ่มวันที่
                          </Label>
                          <Col xxl={3} xs={8}>
                            <Input type="text" />
                          </Col>
                          <Label className="text-end" xxl={1} xs={4}>
                            ถึงวันที่
                          </Label>
                          <Col xxl={3} xs={8}>
                            <Input type="text" />
                          </Col>
                          <Col xxl={2} xs={8}>
                            <Button
                              type="submit"
                              className="w-100"
                              color="primary"
                            >
                              ค้นหา
                            </Button>
                          </Col>
                        </FormGroup>
                      </Form>
                    </Col>
                    <Col xxl={12} className="mt-3 mb-2">
                      <h5>ข้อมูลวันที่ 2023-01-01 ถึง 2023-11-20 </h5>
                    </Col>
                    <Col xxl={12}>
                      <div style={{overflow:"scroll"}}>
                      <Table striped hover style={{whiteSpace:"nowrap"}}>
                        <thead className="table-primary">
                          <tr>
                            <th>ไอดีคำขอ</th>
                            <th>ไอดีผู้ใช้งาน</th>
                            <th>วันที่</th>
                            <th>วันที่ส่งคำขอ</th>
                            <th>ชนิดคำขอ</th>
                            <th>เหตุผล</th>
                            <th>การอนุมัติขั้นต้น</th>
                            <th>ผู้อนุมัติขั้นต้น</th>
                            <th>การอนุมัติ</th>
                            <th>ผู้อนุมัติ</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </Table>
                      </div>
                    </Col>
                    <Col xxl={12} className="d-flex justify-content-end mt-5">
                      <Pagination>
                        <PaginationItem>
                          <PaginationLink>
                          Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink>
                          Page 
                          {/* {currentPage} of {totalPage} */}
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink>
                            Next
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </FadeIn>
  );
};

export default Menu2;
