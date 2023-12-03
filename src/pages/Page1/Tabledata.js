import React, { useEffect, useMemo } from "react";
import { Fragment } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
  Table,
} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { GetCookieData, GetCookieToken } from "../Cookie/GetCookie";
import axios from "axios";
import { useState } from "react";
import LoadingPage from "../TESTPage/LoadingPage";
import FadeIn from "react-fade-in/lib/FadeIn";
import TableContainerReduce from "../Reducetex/TableContainerReduceAdmin";
import TableContainerUser from "../Tax/TableContainerUser";
import dayjs from "dayjs";
import TableContainerEvaluate from "./TableContainerEvaluate";
import EvaluateForm from "./EvaluateForm";

const API_URL = process.env.REACT_APP_API_CORS;

function Tabledata() {
  const token = GetCookieToken("userToken");
  const userData = GetCookieData("userData");

  console.log(userData);

  const [evaluateData, setEvaluateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataSelect, setDataSelect] = useState(
    new Date().getFullYear() + 543 + 1
  );
  const [roundYear, setRoundYear] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataInfo, setDataInfo] = useState([]);
  const [sectionFrom, setSectionFrom] = useState(false);
  const [evaluateFormID, setEvaluateFormID] = useState(null);
  const [evaluateSalaryFormID, setEvaluateSalaryFormID] = useState(null);

  // const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [years, setYears] = useState([]);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const OctMonth = new Date(new Date().getFullYear() - 1, 9).getMonth() + 1;

  useEffect(() => {
    if (currentMonth >= OctMonth) {
      const yearArray = Array.from(
        { length: 7 },
        (_, index) => currentYear + 543 + 2 - index
      );
      setYears(yearArray);
    } else {
      const yearArray = Array.from(
        { length: 7 },
        (_, index) => currentYear + 543 - index
      );
      setYears(yearArray);
    }
  }, [currentYear]);
  // const [role, setRole] = useState(null);

  const fetchEvaluate = () => {
    const url = `${API_URL}/api/evaluateSalary/datatable`;
    const params = new URLSearchParams({
      page: currentPage,
      size: 10,
      "order[0]": "user_id",
      "order[1]": "ASC",
      // search: pushkeyword,
      "filter[budget_year][0]": dataSelect,
      "filter[round][0]": roundYear,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    };
    axios
      .get(url, config)
      .then(response => {
        setEvaluateData(response.data.result);
        // console.log(response.data.result);
        setDataInfo(() => response.data.info);
        setTotalPages(Math.ceil(response.data.info.totalRows / 10));
        console.log(response.data);
        console.log(response.data.result?.map(i => i.user_name));
      })
      .catch(error => console.error("Error:", error));
  };

  const handleButtonClick = value => {
    setSectionFrom(false);
    setLoading(true);

    setTimeout(() => {
      fetchEvaluate();
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetchEvaluate();
      setLoading(false);
    }, 1500);
  }, [dataSelect, roundYear, currentPage]);

  const handleSwarp = (id, evaluate_salary_id) => {
    setSectionFrom(true);
    setEvaluateFormID(id);
    setEvaluateSalaryFormID(evaluate_salary_id);
  };

  return (
    <Fragment>
      {loading ? (
        <LoadingPage />
      ) : sectionFrom === false ? (
        <FadeIn>
          <div className="">
            <Container fluid>
              {/* <Breadcrumb title="Home" breadcrumbItem="ใบภาษี" /> */}
              <h4 className="mb-2">การะประเมินตนเอง</h4>
              <Row className="mb-3">
                <Col lg={3}>
                  <InputGroup>
                    <InputGroupText>ปีงบประมาณ : </InputGroupText>
                    <Input
                      className="me-2"
                      name="budget_year"
                      // style={{ width: "15%" }}
                      type="select"
                      placeholder="...กรุณาใส่คำที่ต้องการค้นหา"
                      value={dataSelect}
                      onChange={e =>
                        setDataSelect(
                          e.target.options[e.target.selectedIndex].text
                        )
                      }
                    >
                      {years.map(year => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Input>
                  </InputGroup>
                </Col>
                <Col lg={3}>
                  <InputGroup>
                    <InputGroupText>รอบ : </InputGroupText>
                    <Input
                      type="select"
                      name="round"
                      value={roundYear}
                      onChange={e => setRoundYear(e.target.value)}
                      placeholder="...กรุณาใส่คำที่ต้องการค้นหา"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Input>
                  </InputGroup>
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}></Col>
              </Row>

              <Table
                className="align-middle"
                striped
                style={{
                  overflow: "scroll",
                }}
                responsive
              >
                <thead className="table-light" style={{ whiteSpace: "nowrap" }}>
                  <tr>
                    <th>ปี</th>
                    <th>รอบ</th>
                    <th>ผู้รับการประเมิน</th>
                    <th>วันที่ส่งแบบประเมิน</th>
                    <th>คะแนน</th>
                    <th>การประเมิน</th>
                    <th>สถานะ</th>
                    <th>ประเมินตนเอง</th>
                    <th>
                      ผลการประเมิน
                      <br />
                      ผู้บังคับบัญชา
                      <br />
                      (ผอ.กอง/รองฯ)
                    </th>
                    <th>
                      ผลการ
                      <br />
                      ประเมิน
                      <br />
                      สุดท้าย
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {evaluateData.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center fs-5">
                        ไม่มีข้อมูล
                      </td>
                    </tr>
                  ) : (
                    evaluateData.map((i, index) => {
                      return (
                        <tr key={index}>
                          <td>{i.budget_year}</td>

                          <td>{i.round}</td>
                          <td>{i.user_name}</td>
                          <td>
                            {i.confirm_date === null
                              ? ""
                              : dayjs.utc(i.confirm_date).format("DD/MM/YYYY")}
                          </td>
                          <td>
                            {i.show_score === null ? "0.00" : i.show_score}
                          </td>
                          <td>
                            {i.show_score === null
                              ? ""
                              : Math.floor(i.show_score) >= 90 &&
                                Math.floor(i.show_score) <= 100
                              ? "ดีเด่น"
                              : Math.floor(i.show_score) >= 80 &&
                                Math.floor(i.show_score) <= 89
                              ? "ดีมาก"
                              : Math.floor(i.show_score) >= 70 &&
                                Math.floor(i.show_score) <= 79
                              ? "ดี"
                              : Math.floor(i.show_score) >= 60 &&
                                Math.floor(i.show_score) <= 69
                              ? "พอใช้"
                              : Math.floor(i.show_score) < 60
                              ? "ต้องปรับปรุง"
                              : ""}
                          </td>
                          <td>
                            {i.status === "0"
                              ? "ไม่มีข้อมูล"
                              : i.status === "1"
                              ? "บันทึกร่าง"
                              : i.status === "2"
                              ? "รอรับการประเมิน"
                              : i.status === "3"
                              ? "เสร็จสิ้นการประเมิน"
                              : i.status === "4"
                              ? "ส่งกลับ"
                              : i.status === "5"
                              ? "เสร็จสิ้นการประเมิน"
                              : i.status === "9"
                              ? "เข้าคณะกรรมการกลั่นกรอง"
                              : ""}
                          </td>
                          <td>
                            <Button
                              color="success"
                              onClick={() => {
                                handleSwarp(i.user_id, i.evaluate_salary_id);
                              }}
                            >
                              <i className="fa-regular fa-print me-2"></i>
                              พิมพ์
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </Table>
              <Row>
                <Col>
                  <Badge color="secondary" className="p-2 bg-opacity-10 mx-2">
                    <div
                      style={{ fontWeight: "bolder" }}
                      className="text-secondary fs-6 pt-1"
                    >
                      ทั้งหมด {dataInfo.totalRows} รายการ
                    </div>
                  </Badge>
                </Col>
                <Col className="d-flex justify-content-end">
                  <Pagination>
                    <PaginationItem disabled={currentPage === 1}>
                      <PaginationLink first onClick={() => setCurrentPage(1)} />
                    </PaginationItem>
                    <PaginationItem disabled={currentPage === 1}>
                      <PaginationLink
                        previous
                        onClick={() => setCurrentPage(currentPage - 1)}
                      />
                    </PaginationItem>
                    <Badge color="info" className="p-2 bg-opacity-10 mx-2">
                      <div
                        style={{ fontWeight: "bold" }}
                        className="text-info fs-5 pt-1"
                      >
                        Page : {currentPage}
                      </div>
                    </Badge>

                    <PaginationItem
                      disabled={
                        currentPage === dataInfo.totalPage || totalPages === 0
                      }
                    >
                      <PaginationLink
                        next
                        onClick={() => setCurrentPage(dataInfo.currentPage + 1)}
                      />
                    </PaginationItem>
                    <PaginationItem
                      disabled={currentPage === totalPages || totalPages === 0}
                    >
                      <PaginationLink
                        last
                        onClick={() => setCurrentPage(dataInfo.totalPage)}
                      />
                    </PaginationItem>
                  </Pagination>
                </Col>
              </Row>
            </Container>
          </div>
        </FadeIn>
      ) : loading ? (
        <LoadingPage />
      ) : (
        <FadeIn>
          <EvaluateForm
            onButtonClick={handleButtonClick}
            user_id={evaluateFormID}
            evaluate_salary_id={evaluateSalaryFormID}
            budget_year={dataSelect}
            round={roundYear}
          />

          <Button
            color="info"
            onClick={() => {
              setSectionFrom(false);
            }}
          >
            กลับไปหน้าแรก
          </Button>
        </FadeIn>
      )}
    </Fragment>
  );
}

export default Tabledata;
