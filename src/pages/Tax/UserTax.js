import React, { useEffect, useMemo } from "react";
import { Fragment } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
  Table,
} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import TableContainer from "./TableContainerAdmin";
import { GetCookieData, GetCookieToken } from "../Cookie/GetCookie";
import axios from "axios";
import { useState } from "react";
import LoadingPage from "../TESTPage/LoadingPage";
import FadeIn from "react-fade-in/lib/FadeIn";
import EditTax from "./EditTax";
import TableContainerReduce from "../Reducetex/TableContainerReduceAdmin";
import TableContainerUser from "./TableContainerUser";

const API_URL = process.env.REACT_APP_API_CORS;

function UserTax() {
  const token = GetCookieToken("userToken");
  const userData = GetCookieData("userData");

  // console.log(userData);

  const [fileData, setFileData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataInfo, setDataInfo] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  // const [role, setRole] = useState(null);

  const fetchFileData = () => {
    const url = `${API_URL}/api/taxSlip/datatable`;
    const params = new URLSearchParams({
      page: 1,
      size: 10,
      "order[0]": "year",
      "order[1]": "DESC",
      // search: pushkeyword,
      // "filter[user_id][0]": 1205,
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
        setFileData(response.data.result);
        setDataInfo(() => response.data.info);
        setTotalPages(Math.ceil(response.data.info.totalRows / 10));
        console.log(response.data);
      })
      .catch(error => console.error("Error:", error));
  };

  // const handleButtonClick = value => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     fetchFileData();
  //     setLoading(false);
  //   }, 1500);
  // };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetchFileData();
      setLoading(false);
    }, 1500);
  }, [currentPage]);

  const handleFetchYearTax = (id, year) => {
    console.log(id);
    const url_api = `${API_URL}/api/taxSlip/user/${id}/${year}`;
    // const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: url_api,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then(response => {
        window.open(API_URL + response.data.publicPath, "_blank");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      {loading ? (
        <LoadingPage />
      ) : (
        <FadeIn>
          <div className="">
            <Container fluid>
              {/* <Breadcrumb title="Home" breadcrumbItem="ใบภาษี" /> */}
              <h4 className="mb-2">ข้อมูลใบภาษี</h4>
              <div className="d-xl-flex">
                <div className="w-100">
                  <div className="d-md-flex">
                    <div className="w-100">
                      <Table
                        className="align-middle"
                        striped
                        style={{
                          overflow: "scroll",
                        }}
                        responsive
                      >
                        <thead
                          className="table-light"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <tr>
                            <th>ปี</th>

                            <th></th>
                          </tr>
                        </thead>

                        <tbody>
                          {fileData.length === 0 ? (
                            <tr>
                              <td colSpan="4" className="text-center fs-5">
                                ไม่มีข้อมูล
                              </td>
                            </tr>
                          ) : (
                            fileData.map((i, index) => {
                              return (
                                <tr key={index}>
                                  <td>{i.year}</td>

                                  <td>
                                    <Button
                                      color="success"
                                      onClick={() => {
                                        handleFetchYearTax(
                                          userData.user_id,
                                          i.year
                                        );
                                      }}
                                    >
                                      <i className="fa-regular fa-print me-2"></i>
                                      พิมพ์
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
                          <Badge
                            color="secondary"
                            className="p-2 bg-opacity-10 mx-2"
                          >
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
                              <PaginationLink
                                first
                                onClick={() => setCurrentPage(1)}
                              />
                            </PaginationItem>
                            <PaginationItem disabled={currentPage === 1}>
                              <PaginationLink
                                previous
                                onClick={() => setCurrentPage(currentPage - 1)}
                              />
                            </PaginationItem>
                            <Badge
                              color="info"
                              className="p-2 bg-opacity-10 mx-2"
                            >
                              <div
                                style={{ fontWeight: "bold" }}
                                className="text-info fs-5 pt-1"
                              >
                                Page : {currentPage}
                              </div>
                            </Badge>

                            <PaginationItem
                              disabled={
                                currentPage === dataInfo.totalPage ||
                                totalPages === 0
                              }
                            >
                              <PaginationLink
                                next
                                onClick={() =>
                                  setCurrentPage(dataInfo.currentPage + 1)
                                }
                              />
                            </PaginationItem>
                            <PaginationItem
                              disabled={
                                currentPage === totalPages || totalPages === 0
                              }
                            >
                              <PaginationLink
                                last
                                onClick={() =>
                                  setCurrentPage(dataInfo.totalPage)
                                }
                              />
                            </PaginationItem>
                          </Pagination>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </FadeIn>
      )}
    </Fragment>
  );
}

export default UserTax;
