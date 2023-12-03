import React, { Fragment, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Input,
  InputGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
  Table,
} from "reactstrap";
import AddAssign from "./AddAssign";
import EditData from "../EditData";
import LoadingData from "../../TESTPage/LoadingData";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useEffect } from "react";
import { GetCookieToken } from "../../Cookie/GetCookie";
import axios from "axios";
import dayjs from "dayjs";
import EditAssign from "./EditAssign";

const API_URL = process.env.REACT_APP_API_CORS;

function AssignCommander() {
  const [loading, setLoading] = useState(false);
  const [userAssignData, setUserAssignData] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [pushkeyword, setPushKeyword] = useState("");

  const token = GetCookieToken("userToken");

  const fetchUserData = () => {
    const url = `${API_URL}/api/users/position/datatable`;
    const params = new URLSearchParams({
      page: currentPage,
      size: 10,
      "order[0]": "position_id",
      "order[1]": "ASC",
      search: pushkeyword,
      "filter[assign][0]": "1",
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
        console.log(response.data, "TEST1");
        setUserAssignData(response.data.result);
        setDataInfo(() => response.data.info);
        setTotalPages(Math.ceil(response.data.info.totalRows / pageSize));
      })
      .catch(error => console.error("Error:", error));
  };

  useEffect(() => {
    setLoading(true);
    fetchUserData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currentPage, pageSize, pushkeyword]);

  const handleSearch = () => {
    setPushKeyword(() => keyword);
  };

  const handleButtonClick = value => {
    setLoading(true);
    setTimeout(() => {
      fetchUserData();
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchUserData();
      setLoading(false);
    }, 1500);
  }, []);

  const deleteState = id => {
    setUserAssignData(prevData => prevData.filter(item => item.id !== id));
  };

  const fetchDeleteData = async Data_id => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${API_URL}/api/users/position/${Data_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("DeletData :", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Fragment>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
          }}
        >
          <LoadingData />
        </div>
      ) : (
        <FadeIn>
          <Row className="mb-3">
            <Col>
              <InputGroup>
                <Input
                  type="search"
                  style={{ width: "40%" }}
                  placeholder="...กรุณาใส่คำที่ต้องการค้นหา"
                  onChange={e => setKeyword(e.target.value)}
                />
                <Button
                  style={{ display: "flex", alignItems: "center" }}
                  color="primary"
                  onClick={handleSearch}
                >
                  <i className="fa-sharp fa-solid fa-magnifying-glass fa-xl"></i>
                  &nbsp;ค้นหา
                </Button>
              </InputGroup>
            </Col>
            <Col style={{ display: "flex", justifyContent: "end" }}>
              <AddAssign onButtonClick={handleButtonClick} />
            </Col>
          </Row>

          <Row>
            <Col>
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
                    <th>ลำดับ</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>เข้ารับตำแหน่งข้าราชการแทน</th>
                    <th>สำนัก/กอง/กลุ่ม</th>
                    <th>ตำแหน่ง</th>
                    <th>วันที่ได้รับตำแหน่งแทน</th>
                    <th>สถานะผู้ใช้งาน</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {userAssignData.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center fs-5">
                        ไม่มีข้อมูล
                      </td>
                    </tr>
                  ) : (
                    userAssignData.map((user, index) => {
                      let cp = (currentPage - 1) * 10;
                      return (
                        <tr key={index}>
                          <td style={{ fontSize: "16px" }}>{index + cp + 1}</td>
                          <td>{user.user_name}</td>
                          <td>{user.user_name_assigned}</td>
                          <td>
                            {user.org_name === null ? (
                              <Badge
                                color="danger"
                                className="p-2 bg-opacity-10"
                              >
                                <span className="text-danger fs-6">
                                  กรุณากรอกข้อมูลของสำนัก/กอง/กลุ่ม ในการแก้ไข
                                </span>
                              </Badge>
                            ) : (
                              <Badge
                                color="secondary"
                                className="p-2 bg-opacity-10"
                              >
                                <span className="text-secondary fs-6">
                                  {user.org_name}
                                </span>
                              </Badge>
                            )}
                          </td>

                          <td>
                            <Badge
                              color="success"
                              className="p-2 bg-opacity-10"
                            >
                              <span className="text-success fs-6">
                                {user.position_name}
                              </span>
                            </Badge>
                          </td>

                          <td>
                            {user.date_start === null ? (
                              <Badge
                                color="warning"
                                className="p-2 bg-opacity-10"
                              >
                                <span className="text-warning fs-6">
                                  กรุณากรอกวันที่เริ่ม ในการแก้ไข
                                </span>
                              </Badge>
                            ) : (
                              <Badge color="info" className="p-2 bg-opacity-10">
                                <span className="text-info fs-6">
                                  {dayjs
                                    .utc(user.date_start)
                                    .format("DD/MM/YYYY")}
                                </span>
                              </Badge>
                            )}
                          </td>

                          <td>
                            {user.status === 1 ? (
                              <Badge
                                color="success"
                                className="p-2 bg-opacity-10"
                              >
                                <span className="text-success fs-6">
                                  ใช้งาน
                                </span>
                              </Badge>
                            ) : (
                              <Badge
                                color="danger"
                                className="p-2 bg-opacity-10"
                              >
                                <span className="text-danger fs-6">
                                  ไม่ใช้งาน
                                </span>
                              </Badge>
                            )}
                          </td>

                          <td>
                            <EditAssign
                              id={parseInt(user.id)}
                              onButtonClick={handleButtonClick}
                            />

                            <Button
                              className="ms-2 mt-1"
                              color="danger"
                              onClick={() => {
                                window.confirm("คุณต้องการที่จะลบ ใช่หรือไม่?");
                                fetchDeleteData(user.id);
                                deleteState(user.id);
                              }}
                            >
                              <i className="fa-solid fa-trash"></i> ลบ
                            </Button>
                          </td>
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
            </Col>
          </Row>
        </FadeIn>
      )}
    </Fragment>
  );
}

export default AssignCommander;
