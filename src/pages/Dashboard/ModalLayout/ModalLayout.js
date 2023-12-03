import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
} from 'reactstrap';
import Dashboard2 from '..';
// import { handleButtonClick } from '..';
import useLayOutConText from '../../Context/LayOutContext';

function ModalLayout(props) {
  const { setLayOutValue } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        onClick={toggle}
        className="btn header-item"
        style={{ backgroundColor: 'transparent' }}
      >
        <i className="fa-regular fa-table-layout fa-beat fa-xl"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="xl" centered>
        <ModalHeader toggle={toggle}>รูปแบบ</ModalHeader>
        <ModalBody>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button
                className="p-0"
                style={{
                  backgroundColor: 'white',
                  // border: 'none',
                  height: '195px',
                  // width: '195px',
                }}
                onClick={() => {
                  setLayOutValue('A');
                  setModal(!modal);
                }}
              >
                <Card
                  className="mb-0 pb-0"
                  color="dark"
                  outline
                  style={{
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardBody className="pb-0 p-2">
                    <Row>
                      <Col lg={4}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            A
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={4}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            B
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={4}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            C
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={12}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            D
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                className="p-0"
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                }}
                onClick={() => {
                  setLayOutValue('B');
                  setModal(!modal);
                }}
              >
                <Card
                  className="mb-0 border pb-0"
                  color="dark"
                  outline
                  style={{
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardBody className="pb-0 p-2">
                    <Row>
                      <Col lg={6}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            A
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={6}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            B
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Card className="border" color="danger" outline>
                          <CardBody
                            className="p-2 pe-3 ps-3 d-flex justify-content-center"
                            style={{ width: '175px' }}
                          >
                            C
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Card className="border" color="danger" outline>
                          <CardBody
                            className="p-2 pe-3 ps-3 d-flex justify-content-center"
                            style={{ width: '175px' }}
                          >
                            D
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                className="p-0"
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  // height: '195px'
                }}
                onClick={() => {
                  setLayOutValue('C');
                  setModal(!modal);
                }}
              >
                <Card
                  className="mb-0 border pb-0"
                  color="dark"
                  outline
                  style={{
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardBody className="pb-0 p-2">
                    <Row>
                      <Col lg={12}>
                        <Card
                          className="border mb-2"
                          color="danger"
                          outline
                          style={{ width: '175px' }}
                        >
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            A
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Card className="border mb-2" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            B
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Card className="border mb-2" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            C
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Card className="border mb-2" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            D
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                className="p-0"
                style={{
                  backgroundColor: 'white',
                  // border: 'none',
                }}
                onClick={() => {
                  setLayOutValue('');
                  setModal(!modal);
                }}
              >
                <Card
                  className="mb-0  pb-0"
                  color="dark"
                  outline
                  style={{
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardBody className="pb-0 p-2 pt-0 pe-2">
                    <Row>
                      <Col lg={6}>
                        <Card className="border" color="danger" outline>
                          <CardBody
                            className="p-2 pe-4 ps-1 d-flex justify-content-center"
                            style={{ width: '87.5px' }}
                          >
                            A
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={6}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            B
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={6}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            C
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={6}>
                        <Card className="border" color="danger" outline>
                          <CardBody className="p-2 pe-3 ps-3 d-flex justify-content-center">
                            D
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Button>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <br />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalLayout;
