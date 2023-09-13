import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Table } from "reactstrap";

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableForm = ({ data }) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(data)

  const columns = [
    { field: 'id', headerName: 'ลำดับ', headerAlign: 'center', flex: 1, minWidth: 20 },
    {
      field: 'title',
      headerName: 'เรือง',
      headerAlign: 'left',
      flex: 1,
      minWidth: 100,
      editable: false,
    },
    {
      field: 'sinceD',
      headerName: 'ตั้งแต่วันที่',
      headerAlign: 'center',
      flex: 1,
      minWidth: 90,
      editable: false,
    },
    {
      field: 'sinceT',
      headerName: 'ช่วงเวลา',
      headerAlign: 'center',
      flex: 1,
      minWidth: 80,
      editable: false,
    },
    {
      field: 'toD',
      headerName: 'ถึงวันที่',
      headerAlign: 'center',
      flex: 1,
      minWidth: 90,
      editable: false,
    },
    {
      field: 'toT',
      headerName: 'ช่วงเวลา',
      headerAlign: 'center',
      flex: 1,
      minWidth: 80,
      editable: false,
    },
    {
      field: 'amountD',
      headerName: 'รวม',
      headerAlign: 'center',
      flex: 1,
      minWidth: 10,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'สถานะ',
      headerAlign: 'center',
      flex: 1,
      minWidth: 70,
      editable: false,
      sortable: false,
    },
    {
      field: 'writeDate',
      headerName: 'วันที่ส่งใบลา',
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      editable: false,
    },
    // {
    //   field: 'edit',
    //   headerName: '',
    //   flex: 1,
    //   minWidth: 120,
    //   editable: false,
    //   renderCell: param => (
    //     <Button
    //     >dwadaw</Button>
    //   ),
    // },
    // {
    //   field: 'delete',
    //   headerName: '',
    //   flex: 1,
    //   minWidth: 120,
    //   editable: false,
    //   renderCell: param => (
    //     <Button
    //     >dwadaw</Button>
    //   ),
    // },
  ];

  return (
    <React.Fragment>
      <Card style={{ overflow: "scroll" }}>
        <CardBody style={{minHeight:"360px"}}>
          {/* <DataGrid
            sx={{
              textAlign:"center"
            }}
            columns={columns}
            rows={data}
            rowHeight={42}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          /> */}
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{textAlign:"center"}}>
          <TableRow>
            <StyledTableCell>ลำดับ</StyledTableCell>
            <StyledTableCell align="center">เรือง</StyledTableCell>
            <StyledTableCell align="center">ตั้งแต่วันที่</StyledTableCell>
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
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.sinceD}</StyledTableCell>
              <StyledTableCell align="right">{row.sinceT}</StyledTableCell>
              <StyledTableCell align="right">{row.toD}</StyledTableCell>
              <StyledTableCell align="right">{row.toT}</StyledTableCell>
              <StyledTableCell align="right">{row.amountD}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.writeDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
          {/* <Table style={{ whiteSpace: "nowrap" }}>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>เรือง</th>
                <th>ตั้งแต่วันที่</th>
                <th>ช่วงเวลา</th>
                <th>ถึงวันที่</th>
                <th>ช่วงเวลา</th>
                <th>รวม</th>
                <th>สถานะ</th>
                <th>วันที่ส่งใบลา</th>
              </tr>
            </thead>
            <tbody style={{ overflow: "scroll" }}>
              {data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.sinceD}</td>
                    <td>{item.sinceT}</td>
                    <td>{item.toD}</td>
                    <td>{item.toT}</td>
                    <td>{item.amountD}</td>
                    <td>{item.status}</td>
                    <td>{item.writeDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default TableForm;
