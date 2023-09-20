import {
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  tableCellClasses,
  styled,
  Box,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import TableContainer from "../../components/Common/TableContainer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TableForm = ({ data }) => {
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
      {
        Header: "Salary",
        accessor: "writeDate",
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
       <Card>
        <CardBody>
          {/*<Box sx={{ minHeight: "300px", width: "100%", whiteSpace: "nowrap" }}>
            <div> */}
            {/* <DataGrid
            key={data.id}
            columns={columns}
            rows={data}
            rowHeight={40}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10, 25, 50]}
            disableColumnMenu
            disableRowSelectionOnClick
          /> */}
            <TableContainer
              columns={columns}
              data={data}
              isGlobalFilter={true}
              isAddOptions={false}
              customPageSize={5}
              className="custom-header-css"
            />
            {/* <TableContainer component={Paper}>
            <Table style={{whiteSpace:"nowrap"}} sx={{ minWidth: 900 }} aria-label="customized table">
              <TableHead sx={{ textAlign: "center" }}>
                <TableRow>
                  <StyledTableCell>ลำดับ</StyledTableCell>
                  <StyledTableCell>ประเภท</StyledTableCell>
                  <StyledTableCell align="center">เรือง</StyledTableCell>
                  <StyledTableCell align="center">
                    ตั้งแต่วันที่
                  </StyledTableCell>
                  <StyledTableCell align="right">ช่วงเวลา</StyledTableCell>
                  <StyledTableCell align="right">ถึงวันที่</StyledTableCell>
                  <StyledTableCell align="right">ช่วงเวลา</StyledTableCell>
                  <StyledTableCell align="right">รวม</StyledTableCell>
                  <StyledTableCell align="right">สถานะ</StyledTableCell>
                  <StyledTableCell align="right">วันที่ส่งใบลา</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.formType}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.leaveFromDate}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.leaveFromTimetype}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.leaveToDate}</StyledTableCell>
                    <StyledTableCell align="right">{row.leaveToTimetype}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.leaveDays}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.status}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.writeDate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
          {/* </div>
          </Box>*/}
        </CardBody>
      </Card> 
    </React.Fragment>
  );
};

export default TableForm;
