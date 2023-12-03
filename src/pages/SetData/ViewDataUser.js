import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Badge,
  Table,
  Col,
  Row,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  Spinner,
} from "reactstrap/";
import { GetCookieToken, GetCookieData } from "../Cookie/GetCookie";
import { Fragment } from "react";

import EditData from "./EditData";
import LoadingData from "../TESTPage/LoadingData";
import FadeIn from "react-fade-in/lib/FadeIn";

const API_URL = process.env.REACT_APP_API_CORS;

function ViewDataUser() {
  const user = GetCookieData("userData");

  const [data, setData] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const token = GetCookieToken("userToken");

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    const url = `${API_URL}/api/users/${user.user_id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then(response => {
        console.log("result :", response.data, "info :", response.data.info);
        setData(() => response.data.result);
        setDataInfo(() => response.data.info);
      })
      .catch(error => console.error("Error:", error));
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
                    <th>Log In Name</th>
                    <th></th>
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
                    <tr>
                      <td style={{ fontSize: "16px" }}>1</td>
                      <td style={{ width: "560px" }}>{data.user_name}</td>
                      <td>
                        <Badge color="success" className="p-2 bg-opacity-10">
                          <span className="text-success fs-6">
                            {data.user_login}
                          </span>
                        </Badge>
                      </td>
                      <td>
                        <EditData id={user.user_id} />
                      </td>
                    </tr>
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
                      ทั้งหมด 1 รายการ
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

                    <PaginationItem disabled>
                      <PaginationLink
                        next
                        onClick={() => setCurrentPage(dataInfo.currentPage + 1)}
                      />
                    </PaginationItem>
                    <PaginationItem disabled>
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

export default ViewDataUser;
