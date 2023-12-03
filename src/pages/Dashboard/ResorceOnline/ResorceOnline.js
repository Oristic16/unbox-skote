import React from 'react'
import { Card, CardBody, Col, Row, Table } from 'reactstrap';

const ResorceOnline = () => {

    const data = [
        {
            name: "Notebook Acer รุ่น Swift 3 No.104",
            borrow: "14/11/2566 13:30",
            return: "14/11/2566 15:30",
            status: "จองแล้ว"
        },
        {
            name: "iPad Air 4th #1",
            borrow: "10/11/2566 08:30",
            return: "10/11/2566 12:00",
            status: "จองแล้ว"
        },
        {
            name: "เครื่องอัดเสียงยี่ห้อ Sony สีขาว",
            borrow: "22/11/2566 12:15",
            return: "22/11/2566 14:30",
            status: "จองแล้ว"
        },
        {
            name: "	Apple iPad Pro (11-inch) Wi-Fi 64GB พร้อม Apple Pencil #53",
            borrow: "09/11/2566 10:00	",
          return: "09/11/2566 12:00",
          status: "จองแล้ว"
        },
        {
            name: "Apple iPad Air 2 16GB Wifi+Cellular #24",
            borrow: "02/11/2566 11:00",
            return: "02/11/2566 15:00",
            status: "จองแล้ว"
        },
      ];

  return (
    <React.Fragment>
      {/* <Card>
        <CardBody> */}
          <Row style={{ display: "flex", alignItems: "center" }} className="mt-3">
            <Col>
              <h5>
                {/* <i className="fa-solid fa-toolbox font-size-20 me-2"></i>
                ทรัพยากรออนไลน์ */}
                ตารางแสดงข้อมูลการยืม/คืนอุปกรณ์
              </h5>
            </Col>
            <Col className="text-end">
              {/* <Button
                            className="position-relative"
                            color="warning"
                            size="lg"
                            onClick={() => navigate("/sarabun")}
                          >
                            ค้นหา
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success font-size-14">
                              {dataLength}
                            </span>
                          </Button> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
                <Table striped hover className="mt-2">
                  <thead className="table-primary" style={{  }}>
                    <tr>
                      <th className='text-center'>ลำดับ</th>
                      <th >ชื่ออุปกรณ์</th>
                      <th className='text-center'>วันที่ยืม</th>
                      <th className='text-center'>วันที่คืน</th>
                      <th className='text-center'>สถานะ</th>
                    </tr>
                  </thead>
                  <tbody className="table-light">
                    {data.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className='text-center'>{idx+1}</td>
                          <td >{item.name}</td>
                          <td className='text-center'>{item.borrow}</td>
                          <td className='text-center'>{item.return}</td>
                          <td className='text-center'>{item.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        {/* </CardBody>
      </Card> */}
    </React.Fragment>
  )
}

export default ResorceOnline