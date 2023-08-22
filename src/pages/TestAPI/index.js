import React, { useEffect, useState } from "react";

import Breadcrumb from "../../components/Common/Breadcrumb";
import { Button, Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import axios from "axios";
import ModalUpdate from "./ModalUpdate";
import ModalAdd from "./ModalAdd";

function TestAPI() {

  const [timeNow, setTimeNow] = useState(new Date());
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    user: '',
    role: '',
    time: '',
  });

  const getData = () => {
    axios
      .get("http://localhost:8000/select")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const checkUser = () => {
    try {
        axios.post('http://localhost:8000/entrywork', {
            user: userData.user,
            role: userData.role,
            time: timeNow.toLocaleString()
        })
    } catch (err) {
        console.error(err);
    }
  };

  

  function deleteRow(id) {
    setData(prev => prev.filter(item => item.id !== id))
  }

  useEffect(() => {
    getData();
    // checkUser();
  }, []);

  useEffect(() => {

    const getLocalSorage = () => {
      const authUser = JSON.parse(localStorage.getItem("authUser"));
      if (authUser) {
        setUserData((prevData) => ({
          ...prevData,
          user: authUser.username,
          role: authUser.role,
          time: new Date().toLocaleString()
        }));
      }
    }
  
    getLocalSorage();
  },[timeNow])

  useEffect(() => {

    const setTimeAuto = () => {
      var timer = setInterval(() => setTimeNow(new Date()), 1000);
  
      return function cleanup() {
        clearInterval(timer);
      };
    };
  
    setTimeAuto();
  },[timeNow])

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="TestAPI" breadcrumbItem="API" />
        <Card>
          <CardBody>
            <h1>{timeNow.toLocaleString()}</h1>
            <Button onClick={checkUser} className="my-2" color="primary">
              click
            </Button>
            <div>
                <Row className="my-2">
                    <Col xl={6} className="d-flex justify-content-start">
                        <h1>Test API</h1>
                    </Col>
                    <Col xl={6} className="d-flex justify-content-end">
                      <ModalAdd />
                    </Col>
                </Row>
            </div>
            

            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>username</th>
                  <th>password</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.password}</td>
                      {/* <td><Button color="warning" onClick={() => updateButton(item.id,)}>Update</Button></td> */}
                      <td><ModalUpdate data={data} /></td>
                      <td><Button color="danger" onClick={() => deleteRow(item.id)}>Delete</Button></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {userData.user !== null ? (
              <div>
                <h5>User = {userData.user}</h5>
                <h5>Role = {userData.role}</h5>
                <h5>Time = {userData.time}</h5>
              </div>
            ) : null}
          </CardBody>
        </Card>
        
      </Container>
      
    </div>
  );
}

export default TestAPI;
