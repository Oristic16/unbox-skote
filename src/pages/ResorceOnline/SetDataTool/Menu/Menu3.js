import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Pagination, PaginationItem, PaginationLink, Row, Spinner, Table } from 'reactstrap'

const Menu3 = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      setTimeout(async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res)
        setData(res.data)
        setLoading(false)
      }).catch((err) => {
        console.error(err);
        setLoading(false)
      })
      },500)
    }
    getData()
  },[])

  return (
    <div>
      {loading ? <Spinner className="ms-2" color="primary" /> : 
      <Card style={{minHeight:"730px"}}>
        <CardBody>
          <CardTitle>กำหนดข้อมูลผู้ดูแลระบบ</CardTitle>
          <Row className='mt-4'>
            <Col xxl={12}>
              <Form>
                <FormGroup row>
                  <Col xxl={2}>
                    <Input type='select'>
                      <option>ชื่อ นามสกุล</option>
                    </Input>
                  </Col>
                  <Col xxl={2}>
                    <Input type='text' placeholder='กรุณาระบุ' />
                  </Col>
                  <Col xxl={1}>
                    <Button className='w-100' color='success'><i className='fas fa-search me-2'></i>ค้นหา</Button>
                  </Col>
                  <Col></Col>
                  <Col xxl={2} className='d-flex justify-content-end'>
                    <Button className='w-75' color='info'><i className='fas fa-search me-2'></i>เพิ่มผู้ดูแลระบบ</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col xxl={12}>
              <Table striped hover style={{verticalAlign:"middle"}} className="table-hover table-borderless">
                <thead className="table-dark">
                  <tr>
                    <th>ลำดับ</th>
                    <th>ชื่อ นามสกุล</th>
                    <th>ตำแหน่ง</th>
                    <th>หน่วยงาน</th>
                    <th>วันเวลาที่บันทึก</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-light">
                  {data.map((item,idx) => {
                    return (
                      <tr key={idx}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.company.catchPhrase}</td>
                        <td>{item.company.name}</td>
                        <td>{item.phone}</td>
                        <td><Button color='danger' className='w-75'><i className='fas fa-trash-alt me-2'></i>ลบ</Button></td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
                  <Col xxl={12} className='d-flex justify-content-end'>
                    <Pagination aria-label="Page navigation example">
                      <PaginationItem 
                      // disabled={currentPage === 1}
                      >
                        <PaginationLink
                          // onClick={() => getApproveDataTable(1)}
                        >
                          Previous
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink>
                          Page 
                          {/* {currentPage} of {totalPage} */}
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem
                        // disabled={currentPage === totalPage || totalPage < 1}
                      >
                        <PaginationLink
                          // onClick={() => getApproveDataTable(currentPage + 1)}
                        >
                          Next
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </Col>
                  <Col xxl={6} className="d-flex justify-content-end">
                    {/* <h3>ทั้งหมด {totalRows} รายการ</h3> */}
                  </Col>
                </Row>
        </CardBody>
      </Card>
}
    </div>
  )
}

export default Menu3