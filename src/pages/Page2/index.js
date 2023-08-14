import React, { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ListInlineItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Breadcrumb from '../../components/Common/Breadcrumb';

ChartJS.register(...registerables);

const Page2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    labels: ['ลาป่วย ลากิจส่วนตัว ลาคลอดบุตร', 'คงเหลือ'],
    datasets: [
      {
        data: [15, 15],
        backgroundColor: ['#49447b', '#857ca3'],
        borderWidth: 0,
      },
    ],
  };
  const data2 = {
    labels: ['ลาพักผ่อน               ', 'คงเหลือ'],
    datasets: [
      {
        data: [7, 8],
        backgroundColor: ['#344c2c', '#718569'],
        borderWidth: 0,
      },
    ],
  };
  const data3 = {
    labels: ['ขออนุญาตไปต่างประเทศ', 'คงเหลือ'],
    datasets: [
      {
        data: [2, 13],
        backgroundColor: ['#34243c', '#716677'],
        borderWidth: 0,
      },
    ],
  };
  const data4 = {
    labels: ['ปฏิบัติราชการนอกสำนักงาน', 'คงเหลือ'],
    datasets: [
      {
        data: [10, 20],
        backgroundColor: ['#3c1c2c', '#715b66'],
        borderWidth: 0,
      },
    ],
  };
  const data5 = {
    labels: ['รับรองการมาปฏิบัติราชการ', 'คงเหลือ'],
    datasets: [
      {
        data: [2, 13],
        backgroundColor: ['#44445c', '#7f7c8d'],
        borderWidth: 0,
      },
    ],
  };
  const data6 = {
    labels: ['ติดตามคู่สมรส', 'คงเหลือ'],
    datasets: [
      {
        data: [10, 10],
        backgroundColor: ['#28342c', '#6b7171'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top', // คุณสามารถเปลี่ยนเป็น 'top', 'left', 'right' หรืออื่น ๆ ได้
        labels: {
          usePointStyle: true, // เพื่อให้เป็นวงกลม
          padding: 20, // การระยะห่างระหว่างข้อความภายใน legend
          fontStyle: 'normal', // ใช้ตัวหนาเมื่อข้อความเป็นบรรทัดถัดไป
          // generateLabels: function (chart) {
          //   const original = chart.legend.legendItems;
          //   const generated =
          //     chart.defaults.global.legend.labels.generateLabels(chart);

          //   generated.forEach((label, index) => {
          //     label.text += '\nNext Line'; // เพิ่มข้อความลงบรรทัดถัดไป
          //     label.fontStyle = 'normal'; // ใช้ตัวหนาเมื่อข้อความเป็นบรรทัดถัดไป
          //     original[index].lineHeight = 1.2; // ปรับระยะห่างบรรทัด
          //   });

          //   return generated;
          // },
        },
      },
    },
  };

  const handleCanvasOpen = () => {
    setIsOpen(true);
  };

  const handleCanvasClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="page-content">
      <Container fluid={true}>
      <Breadcrumb title="Home" breadcrumbItem="การลาออนไลน์" />
        <Row>
          <Col xl={4} lg={12} md={12} sm={12} xs={12}>
            <ListGroup>
              <div className="py-5 lg-py-0">
                <ListGroupItem className="p-3 pt-4">
                  <i className="fa-solid fa-clock-rotate-left pe-1"></i>
                  <ListInlineItem>ประวัติการลาของท่าน</ListInlineItem>
                </ListGroupItem>
                <ListGroupItem>
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>
                      ลาป่วย ลากิจส่วนตัว ลาคลอดบุตร 50%
                    </ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      15/30 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    value={50}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>ลาพักผ่อน 46.67%</ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      7/15 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    color="success"
                    value={46.67}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>ขออนุญาตไปต่างประเทศ 13.33%</ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      2/15 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    color="info"
                    value={13.33}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>ลาอุปสมบท 0%</ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      0/30 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    color="warning"
                    value={0}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>ลาไปศึกษา/ฝึกอบรมฯ 11.11%</ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      5/45 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    color="secondary"
                    value={11.11}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>
                      ปฏิบัติราชการนอกสำนักงาน 33.33%
                    </ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      10/30 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    value={33.33}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>
                      รับรองการมาปฏิบัติราชการ 13.33%
                    </ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      2/15 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    color="success"
                    value={13.33}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>ติดตามคู่สมรส 50%</ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      10/20 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    color="info"
                    value={50}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                  <ListInlineItem className="d-flex justify-content-between me-0">
                    <ListInlineItem>อื่นๆ 60%</ListInlineItem>
                    <CardSubtitle className="mb-0 text-secondary" tag="h6">
                      18/30 วัน
                    </CardSubtitle>
                  </ListInlineItem>
                  <Progress
                    className="mb-2"
                    color="warning"
                    value={60}
                    style={{ borderRadius: '30px', height: '5px' }}
                    barStyle={{ borderRadius: '30px' }}
                  />
                </ListGroupItem>
              </div>
            </ListGroup>
          </Col>
          <Col xl={8} lg={12} md={12} sm={12} xs={12}>
            <Container fluid={true}>
              <Row
                className="justify-content-center"
                style={{ display: 'flex', flexWrap: 'wrap' }}
              >
                <Col
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Card style={{ height: '250px' }}>
                    <CardBody>
                      <CardTitle className="text-center">
                        ลาป่วย ลากิจส่วนตัว ลาคลอดบุตร
                      </CardTitle>

                      <div>
                        <Pie data={data} options={options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Card style={{ height: '250px' }}>
                    <CardBody>
                      <CardTitle className="text-center">ลาพักผ่อน</CardTitle>
                      <br />
                      <div>
                        <Pie data={data2} options={options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Card style={{ height: '250px' }}>
                    <CardBody>
                      <CardTitle className="text-center">
                        ติดตามคู่สมรส
                      </CardTitle>
                      <br />
                      <div>
                        <Pie data={data6} options={options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Card style={{ height: '250px' }}>
                    <CardBody>
                      <CardTitle className="text-center">
                        ปฏิบัติราชการนอกสำนักงาน
                      </CardTitle>
                      <div>
                        <Pie data={data4} options={options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Card style={{ height: '250px' }}>
                    <CardBody>
                      <CardTitle className="text-center">
                        รับรองการมาปฏิบัติราชการ
                      </CardTitle>
                      <div>
                        <Pie data={data5} options={options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Card style={{ height: '250px' }}>
                    <CardBody>
                      <CardTitle className="text-center">
                        ขออนุญาตไปต่างประเทศ
                      </CardTitle>
                      <div>
                        <Pie data={data3} options={options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem className="d-flex justify-content-between">
                <ListInlineItem>
                  <i className="fa-solid fa-calendars pe-2"></i>
                  ตรวจสอบสถานะการลา
                </ListInlineItem>
                <ListInlineItem>
                  <Button onClick={handleCanvasOpen} color="info">
                    +
                  </Button>
                  <Offcanvas
                    direction="end"
                    isOpen={isOpen}
                    toggle={handleCanvasClose}
                    style={{ width: '700px' }}
                  >
                    <OffcanvasHeader toggle={handleCanvasClose}>
                      <i className="fa-solid fa-bell-exclamation pe-2"></i>
                      แบบฟอร์มการลา
                    </OffcanvasHeader>
                    <OffcanvasBody
                      style={{
                        overflow: 'hidden',
                        marginBottom: '-15px',
                        overflowY: 'scroll',
                        maxHeight: '80vh',
                      }}
                    >
                      <Container>
                        <Form>
                          <FormGroup row>
                            <Label for="exampleEmail" sm={2}>
                              ประเภทการลา :
                            </Label>
                            <Col sm={10}>
                              <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                style={{ width: '300px', borderWidth: '4px' }}
                              >
                                <option value="" disabled selected>
                                  กรุณาระบุ
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Input>
                            </Col>
                          </FormGroup>
                          <ListInlineItem
                            row
                            className="d-flex align-items-center mb-0"
                          >
                            <Label
                              className="pb-1"
                              for="examplePassword"
                              sm={2}
                            >
                              เขียนที่ :
                            </Label>
                            <Col sm={10}>
                              <ListInlineItem style={{ paddingLeft: '5px' }}>
                                สำนักงาน ก.พ.ร. วันที่ซ 31 มีนาคม 2566
                              </ListInlineItem>
                            </Col>
                          </ListInlineItem>
                          <ListInlineItem
                            row
                            className="d-flex align-items-center mb-0"
                          >
                            <Label
                              className="pb-1"
                              for="examplePassword"
                              sm={2}
                            >
                              เรื่อง :
                            </Label>
                            <Col sm={10}>
                              <ListInlineItem style={{ paddingLeft: '5px' }}>
                                ขอลาป่วย
                              </ListInlineItem>
                            </Col>
                          </ListInlineItem>
                          <ListInlineItem
                            row
                            className="d-flex align-items-center mb-0"
                          >
                            <Label
                              className="pb-1"
                              for="examplePassword"
                              sm={2}
                            >
                              เรียน :
                            </Label>
                            <Col sm={10}>
                              <ListInlineItem style={{ paddingLeft: '5px' }}>
                                ผู้อำนวยการ กลุ่มเทคโนโลยีสารสนเทศ
                              </ListInlineItem>
                            </Col>
                          </ListInlineItem>
                          <ListInlineItem
                            row
                            className="d-flex align-items-center mb-0"
                          >
                            <Label
                              className="pb-1"
                              for="examplePassword"
                              sm={2}
                            >
                              ชื่อ นามสกุล :
                            </Label>
                            <Col sm={10}>
                              <ListInlineItem style={{ paddingLeft: '5px' }}>
                                โอม ทองพิทักษ์
                              </ListInlineItem>
                            </Col>
                          </ListInlineItem>
                          <ListInlineItem
                            row
                            className="d-flex align-items-center mb-0"
                          >
                            <Label
                              className="pb-1"
                              for="examplePassword"
                              sm={2}
                            >
                              ตำแหน่ง :
                            </Label>
                            <Col sm={10}>
                              <ListInlineItem style={{ paddingLeft: '5px' }}>
                                นักวิชาการ คอมพิวเตอร์
                              </ListInlineItem>
                            </Col>
                          </ListInlineItem>
                          <ListInlineItem
                            row
                            className="d-flex align-items-center mb-0"
                          >
                            <Label
                              className="pb-1"
                              for="examplePassword"
                              sm={2}
                            >
                              สังกัด/กอง :
                            </Label>
                            <Col sm={10}>
                              <ListInlineItem style={{ paddingLeft: '5px' }}>
                                กลุ่มเทคโนโลยีสารสนเทศ
                              </ListInlineItem>
                            </Col>
                          </ListInlineItem>
                          <FormGroup row className="mt-2">
                            <Label for="exampleEmail" sm={2}>
                              ขอลา :
                            </Label>
                            <Col sm={10}>
                              <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                style={{ width: '200px', borderWidth: '4px' }}
                              >
                                <option value="" disabled selected>
                                  ลาป่วย
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Input>
                            </Col>
                          </FormGroup>

                          <FormGroup row className="mb-2">
                            <Label for="exampleText" sm={2}>
                              เนื่องจาก
                            </Label>
                            <Col sm={10}>
                              <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                                style={{ width: '100%', borderWidth: '4px' }}
                              />
                            </Col>
                          </FormGroup>
                          <OffcanvasBody className="ps-0">
                            <Container>
                              <Form>
                                <FormGroup row className="mb-0 ps-0">
                                  <Label for="examplePassword" sm={2}>
                                    ตั้งแต่วันที่ :
                                  </Label>
                                  <Col sm={4}>
                                    <Input
                                      id="exampleDate"
                                      name="date"
                                      placeholder="date placeholder"
                                      type="date"
                                      style={{
                                        width: '100%',
                                        borderWidth: '4px',
                                      }}
                                    />
                                  </Col>
                                  <Label for="exampleEmail" sm={2}>
                                    ช่วงเวลา :
                                  </Label>
                                  <Col sm={4}>
                                    <Input
                                      id="exampleSelect"
                                      name="select"
                                      type="select"
                                      style={{
                                        width: '100%',
                                        borderWidth: '4px',
                                      }}
                                    >
                                      <option value="" disabled selected>
                                        08.30
                                      </option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                              </Form>
                            </Container>
                          </OffcanvasBody>
                          <OffcanvasBody className="ps-0">
                            <Container>
                              <Form>
                                <FormGroup row className="mb-0 ps-0">
                                  <Label for="examplePassword" sm={2}>
                                    ถึงวันที่ :
                                  </Label>
                                  <Col sm={4}>
                                    <Input
                                      id="exampleDate"
                                      name="date"
                                      placeholder="date placeholder"
                                      type="date"
                                      style={{
                                        width: '100%',
                                        borderWidth: '4px',
                                      }}
                                    />
                                  </Col>
                                  <Label for="exampleEmail" sm={2}>
                                    ช่วงเวลา :
                                  </Label>
                                  <Col sm={4}>
                                    <Input
                                      id="exampleSelect"
                                      name="select"
                                      type="select"
                                      style={{
                                        width: '100%',
                                        borderWidth: '4px',
                                      }}
                                    >
                                      <option value="" disabled selected>
                                        08.30
                                      </option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                              </Form>
                            </Container>
                          </OffcanvasBody>

                          <FormGroup row className="mb-2 mt-3">
                            <Label for="exampleText" sm={2}>
                              ระยะเวลา
                            </Label>
                            <Col
                              sm={10}
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              <Input
                                id="exampleText"
                                name="text"
                                style={{ width: '170px', borderWidth: '4px' }}
                              />
                              <ListInlineItem className="ps-2">
                                วัน
                              </ListInlineItem>
                            </Col>
                          </FormGroup>
                          <FormGroup check row>
                            <br />

                            <Col
                              xs={{ offset: 3, size: 10 }}
                              sm={{
                                offset: 8,
                                size: 10,
                              }}
                            >
                              <Button className="me-2" color="info">
                                บันทึก
                              </Button>
                              <Button color="danger">ยกเลิก</Button>
                            </Col>
                          </FormGroup>
                        </Form>
                      </Container>
                    </OffcanvasBody>
                  </Offcanvas>
                </ListInlineItem>
              </ListGroupItem>
              <ListGroupItem className="p-0">
                <Table responsive style={{ whiteSpace: 'nowrap' }}>
                  <thead className="text-center">
                    <tr>
                      <th>
                        <div className="d-flex align-items-center">
                          ลำดับ
                          <i className="fa-solid fa-sort-up ps-2 fa-sm"></i>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center">
                          เรื่อง
                          <i className="fa-solid fa-sort ps-2 fa-sm"></i>
                        </div>
                      </th>
                      <th></th>
                      <th>
                        <div className="d-flex align-items-center">
                          ตั้งแต่วันที่
                          <i className="fa-solid fa-sort ps-2 fa-sm"></i>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center">
                          ถึงวันที่
                          <i className="fa-solid fa-sort ps-2 fa-sm"></i>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center">
                          รวม<i className="fa-solid fa-sort ps-2 fa-sm"></i>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center">
                          วันที่ส่งใบลา
                          <i className="fa-solid fa-sort ps-2 fa-sm"></i>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center">
                          จำนวนครั้ง
                          <i className="fa-solid fa-sort ps-2 fa-sm"></i>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center">
                          วันลาคงเหลือ
                          <i className="fa-solid fa-sort ps-2 fa-sm"></i>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center">
                          สถานะ<i className="fa-solid fa-sort ps-2 fa-sm"></i>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center ">
                    <tr>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">1</div>
                      </td>
                      <td className="align-middle ">
                        <div className="d-flex align-items-center">
                          <span className="fs-6 ml-2">ลาป่วย</span>
                        </div>
                      </td>
                      <td className="align-middle"></td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className=" fa-solid fa-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">16/03/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-solid fa-clock-seven fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">21/03/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">7</div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-solid fa-alarm-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">16/03/2566 08:42</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>2</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>15</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <Badge color="success" className="p-2 ">
                            <span className=" fs-6">อนุมัติ</span>
                          </Badge>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">2</div>
                      </td>
                      <td className="align-middle ">
                        <div className="d-flex align-items-center">
                          <span className="fs-6 ml-2">ลากิจ</span>
                        </div>
                      </td>
                      <td className="align-middle"></td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">09/04/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-clock-seven fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">11/04/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">3</div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-alarm-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">08/04/2566 14:25</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>3</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>9</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <Badge color="info" className="p-2 ">
                            <span className=" fs-6">รออนุมัติ</span>
                          </Badge>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">3</div>
                      </td>
                      <td className="align-middle ">
                        <div className="d-flex align-items-center">
                          <span className="fs-6 ml-2">ลาพักผ่อน</span>
                        </div>
                      </td>
                      <td className="align-middle"></td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">02/05/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-clock-seven fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">03/05/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">1</div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-alarm-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">30/04/2566 11:22</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>3</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>20</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <Badge color="danger" className="p-2 ">
                            <span className=" fs-6">ไม่อนุมัติ</span>
                          </Badge>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">4</div>
                      </td>
                      <td className="align-middle ">
                        <div className="d-flex align-items-center">
                          <span className="fs-6 ml-2">
                            ขออนุญาตไปต่างประเทศ
                          </span>
                        </div>
                      </td>
                      <td className="align-middle"></td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">13/07/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-clock-seven fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">18/07/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">5</div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-alarm-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">11/07/2566 09:13</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>2</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>11</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <Badge color="info" className="p-2 ">
                            <span className=" fs-6">รออนุมัติ</span>
                          </Badge>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">5</div>
                      </td>
                      <td className="align-middle ">
                        <div className="d-flex align-items-center">
                          <span className="fs-6 ml-2">
                            ปฏิบัติราชการนอกสำนักงาน
                          </span>
                        </div>
                      </td>
                      <td className="align-middle"></td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">20/08/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-clock-seven fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">25/08/2566</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">7</div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <i className="fa-sharp fa-solid fa-alarm-clock fa-xl pe-1 pe-1"></i>
                          <span className="fs-6">19/08/2566 18:42</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>4</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <span>5</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <Badge color="success" className="p-2 ">
                            <span className=" fs-6">อนุมัติ</span>
                          </Badge>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </ListGroupItem>
              <ListGroupItem>
                <Row className="d-flex justify-content-between me-0">
                  <Col xl={6}>
                    <ListGroupItemText>
                      แสดงรายการที่ 1 ถึง 5 จากทั้งหมด 5 รายการ
                    </ListGroupItemText>
                  </Col>
                  <Col
                    xl={{ offset: 3, size: 9 }}
                    xs={{ offset: 3, size: 6 }}
                    className="d-flex justify-content-end"
                  >
                    <ListGroupItemText>
                      <Pagination>
                        <PaginationItem disabled>
                          <Button
                            color="info"
                            style={{
                              background: 'transparent',
                              border: 'none',
                            }}
                          >
                            <i
                              className="fa-solid fa-chevron-left pe-2"
                              style={{ color: '#065ff9' }}
                            ></i>
                          </Button>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink
                            style={{ fontSize: '12px' }}
                            className="bg-info px-2 py-1"
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem disabled>
                          <Button
                            color="info"
                            style={{
                              background: 'transparent',
                              border: 'none',
                            }}
                          >
                            <i
                              className="fa-solid fa-chevron-right ps-2"
                              style={{ color: '#065ff9' }}
                            ></i>
                          </Button>
                        </PaginationItem>
                      </Pagination>
                    </ListGroupItemText>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page2;
