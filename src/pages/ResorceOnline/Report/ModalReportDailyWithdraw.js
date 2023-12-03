import React from "react";
import { useState } from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";

const ModalDailyWithdraw = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const fakeReportData = [
    {
      borrowDate: "01/11/2566",
      returnDate: "01/11/2566",
      type: "Notebook",
      name: "Notebook Acer รุ่น Swift 3 No.001",
      borrower: "อักสรณ์ ทองศรี",
      detail:
        "เวลาจ่าย : 09:29 ผู้จ่าย : เบญจพล บุญตามช่วย ผู้รับ : เบญจมาศ ผลบุญเจริญชัย",
    },
    {
      borrowDate: "02/11/2566",
      returnDate: "02/11/2566",
      type: "Notebook",
      name: "Notebook Acer รุ่น Swift 3 No.115",
      borrower: "พรฤทัย เชื้อบัณฑิตพร",
      detail:
        "เวลาจ่าย : 08:45 ผู้จ่าย : เบญจพล บุญตามช่วย ผู้รับ : พรฤทัย เชื้อบัณฑิตพร",
    },
    {
      borrowDate: "02/11/2566",
      returnDate: "02/11/2566",
      type: "Notebook",
      name: "Notebook Acer รุ่น Swift 3 No.001",
      borrower: "อนุสิทธิ์ พาวัฒนา",
      detail:
        "เวลาจ่าย : 13:24 ผู้จ่าย : ชมพัณ โสณมัย ผู้รับ : อนุสิทธิ์ พาวัฒนา",
    },
    {
      borrowDate: "02/11/2566",
      returnDate: "	07/11/2566",
      type: "Notebook",
      name: "Notebook Acer รุ่น Swift 3 No.001",
      borrower: "รินมนัส วัยรัตน์",
      detail:
        "เวลาจ่าย : 16:33 ผู้จ่าย : เบญจพล บุญตามช่วย ผู้รับ : รินมนัส วัยรัตน์",
    },
    {
      borrowDate: "03/11/2566",
      returnDate: "03/11/2566",
      type: "Apple IPad",
      name: "iPad สำหรับชี้แจงงบประมาณ ปี พ.ศ. 2563 No. 9",
      borrower: "นวลจันทร์ แสงมณี",
      detail:
        "เวลาจ่าย : 10:34 ผู้จ่าย : พิชาภพ วังส์ด่าน ผู้รับ : นวลจันทร์ แสงมณี",
    },
    {
      borrowDate: "03/11/2566",
      returnDate: "03/11/2566",
      type: "Apple IPad",
      name: "Apple Ipad Pro (11 Inch) WI-FI 64GB พร้อม Apple Pencil #50",
      borrower: "ขนิษฐา งามวงศ์สถิต",
      detail:
        "เวลาจ่าย : 11:05 ผู้จ่าย : เบญจพล บุญตามช่วย ผู้รับ : ขนิษฐา งามวงศ์สถิต",
    },
    {
      borrowDate: "10/11/2566",
      returnDate: "10/11/2566",
      type: "Apple IPad",
      name: "Apple iPad Air 2 16GB Wifi+Cellular #24",
      borrower: "มาลินี เอี่ยมสอาด",
      detail:
        "เวลาจ่าย : 08:04 ผู้จ่าย : เบญจพล บุญตามช่วย ผู้รับ : มาลินี เอี่ยมสอาด",
    },
    {
      borrowDate: "10/11/2566",
      returnDate: "10/11/2566",
      type: "Apple IPad",
      name: "Apple iPad Air #3",
      borrower: "มาลินี เอี่ยมสอาด",
      detail:
        "เวลาจ่าย : 08:04 ผู้จ่าย : เบญจพล บุญตามช่วย ผู้รับ : มาลินี เอี่ยมสอาด",
    },
    {
      borrowDate: "10/11/2566",
      returnDate: "10/11/2566",
      type: "Apple IPad",
      name: "Apple iPad Pro (11-inch) Wi-Fi 64GB พร้อม Apple Pencil #53",
      borrower: "มาลินี เอี่ยมสอาด",
      detail:
        "เวลาจ่าย : 08:04 ผู้จ่าย : เบญจพล บุญตามช่วย ผู้รับ : มาลินี เอี่ยมสอาด",
    },
    {
      borrowDate: "10/11/2566",
      returnDate: "10/11/2566",
      type: "Apple IPad",
      name: "Apple iPad Pro (11-inch) Wi-Fi 64GB พร้อม Apple Pencil #52",
      borrower: "มาลินี เอี่ยมสอาด",
      detail:
        "เวลาจ่าย : 08:04 ผู้จ่าย : เบญจพล บุญตามช่วย ผู้รับ : มาลินี เอี่ยมสอาด",
    },
  ];

  //รอ Fetch ข้อมูลจริง

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        className="w-100"
        color="success"
      >
        <i className="fas fa-search me-2"></i>
        ค้นหา
      </Button>
      <Modal size="xl" centered isOpen={open} toggle={handleCloseModal}>
        <ModalHeader toggle={handleCloseModal}>รายงานการเบิกจ่ายรายวัน</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <div style={{ overflow: "scroll" }}>
                <Table striped hover style={{ verticalAlign: "middle" }}>
                  <thead
                    style={{ whiteSpace: "nowrap" }}
                    className="table-dark"
                  >
                    <tr>
                      <th className="text-center">ลำดับ</th>
                      <th>วันที่ยืม</th>
                      <th>กำหนดคืน</th>
                      <th>ประเภทอุปกรณ์</th>
                      <th>ชื่ออุปกรณ์</th>
                      <th>ผู้ยืม</th>
                      <th>รายละเอียด</th>
                    </tr>
                  </thead>
                  <tbody className="table-light">
                    {fakeReportData.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-center">{idx + 1}</td>
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
          <Row>
            <Col className="d-flex justify-content-end">
              <Pagination aria-label="Page navigation example">
                <PaginationItem
                //   disabled={currentPage === 1}
                >
                  <PaginationLink
                    //   onClick={() => getLeaveDataTable(currentPage - 1)}
                    href="#"
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
                //   disabled={currentPage === totalPage}
                >
                  <PaginationLink
                    //   onClick={() => getLeaveDataTable(currentPage + 1)}
                    href="#"
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ModalDailyWithdraw;
