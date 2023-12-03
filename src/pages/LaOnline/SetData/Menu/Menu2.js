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

const Menu2 = () => {
  const fakeData = [
    {
      proxier: "จิตตา กิตติเสถียรนนท์",
      attorney: "สุณี มักผล",
      fromDate: "20/03/2566",
      toDate: "20/03/2566",
      team: "กองกิจการองค์การมหาชนและหน่วยงานของรัฐรูปแบบอื่น",
    },
    {
      proxier: "นิชา สาทรกิจ",
      attorney: "วณิสรา สุขวัฒน์",
      fromDate: "30/01/2566",
      toDate: "03/02/2566",
      team: "กองขับเคลื่อนรัฐบาลดิจิทัล",
    },
    {
      proxier: "นิชา สาทรกิจ",
      attorney: "วณิสรา สุขวัฒน์",
      fromDate: "19/12/2565",
      toDate: "19/12/2565",
      team: "กองขับเคลื่อนรัฐบาลดิจิทัล",
    },
    {
      proxier: "อโนมา จัตตารีส์",
      attorney: "สุดารัตน์ สุขโหตุ",
      fromDate: "01/12/2565",
      toDate: "30/12/2565",
      team: "กองยุทธศาสตร์การพัฒนาระบบราชการ",
    },
    {
      proxier: "วิภาดา ตริตระการ",
      attorney: "มนวดี จันทิมา",
      fromDate: "14/09/2563",
      toDate: "30/09/2563",
      team: "สำนักงานเลขาธิการ",
    },
    {
      proxier: "วิลาวัลย์ ตาน้อย",
      attorney: "จิรวัฒน์ ระโหฐาน",
      fromDate: "28/05/2563",
      toDate: "29/05/2563",
      team: "กองพัฒนาระบบราชการ 2",
    },
    {
      proxier: "วิลาวัลย์ ตาน้อย",
      attorney: "จิรวัฒน์ ระโหฐาน",
      fromDate: "21/05/2563",
      toDate: "22/05/2563",
      team: "กองพัฒนาระบบราชการ 2",
    },
    {
      proxier: "วิลาวัลย์ ตาน้อย",
      attorney: "จิรวัฒน์ ระโหฐาน",
      fromDate: "14/05/2563",
      toDate: "15/05/2563",
      team: "กองพัฒนาระบบราชการ 2",
    },
    {
      proxier: "วิลาวัลย์ ตาน้อย",
      attorney: "จิรวัฒน์ ระโหฐาน",
      fromDate: "07/05/2563",
      toDate: "08/05/2563",
      team: "กองพัฒนาระบบราชการ 2",
    },
    {
      proxier: "วิลาวัลย์ ตาน้อย",
      attorney: "จิรวัฒน์ ระโหฐาน",
      fromDate: "30/04/2563",
      toDate: "01/05/2563",
      team: "กองพัฒนาระบบราชการ 2",
    },
  ];

  return (
    <FadeIn>
      <Card>
        <CardBody className="">
          <CardTitle>มอบหมายการปฏิบัติราชการ</CardTitle>
          <div style={{ overflow: "scroll" }}>
            <Table striped hover style={{ whiteSpace: "nowrap" }}>
              <thead className="table-primary">
                <tr>
                  <th className="text-center">ลำดับ</th>
                  <th>ผู้มอบอำนาจ</th>
                  <th>ผู้รับมอบอำนาจ</th>
                  <th className="text-center">ตั้งแต่วันที่</th>
                  <th className="text-center">ถึงวันที่</th>
                  <th>กอง</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-light">
                {fakeData?.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="text-center">{idx + 1}</td>
                      <td>{item.proxier}</td>
                      <td>{item.attorney}</td>
                      <td className="text-center">{item.fromDate}</td>
                      <td className="text-center">{item.toDate}</td>
                      <td>{item.team}</td>
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
                            <DropdownItem
                            // onClick={() => {
                            //   OpenModalLeaveData(
                            //     item.leave_data_id
                            //   );
                            // }}
                            >
                              ดูรายละเอียด
                            </DropdownItem>
                            <DropdownItem>แก้ไข</DropdownItem>
                            {/* <div className="dropdown-divider"></div> */}
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <Row className="mt-3">
            <Col xxl={12}>
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

export default Menu2;
