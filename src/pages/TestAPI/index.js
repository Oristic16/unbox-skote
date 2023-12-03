import React, { useEffect, useState } from "react";

import Breadcrumb from "../../components/Common/Breadcrumb";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";
import ModalUpdate from "./ModalUpdate";
import ModalAdd from "./ModalAdd";
import FontSelector from "../Context/FontSelector";
import { useFontSizeContext } from "../Context/FontSizeContext";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/th'
import Wave from "react-wavify";

function TestAPI() {
  const { fontSize } = useFontSizeContext();

  const [timeNow, setTimeNow] = useState(new Date());
  const [data, setData] = useState([]);
  const [dataUpload, setDataUpload] = useState([]);
  const [userData, setUserData] = useState({
    user: "",
    role: "",
    time: "",
  });

  const getData = () => {
    axios
      .get("http://localhost:8000/getuser")
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
      axios.post("http://localhost:8000/entrywork", {
        user: userData.user,
        role: userData.role,
        time: timeNow.toLocaleString(),
      });
    } catch (err) {
      console.error(err);
    }
  };

  function deleteRow(id) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }

  useEffect(() => {
    // getData();
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
          time: new Date().toLocaleString(),
        }));
      }
    };

    getLocalSorage();
  }, [timeNow]);

  useEffect(() => {
    const setTimeAuto = () => {
      var timer = setInterval(() => setTimeNow(new Date()), 1000);

      return function cleanup() {
        clearInterval(timer);
      };
    };

    setTimeAuto();
  }, [timeNow]);

  const [selectedFile, setSelectedFile] = useState(null);

  const getDataUpload = () => {
    try {
      axios.get("getfileupload");
      setDataUpload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/testupload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const textStyle = {
    fontSize:
      fontSize === ""
        ? "20px"
        : fontSize === "small"
        ? "30px"
        : fontSize === "medium"
        ? "40px"
        : fontSize === "large"
        ? "50px"
        : "20px",
  };

  const [date, setDate] = useState(null);
  // console.log(date);
  const handleChange = (e) => {
    setDate(e)
    console.log(e.$d)
  }

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
                      <td>
                        <ModalUpdate data={data} />
                      </td>
                      <td>
                        <Button
                          color="danger"
                          onClick={() => deleteRow(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
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

        <Card>
          <CardBody>
            <Row>
              <Col>
                <form onSubmit={handleSubmit}>
                  <input type="file" onChange={handleFileSelect} />
                  <input type="submit" value="Upload File" />
                </form>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>File Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataUpload.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{item.id}</td>
                          <td>{item.fileUpload}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <FontSelector />
            <br />
            <p style={textStyle}>Hello, this is tag &lt;p&gt; </p>
            <h1 style={textStyle}>Hello, this is tag &lt;h1&gt; </h1>
            <a style={textStyle} href="/testapi">
              Hello, this is tag &lt;a&gt;{" "}
            </a>
            <div style={textStyle}>
              Hello, this is tag &lt;div&gt; with raw text{" "}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
              <DemoContainer components={["DatePicker"]}>
                <DatePicker value={date} onChange={handleChange} />
              </DemoContainer>
            </LocalizationProvider>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
          <div
                      style={{
                        position: "relative",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        backgroundColor: "blue",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "end",
                        border: "2px solid black",
                      }}
                    >
                      <Wave
                        fill="red"
                        paused={false}
                        style={{
                          position: "absolute",
                          width: "200px",
                          height: "100px",
                          // backgroundColor: "#333",
                          zIndex: "1",
                          // bottom: 0
                        }}
                        options={{
                          height: 20,
                          amplitude: 9,
                          speed: 0.5,
                          points: 3,
                        }}
                      ></Wave>
                    </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default TestAPI;
