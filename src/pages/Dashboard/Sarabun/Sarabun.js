import React from "react";
import { Card, CardBody, Col, Row, Table } from "reactstrap";

const Sarabun = () => {
  const data = [
    {
      id: "07320/2566",
      from: "บริัษัท โตชิบา เทค (ประเทศไทย) จำกัด",
      title: "ใบวางบิล IS2309T3979 รวม 22,015.58 บาท",
    },
    {
      id: "07209/2566",
      from: "ศาลากลางจังหวัดจันทบุรี",
      title:
        "ขอรับโอนข้าราชการพลเรือนสามัญ (นางสาวพรฤทัย เชื้อบัณฑิตพร) (สแกน 1 แผ่น)",
    },
    {
      id: "04201/2566",
      from: "ศูนย์อำนวยความปลอดภัยทางถนน",
      title: "แผนแม่บทความปลอดภัยทางถนน พ.ศ. 2565-2570 (สแกน 4 แผ่น)",
    },
    {
      id: "04201/2566",
      from: "ศูนย์อำนวยความปลอดภัยทางถนน",
      title: "แผนแม่บทความปลอดภัยทางถนน พ.ศ. 2565-2570 (สแกน 4 แผ่น)",
    },
    {
      id: "04201/2566",
      from: "ศูนย์อำนวยความปลอดภัยทางถนน",
      title: "แผนแม่บทความปลอดภัยทางถนน พ.ศ. 2565-2570 (สแกน 4 แผ่น)",
    },
  ];

  return (
    <React.Fragment>
      {/* <Card>
        <CardBody> */}
          <Row style={{ display: "flex", alignItems: "center" }} className="mt-3">
            <Col>
              <h5>
                {/* <i className="fa-solid fa-books font-size-20 me-2"></i> */}
                {/* สารบรรณ */}
                ตารางแสดงข้อมูลหนังสือนำเข้า
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
              <div style={{ overflowX: "scroll" }}>
                <Table striped hover className="mt-2" style={{ whiteSpace: "nowrap" }}>
                  <thead className="table-primary" >
                    <tr>
                      <th className="text-center">เลขทะเบียนกลาง</th>
                      <th>จาก</th>
                      <th>เรื่อง</th>
                    </tr>
                  </thead>
                  <tbody className="table-light">
                    {data.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-center">{item.id}</td>
                          <td>{item.from}</td>
                          <td>{item.title}</td>
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
  );
};

export default Sarabun;
