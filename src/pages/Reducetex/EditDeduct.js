import { FileUpload } from "@mui/icons-material";
import React, { Fragment, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Spinner,
} from "reactstrap";
import FormUpload from "../Tax/FormUpload";
import { GetCookieToken } from "../Cookie/GetCookie";
import axios from "axios";
import { useEffect } from "react";
import LoadingData from "../TESTPage/LoadingData";

const API_URL = process.env.REACT_APP_API_CORS;
function EditDeduct(props) {
  const { year, onButtonClick } = props;
  const [fileUpload, setFileUpload] = useState(null);
  const [yearUpload, setYearUpload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const token = GetCookieToken("userToken");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const toggleRightCanvas = () => {
    setOpen(!open);
  };

  const handleFile = value => {
    setFileUpload(value);
  };

  const handleSubmit = () => {
    if (fileUpload === null) {
      toggleAlert();
    } else {
      setLoading(true);
      const url_file = "/api/reduceTaxSlip/uploads";
      const filesName = fileUpload.path;
      const Folder = "ReduceTax" + year;

      const formData = new FormData();
      formData.append("file", fileUpload);
      formData.append("fileName", filesName.split(".zip")[0]);
      formData.append("fileFolder", Folder);
      formData.append("year", year);

      fetch(API_URL + url_file, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error("Error:", error);
        });

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  const toggleAlert = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3500);
  };

  const toggleRightCanvasF = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      onButtonClick(year);
    }, 2500);
  };

  return (
    <Fragment>
      <Button className="me-2" color="warning" onClick={toggleRightCanvas}>
        <i className="fa-solid fa-pen-to-square"></i> แก้ไข
      </Button>
      <Offcanvas
        style={{ border: "none" }}
        autoFocus
        direction="end"
        isOpen={open}
        toggle={toggleRightCanvas}
        fade
        className="fade"
      >
        {/* toggle={toggleRightCanvas} */}
        <OffcanvasHeader style={{ background: "#2a3042", color: "#ffffff" }}>
          <i
            className="fa-regular fa-clipboard pe-1"
            style={{ color: "#ffffff" }}
          ></i>
          แก้ไขใบลดภาษี
        </OffcanvasHeader>
        <OffcanvasBody>
          {/* <AddTex  /> */}

          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "400px",
              }}
            >
              <LoadingData />
            </div>
          ) : (
            <Card>
              <CardBody>
                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                    toggleRightCanvasF();
                  }}
                >
                  <FormGroup>
                    <Label>
                      <b>ปี</b>
                    </Label>
                    <Input
                      readOnly
                      defaultValue={year}
                      placeholder="ระบุปี"
                      type="text"
                      onChange={e => {
                        setYearUpload(e.target.value);
                      }}
                      //   invalid={!yearUpload}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <FormUpload onFileUpload={handleFile} />
                  </FormGroup>
                  {show === true ? (
                    <div id="liveAlertPlaceholder">
                      <Alert
                        color="danger"
                        className="text-danger"
                        isOpen={show}
                      >
                        กรุณาอัพโหลดไฟล์
                      </Alert>
                    </div>
                  ) : (
                    ""
                  )}
                  <Button
                    color="success"
                    type="submit"
                    onClick={() =>
                      window.confirm(
                        "คุณต้องการที่จะ submit ฟอร์มนี้ใช่หรือไม่?"
                      )
                    }
                  >
                    บันทึก
                  </Button>
                </Form>
              </CardBody>
            </Card>
          )}
        </OffcanvasBody>
      </Offcanvas>
    </Fragment>
  );
}

export default EditDeduct;
