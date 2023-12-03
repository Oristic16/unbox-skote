import React from 'react'
import { Card, CardBody, Container, Table } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'

const TableLeave = () => {
  return (
    <div className='page-content'>
        <Container fluid>
            <Breadcrumb title="การลาออนไลน์" breadcrumbItem="ตารางข้อมูลการลา" />
        <Card>
            <CardBody>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>เรื่อง</th>
                            <th className="text-center">ตั้งแต่วันที่</th>
                            <th className="text-center">ถึงวันที่</th>
                            <th className="text-center">รวม</th>
                            <th className="text-center">สถานะ</th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </CardBody>
        </Card>
        </Container>
    </div>
  )
}

export default TableLeave