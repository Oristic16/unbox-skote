import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
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
} from "reactstrap";
import { GetCookieData, GetCookieToken } from "../Cookie/GetCookie";
import Flatpickr from "react-flatpickr";

const TimeHistoryEmployeeTable = () => {

  const baseURL = process.env.REACT_APP_API_CORS;

  const user = GetCookieData("userData");
  const user_id = user.user_id;

  const token = GetCookieToken("userToken");

  const [timeHistory, setTimeHistory] = useState([]);
  const [entryHistory, setEntryHistory] = useState([]);
  const [outHistory, setOutHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const getEntryHistory = (page, id) => {
    axios
      .get(
        baseURL +
          `/api/time/history?page=${page}&size=10&order[0]=scan_date&order[1]=DESC&filter[user_id][0]=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setTimeHistory(res.data.result);
        setCurrentPage(res.data.info.currentPage);
        setTotalPage(res.data.info.totalPage);
        console.log("Get Timehistory: ", res);
        console.log("Current Page of Timehistory: ", res.data.info.currentPage);
        console.log("totalPage of Timehistory: ", res.data.info.totalPage);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getEntryHistory(currentPage, user_id);
  }, []);

  const setDataToEntryAndOut = () => {
    setEntryHistory([]);
    setOutHistory([]);
    timeHistory?.map((item) => {
      if (item.entry_exit_status_name === "เข้างาน") {
        setEntryHistory((prev) => [...prev, item]);
      }
      if (item.entry_exit_status_name === "ออกงาน") {
        setOutHistory((prev) => [...prev, item]);
      }
      return null;
    });
  };

  useEffect(() => {
    setDataToEntryAndOut();
  }, [timeHistory]);

  useEffect(() => {
    console.log("EntryHistory :", entryHistory);
    console.log("OutHistory :", outHistory);
  }, [entryHistory, outHistory]);

  const [searchData, setSearchData] = useState({
    
  })

    return (
      <React.Fragment>
        <Row>
          <Col>
            <Form>
              <FormGroup row style={{display:"flex",justifyContent:"end"}}>
                <Label className="text-end" xxl={2}>
                  ค้นหาช่วงวันที่
                </Label>
                <Col xxl={6}>
                  <InputGroup>
                    <InputGroupText>ตั้งแต่วันที่</InputGroupText>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="วัน/เดือน/ปี   เวลา"
                      options={{
                        // altInput: true,
                        enableTime: true,
                        // time_24hr: true,
                        // dateFormat: "d-m-Y",
                        dateFormat: "d-m-Y H:i",
                        ariaDateFormat: "F j, Y",
                        locale: "th",
                      }}
                    />
                    <InputGroupText>ถึงวันที่</InputGroupText>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="วัน/เดือน/ปี   เวลา"
                      options={{
                        // altInput: true,
                        enableTime: true,
                        // time_24hr: true,
                        // dateFormat: "d-m-Y",
                        dateFormat: "d-m-Y H:i",
                        ariaDateFormat: "F j, Y",
                        locale: "th",
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col xxl={2} className="d-flex justify-content-end">
                  <Button className="w-100" color="success">
                    <i className="fas fa-search me-2"></i>
                    ค้นหา
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xxl={12}>
            <Table striped hover style={{ verticalAlign: "middle" }}>
              <thead className="table-dark">
                <tr>
                  <th>วันที่</th>
                  <th>ชื่อ-นามสกุล</th>
                  <th className="text-center">เข้างาน</th>
                  <th className="text-center">ออกงาน</th>
                  <th className="text-center">สถานะ</th>
                  <th className="text-center">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                {entryHistory?.map((item, idx) => {
                  const ScanDate = item.scan_date.split("T");
                  const dateEntry = ScanDate[0];
                  const time = ScanDate[1].split(".");
                  const timeEntry = time[0];
  
                  const match = outHistory?.filter((item2) => {
                    if (
                      item2.scan_date.split("T")[0] ===
                      item.scan_date.split("T")[0]
                    ) {
                      return item2.scan_date.split("T")[1].split(".")[0];
                    }
                  });
                  // console.log("Match :", match[0]?.scan_date);
                  let scanDate = match[0]?.scan_date.split("T")[1].split(".")[0];
                  return (
                    <tr key={idx}>
                      <td>{dateEntry}</td>
                      <td>{item.user_name}</td>
                      <td className="text-center">
                        {item.entry_exit_status === 0 ? timeEntry : null} น.
                      </td>
                      <td className="text-center">
                        {match[0]?.scan_date !== undefined
                          ? scanDate + " น."
                          : "-"}
                      </td>
                      <td className="text-center">
                        {match[0]?.scan_date !== undefined ? "เต็มวัน" : "ขาดงาน"}{" "}
                      </td>
                      <td className="text-center">{item.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <Row
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <Col
                xxl={12}
                style={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <Pagination aria-label="Page navigation example">
                  <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink
                      onClick={() => getEntryHistory(currentPage - 1, user_id)}
                      href="#"
                    >
                      Previous
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">
                      Page {currentPage} of {totalPage}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem disabled={currentPage === totalPage}>
                    <PaginationLink
                      onClick={() => getEntryHistory(currentPage + 1, user_id)}
                      href="#"
                    >
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </Col>
              <Col xxl={6} className="d-flex justify-content-end">
                {/* <h3>ทั้งหมด {totalRows} รายการ</h3> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
}

export default TimeHistoryEmployeeTable