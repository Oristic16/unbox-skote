import axios from 'axios'
import TableContainer from '../../components/Common/TableContainer'
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'reactstrap'

const BorrowedTable = () => {

    const colums = useMemo(
        () => [
            {
                Header: "ลำดับ",
                accessor: "id",
            },
            {
                Header: "ประเภทอุปกรณ์",
                accessor: "toolType",
            },
            {
                Header: "ชื่ออุปกรณ์",
                accessor: "toolName",
            },
            {
                Header: "วันที่ เวลา ยืม",
                accessor: "borrowDate",
            },
            {
                Header: "วันที่ เวลา คืน",
                accessor: "borrowReturn",
            },
            {
                Header: "สถานะ",
                accessor: "status",
            },
            {
                Header: "เพื่อใช้งาน",
                accessor: "forWork",
            },
            // {
            //     Header: "วันที่ เวลา ทำรายการ",
            //     accessor: "writeDate",
            // },
            {
                Header: "ผู้ยืม",
                accessor: "borrower",
            },
            {
                Header: "",
                accessor: "view",
                Cell: cellProps => {
                    return (
                        <Button
                            type="button"
                            color="warning"
                            className="btn-sm btn-rounded me-2"
                            onClick={toggleViewModal}
                        >
                            <i className='fa fa-search'></i>
                        </Button>
                    );
                  },
            }
        ],[]
    )

    const baseURL = "http://localhost:8000"

    const [data, setData] = useState([])

    const getData = () => {
        axios.get(baseURL + "/getborrow")
        .then((res) => {
            setData(res.data)
            console.log("Data GetResorceTable: ", res.data)
        }).catch((err) => {
            console.error(err);
        })
    }

    const [modal1, setModal1] = useState(false);

    const toggleViewModal = () => setModal1(!modal1);

    useEffect(() => {
        getData()
    },[])

  return (
    <div>
        <TableContainer
            columns={colums}
            data={data}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={5}
            className="custom-header-css"
        />
    </div>
  )
}

export default BorrowedTable