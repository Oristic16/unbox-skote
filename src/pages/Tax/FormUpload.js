import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardSubtitle,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormFeedback,
  Alert,
} from "reactstrap";
import Dropzone from "react-dropzone";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { Link } from "react-router-dom";

const FormUpload = props => {
  const { onFileUpload, onReduceFileUpload } = props;
  //meta title
  document.title =
    "Form File Upload | Skote - React Admin & Dashboard Template";

  const [selectedFiles, setselectedFiles] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 3500);
  };

  const toggleAlert = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3500);
  };

  // function handleAcceptedFiles(files) {
  //   files.map(file =>
  //     Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //       formattedSize: formatBytes(file.size),
  //     })
  //   );
  //   setselectedFiles(files);
  //   console.log(files);
  // }

  function handleAcceptedFiles(files) {
    let totalSize = 0;

    files.forEach(file => {
      totalSize += file.size;
    });

    const allowedExtensions = ["zip"];

    const isValidFile = files.every(file => {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      return allowedExtensions.includes(fileExtension);
    });

    if (totalSize <= 25 * 1024 * 1024) {
      if (isValidFile) {
        // if(onReduceFileUpload){
        //   onReduceFileUpload(files[0])
        // }
        if (onReduceFileUpload) {
          onReduceFileUpload(files[0]);
        }
        if (onFileUpload) {
          onFileUpload(files[0]);
        }

        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size),
          })
        );
        setselectedFiles(files);
        console.log(files);
      } else {
        toggleAlert();
      }
    } else {
      toggleModal();
    }
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <React.Fragment>
      <Row>
        <Col className="col-12">
          <Form>
            <Dropzone
              onDrop={acceptedFiles => {
                handleAcceptedFiles(acceptedFiles);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div className="dropzone">
                  <div
                    className="dz-message needsclick mt-2"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <div className="mb-3">
                      <i className="display-4 text-muted bx bxs-cloud-upload" />
                    </div>
                    <h4>ลากไฟล์มาใส่ หรือ คลิกเพื่ออัพโหลด.</h4>
                  </div>
                </div>
              )}
            </Dropzone>

            <div className="dropzone-previews mt-3" id="file-previews">
              {selectedFiles.map((f, i) => {
                return (
                  <Card
                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                    key={i + "-file"}
                  >
                    <div className="p-2">
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <i
                            className="fa-solid fa-file-zip fa-2xl fa-beat"
                            style={{ color: "#f81212" }}
                          ></i>
                        </Col>
                        <Col>
                          <Link to="#" className="text-muted font-weight-bold">
                            {f.name}
                          </Link>
                          <p className="mb-0">
                            <strong>{f.formattedSize}</strong>
                          </p>
                        </Col>
                        <Col className="col-auto">
                          <button
                            type="button"
                            className="btn btn-link btn-sm text-danger"
                            onClick={() => {
                              const updatedFiles = selectedFiles.filter(
                                (file, index) => index !== i
                              );
                              setselectedFiles(updatedFiles);
                              onFileUpload(updatedFiles);
                            }}
                          >
                            <i className="fa-solid fa-xmark-large"></i>
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Form>
        </Col>
      </Row>

      {show === true ? (
        <div id="liveAlertPlaceholder">
          <Alert color="danger" className="text-danger" isOpen={show}>
            ต้องเป็นนามสกุล .zip เท่านั้น
          </Alert>
        </div>
      ) : (
        ""
      )}
      {modalOpen === true ? (
        <div id="liveAlertPlaceholder">
          <Alert color="danger" className="text-danger" isOpen={modalOpen}>
            ผลรวมขนาดไฟล์ทั้งหมดต้องไม่เกิน 25 MB
          </Alert>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default FormUpload;
