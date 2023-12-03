import React, { useEffect, useMemo } from "react";
import { Fragment } from "react";
import { Container, Spinner } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import TableContainerReduce from "./TableContainerReduceAdmin";

import { GetCookieToken } from "../Cookie/GetCookie";
import axios from "axios";
import { useState } from "react";
import LoadingPage from "../TESTPage/LoadingPage";
import FadeIn from "react-fade-in/lib/FadeIn";
import dayjs from "dayjs";
import EditDeduct from "./EditDeduct";

const API_URL = process.env.REACT_APP_API_CORS;

function Reducetex() {
  const token = GetCookieToken("userToken");

  const [fileData, setFileData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [role, setRole] = useState(null);

  const fetchFileData = () => {
    const url = `${API_URL}/api/reduceTaxSlip/datatable`;
    const params = new URLSearchParams({
      page: 1,
      size: 20,
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
        console.log(response.data);
      })
      .catch(error => console.error("Error:", error));
  };

  const handleButtonClick = value => {
    setLoading(true);
    setTimeout(() => {
      fetchFileData();
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetchFileData();
      setLoading(false);
    }, 1500);
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "ลำดับ",
        accessor: "number",
      },
      {
        Header: "ใบลดหย่อนภาษีหัก ณ ปีที่จ่าย",
        accessor: "yearfilename",
      },
      {
        Header: "ชื่อไฟล์",
        accessor: "filename",
      },
      {
        Header: "วันที่สร้าง",
        accessor: "create",
      },
      {
        Header: "",
        accessor: "option",
      },
    ],
    []
  );

  const data = fileData
    .map((i, index) => ({
      number: index + 1,
      yearfilename: `ใบลดหย่อนภาษีหัก ณ ที่จ่าย ปี ${i.year}`,
      filename: i.name,
      option: <EditDeduct year={i.year} onButtonClick={handleButtonClick} />,
      create: dayjs.utc(i.created_date).format("DD/MM/YYYY"),
    }))
    .reverse();

  const refreshDisplay = value => {
    if (value === "รีเฟรชหน้าจอใบลดหย่อน") {
      setLoading(true);
      setTimeout(() => {
        fetchFileData();
        setLoading(false);
      }, 2500);
    }
  };

  return (
    <div className="page-content">
      {loading ? (
        <LoadingPage />
      ) : (
        <FadeIn>
          <Container fluid>
            <Breadcrumb title="Home" breadcrumbItem="ระบบใบภาษี" />
            <div className="d-xl-flex">
              <div className="w-100">
                <div className="d-md-flex">
                  <div className="w-100">
                    <TableContainerReduce
                      refresh={refreshDisplay}
                      columns={columns}
                      data={data}
                      isGlobalFilter={true}
                      isAddOptions={false}
                      customPageSize={20}
                      className="custom-header-css"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </FadeIn>
      )}
    </div>
  );
}

export default Reducetex;
