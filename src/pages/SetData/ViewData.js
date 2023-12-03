import React, { useState, useEffect } from "react";
import axios from "axios";

import { FetchAxiosGet } from "../../api/axios";
import {
  Badge,
  Table,
  Col,
  Row,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  InputGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap/";
import { GetCookieToken } from "../Cookie/GetCookie";
import { Fragment } from "react";
import InsertData from "./InsertData";
import EditData from "./EditData";
import LoadingData from "../TESTPage/LoadingData";
import LoadingPage from "../TESTPage/LoadingPage";
import FadeIn from "react-fade-in/lib/FadeIn";

const API_URL = process.env.REACT_APP_API_CORS;

function ViewData() {
  const [masterdata, setMasterdata] = useState([]);
  const [data, setData] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const token = GetCookieToken("userToken");

  const [keyword, setKeyword] = useState("");
  const [pushkeyword, setPushKeyword] = useState("");
  const [dataSelect, setDataSelect] = useState("ปกติ");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cp, setCP] = useState(0);

  const fetchData = () => {
    const url = `${API_URL}/api/users/datatable`;
    const params = new URLSearchParams({
      page: currentPage,
      size: pageSize,
      "order[0]": "user_name",
      "order[1]": "ASC",
      "filter[user_name_status][0]": dataSelect,
      search: pushkeyword,
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
        console.log("result :", response.data, "info :", response.data.info);
        setData(() => response.data.result);
        setDataInfo(() => response.data.info);
        setTotalPages(Math.ceil(response.data.info.totalRows / pageSize));
      })
      .catch(error => console.error("Error:", error));
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currentPage, dataSelect, pageSize, pushkeyword]);

  useEffect(() => {
    const fetchMasterData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/users/config/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data);
        setMasterdata(response.data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMasterData();
  }, []);

  const handleSearch = () => {
    setPushKeyword(() => keyword);
  };

  const deleteState = id => {
    setData(prevData => prevData.filter(item => item.user_id !== id));
  };

  const fetchDeleteData = async user_id => {
    setLoading(true);
    try {
      const response = await axios.delete(`${API_URL}/api/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("DeletData :", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleButtonClick = value => {
    setLoading(true);
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 1500);
  };

  return (
    <Fragment>
      {loading ? (
        <div
          style={{
            width: "5rem",
            height: "5rem",
            position: "absolute",
            top: "70%",
            left: "35%",
          }}
        >
          <LoadingData />
        </div>
      ) : (
        <FadeIn>
          <Row className="mb-3">
            <Col lg={8}>
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
                <Input
                  name="user_id_status"
                  style={{ width: "15%" }}
                  type="select"
                  placeholder="...กรุณาใส่คำที่ต้องการค้นหา"
                  onChange={e =>
                    setDataSelect(e.target.options[e.target.selectedIndex].text)
                  }
                >
                  {masterdata.user_id_status?.map((masterdata, index) =>
                    masterdata.id !== 5 ? (
                      <option value={masterdata.id} key={index}>
                        {masterdata.name}
                      </option>
                    ) : null
                  )}
                </Input>

                <Input
                  type="select"
                  onChange={e => setPageSize(e.target.value)}
                  placeholder="...กรุณาใส่คำที่ต้องการค้นหา"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </Input>
              </InputGroup>
            </Col>
            <Col style={{ display: "flex", justifyContent: "end" }}>
              <InsertData onButtonClick={handleButtonClick} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table
                className="align-middle"
                striped
                style={{
                  // textAlign: "center",
                  overflow: "scroll",
                }}
                responsive
              >
                <thead className="table-light" style={{ whiteSpace: "nowrap" }}>
                  <tr>
                    <th>ลำดับ</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>Log In Name</th>
                    <th>{/* <i className="fa-solid fa-envelope"></i> */}</th>
                  </tr>
                </thead>

                <tbody>
                  {data.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center fs-5">
                        ไม่มีข้อมูล
                      </td>
                    </tr>
                  ) : (
                    data.map((user, index) => {
                      let cp = (currentPage - 1) * 10;
                      let cp2 = (currentPage - 1) * 25;
                      let cp3 = (currentPage - 1) * 50;
                      return user.deleted === 1 ? (
                        <tr key={index}>
                          {pageSize === 10 || pageSize === "10" ? (
                            <td style={{ fontSize: "16px" }}>
                              {index + cp + 1}
                            </td>
                          ) : (
                            ""
                          )}
                          {pageSize === "25" ? (
                            <td style={{ fontSize: "16px" }}>
                              {index + cp2 + 1}
                            </td>
                          ) : (
                            ""
                          )}
                          {pageSize === "50" ? (
                            <td style={{ fontSize: "16px" }}>
                              {index + cp3 + 1}
                            </td>
                          ) : (
                            ""
                          )}
                          <td style={{ width: "560px" }}>{user.user_name}</td>
                          <td>
                            <Badge
                              color="success"
                              className="p-2 bg-opacity-10"
                            >
                              <span className="text-success fs-6">
                                {user.user_login}
                              </span>
                            </Badge>
                          </td>
                          <td>
                            <EditData id={user.user_id} />
                            <Button
                              className="mt-1"
                              color="danger"
                              onClick={() => {
                                window.confirm("คุณต้องการที่จะลบ ใช่หรือไม่?");
                                fetchDeleteData(user.user_id);
                                deleteState(user.user_id);
                              }}
                            >
                              <i className="fa-solid fa-trash"></i> ลบ
                            </Button>
                          </td>
                        </tr>
                      ) : (
                        ""
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
                    {/* {[...Array(totalPages)].map((_, i) => {
                    // แสดงเฉพาะหน้าที่ 1-10 และหน้าถัดไป
                    if (i < 10 || i === totalPages - 1) {
                      return (
                        <PaginationItem key={i} active={i + 1 === currentPage}>
                          <PaginationLink onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    } else if (i === 10) {
                      return (
                        <PaginationItem key={i} disabled>
                          <PaginationLink>...</PaginationLink>
                        </PaginationItem>
                      );
                    } else {
                      return null;
                    }
                  })} */}

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

export default ViewData;
