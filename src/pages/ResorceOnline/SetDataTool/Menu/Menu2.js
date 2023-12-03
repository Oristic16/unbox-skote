import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Pagination, PaginationItem, PaginationLink, Row, Spinner, Table, UncontrolledDropdown } from 'reactstrap'

const Menu2 = () => {

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
            <CardTitle>ข้อมูลอุปกรณ์</CardTitle>
              <Row className='mt-4'>
                <Col xxl={12}>
                  <Table striped hover style={{verticalAlign:"middle"}}>
                    <thead className='table-dark'>
                      <tr>
                        <th className='text-center'>ลำดับ</th>
                        <th>ชื่ออุปกรณ์</th>
                        <th>ยี่ห้อ</th>
                        <th>รุ่น</th>
                        <th>S/N</th>
                        <th>OPDC_ID</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className='table-light'>
                      {data.map((item,idx) => {
                        return (
                          <tr key={idx}>
                            <td className='text-center'>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.company.name}</td>
                            <td>{item.company.bs}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>
                            <UncontrolledDropdown className="dropdown">
                                <DropdownToggle
                                  className="text-muted font-size-16"
                                  tag="a"
                                  color="white"
                                >
                                  <i className="mdi mdi-dots-horizontal"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    // onClick={() =>
                                    //   OpenDataApprove(item.leave_approve_id)
                                    // }
                                    // to="#"
                                  >
                                    แก้ไช
                                  </DropdownItem>
                                  <DropdownItem
                                    // onClick={() => {
                                    //   approveData(
                                    //     item.leave_approve_id,
                                    //     item.leave_data_id,
                                    //     "1"
                                    //   );
                                    // }}
                                  >
                                    ลบ
                                  </DropdownItem>
                                  
                                  {/* <div className="dropdown-divider"></div> */}
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                  <Col xxl={6}>
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

export default Menu2