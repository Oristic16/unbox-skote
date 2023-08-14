import React, { Component } from 'react';
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
} from 'reactstrap';
import axios from 'axios';

import { withTranslation } from 'react-i18next';
import Breadcrumb from '../../components/Common/Breadcrumb';

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?userId=1'
      );
      console.log(response.data);
      this.setState({ data: response.data });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.getData();
  }

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
            <Breadcrumb title="Home" breadcrumbItem="การประเมินผลการปฏิบัติราชการ" />
            <Card>
              <CardBody className="justify-content-center">
                <ListGroup>
                  <Row>
                    <Col xl={3}>
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
                                      width: '1.73em',
                                      display: 'inline-block',
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
                                      width: '1.73em',
                                      display: 'inline-block',
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
                                      width: '1.73em',
                                      display: 'inline-block',
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
                                      width: '1.73em',
                                      display: 'inline-block',
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
                                {/* <Badge pill className="bg-info px-1 py-2">
                              <span
                                style={{
                                  width: '1.73em',
                                  display: 'inline-block',
                                }}
                              ></span>
                            </Badge> */}
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
                                {/* <Badge pill className="bg-info px-1 py-2">
                              <span
                                style={{
                                  width: '1.73em',
                                  display: 'inline-block',
                                }}
                              ></span>
                            </Badge> */}
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
                                {/* <Badge pill className="bg-info px-1 py-2">
                              <span
                                style={{
                                  width: '1.73em',
                                  display: 'inline-block',
                                }}
                              ></span>
                            </Badge> */}
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
                                {/* <Badge pill className="bg-info px-1 py-2">
                              <span
                                style={{
                                  width: '1.73em',
                                  display: 'inline-block',
                                }}
                              ></span>
                            </Badge> */}
                              </h6>
                            </div>
                          </Badge>
                        </ListGroupItemText>
                      </ListGroupItem>
                    </Col>
                    <Col xl={9}>
                      <ListGroupItem
                        style={{ maxWidth: '100%', overflowX: 'auto' }}
                      >
                        <InputGroup className="p-3">
                          <InputGroupText>ค้นหา</InputGroupText>
                          <Input placeholder="คีย์ข้อมูล" />
                          <Button color="info">
                            <div className="px-3">
                              <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                            </div>
                          </Button>
                        </InputGroup>

                        <br />
                        <Col>
                          <Table responsive style={{ overflow: 'hidden' }}>
                            <thead
                              className="text-center"
                              style={{ whiteSpace: 'nowrap' }}
                            >
                              <tr>
                                <th>ลำดับ</th>
                                <th>
                                  <div className="d-flex align-items-center">
                                    ผู้รับการประเมิน
                                  </div>
                                </th>
                                <th></th>
                                <th>
                                  <div className="d-flex align-items-center">
                                    การประเมิน
                                  </div>
                                </th>
                                <th>
                                  <div className="d-flex align-items-center">
                                    ปี
                                  </div>
                                </th>
                                <th>
                                  <div className="d-flex align-items-center">
                                    รอบ
                                  </div>
                                </th>
                                <th>วันที่ส่งแบบประเมิน</th>
                                <th>
                                  <div className="d-flex align-items-center">
                                    คะแนน
                                  </div>
                                </th>
                                <th>รายละเอียด</th>
                              </tr>
                            </thead>
                            <tbody
                              className="text-center "
                              style={{ whiteSpace: 'nowrap' }}
                            >
                              {/* {data.map((item, idx) => {
                          return (
                            <tr key={idx}>
                              <td>{item.userId}</td>
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                              <td>{item.body}</td>
                            </tr>
                          );
                        })} */}
                              <tr>
                                <td className="align-middle">1</td>
                                <td className="align-middle ">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-user fa-xl pe-1"></i>

                                    <span className="fs-6 ml-2">
                                      กนกพร ศรีวิทยา
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-face-smile-wink fa-xl pe-1 pe-1"></i>
                                    <Badge
                                      color="warning"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-warning fs-6">
                                        ดีมาก
                                      </span>
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <span className="fs-6">2566</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    1
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <i className="fa-solid fa-clock-seven fa-xl pe-1 pe-1"></i>
                                  <span>06/02/2563</span>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-bullseye-pointer pe-1"></i>
                                    <span>84.5</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <Button color="info">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text pe-1"></i>
                                    <span>ดูข้อมูล</span>
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle">2</td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-user fa-xl pe-1 pe-1"></i>
                                    <span className="fs-6 ml-2">
                                      กมลา พิมพ์นวลศรี
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-face-smile-wink fa-xl  pe-1"></i>
                                    <Badge
                                      color="warning"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-warning fs-6">
                                        ดีมาก
                                      </span>
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <span className="fs-6">2566</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    1
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <i className="fa-solid fa-clock-seven fa-xl pe-1"></i>
                                  <span>29/10/2562</span>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-bullseye-pointer pe-1"></i>
                                    <span>78</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <Button color="info">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text pe-1"></i>
                                    <span>ดูข้อมูล</span>
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle">3</td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-user fa-xl pe-1"></i>
                                    <span className="fs-6"> กฤตพน ชูศรี</span>
                                  </div>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-face-smile fa-xl pe-1"></i>
                                    <Badge
                                      color="success"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-success fs-6">
                                        ดีเด่น
                                      </span>
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <span className="fs-6">2566</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    1
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <i className="fa-solid fa-clock-seven fa-xl pe-1"></i>
                                  <span>24/09/2562</span>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-bullseye-pointer pe-1"></i>
                                    <span>87</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <Button color="info">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text pe-1"></i>
                                    <span>ดูข้อมูล</span>
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle">4</td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-user fa-xl pe-1"></i>
                                    <span className="fs-6">
                                      กฤตยา ธัชศถุงคารสกุล
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-face-smile-wink fa-xl pe-1"></i>
                                    <Badge
                                      color="warning"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-warning fs-6">
                                        ดีมาก
                                      </span>
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <span className="fs-6">2566</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    1
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <i className="fa-solid fa-clock-seven fa-xl pe-1"></i>
                                  <span>24/09/2562</span>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-bullseye-pointer pe-1"></i>
                                    <span>79</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <Button color="info">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text pe-1"></i>
                                    <span>ดูข้อมูล</span>
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle">5</td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-user fa-xl pe-1"></i>
                                    <span className="fs-6">
                                      {' '}
                                      กฤษณา แก้วด้วง
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-face-smile fa-xl pe-1"></i>
                                    <Badge
                                      color="success"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-success fs-6">
                                        ดีเด่น
                                      </span>
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <span className="fs-6">2566</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    1
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <i className="fa-solid fa-clock-seven fa-xl pe-1"></i>
                                  <span>23/09/2562</span>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-bullseye-pointer pe-1"></i>
                                    <span>89.5</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <Button color="info">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text pe-1"></i>
                                    <span>ดูข้อมูล</span>
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle">6</td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-user fa-xl pe-1"></i>
                                    <span className="fs-6">
                                      {' '}
                                      กาญจนา มังกโรทัย{' '}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-face-scream fa-xl pe-1"></i>
                                    <Badge
                                      color="danger"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-danger fs-6">
                                        ดี
                                      </span>
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <span className="fs-6">2566</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    1
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <i className="fa-solid fa-clock-seven fa-xl pe-1"></i>
                                  <span>23/09/2562</span>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-bullseye-pointer pe-1"></i>
                                    <span>76</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <Button color="info">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text pe-1"></i>
                                    <span>ดูข้อมูล</span>
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle">7</td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-user fa-xl pe-1"></i>
                                    <span className="fs-6">
                                      {' '}
                                      กาญจนากร สามเมือง{' '}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-face-smile fa-xl pe-1"></i>
                                    <Badge
                                      color="success"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-success fs-6">
                                        ดีเด่น
                                      </span>
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <span className="fs-6">2566</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    1
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <i className="fa-solid fa-clock-seven fa-xl pe-1"></i>
                                  <span>21/08/2562</span>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-bullseye-pointer pe-1"></i>
                                    <span>85.5</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <Button color="info">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text pe-1"></i>
                                    <span>ดูข้อมูล</span>
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle">8</td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-user fa-xl pe-1"></i>
                                    <span className="fs-6">
                                      {' '}
                                      กานดา วรมงคลชัย{' '}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-face-scream fa-xl pe-1"></i>
                                    <Badge
                                      color="danger"
                                      className="p-2 bg-opacity-10"
                                    >
                                      <span className="text-danger fs-6">
                                        ดี
                                      </span>
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <span className="fs-6">2566</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    1
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <i className="fa-solid fa-clock-seven fa-xl pe-1"></i>
                                  <span>19/08/2562</span>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-bullseye-pointer pe-1"></i>
                                    <span>75.5</span>
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <Button color="info">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text pe-1"></i>
                                    <span>ดูข้อมูล</span>
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </ListGroupItem>
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
