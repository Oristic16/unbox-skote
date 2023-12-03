import React, { useEffect, useMemo, useState } from 'react'
import TableContainer from '../../components/Common/TableContainer'
import axios from 'axios'

const ToolDetailTable = () => {

    const columns = useMemo(
        () => [
            {
                Header: "ลำดับ",
                accessor: "id",
            },
            {
                Header: "ชื่ออุปกรณ์",
                accessor: "toolName",
            },
            {
                Header: "ยี่ห้อ",
                accessor: "toolBrand",
            },
            {
                Header: "ยี่ห้อ",
                accessor: "toolGen",
            },
            {
                Header: "S/N",
                accessor: "serialNum",
            },
            {
                Header: "OPDC_ID",
                accessor: "opdcId",
            },
        ],[]
    )

    const baseURL = "http://localhost:8000"

    const [data, setData] = useState([])

    const getData = () => {
        axios.get(baseURL + "/getmaster")
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
            columns={columns}
            data={data}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={5}
            className="custom-header-css"
        />
    </div>
  )
}

export default ToolDetailTable