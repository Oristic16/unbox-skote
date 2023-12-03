import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Lottie from 'react-lottie'
import { Card, CardBody, CardTitle, Col, DropdownItem, DropdownMenu, DropdownToggle, Pagination, PaginationItem, PaginationLink, Row, Spinner, Table, UncontrolledDropdown } from 'reactstrap'
import * as loadingData from '../loadingSetdataTool.json'
import FadeIn from 'react-fade-in/lib/FadeIn'

const Menu1 = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      try {
        setTimeout(async () => {
          const res = await axios.get("https://jsonplaceholder.typicode.com/users")
          console.log(res)
          setData(res.data)
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error(err);
        setLoading(false)
      }
    }
    getData()
  },[])

  

  return (
    <div>
        {loading ? 
          <div style={{minHeight:"730px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Lottie options={{
              loop: true,
              autoplay: true,
              animationData: loadingData.default,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }} width={200} height={150} />
          </div> : 
        <FadeIn>
        <Card style={{minHeight:"730px"}}>
            <CardBody>
                <CardTitle>ประเภทอุปกรณ์</CardTitle>
                <Row className='mt-4'>
                  <Col xxl={12}>
                    <Table striped hover>
                      <thead className='table-dark'>
                        <tr>
                          <th className='text-center'>ลำดับ</th>
                          <th>ชื่อประเภทอุปกรณ์</th>
                          <th>วันที่ เวลา บันทึก</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className='table-light'>
                        {data.map((item,idx) => {
                          return (
                            <tr key={idx}>
                              <td className='text-center'>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.phone}</td>
                              <td className='text-center'>
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
        </FadeIn>
        }
    </div>
  )
}

export default Menu1