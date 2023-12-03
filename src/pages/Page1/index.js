import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";

import { withTranslation } from "react-i18next";
import Breadcrumb from "../../components/Common/Breadcrumb";
import Tabledata from "./Tabledata";

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  // getData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts?userId=1"
  //     );
  //     console.log(response.data);
  //     this.setState({ data: response.data });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // componentDidMount() {
  //   this.getData();
  // }

  // const [data, setData] = useState([])

  // const getData = async () => {
  //   try {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
  //     console.log(response.data)
  //     setData(response.data)
  //   } catch (err) {
  //     console.error(err);
  //   }

  // }

  // useEffect(() => {
  //   getData();
  // },[])

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        <div className="page-content ">
          <Container fluid>
            <Breadcrumb
              title="Home"
              breadcrumbItem="การประเมินผลการปฏิบัติราชการ"
            />
            <Card>
              <CardBody className="justify-content-center">
                <ListGroup>
                  <Row>
                    {/* <Col xl={2}>
                      <ListGroupItem className="w-auto flex-column">
                        <ListGroupItemText>
                          <Badge className="bg-light rounded-4 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h6 className="pt-2 ps-2 pb-2 pe-1 mb-0">
                                <i className="fa-solid fa-user-check pe-1"></i>
                                การประเมินตนเอง
                              </h6>
                            </div>
                            <div className="pt-2 pe-2 pl-0">
                              <h6 className="d-flex align-items-center">
                                <Badge pill className="bg-info px-1 py-2">
                                  <span
                                    style={{
                                      width: "1.73em",
                                      display: "inline-block",
                                    }}
                                  >
                                    323
                                  </span>
                                </Badge>
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                        <ListGroupItemText>
                          <Badge className="bg-light rounded-4 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h6 className="pt-2 ps-2 pb-2 pe-1 mb-0">
                                <i className="fa-solid fa-hand-holding-dollar pe-1"></i>
                                ใบเงินเดือน
                              </h6>
                            </div>
                            <div className="pt-2 pe-2 pl-0">
                              <h6 className="d-flex align-items-center">
                                <Badge pill className="bg-info px-1 py-2">
                                  <span
                                    style={{
                                      width: "1.73em",
                                      display: "inline-block",
                                    }}
                                  >
                                    20
                                  </span>
                                </Badge>
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                        <ListGroupItemText>
                          <Badge className="bg-light rounded-4 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h6 className="pt-2 ps-2 pb-2 pe-1 mb-0">
                                <i className="fa-regular fa-badge-percent pe-1"></i>
                                แบบลดหย่อน
                              </h6>
                            </div>
                            <div className="pt-2 pe-2 pl-0">
                              <h6 className="d-flex align-items-center">
                                <Badge pill className="bg-info px-1 py-2">
                                  <span
                                    style={{
                                      width: "1.73em",
                                      display: "inline-block",
                                    }}
                                  >
                                    4
                                  </span>
                                </Badge>
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                        <ListGroupItemText>
                          <Badge className="bg-light rounded-4 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h6 className="pt-2 ps-2 pb-2 pe-1 mb-0">
                                <i className="fa-solid fa-file-certificate pe-1"></i>
                                รับรองการหักภาษี
                              </h6>
                            </div>
                            <div className="pt-2 pe-2 pl-0">
                              <h6 className="d-flex align-items-center">
                                <Badge pill className="bg-info px-1 py-2">
                                  <span
                                    style={{
                                      width: "1.73em",
                                      display: "inline-block",
                                    }}
                                  >
                                    4
                                  </span>
                                </Badge>
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                        <ListGroupItemText>
                          <Badge className="bg-light rounded-4 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h6 className="pt-2 ps-2 pb-2 pe-1 my-1 ">
                                <i className="fa-solid fa-user-group-simple pe-1"></i>
                                ประเมินบุคลากร
                              </h6>
                            </div>
                            <div className="pt-2 pe-2 pl-0">
                              <h6 className="d-flex align-items-center">
                                <Badge pill className="bg-info px-1 py-2">
                                  <span
                                    style={{
                                      width: "1.73em",
                                      display: "inline-block",
                                    }}
                                  ></span>
                                </Badge>
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                        <ListGroupItemText>
                          <Badge className="bg-light rounded-4 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h6 className="pt-2 ps-2 pb-2 pe-1 my-1 ">
                                <i className="fa-solid fa-chart-line pe-1"></i>
                                รายงานกราฟ
                              </h6>
                            </div>
                            <div className="pt-2 pe-2 pl-0">
                              <h6 className="d-flex align-items-center">
                                <Badge pill className="bg-info px-1 py-2">
                                  <span
                                    style={{
                                      width: "1.73em",
                                      display: "inline-block",
                                    }}
                                  ></span>
                                </Badge>
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                        <ListGroupItemText>
                          <Badge className="bg-light rounded-4 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h6 className="pt-2 ps-2 pb-2 pe-1 my-1 ">
                                <i className="fa-solid fa-envelopes-bulk pe-1"></i>
                                บริหารข้อมูล
                              </h6>
                            </div>
                            <div className="pt-2 pe-2 pl-0">
                              <h6 className="d-flex align-items-center">
                                <Badge pill className="bg-info px-1 py-2">
                                  <span
                                    style={{
                                      width: "1.73em",
                                      display: "inline-block",
                                    }}
                                  ></span>
                                </Badge>
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                        <ListGroupItemText>
                          <Badge className="bg-light rounded-4 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h6 className="pt-2 ps-2 pb-2 pe-1 my-1 ">
                                <i className="fa-solid fa-user-astronaut pe-1"></i>
                                ผู้ดูแลระบบ
                              </h6>
                            </div>
                            <div className="pt-2 pe-2 pl-0">
                              <h6 className="d-flex align-items-center">
                                <Badge pill className="bg-info px-1 py-2">
                                  <span
                                    style={{
                                      width: "1.73em",
                                      display: "inline-block",
                                    }}
                                  ></span>
                                </Badge>
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                      </ListGroupItem>
                    </Col> */}
                    <Col xl={12}>
                      {/* <InputGroup className="p-3">
                          <InputGroupText>ค้นหา</InputGroupText>
                          <Input placeholder="คีย์ข้อมูล" />
                          <Button color="info">
                            <div className="px-3">
                              <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                            </div>
                          </Button>
                        </InputGroup> */}

                      <Tabledata />
                    </Col>
                  </Row>
                </ListGroup>
              </CardBody>
            </Card>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Page1);
