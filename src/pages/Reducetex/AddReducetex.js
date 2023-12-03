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
  Spinner,
} from "reactstrap";
import FormUpload from "../Tax/FormUpload";
import { GetCookieToken } from "../Cookie/GetCookie";
import axios from "axios";
import { useEffect } from "react";
import LoadingData from "../TESTPage/LoadingData";
import FadeIn from "react-fade-in/lib/FadeIn";

const API_URL = process.env.REACT_APP_API_CORS;

function AddReducetex(props) {
  const { onTrigger } = props;
  const [fileUpload, setFileUpload] = useState(null);
  const [yearUpload, setYearUpload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const token = GetCookieToken("userToken");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
      const Folder = "ReduceTax" + yearUpload;

      const formData = new FormData();
      formData.append("file", fileUpload);
      formData.append("fileName", filesName.split(".zip")[0]);
      formData.append("fileFolder", Folder);
      formData.append("year", yearUpload);

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
      onTrigger("รีเฟรชหน้าจอใบลดหย่อน", "บันทึกสำเร็จ");
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

  return (
    <Fragment>
      {loading ? (
        <div
          style={{
            width: "5rem",
            height: "5rem",
            position: "absolute",
            top: "40%",
            left: "25%",
          }}
        >
          <LoadingData />
        </div>
      ) : (
        <FadeIn>
          <Card>
            <CardBody>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <FormGroup>
                  <Label>
                    <b>ปี</b>
                  </Label>
                  <Input
                    placeholder="ระบุปี"
                    type="text"
                    onChange={e => {
                      setYearUpload(e.target.value);
                    }}
                    invalid={!yearUpload}
                  />
                  {!yearUpload && (
                    <FormFeedback>โปรดกรอกข้อมูลให้ครบถ้วน</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <FormUpload onReduceFileUpload={handleFile} />
                </FormGroup>
                {show === true ? (
                  <div id="liveAlertPlaceholder">
                    <Alert color="danger" className="text-danger" isOpen={show}>
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
                    window.confirm("คุณต้องการที่จะ submit ฟอร์มนี้ใช่หรือไม่?")
                  }
                >
                  บันทึก
                </Button>
              </Form>
            </CardBody>
          </Card>
        </FadeIn>
      )}
    </Fragment>
  );
}

export default AddReducetex;
