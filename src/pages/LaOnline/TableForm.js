import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect } from "react";
import { Button, Card, CardBody, Table } from "reactstrap";

const TableForm = ({ data }) => {

  const columns = [
    { field: 'id', headerName: 'ลำดับ', headerAlign: 'center', flex: 1, minWidth: 20 },
    {
      field: 'title',
      headerName: 'เรือง',
      headerAlign: 'center',
      flex: 1,
      minWidth: 130,
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
          <DataGrid
            sx={{
              textAlign:"center"
            }}
            columns={columns}
            rows={data}
            // loading={data.rows.length === 0}
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
          />
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
