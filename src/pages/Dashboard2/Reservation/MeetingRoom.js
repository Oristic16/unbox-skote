import React from "react";
import { Badge, Table } from "reactstrap";

const MeetingRoom = () => {
  return (
    <div>
      <Table
        bordered
        // striped
        responsive
      >
        <thead>
          <tr>
            <th>วันที่ เวลา</th>
            <th>ถึงวันที่ เวลา</th>
            <th>ห้องประชุม</th>
            <th>ประเภทการประชุม</th>
            <th>หัวข้อการประชุม</th>
            <th>ประธานการประชุม</th>
            <th>วันที่ เวลา บันทึก</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30/3/2566</td>
            <td>30/3/2566</td>
            <td>ห้องประชุม 201</td>
            <td>อื่นๆ</td>
            <td>การจัดตั้งศูนย์ข้อมูลฯ และการประเมินหน่วยงาน</td>
            <td>-</td>
            <td>28/03/2566</td>
            <td>
              <Badge className="p-2" color="success">
                อนุมัติ
              </Badge>
            </td>
          </tr>
          <tr>
            <td>30/3/2566</td>
            <td>30/3/2566</td>
            <td>ห้องประชุม 201</td>
            <td>อื่นๆ</td>
            <td>ชี้แจงทีมกองกฎหมายสนับสนุนงานกอง PO</td>
            <td>-</td>
            <td>28/03/2566</td>
            <td>
              <Badge className="p-2" color="warning">
                รอดำเนินการ
              </Badge>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MeetingRoom;
