import React, { useEffect, useMemo, useState } from 'react'
import TableContainer from '../../components/Common/TableContainer'
import axios from 'axios'
import { Button } from 'reactstrap'

const ToolTypeTable = () => {

    const colums = useMemo(
        () => [
            {
                Header: "ลำดับ",
                accessor: "id",
            },
            // {
            //     Header: "ประเภทอุปกรณ์",
            //     accessor: "toolType",
            // },
            {
                Header: "ชื่ออุปกรณ์",
                accessor: "typeName",
            },
            {
                Header: "วันเวลา ที่บันทึก",
                accessor: "dateSubmit",
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
                            // onClick={toggleViewModal}
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
        axios.get(baseURL + "/gettooltype")
        .then((res) => {
            setData(res.data)
            console.log("Data GetToolTypeTable: ", res.data)
        }).catch((err) => {
            console.error(err);
        })
    }

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

export default ToolTypeTable