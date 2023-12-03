import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap'

const Menu4 = () => {

  const fakeData = [
    {
      id: "2",
      name: "นางสาว กนกพร ศรีวิทยา",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "1",
      kong: "กองนวัตกรรมบริการภาครัฐ",
      group: "",
      order: "6"
    },
    {
      id: "10",
      name: "นางสาว กมลา พิมพ์นวลศรี",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "กองนวัตกรรมบริการภาครัฐ",
      group: "",
      order: "11"
    },
    {
      id: "16",
      name: "นาย กฤตพน ชูศรี",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "กองนวัตกรรมบริการภาครัฐ",
      group: "",
      order: "9"
    },
    {
      id: "19",
      name: "นาย กฤตวิทย์ จันทร์แจ่มใส",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "กองพัฒนาระบบราชการ 2",
      group: "กลุ่มพัฒนาระบบราชการกลุ่มกระทรวงที่ 4",
      order: "6"
    },
    {
      id: "23",
      name: "นางสาว กฤษณา แก้วด้วง",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "กองยุทธศาสตร์การพัฒนาระบบราชการ",
      group: "กลุ่มยุทธศาสตร์การพัฒนาระบบราชการ",
      order: "5"
    },
    {
      id: "30",
      name: "นาง กาญจนา มังกโรทัย",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "กองพัฒนาระบบราชการ 1",
      group: "",
      order: "3"
    },
    {
      id: "32",
      name: "นางสาว กาญจนากร สามเมือง",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "กองพัฒนาระบบราชการ 1",
      group: "",
      order: "5"
    },
    {
      id: "33",
      name: "นางสาว กานดา วรมงคลชัย",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "กองพัฒนาระบบราชการ 2",
      group: "",
      order: "31"
    },
    {
      id: "46",
      name: "นาง เกศรา เจริญรักษ์",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "สำนักงานเลขาธิการ",
      group: "กลุ่มการเงินและบัญชี",
      order: "10"
    },
    {
      id: "53",
      name: "นาง ขนิษฐา งามวงศ์สถิต",
      status: "ผู้ใช้งานทั่วไป",
      isKong: "0",
      isGroup: "0",
      kong: "กองนวัตกรรมบริการภาครัฐ",
      group: "",
      order: "4"
    },
  ]

  return (
    <FadeIn>
      <Row className='d-flex justify-content-center'>
        <Col xxl={11}>
          <Row>
            <Col xxl={12}>
              <Card>
                <CardBody>
                  <CardTitle><h5>ตั้งค่า กอง/กลุ่ม ให้ผู้ใช้งาน</h5></CardTitle>
                  <Form className='mt-4'>
                    <FormGroup row className='d-flex justify-content-start'>
                      <Label className='text-end' xxl={1} xl={1}>Show</Label>
                      <Col xxl={1} xl={1}>
                        <Input type="select">
                          <option>10</option>
                        </Input>
                      </Col>
                      <Col xxl={3} xl={4}>
                        <Input type="search" placeholder='Search....' style={{borderRadius:"20px"}} />
                      </Col>
                    </FormGroup>
                  </Form>
                  <div style={{overflow:"scroll"}}>
                  <Table striped hover style={{verticalAlign:"middle", whiteSpace:"nowrap"}}>
                    <thead className='table-primary'>
                      <tr>
                        <th className='text-center'>ไอดีผู้ใช้</th>
                        <th>ชื่อผู้ใช้</th>
                        <th>สถานะ</th>
                        <th className='text-center'>ผู้อำนวยการกอง</th>
                        <th className='text-center'>หัวหน้ากลุ่ม</th>
                        <th>กอง</th>
                        <th>กลุ่ม</th>
                        <th>ลำดับ</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className='table-light'>
                      {fakeData?.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td className='text-center'>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                              <Input type='select'>
                                <option>{item.status}</option>
                              </Input>
                            </td>
                            <td className='text-center'><Input className='border border-secondary border-1 opacity-75' style={{fontSize:"20px", marginTop:"auto", marginBottom:"auto"}} type='checkbox' value={item.isKong} /></td>
                            <td className='text-center'><Input className='border border-secondary border-1 opacity-75' style={{fontSize:"20px", marginTop:"auto", marginBottom:"auto"}} type='checkbox' value={item.isGroup} /></td>
                            <td>
                              <Input type='select'>
                                <option>{item.kong}</option>
                              </Input>
                            </td>
                            <td>
                              <Input type='select'>
                                <option>{item.group}</option>
                              </Input>
                            </td>
                            <td><Input style={{width:"40px"}} type='text' inputMode='numeric' value={item.order} /></td>
                            <td><Button color='primary'><i className="fa-solid fa-pen-to-square"></i></Button></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                  </div>
                  <Row>
                    <Col xl={12} style={{display:"flex",justifyContent:"end"}}>
                    <Pagination>
                        <PaginationItem>
                          <PaginationLink>
                          Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink>
                          Page 
                          {/* {currentPage} of {totalPage} */}
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink>
                            Next
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col>
                  </Row>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </FadeIn>
  )
}

export default Menu4