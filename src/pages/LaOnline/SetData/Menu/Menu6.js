import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";

const Menu6 = () => {

  const fakeData = [
    {
      name: "ขนิษฐา งามวงศ์สถิต",
      position: "ผู้บังคับบัญชา",
    },
    {
      name: "จิตตา กิตติเสถียรนนท์",
      position: "ผู้บังคับบัญชา",
    },
    {
      name: "ชมพัณ โสณมัย",
      position: "ผู้ดูแลระบบ",
    },
    {
      name: "ชัชฎภรณ์ คล้ายทองคำ",
      position: "ผู้ดูแลระบบ",
    },
    {
      name: "ณฐิณี สงกุมาร",
      position: "ผู้บังคับบัญชา",
    },
    {
      name: "ณัฏฐา พาชัยยุทธ",
      position: "ผู้บังคับบัญชา",
    },
    {
      name: "ดารารัตน์ โฆษิตพิพัฒน์",
      position: "ผู้บังคับบัญชา",
    },
    {
      name: "ธนศักดิ์ มังกโรทัย",
      position: "ผู้บังคับบัญชา",
    },
    {
      name: "นภนง ขวัญยืน",
      position: "ผู้บังคับบัญชา",
    },
    {
      name: "นวสรณ์ สร้อยโพธิ์พันธุ์",
      position: "ผู้ดูแลระบบ",
    },
  ]

  return (
    <FadeIn>
      <Card style={{minHeight:"730px"}}>
        <CardBody className="">
        <CardTitle className="mb-3"><h4>กำหนดสิทธิและบทบาท</h4></CardTitle>
            <Form>
              <FormGroup row>
                <Col xxl={8}>
                  <Row>
                    <Col xxl={3}>
                      <Input type="select">
                        <option value="">ชื่อ-นามสกุล</option>
                        <option value="">บทบาท</option>
                      </Input>
                    </Col>
                    <Col xxl={3}>
                      <Input type="text" placeholder="กรุณาระบุข้อมูล" />
                    </Col>
                    <Col xxl={2}>
                      <Button className="w-100" color="success"><i className="fas fa-search me-2"></i>ค้นหา</Button>
                    </Col>
                  </Row>
                </Col>
                <Col xxl={4} className="d-flex justify-content-end">
                  <Row>
                    <Col>
                      <Button color="info"><i className="fas fa-plus me-2"></i>เพิ่มสิทธิและบทบาท</Button>
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </Form>
            <div style={{ overflow: "scroll" }}>
          <Table striped hover style={{whiteSpace:"nowrap"}}>
            <thead className="table-primary">
              <tr>
                <th className="text-center">ลำดับ</th>
                <th>ชื่อ-นามสกุล</th>
                <th>บทบาท</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-light">
              {fakeData?.map((item,idx) => {
                return (
                  <tr key={idx}>
                    <td className="text-center">{idx+1}</td>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>
                      <UncontrolledDropdown>
                      <DropdownToggle
                            className="text-muted font-size-16"
                            tag="a"
                            color="white"
                          >
                            <i className="mdi mdi-dots-horizontal"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-end">
                            
                            <DropdownItem>แก้ไข</DropdownItem>
                            <DropdownItem
                            // onClick={() => {
                            //   OpenModalLeaveData(
                            //     item.leave_data_id
                            //   );
                            // }}
                            >
                              ดูรายละเอียด
                            </DropdownItem>
                            <DropdownItem
                            // onClick={() => {
                            //   OpenModalLeaveData(
                            //     item.leave_data_id
                            //   );
                            // }}
                            >
                              ลบ
                            </DropdownItem>
                            {/* <div className="dropdown-divider"></div> */}
                          </DropdownMenu>  
                      </UncontrolledDropdown>  
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          </div>
          <Row className="mt-3 d-flex align-items-center">
            <Col xxl={6}>
              <h5>ทั้งหมด 10 รายการ</h5>
            </Col>
            <Col xxl={6} className="d-flex justify-content-end">
              <Pagination aria-label="Page navigation example">
                <PaginationItem
                // disabled={currentPage === 1}
                >
                  <PaginationLink
                    // onClick={() => getLeaveDataTable(1)}
                    href="#"
                  >
                    <i className="fas fa-angle-double-left"></i>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem
                // disabled={currentPage === 1}
                >
                  <PaginationLink
                  // onClick={() => getLeaveDataTable(currentPage - 1)}
                  // href="#"
                  >
                    Previous
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">
                    Page
                    {/* {currentPage} of {totalPage} */}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem
                // disabled={currentPage === totalPage}
                >
                  <PaginationLink
                  // onClick={() => getLeaveDataTable(currentPage + 1)}
                  // href="#"
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem
                // disabled={currentPage === totalPage}
                >
                  <PaginationLink
                  // onClick={() => getLeaveDataTable(totalPage)}
                  // href="#"
                  >
                    <i className="fas fa-angle-double-right "></i>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Col>
            <Col xxl={6} className="d-flex justify-content-end">
              {/* <h3>ทั้งหมด {totalRows} รายการ</h3> */}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </FadeIn>
  );
};

export default Menu6;
