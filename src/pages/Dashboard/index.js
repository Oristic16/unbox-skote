import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import { Chart as ChartJS, registerables } from "chart.js";

import Breadcrumbs from "../../components/Common/Breadcrumb";

import Calendar from "./Calendar(not used)";
import WelcomeComp from "./WelcomeComp/WelcomeComp";
import EntryWork from "./EntryWork/EntryWork";
import Reservation from "./Reservation";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import Sarabun from "./Sarabun/Sarabun";
import { useLayOutConText } from "../Context/LayOutContext";
import { GetCookieData, GetCookieToken } from "../Cookie/GetCookie";
import ResorceOnline from "./ResorceOnline/ResorceOnline";
import FadeIn from "react-fade-in/lib/FadeIn";
import LoadingPage from "../TESTPage/LoadingPage";
import classnames from "classnames";
import styles from './Dashboard.module.scss'
import QRCode from "qrcode.react";
import { QrCode } from "@mui/icons-material";

ChartJS.register(...registerables);

const baseURL = process.env.REACT_APP_API_CORS;
const linkDownload = process.env.REACT_APP_DOWNLOAD_APK;


const Dashboard = () => {

  const token = GetCookieToken("userToken");
  const user = GetCookieData("userData");
  const user_id = user?.user_id;
  const user_position = user?.position
  document.title = "Dashboard | Flexible-Time";

  const [userInfo, setUserInfo] = useState([]);
  const getUserInfo = () => {
    axios
      .get(baseURL + "/api/users/info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("User Info from Dashboard: ", res);
        setUserInfo(res.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const { layOut } = useLayOutConText();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [remain, setRemain] = useState([])
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    stroke: {
      lineCap: "round",
    },
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "ทั้งหมด",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return `${series[0]} วัน`;
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["", "", "", "#ee8b85"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [80, 100],
      },
    },
    // colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    labels: ["วันลาคงเหลือ", "ลากิจ", "ลาป่วย", "ลาพักผ่อน"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 70,
      offsetY: 30,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]} `;
      },
      itemMargin: {
        vertical: 3,
      },
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const [activeTab, setActiveTab] = useState("1");

  const toggle1 = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const getLeaveChart = (year, id) => {
    axios
      .get(baseURL + `/api/leave/chart/1/${year}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Leave Chart: ", res);
        setRemain([
          (
            // (
            // res.data.result.sick_limit_day.max+30 +
            // res.data.result.personal_limit_day.max+10 +
            res.data.result.vacation_limit_day.max +
            res.data.result.vacation_over10.max
            // )
            // -
            // (
            //   res.data.result.sick_limit_day.use +
            //   res.data.result.personal_limit_day.use +
            //   res.data.result.vacation_limit_day.use +
            //   res.data.result.vacation_over10.use
            // )
          )
          ,
          // (res.data.result.personal_limit_day.max+10) - 
          res.data.result.personal_limit_day.use,
          // (res.data.result.sick_limit_day.max+30) - 
          res.data.result.sick_limit_day.use,
          
          (
          //   (res.data.result.vacation_limit_day.max + res.data.result.vacation_over10.max) 
          // - 
            (res.data.result.vacation_limit_day.use + res.data.result.vacation_over10.use)
          )
        ])
        setSeries([
          [
            100-(
              res.data.result.sick_limit_day.use +
              res.data.result.personal_limit_day.use +
              res.data.result.vacation_limit_day.use +
              res.data.result.vacation_over10.use
            )/(
              res.data.result.sick_limit_day.max+30 +
              res.data.result.personal_limit_day.max+10 +
              res.data.result.vacation_limit_day.max +
              res.data.result.vacation_over10.max
            ) * 100
          ],
          [
            100-((res.data.result.personal_limit_day.use/(res.data.result.personal_limit_day.max+10))*100)
          ],
          [
            100-(res.data.result.sick_limit_day.use/(res.data.result.sick_limit_day.max+30))*100
          ],
          [
            100-(((res.data.result.vacation_limit_day.use+res.data.result.vacation_over10.use)
            /(res.data.result.vacation_limit_day.max+res.data.result.vacation_over10.max))*100)
          ]
        ]);
        setOptions((prev) => ({
          ...prev,
          plotOptions: {
            ...prev.plotOptions,
            radialBar: {
              ...prev.plotOptions.radialBar,
              dataLabels: {
                ...prev.plotOptions.radialBar.dataLabels,
                total: {
                  ...prev.plotOptions.radialBar.dataLabels.total,
                  formatter: function (w) {
                    return `${
                      // res.data.result.sick_limit_day.max+30 +
                      // res.data.result.personal_limit_day.max+10 +
                      // (res.data.result.vacation_limit_day.max +
                      // res.data.result.vacation_over10.max) - 
                      // (res.data.result.vacation_limit_day.use +
                      //   res.data.result.vacation_over10.use)
                      (
                        // res.data.result.sick_limit_day.max+30 +
                        // res.data.result.personal_limit_day.max+10 +
                        res.data.result.vacation_limit_day.max +
                        res.data.result.vacation_over10.max
                        )
                        -
                        (
                          // res.data.result.sick_limit_day.use +
                          // res.data.result.personal_limit_day.use +
                          res.data.result.vacation_limit_day.use +
                          res.data.result.vacation_over10.use
                        )
                    } วัน`;
                  },
                },
              },
            },
          },
          legend: {
            ...prev.legend,
            formatter: function (seriesName, opts) {
              const remainValue = remain[opts.seriesIndex];
              console.log("Remain แต่ละ Index ของ series",remain[opts.seriesIndex])
              return `${seriesName}: ${remainValue}`;
            }
          }
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getLeaveChart(new Date().getFullYear() + 544, user_id);
  }, []);

  const setFormatterLegend = (remain) => {
    setOptions((prev) => ({
      ...prev,
      legend: {
        ...prev.legend,
        formatter: function (seriesName, opts) {
          const remainValue = remain[opts.seriesIndex];
          return `${seriesName}: ${remainValue}`;
        }
      }
    }))
  }

  useEffect(() => {
    setFormatterLegend(remain)
  },[remain])

  const isMustEntryWork = (positionArr) => {
    if(positionArr.find(item => item.position_id > 1 && item.position_id <=5 )) return false
    else return true
  }

  return (
    <div className="page-content">
      {!loading ? (
        <LoadingPage />
      ) : (
        <FadeIn>
          <Container fluid>
            <Breadcrumbs title="Home" breadcrumbItem="Dashboard" />
            <Row>
              <Col xxl={3} xl={12}>
                <Row>
                  <Col xxl={12}>
                    <WelcomeComp
                      name={userInfo?.user_name}
                      email={userInfo?.user_email}
                      picture={userInfo?.user_pic}
                    />
                  </Col>
                  {isMustEntryWork(user_position) && (
                  <Col xxl={12}>
                    <EntryWork user_id={user?.user_id} token={token} />
                  </Col>
                  )}
                </Row>
                <Row>
                <Col
                    xxl={12}
                    xl={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ReactApexChart
                      options={options}
                      series={series}
                      type="radialBar"
                      width="500"
                    />
                  </Col>
                  
                </Row>
              </Col>
              <Col xxl={6}>
                <Row>
                  <Col xxl={12}>
                    <Card>
                      <CardBody>
                        <Nav
                          // tabs
                          pills
                          className="navtab-bg"
                          fill
                        >
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: activeTab === "1",
                              })}
                              onClick={() => {
                                toggle1("1");
                              }}
                            >
                              <h5>
                                <i className="fa-solid fa-books font-size-20 me-2"></i>
                                สารบรรณ
                              </h5>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: activeTab === "2",
                              })}
                              onClick={() => {
                                toggle1("2");
                              }}
                            >
                              <h5>
                                <i className="fa-solid fa-toolbox font-size-20 me-2"></i>
                                ทรัพยากรออนไลน์
                              </h5>
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId="1">
                            <Sarabun />
                          </TabPane>
                          <TabPane tabId="2">
                            <ResorceOnline />
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                  
                  <Col  xxl={12}>
                    <Card>
                      <CardBody style={{
                      }}>
                        <div
                          style={{ 
                            // display: "flex", 
                            // justifyContent: "center",
                            minHeight:"500px",
                            position:'relative', 
                            overflow:"hidden", 
                            width:"100%",
                            paddingTop: "56.25%",
                          }}
                        >
                          <iframe
                            className={styles.responIframe}
                            style={{
                              position:"absolute",
                              top:0,
                              left:0,
                              bottom:0,
                              right:0,
                              width:"100%",
                              height:"100%"
                            }}
                            src="https://outlook.office365.com/calendar/published/c642f9b9710a4b5eab42c90829aa4280@opdcoffice365.onmicrosoft.com/d984c969411d4ed78c3d4e16987b917711049788667722385068/calendar.html"
                            title="Outlook Calendar"
                            // width="800"
                            // height="550"
                            // allowFullScreen
                            // frameBorder="0"
                            // scrolling="no"
                          ></iframe>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  
                </Row>
              </Col>
              <Col xxl={3}>
                <Row>
                  <Col xxl={12} xl={6}>
                    <Reservation />
                  </Col>
                </Row>
                <Row>
                  <Col xxl={12}>
                    <Card>
                      <CardBody >
                        <Row>
                          <Col style={{display:"flex",justifyContent:"center"}}>
                            <h3>สำหรับ Android เท่านั้น</h3>
                          </Col>
                        </Row>
                        <Row>
                          <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <QRCode value={linkDownload} size={220} />
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </FadeIn>
      )}
    </div>
  );
};

export default Dashboard;
