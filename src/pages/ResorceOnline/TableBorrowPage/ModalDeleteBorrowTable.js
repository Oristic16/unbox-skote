import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import Lottie from "react-lottie";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import * as accessDenied from "../../Login/accessDenied.json";
import axios from "axios";
import { GetCookieData, GetCookieToken } from "../../Cookie/GetCookie";

const ModalDeleteBorrowTable = ({
    id,
    deleteBorrow,
    handleToggleModalDeleteBorrow,
    deleteRowBorrow,
    getBorrowDataTable
}) => {

    const user = GetCookieData("userData")

  return (
    <Modal
      size="md"
      centered
      isOpen={deleteBorrow}
      toggle={handleToggleModalDeleteBorrow}
    >
      <ModalHeader toggle={handleToggleModalDeleteBorrow}>
        ลบข้อมูลการยืม-คืนอุปกรณ์
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col xxl={12} className="d-flex justify-content-center">
            <h1>คุณต้องการลบข้อมูลนี้ใช่ไหม</h1>
          </Col>
          <Col xxl={12} className="d-flex justify-content-center mt-4">
            <div
              className="p-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                border: "5px solid black",
              }}
            >
              <FadeIn>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: accessDenied.default,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  width={180}
                  height={100}
                />
              </FadeIn>
            </div>
          </Col>
          <Col className="mt-4" xxl={12}>
            <Row>
              <Col xxl={6} className="d-flex justify-content-end">
                <Button size="lg" color="success" onClick={ async () => {
                    await deleteRowBorrow(id)
                }}>
                  ตกลง
                </Button>
              </Col>
              <Col
                xxl={6}
                onClick={handleToggleModalDeleteBorrow}
                className="d-flex justify-content-start"
              >
                <Button size="lg" color="danger">
                  ยกเลิก
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ModalDeleteBorrowTable;
