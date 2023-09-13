import React from "react";
import { Link } from "react-router-dom";
import { Badge, Table } from "reactstrap";

const Vehicle = () => {
  return (
    <div>
      <Table
        // bordered
        // striped
        responsive
        style={{whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle"}}
        className="table table-hover"
      >
        <thead style={{}}>
          <tr>
            <th>วันที่ เวลา</th>
            <th>สถานที่</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13/09/2566 07:45 น.</td>
            <td>ม. หอการค้าไทย</td>
            <td><h4>
              <Badge className="p-2" color="success">
                อนุมัติ
              </Badge></h4>
            </td>
          </tr>
          <tr>
            <td>13/09/2566 12:30 น.</td>
            <td>โรงแรมโกลเด้นทิวลิป</td>
            <td><h4>
              <Badge className="p-2" color="warning">
                รอดำเนินการ
              </Badge></h4>
            </td>
          </tr>
          <tr>
            <td>13/09/2566 08:30 น.</td>
            <td>บริษัท บอยเดน แอสโซซิเอทส์ จำกัด</td>
            <td><h4>
              <Badge className="p-2" color="warning">
                รอดำเนินการ
              </Badge></h4>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="mt-2" style={{ textAlign: "end" }}>
        <Link to="https://smart.opdc.go.th/" className="btn btn-primary  btn-md">
          ดูข้อมูลเพิ่มเติมได้ที่ระบบจองยานพาหนะ{" "}
          <i className="mdi mdi-arrow-right ms-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default Vehicle;
