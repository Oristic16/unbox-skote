import React, { useMemo } from "react";
import { Card, CardBody } from "reactstrap";
import TableContainer from "../../components/Common/TableContainer";

const TableFormInstead = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "ลำดับ",
        accessor: "id",
      },
      {
        Header: "หัวข้อ",
        accessor: "title",
      },
      {
        Header: "ตั้งแต่วันที่",
        accessor: "leaveFromDate",
      },
      {
        Header: "ถึงวันที่",
        accessor: "leaveToDate",
      },
      {
        Header: "สถานะ",
        accessor: "status",
      },
    ],
    []
  );

  // const data = [
  //   {
  //     name: "Jennifer Chang",
  //     position: "Regional Director",
  //     age: 28,
  //     office: "Singapore",
  //     startDate: "2010/11/14",
  //     salary: "$357,650",
  //   },
  //   {
  //     name: "Gavin Joyce",
  //     position: "Developer",
  //     age: 42,
  //     office: "Edinburgh",
  //     startDate: "2010/12/22",
  //     salary: "$92,575",
  //   },
  //   {
  //     name: "Angelica Ramos",
  //     position: "Chief Executive Officer (CEO)",
  //     age: 47,
  //     office: "London",
  //     startDate: "2009/10/09",
  //     salary: "$1,200,000",
  //   },
  //   {
  //     name: "Doris Wilder",
  //     position: "Sales Assistant",
  //     age: 23,
  //     office: "Sidney",
  //     startDate: "2010/09/20",
  //     salary: "$85,600",
  //   },
  //   {
  //     name: "Caesar Vance",
  //     position: "Pre-Sales Support",
  //     age: 21,
  //     office: "New York",
  //     startDate: "2011/12/12",
  //     salary: "$106,450",
  //   },
  // ];

  // const columns = [
  //   {
  //     field: "id",
  //     headerName: "ลำดับ",
  //     headerAlign: "left",
  //     flex: 1,
  //     minWidth: 20,
  //   },
  //   {
  //     field: "title",
  //     headerName: "เรือง",
  //     headerAlign: "left",
  //     flex: 1,
  //     minWidth: 150,
  //     editable: false,
  //   },
  //   {
  //     field: "leaveFromDate",
  //     headerName: "ตั้งแต่วันที่",
  //     headerAlign: "center",
  //     flex: 1,
  //     minWidth: 100,
  //     editable: false,
  //   },
  //   {
  //     field: "leaveFromTimetype",
  //     headerName: "ช่วงเวลา",
  //     headerAlign: "center",
  //     flex: 1,
  //     minWidth: 90,
  //     editable: false,
  //   },
  //   {
  //     field: "leaveToDate",
  //     headerName: "ถึงวันที่",
  //     headerAlign: "center",
  //     flex: 1,
  //     minWidth: 100,
  //     editable: false,
  //   },
  //   {
  //     field: "leaveToTimetype",
  //     headerName: "ช่วงเวลา",
  //     headerAlign: "center",
  //     flex: 1,
  //     minWidth: 90,
  //     editable: false,
  //   },
  //   {
  //     field: "status",
  //     headerName: "สถานะ",
  //     headerAlign: "center",
  //     flex: 1,
  //     minWidth: 50,
  //     editable: false,
  //   },
  //   {
  //     field: "writeDate",
  //     headerName: "วันที่ส่งใบลา",
  //     headerAlign: "center",
  //     flex: 1,
  //     minWidth: 100,
  //     editable: false,
  //   },
  //   {
  //     headerName: '',
  //     flex: 1,
  //     minWidth: 20,
  //     editable: false,
  //     renderCell: param => (
  //       <Button><i className="fas fa-search"></i></Button>
  //     ),
  //   },
  // ];

  return (
    <React.Fragment>
          <TableContainer
            columns={columns}
            data={data}
            isGlobalFilter={false}
            isShowSelect={false}
            customPageSize={5}
            className="custom-header-css"
          />
    </React.Fragment>
  );
};

export default TableFormInstead;
