import React, { useEffect, useState } from 'react'
import { Card, CardBody, Table } from 'reactstrap'
import axios from 'axios'

function Page1() {

  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
      console.log(response.data)
      setData(response.data)
    } catch (err) {
      console.error(err);
    }
   
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <React.Fragment>
        <div className='page-content'>
          <h1>Hello</h1>
          <Card>
            <CardBody>
              <h1>Hi, this is Page1</h1>
              <Table>
                <thead>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </thead>
                <tbody>
                  {data.map((item,idx) => {
                    return (
                      <tr key={idx}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
    </React.Fragment>
  )
}

export default Page1