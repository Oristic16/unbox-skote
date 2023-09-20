import React, { useEffect, useMemo, useState } from 'react'
import TableContainer from '../../../components/Common/TableContainer';
import axios from 'axios';
import { Button, Card, CardBody, Col, Row, Table } from 'reactstrap';
import { Box } from '@mui/material';

const TableApprove = () => {

    const baseURL = "http://localhost:8000"

    const [data, setData] = useState([])

    const getData = async () => {
        axios.get(baseURL + "/getapprove")
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        }).catch(err => {
            console.error(err);
        })
    }
    
    useEffect(() => {
        getData()
    },[])

    const columns = useMemo(
        () => [
            {
                Header: 'ลำดับ',
                accessor: 'id',
            },
            {
                Header: 'เรื่อง',
                accessor: 'title'
            },
            {
                Header: 'วันเวลาที่ขออนุมัติ',
                accessor: 'date'
            },
            {
                Header: 'ชื่อ',
                accessor: 'name'
            },
            {
                Header: 'ตั้งแต่วันที่',
                accessor: 'formDate'
            },
            {
                Header: 'ถึงวันที่',
                accessor: 'toDate'
            },
            {
                Header: 'รวม',
                accessor: 'sum'
            },
            {
                Header: 'พิจารณาอนุมัติ',
                accessor: ''
            },
        ],
        []
    );

  return (
    <React.Fragment>
        <Card>
            <CardBody >
            <Box sx={{ height: 350, width: '100%', whiteSpace:"nowrap" }}>
                {/* <TableContainer
                    columns={columns}
                    data={data}
                /> */}
                <div style={{overflow:"scroll",whiteSpace:"nowrap"}}>
                    <Table bordered hover style={{ width:"10%", verticalAlign:"middle" }}>
                        <thead className='table-light'>
                            <tr>
                                <th>เรื่อง</th>
                                {/* <th className='text-center'>วันเวลาที่ขออนุมัติ</th> */}
                                <th>ชื่อ</th>
                                <th className='text-center'>ตั้งแต่วันที่</th>
                                <th className='text-center'>ถึงวันที่</th>
                                <th className='text-center'>รวม</th>
                                <th></th>
                                {/* <th>พิจารณาอนุมัติ</th> */}
                            </tr>
                        </thead>
                        <tbody style={{overflow:"auto"}}>
                            {data.slice(0,5).map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        {/* <td className='text-center'>{item.writeDate}</td> */}
                                        <td>{item.userName}</td>
                                        <td className='text-center'>{item.leaveFromDate}</td>
                                        <td className='text-center'>{item.leaveToDate}</td>
                                        <td className='text-center'>{item.leaveDays}</td>
                                        <td><Button style={{background:"none", border:"none"}}><i className='fas fa-search font-size-16 text-dark'></i></Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
                </Box>
            </CardBody>
        </Card>
    </React.Fragment>
  )
}

export default TableApprove