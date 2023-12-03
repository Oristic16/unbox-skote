import React from 'react'
import { useState } from 'react';
import { Button, Col, Modal, ModalBody, ModalHeader, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

const ModalReportBorrowTool = () => {

    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const fakeReportData = [
    {
      borrowDate: "15/11/2566",
      returnDate: "15/11/2566",
      type: "Notebook",
      name: "Notebook Acer รุ่น Swift 3 No.108",
      serial: "NXGNUST021741022227200",
      opecid: "01-042041-00-0001.471/61",
      borrower: "พรรษมนต์ พงศ์อิทธิโภคิน",
      status: "คืน 15/11/2566 12:02",
      detail:
        "ผู้จ่าย : เบญจพล บุญตามช่วย ผู้มารับ : พรรษมนต์ พงศ์อิทธิโภคิน ผู้รับคืน : เบญจพล บุญตามช่วย ผู้คืน : พรรษมนต์ พงศ์อิทธิโภคิน",
        note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
    },
    {
      borrowDate: "14/11/2566",
      returnDate: "14/11/2566",
      type: "Notebook",
      name: "Notebook Acer รุ่น Swift 3 No.104",
      serial: "NXGNUST021741022187200",
      opecid: "01-042041-00-0001.467/61",
      borrower: "ศศิกานต์ ประสงค์สม",
      status: "คืน 14/11/2566 15:23",
      detail:
        "ผู้จ่าย : ชมพัณ โสณมัย ผู้มารับ : ศศิกานต์ ประสงค์สม ผู้รับคืน : เบญจพล บุญตามช่วย ผู้คืน : ศศิกานต์ ประสงค์สม",
        note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
    },
    {
      borrowDate: "13/11/2566",
      returnDate: "13/11/2566",
      type: "Notebook",
      name: "Notebook Acer รุ่น Swift 3 No.001",
      serial: "NXGNUST021741020577200",
      opecid: "01-042041-00-0001.364/61",
      borrower: "ถิรพงศ์ ฤกษ์ขำ",
      status: "คืน 13/11/2566 17:06",
      detail:
        "ผู้จ่าย : ชมพัณ โสณมัย ผู้มารับ : ถิรพงศ์ ฤกษ์ขำ ผู้รับคืน : ชมพัณ โสณมัย ผู้คืน : ถิรพงศ์ ฤกษ์ขำ",
        note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
    },
    {
        borrowDate: "10/11/2566",
        returnDate: "10/11/2566",
        type: "Apple IPad",
        name: "Apple Ipad Pro (11 Inch) WI-FI 64GB พร้อม Apple Pencil #51",
        serial: "DMPYXFY3KD6J+GQYYX71TJKM9",
        opecid: "01-042041-00-0003.51/62",
        borrower: "มาลินี เอี่ยมสอาด",
        status: "จอง 10/11/2566 08:30",
        detail:
          "ผู้จ่าย : - ผู้มารับ : - ผู้รับคืน : - ผู้คืน : - ",
          note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
      },
      {
        borrowDate: "10/11/2566",
        returnDate: "10/11/2566",
        type: "Apple IPad",
        name: "Apple Ipad Pro (11 Inch) WI-FI 64GB พร้อม Apple Pencil #51",
        serial: "DMPYXFY3KD6J+GQYYX71TJKM9",
        opecid: "01-042041-00-0003.51/62",
        borrower: "มาลินี เอี่ยมสอาด",
        status: "จอง 10/11/2566 08:30",
        detail:
          "ผู้จ่าย : - ผู้มารับ : - ผู้รับคืน : - ผู้คืน : - ",
          note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
      },
      {
        borrowDate: "10/11/2566",
        returnDate: "10/11/2566",
        type: "Apple IPad",
        name: "Apple Ipad Pro (11 Inch) WI-FI 64GB พร้อม Apple Pencil #51",
        serial: "DMPYXFY3KD6J+GQYYX71TJKM9",
        opecid: "01-042041-00-0003.51/62",
        borrower: "มาลินี เอี่ยมสอาด",
        status: "จอง 10/11/2566 08:30",
        detail:
          "ผู้จ่าย : - ผู้มารับ : - ผู้รับคืน : - ผู้คืน : - ",
          note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
      },
      {
        borrowDate: "10/11/2566",
        returnDate: "10/11/2566",
        type: "Apple IPad",
        name: "Apple Ipad Pro (11 Inch) WI-FI 64GB พร้อม Apple Pencil #51",
        serial: "DMPYXFY3KD6J+GQYYX71TJKM9",
        opecid: "01-042041-00-0003.51/62",
        borrower: "มาลินี เอี่ยมสอาด",
        status: "จอง 10/11/2566 08:30",
        detail:
          "ผู้จ่าย : - ผู้มารับ : - ผู้รับคืน : - ผู้คืน : - ",
          note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
      },
      {
        borrowDate: "10/11/2566",
        returnDate: "10/11/2566",
        type: "Apple IPad",
        name: "Apple Ipad Pro (11 Inch) WI-FI 64GB พร้อม Apple Pencil #51",
        serial: "DMPYXFY3KD6J+GQYYX71TJKM9",
        opecid: "01-042041-00-0003.51/62",
        borrower: "มาลินี เอี่ยมสอาด",
        status: "จอง 10/11/2566 08:30",
        detail:
          "ผู้จ่าย : - ผู้มารับ : - ผู้รับคืน : - ผู้คืน : - ",
          note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
      },
      {
        borrowDate: "10/11/2566",
        returnDate: "10/11/2566",
        type: "Apple IPad",
        name: "Apple Ipad Pro (11 Inch) WI-FI 64GB พร้อม Apple Pencil #51",
        serial: "DMPYXFY3KD6J+GQYYX71TJKM9",
        opecid: "01-042041-00-0003.51/62",
        borrower: "มาลินี เอี่ยมสอาด",
        status: "จอง 10/11/2566 08:30",
        detail:
          "ผู้จ่าย : - ผู้มารับ : - ผู้รับคืน : - ผู้คืน : - ",
          note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
      },
      {
        borrowDate: "10/11/2566",
        returnDate: "10/11/2566",
        type: "Apple IPad",
        name: "Apple Ipad Pro (11 Inch) WI-FI 64GB พร้อม Apple Pencil #51",
        serial: "DMPYXFY3KD6J+GQYYX71TJKM9",
        opecid: "01-042041-00-0003.51/62",
        borrower: "มาลินี เอี่ยมสอาด",
        status: "จอง 10/11/2566 08:30",
        detail:
          "ผู้จ่าย : - ผู้มารับ : - ผู้รับคืน : - ผู้คืน : - ",
          note: "หมายเหตุการจ่าย: หมายเหตุการคืน: "
      },
  ];

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
      <Modal style={{maxWidth:"1400px"}} size="xl" centered isOpen={open} toggle={handleCloseModal}>
        <ModalHeader toggle={handleCloseModal}>รายงานการยืมอุปกรณ์</ModalHeader>
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
                      <th>Serial Number</th>
                      <th>OPEC ID</th>
                      <th>ผู้ยืม</th>
                      <th>สถานะ</th>
                      <th>รายละเอียด</th>
                      <th>หมายเหตุ</th>
                    </tr>
                  </thead>
                  <tbody className="table-light" style={{whiteSpace:"nowrap"}}>
                    {fakeReportData.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-center">{idx + 1}</td>
                          <td>{item.borrowDate}</td>
                          <td>{item.returnDate}</td>
                          <td>{item.type}</td>
                          <td>{item.name}</td>
                          <td>{item.serial}</td>
                          <td>OPEC : {item.opecid}</td>
                          <td>{item.borrower}</td>
                          <td>{item.status}</td>
                          <td>{item.detail}</td>
                          <td>{item.note}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
          <Row className='mt-2'>
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
  )
}

export default ModalReportBorrowTool