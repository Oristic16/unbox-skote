import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Table } from "reactstrap";

const TableForm = () => {
  const baseURL = "http://localhost:8000";

  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(baseURL + "/getform1")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Card style={{ overflow: "scroll" }}>
              <CardBody>
      <Table style={{whiteSpace: "nowrap" }}>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>เรือง</th>
            <th>ตั้งแต่วันที่</th>
            <th>ช่วงเวลา</th>
            <th>ถึงวันที่</th>
            <th>ช่วงเวลา</th>
            <th>รวม</th>
            <th>สถานะ</th>
            <th>วันที่ส่งใบลา</th>
          </tr>
        </thead>
        <tbody style={{ overflow: "scroll" }}>
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.sinceD}</td>
                <td>{item.sinceT}</td>
                <td>{item.toD}</td>
                <td>{item.toT}</td>
                <td>{item.amountD}</td>
                <td>{item.status}</td>
                <td>{item.writeDate}</td> 
              </tr>
            );
          })}
        </tbody>
      </Table>
      </CardBody></Card>
    </React.Fragment>
  );
};

export default TableForm;
