import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Table } from 'reactstrap'

const TableHistory = () => {
    
    const baseURL = "http://localhost:8000"

    const [data, setData] = useState([])

    const getData = () => {
        axios.get(baseURL + "/getform1")
        .then((res) => {
          setData(res.data)
          console.log(res.data)
        }).catch((err) => {
          console.error(err);
        })
      }
    
      useEffect(() => {
        getData()
      },[])

  return (
    <React.Fragment>
        <Card>
              <CardBody >
        <Table>
            <thead>
                <tr>
                    <th>ลำดับ</th>
                    <th>ประเภทการลา</th>
                    <th>จำนวนครั้ง</th>
                    <th>จำนวนวันลา</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.formType}</td>
                            <td>{item.writeFrom}</td>
                            <td>{item.writeFrom}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        </CardBody>
        </Card>
    </React.Fragment>
  )
}

export default TableHistory