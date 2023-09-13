import React from "react";
import { Link } from "react-router-dom";
import { Badge, Table } from "reactstrap";

const MeetingRoom = () => {
  return (
    <div>
      <Table
        // bordered
        // striped
        hover
        responsive
        style={{whiteSpace:"nowrap",textAlign: "center",verticalAlign:"middle"}}
      >
        <thead className="table-light">
          <tr>
            <th>วันที่ เวลา</th>
            {/* <th>ถึงวันที่ เวลา</th> */}
            <th>ห้องประชุม</th>
            {/* <th>ประเภทการประชุม</th> */}
            {/* <th>หัวข้อการประชุม</th> */}
            {/* <th>ประธานการประชุม</th> */}
            {/* <th>วันที่ เวลา บันทึก</th> */}
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30/3/2566</td>
            {/* <td>30/3/2566</td> */}
            <td>ห้องประชุม 201</td>
            {/* <td>อื่นๆ</td> */}
            {/* <td>การจัดตั้งศูนย์ข้อมูลฯ และการประเมินหน่วยงาน</td> */}
            {/* <td>-</td> */}
            {/* <td>28/03/2566</td> */}
            <td>
              <h4><Badge className="p-2" color="success">
                อนุมัติ
              </Badge></h4>
              
            </td>
          </tr>
          <tr>
            <td>30/3/2566</td>
            {/* <td>30/3/2566</td> */}
            <td>ห้องประชุม 201</td>
            {/* <td>อื่นๆ</td> */}
            {/* <td>ชี้แจงทีมกองกฎหมายสนับสนุนงานกอง PO</td> */}
            {/* <td>-</td> */}
            {/* <td>28/03/2566</td> */}
            <td>
              <h4><Badge className="p-2" color="warning">
                รอดำเนินการ
              </Badge></h4>
              
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="mt-2" style={{ textAlign: "end" }}>
        <Link
          to="https://smart.opdc.go.th/"
          className="btn btn-primary  btn-md"
        >
          ดูข้อมูลเพิ่มเติมได้ที่ระบบจองห้องประชุม{" "}
          <i className="mdi mdi-arrow-right ms-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default MeetingRoom;
