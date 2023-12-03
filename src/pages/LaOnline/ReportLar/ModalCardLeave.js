import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'

const ModalCardLeave = ({ cardLeave, handleOpenCardLeave }) => {

    const numbers = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <Modal centered size='xl' isOpen={cardLeave} toggle={handleOpenCardLeave}>
        <ModalHeader toggle={handleOpenCardLeave}>ปีงบประมาณ พ.ศ. 2567</ModalHeader>
        <ModalBody>
            <div className='overflow-scroll'>
            <Table bordered style={{verticalAlign:"middle", whiteSpace:"nowrap"}}>
                <thead className='table-dark text-center'>
                    <tr>
                        <th className='p-1'>เดือน</th>
                        <th className='p-1'>วันที่</th>
                        {numbers.map((number) => (
                            <th className='p-1' key={number}>{number}</th>
                        ))}
                        <th className='p-1' colSpan={2}>ป่วย</th>
                        <th className='p-1' colSpan={2}>ลากิจ</th>
                        <th className='p-1' colSpan={1}>สาย</th>
                        <th className='p-1' colSpan={1}>ขาด</th>
                        <th className='p-1' colSpan={2}>พักผ่อน</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className='p-1'>ครั้ง</th>
                        <th className='p-1'>วัน</th>
                        <th className='p-1'>ครั้ง</th>
                        <th className='p-1'>วัน</th>
                        <th className='p-1'>ครั้ง</th>
                        <th className='p-1'>ครั้ง</th>
                        <th className='p-1'>ครั้ง</th>
                        <th className='p-1'>วัน</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
            </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
    </Modal>
  )
}

export default ModalCardLeave