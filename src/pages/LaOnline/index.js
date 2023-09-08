import React, { useState } from "react";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import FormTypeLar from "./FormTypeLar";
import TableForm from "./TableForm";
import TableHistory from "./TableHistory";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ReportType from "./ReportLar/ReportType";
import SelectReport from "./ReportLar/SelectReport";

const LarOnline = () => {

  const [selectReport, setSelectReport] = useState(null)

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="Home" breadcrumbItem="การลาออนไลน์" />
        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row
          className="mb-2"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Col xl={9} className="pt-2">
            <h5 className="font-size-16 card-title">
              <i className="fa-solid fa-circle-check font-size-16 me-2"></i>
              ตารางแสดงข้อมูลการลา
            </h5>
          </Col>
          <Col xl={3} className="d-flex justify-content-end">
            <FormTypeLar />
          </Col>
        </Row>
        <Row>
          <Col >
            <TableForm />
          </Col>
        </Row>
        <Row
          className=""
        >
          <Col xl={4}>
            <Row>
              <Col>
                <h5 className="font-size-16 card-title">
                  <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                    ประวัติการลา
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <TableHistory />
              </Col>
            </Row>
          </Col>
          <Col xl={4}>
            <Row>
              <Col>
                <h5 className="font-size-16 card-title">
                  <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                    รายงานการลา
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
              <Card>
                <CardBody>
                  <Row style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
                    <Label className='text-end' xl={3}>ประเภทการลา</Label>
                    <Col xl={4}>
                      <Input type='select' onChange={(e) => setSelectReport(e.target.value)}>
                        <option value={null}>กรุณาระบุ</option>
                        {ReportType.map((item,idx) => {
                          return (
                            <option key={idx} value={item.no}>{item.name}</option>
                          )
                        })}
                      </Input>
                    </Col>
                  </Row>
                  {selectReport && <SelectReport idReport={selectReport} />}
                </CardBody>
              </Card>
              </Col>
            </Row>
          </Col>
          <Col xl={4}>
            <Row>
              <Col>
                <h5 className="font-size-16 card-title">
                  <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                    ประวัติการลา
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <TableHistory />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LarOnline;
