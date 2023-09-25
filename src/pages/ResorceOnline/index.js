import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import BorrowedTable from "./BorrowedTable";
import Flatpickr from "react-flatpickr";
import ModalToolType from "./ModalToolType";
import ToolTypeTable from "./ToolTypeTable";
import ToolDetailTable from "./ToolDetailTable";
import ModalAddTool from "./ModalAddTool";

const ResorceOnline = () => {
  const [data, setData] = React.useState({
    userName: "นวสรณ์  สร้อยโพธิ์พันธุ์",
    borrowDate: "",
    borrowReturn: "",
    tootType: "",
    forWork: "",
    note: "",
  });

  const [checkboxs, setCheckboxs] = React.useState({
    box1: false,
    box2: false,
  });

  const [openBorrow, setOpenBorrow] = React.useState(false);

  const toggleModal1 = () => {
    setOpenBorrow(!openBorrow);
  };

  return (
    <div className="page-content">
      <Row>
        <Col xxl={8} xl={6} lg={8}>
          
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <h5 className="font-size-16 card-title">
                        <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                        รายการยืมอุปกรณ์
                      </h5>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "end" }}>
                      <Button color="info" onClick={toggleModal1}>
                        เพิ่มการยืม
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <BorrowedTable />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <h5 className="font-size-16 card-title">
                        <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                        ข้อมูลอุปกรณ์
                      </h5>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "end" }}>
                      <ModalAddTool />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <ToolDetailTable />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <h5 className="font-size-16 card-title">
                    <i className="fa-solid fa-clipboard-list-check font-size-16 me-2"></i>
                    ประเภทอุปกรณ์
                  </h5>
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <ModalToolType />
                </Col>
              </Row>
              <Row>
                <Col>
                  <ToolTypeTable />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal centered isOpen={openBorrow} toggle={toggleModal1}>
        <Form>
          <ModalHeader>เพิ่มการยืมอุปกรณ์</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label className="text-end" xl={3}>
                ผู้ใช้งาน
              </Label>
              <Col xl={5}>
                <Input type="text" value={data.userName} disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={3}>
                วันที่ยืม
              </Label>
              <Col xl={5}>
                <Flatpickr
                  className="form-control d-block"
                  placeholder="วัน/เดือน/ปี   เวลา"
                  options={{
                    // altInput: true,
                    enableTime: true,
                    // time_24hr: true,
                    dateFormat: "d-m-Y H:i",
                    ariaDateFormat: "F j, Y",
                    locale: "th",
                  }}
                  value={data.borrowDate}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, borrowDate: e[0] }))
                  }
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={3}>
                กำหนดคืน
              </Label>
              <Col xl={5}>
                <Flatpickr
                  className="form-control d-block"
                  placeholder="วัน/เดือน/ปี   เวลา"
                  options={{
                    // altInput: true,
                    enableTime: true,
                    // time_24hr: true,
                    dateFormat: "d-m-Y H:i",
                    ariaDateFormat: "F j, Y",
                    locale: "th",
                  }}
                  value={data.borrowReturn}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, borrowReturn: e[0] }))
                  }
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={3}>
                จองอุปกรณ์
              </Label>
              <Col xl={5}>
                <Input type="select">
                  <option>--- เลือกประเภท ---</option>
                  <option>Mouse</option>
                  <option>Keyboard</option>
                  <option>Ipad</option>
                  <option>Notebook</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={4}>
                รายการอุปกรณ์ที่เลือก
              </Label>
              <Col xl={5}>
                <Input disabled />
              </Col>
            </FormGroup>
            <FormGroup row style={{ display: "flex", alignItems: "center" }}>
              <Col xl={2}></Col>
              <Col xl={1}>
                <Input
                  type="checkbox"
                  name="inorout"
                  checked={checkboxs.box1}
                  onChange={(e) => {
                    setCheckboxs((prev) => ({
                      ...prev,
                      box1: true,
                      box2: false,
                    }));
                  }}
                />
              </Col>
              <Label xl={3}>ภายในองค์กร</Label>
              <Col xl={4}>
                <Input type="select" disabled={checkboxs.box2} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xl={2}></Col>
              <Col xl={1}>
                <Row>
                  <Col>
                    <Input
                      type="checkbox"
                      name="inorout"
                      checked={checkboxs.box2}
                      onChange={(e) => {
                        setCheckboxs((prev) => ({
                          ...prev,
                          box2: true,
                          box1: false,
                        }));
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                เพื่อใช้งาน
              </Label>
              <Col xl={8}>
                <Input type="text" placeholder="สำหรับใช้งานอะไร" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="text-end" xl={2}>
                หมายเหตุ
              </Label>
              <Col xl={8}>
                <Input type="text" />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggleModal1} className="me-2">
              Close
            </Button>
            <Button type="submit">บันทึก</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default ResorceOnline;
