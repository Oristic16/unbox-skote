import React, { useState } from "react";

import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";
import axios from "axios";
import { GetCookieToken } from "../Cookie/GetCookie";
import { FetchAxiosFile, FetchAxiosGet, FetchAxiosPost } from "../../api/axios";
import { useEffect } from "react";

const API_URL = process.env.REACT_APP_API_CORS;

function EvaluateForm(props) {
  const { user_id, evaluate_salary_id, budget_year, round, onButtonClick } =
    props;
  const [passedSteps, setPassedSteps] = useState([1]);
  const [activeTab, setactiveTab] = useState(1);

  const [fileUploads, setFileUploads] = useState(
    Array.from({ length: 5 }, () => null)
  );

  const [groups, setGroups] = useState([
    {
      indicator: "",
      scores: ["", "", "", "", ""],
      score: "",
      weight: "",
    },
    {
      indicator: "",
      scores: ["", "", "", "", ""],
      score: "",
      weight: "",
    },
    {
      indicator: "",
      scores: ["", "", "", "", ""],
      score: "",
      weight: "",
    },
    {
      indicator: "",
      scores: ["", "", "", "", ""],
      score: "",
      weight: "",
    },
    {
      indicator: "",
      scores: ["", "", "", "", ""],
      score: "",
      weight: "",
    },
  ]);

  const [formTwoData, setFormTwoData] = useState([
    { id: 1, label: "การมุ่งผลสัมฤทธิ์", score: "", percentage: 20, no: 2 },
    { id: 2, label: "การบริการที่ดี", score: "", percentage: 20, no: 3 },
    {
      id: 3,
      label: "การสั่งสมความเชี่ยวชาญ",
      score: "",
      percentage: 20,
      no: 4,
    },
    {
      id: 4,
      label: "ความยึดมั่นในความถูกต้อง",
      score: "",
      percentage: 20,
      no: 5,
    },
    { id: 5, label: "การทำงานเป็นทีม", score: "", percentage: 20, no: 6 },
  ]);

  const [formTheeData_1, setFormTheeData_1] = useState({
    label: "องค์ประกอบที่ 1 : ผลสัมฤทธิ์ของงาน",
    score: "",
    percentage: "70",
    // no: 2,
  });

  const [formTheeData_2, setFormTheeData_2] = useState({
    label: "องค์ประกอบที่ 2 : พฤติกรรมการปฏิบัติราชการ(สมรรถนะ)",
    score: "",
    percentage: "30",
    // no: 3,
  });

  const [formFourData, setFormFourData] = useState([
    { id: 1, topic: "", description: "" },
    { id: 2, topic: "", description: "" },
    { id: 3, topic: "", description: "" },
    { id: 4, topic: "", description: "" },
    { id: 5, topic: "", description: "" },
  ]);

  const [calculatedValues, setCalculatedValues] = useState([]);
  const [calculatedValuesForm2, setCalculatedValuesForm2] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);

  const token = GetCookieToken("userToken");

  const handleDevelopmentChange = (id, field, value) => {
    setFormFourData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const toggleTab = tab => {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  };

  const handleAddGroup = () => {
    setGroups(prevGroups => [
      ...prevGroups,
      {
        indicator: "",
        scores: ["", "", "", "", ""],
        score: "",
        weight: "",
      },
    ]);
  };

  const handleInputChange = (groupIndex, key, value) => {
    setGroups(prevGroups => {
      const updatedGroups = [...prevGroups];
      const groupToUpdate = updatedGroups[groupIndex];
      groupToUpdate[key] = value;

      // if (key === "score") {
      //   groupToUpdate.scores = Array(groupToUpdate.scores.length).fill(value);
      // }

      updatedGroups[groupIndex] = groupToUpdate;
      return updatedGroups;
    });
  };

  useEffect(() => {
    const calculatedValues = groups.map(
      (group, index) => (group.weight * group.score) / 100
    );
    const sum = calculatedValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(sum, "calculatedValues");

    setCalculatedValues(sum);
    setFormTheeData_1(prevData => ({
      ...prevData,
      score: (sum * (100 / 5)).toFixed(2),
    }));
  }, [groups]);

  useEffect(() => {
    const calculatedValues = formTwoData.map(
      (group, index) => (group.score * 20) / 100
    );
    const sum = calculatedValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(sum, "calculatedValuesformTwoData");

    setCalculatedValuesForm2(sum);
    setFormTheeData_2(prevData => ({
      ...prevData,
      score: (sum * (100 / 5)).toFixed(2),
    }));
  }, [formTwoData]);

  // console.log(formTheeData, "formTheeData");

  const handleScoreChange = (groupIndex, scoreIndex, value) => {
    setGroups(prevGroups => {
      const newGroups = [...prevGroups];
      newGroups[groupIndex].scores[scoreIndex] = value;
      // newGroups[groupIndex].score = newGroups[groupIndex].scores.reduce(
      //   (sum, score) => sum + score,
      //   0
      // );
      return newGroups;
    });
  };
  console.log(formTwoData, "formTwoData");

  const handleRemoveGroup = groupIndex => {
    setGroups(prevGroups =>
      prevGroups.filter((group, index) => index !== groupIndex)
    );
  };

  const filterNumericInput = value => {
    const filteredValue = value.replace(/[^0-9.]/g, "");

    const dotCount = filteredValue.split(".").length - 1;
    if (dotCount > 1) {
      return filteredValue.slice(0, -1);
    }

    return filteredValue;
  };

  const filterNumericScore = value => {
    const filteredValue = value.replace(/[^0-9.]/g, "");

    const dotCount = filteredValue.split(".").length - 1;
    if (dotCount > 1) {
      return filteredValue.slice(0, -1);
    }
    return filteredValue;
  };

  const handleSubmit = () => {
    const url = "/api/evaluateSalaryResult/save";
    // console.log(groups.map((i, index) => i.scores[0]));
    groups.map((i, index) => {
      let data = {
        no: index + 1,
        evaluate_salary_id: evaluate_salary_id,
        user_id: user_id,
        budget_year: budget_year,
        round: round,
        indicator: i.indicator,
        score_1: i.scores[0],
        score_2: i.scores[1],
        score_3: i.scores[2],
        score_4: i.scores[3],
        score_5: i.scores[4],
        score: i.score,
        weight: i.weight,
      };

      if (
        i.indicator !== null &&
        i.scores[0] !== null &&
        i.scores[1] !== null &&
        i.scores[2] !== null &&
        i.scores[3] !== null &&
        i.scores[4] !== null &&
        i.score !== null &&
        i.weight !== null
      ) {
        FetchAxiosPost(url, data, token)
          .then(item => {
            const file = fileUploads[index];
            if (file !== null) {
              const url_file = `/api/evaluateSalaryResult/file/${item}`;
              data.file = file;
              FetchAxiosFile(url_file, token, data.file);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }

      console.log(data);
    });
    const url_form2 = "/api/evaluateSalaryBehavior/save";
    formTwoData.map((i, index) => {
      let data = {
        evaluate_salary_id: evaluate_salary_id,
        user_id: user_id,
        budget_year: budget_year,
        round: round,
        no: i.no,
        score: i.score,
      };
      if (i.no !== null && i.score !== null) {
        FetchAxiosPost(url_form2, data, token);
      }
    });
    const url_form4 = "/api/evaluateSalaryDevelopment/save";
    formFourData.map((i, index) => {
      let data = {
        evaluate_salary_id: evaluate_salary_id,
        user_id: user_id,
        budget_year: budget_year,
        round: round,
        no: i.id,
        development_type_id: i.topic,
        development: i.description,
      };
      if (i.id !== null && i.topic !== null && i.description !== null) {
        FetchAxiosPost(url_form4, data, token);
      }
    });
    onButtonClick();
  };

  const handleButtonFileClick = groupIndex => {
    const fileInput = document.getElementById(`file-input-${groupIndex}`);
    fileInput.click();
  };

  const handleFileChange = (e, groupIndex) => {
    const file = e.target.files[0];
    const newFileUploads = [...fileUploads];
    newFileUploads[groupIndex] = file;
    setFileUploads(newFileUploads);
  };

  const handleClearFile = groupIndex => {
    const fileInput = document.getElementById(`file-input-${groupIndex}`);
    if (fileInput) {
      fileInput.value = null;

      const newFileUploads = [...fileUploads];
      newFileUploads[groupIndex] = null;
      setFileUploads(newFileUploads);
    }
  };

  let valScore =
    (Number(formTheeData_2.score) * Number(formTheeData_2.percentage)) / 100 +
    (Number(formTheeData_1.score) * Number(formTheeData_1.percentage)) / 100;

  console.log(Number(valScore), "valScore");

  console.log(groups, ": groups");

  useEffect(() => {
    const url = `${API_URL}/api/users/${user_id}`;
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then(response => {
        console.log(response.data.result, "item");
        setDataInfo(response.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <Row>
                <Col className="text-end" lg={3}>
                  <strong>ผู้รับการประเมิน :</strong>
                </Col>
                <Col lg={9}>
                  <strong>{dataInfo.user_name}</strong>
                </Col>
              </Row>
              <Row>
                <Col className="text-end" lg={3}>
                  <strong> ตำแหน่ง :</strong>
                </Col>
                <Col lg={9}>
                  <strong>{dataInfo.user_position_name}</strong>
                </Col>
              </Row>
              <Row>
                <Col className="text-end" lg={3}>
                  <strong> สังกัด :</strong>
                </Col>
                <Col lg={9}>
                  <strong>
                    {dataInfo.cont_to?.map(i => {
                      return <>{i.org_name}</>;
                    })}
                  </strong>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <strong> ผู้ประเมิน :</strong>
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong> ตำแหน่ง :</strong>
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong> สังกัด :</strong>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <div className="wizard clearfix">
                <div className="steps clearfix">
                  <ul>
                    <NavItem
                      className={classnames({ current: activeTab === 1 })}
                    >
                      <NavLink
                        className={classnames({ current: activeTab === 1 })}
                        onClick={() => {
                          setactiveTab(1);
                        }}
                        disabled={!(passedSteps || []).includes(1)}
                      >
                        <Row className="mb-2">
                          <Col lg={2}>
                            <span className="number">1.</span>
                          </Col>
                          <Col lg={10}>แบบประเมินผลสัมฤทธิ์ของงาน</Col>
                        </Row>

                        <Row>
                          <Col lg={2}></Col>
                          <Col lg={10}>
                            คะแนนรวม :{" "}
                            {calculatedValues.length !== 0
                              ? `${(calculatedValues * (100 / 5)).toFixed(2)}`
                              : "0.00"}
                          </Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className={classnames({ current: activeTab === 2 })}
                    >
                      <NavLink
                        className={classnames({ active: activeTab === 2 })}
                        onClick={() => {
                          setactiveTab(2);
                        }}
                        disabled={!(passedSteps || []).includes(2)}
                      >
                        <Row className="mb-2">
                          <Col lg={2}>
                            <span className="number">2.</span>
                          </Col>
                          <Col lg={10}>
                            แบบประเมินพฤติกรรมการปฏิบัติราชการหรือสมรรถนะ
                          </Col>
                        </Row>

                        <Row>
                          <Col lg={2}></Col>
                          <Col lg={10}>
                            {" "}
                            คะแนนรวม :{" "}
                            {calculatedValuesForm2.length !== 0
                              ? `${(calculatedValuesForm2 * (100 / 5)).toFixed(
                                  2
                                )}`
                              : "0.00"}
                          </Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className={classnames({ current: activeTab === 3 })}
                    >
                      <NavLink
                        className={classnames({ active: activeTab === 3 })}
                        onClick={() => {
                          setactiveTab(3);
                        }}
                        disabled={!(passedSteps || []).includes(3)}
                      >
                        <Row className="mb-2">
                          <Col lg={2}>
                            <span className="number">3.</span>
                          </Col>
                          <Col lg={10}>แบบสรุปการประเมินผลการปฏิบัติราชการ</Col>
                        </Row>

                        <Row>
                          <Col lg={2}></Col>
                          <Col lg={10}>
                            คะแนนรวม :{" "}
                            {formTheeData_1.score !== "" &&
                            formTheeData_2.score !== ""
                              ? valScore.toFixed(2)
                              : "0.00"}
                            {valScore >= 90 && valScore <= 100 ? (
                              <strong className="ps-2">ดีเด่น</strong>
                            ) : (
                              ""
                            )}
                            {valScore >= 80 && valScore <= 89 ? (
                              <strong className="ps-2">ดีมาก</strong>
                            ) : (
                              ""
                            )}
                            {valScore >= 70 && valScore <= 79 ? (
                              <strong className="ps-2">ดี</strong>
                            ) : (
                              ""
                            )}
                            {valScore >= 60 && valScore <= 69 ? (
                              <strong className="ps-2">พอใช้</strong>
                            ) : (
                              ""
                            )}
                            {valScore < 60 ? (
                              <strong className="ps-2">ต้องปรับปรุง</strong>
                            ) : (
                              ""
                            )}
                          </Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className={classnames({ current: activeTab === 4 })}
                    >
                      <NavLink
                        // style={{ height: "100px" }}
                        className={classnames({ active: activeTab === 4 })}
                        onClick={() => {
                          setactiveTab(4);
                        }}
                        disabled={!(passedSteps || []).includes(4)}
                      >
                        <Row className="mb-2">
                          <Col lg={2}>
                            <span className="number">4.</span>
                          </Col>
                          <Col lg={10}>
                            แผนพัฒนาการปฏิบัติราชการรายบุคคล <br />
                            <br />
                            เรียงลำดับการพัฒนาตนเองจากมากไปน้อย
                          </Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
                <div>
                  <TabContent activeTab={activeTab} className="body">
                    <TabPane tabId={1}>
                      <Table bordered>
                        <thead
                          className="table-light"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <tr>
                            <th rowSpan="3" className="text-center">
                              ลำดับ
                              <br />
                              <br />
                            </th>
                            <th rowSpan="3">
                              ตัวชี้วัดผลงาน/เกณฑ์การประเมิน
                              <br />
                              <br />
                            </th>
                            <th colSpan="5" className="text-center">
                              คะแนนตามระดับค่าเป้าหมาย
                            </th>
                            <th rowSpan="3" className="text-center">
                              คะแนน
                              <br />
                              (ก)
                            </th>
                            <th rowSpan="2" className="text-center">
                              น้ำหนัก
                              <br />
                              ร้อยละ
                              <br />
                              (ข)
                            </th>
                            <th rowSpan="2" className="text-center">
                              คะแนนรวม
                              <br />
                              (ค=กxข)
                            </th>
                            <th rowSpan="3" className="text-center">
                              แนบเอกสาร
                              <br />
                              <br />
                            </th>
                            <th rowSpan="3"></th>
                          </tr>
                          <tr>
                            <th rowSpan="2" className="text-center">
                              1
                            </th>
                            <th rowSpan="2" className="text-center">
                              2
                            </th>
                            <th rowSpan="2" className="text-center">
                              3
                            </th>
                            <th rowSpan="2" className="text-center">
                              4
                            </th>
                            <th rowSpan="2" className="text-center">
                              5
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {groups.map((group, groupIndex) => (
                            <tr key={groupIndex}>
                              <td className="text-center">{groupIndex + 1}</td>
                              <td style={{ width: "250px" }}>
                                <Input
                                  style={{ height: "100px" }}
                                  type="textarea"
                                  name={`indicator_${groupIndex}`}
                                  value={group.indicator}
                                  onChange={e =>
                                    handleInputChange(
                                      groupIndex,
                                      "indicator",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              {group.scores.map((score, scoreIndex) => (
                                <td
                                  style={{ width: "100px" }}
                                  className="text-center"
                                  key={scoreIndex}
                                >
                                  <Input
                                    className="text-center"
                                    type="text"
                                    value={score}
                                    onChange={e =>
                                      handleScoreChange(
                                        groupIndex,
                                        scoreIndex,
                                        filterNumericInput(
                                          e.target.value.slice(0, 3)
                                        )
                                      )
                                    }
                                  />
                                </td>
                              ))}
                              <td
                                style={{ width: "100px" }}
                                className="text-center"
                                name={`score_${groupIndex}`}
                              >
                                <Input
                                  type="text"
                                  value={group.score}
                                  onChange={e =>
                                    handleInputChange(
                                      groupIndex,
                                      "score",
                                      filterNumericScore(
                                        e.target.value.slice(0, 4)
                                      )
                                    )
                                  }
                                />
                              </td>
                              <td
                                style={{ width: "100px" }}
                                className="text-center"
                                name={`weight_${groupIndex}`}
                              >
                                <Input
                                  type="text"
                                  value={group.weight}
                                  onChange={e =>
                                    handleInputChange(
                                      groupIndex,
                                      "weight",
                                      filterNumericScore(
                                        e.target.value.slice(0, 6)
                                      )
                                    )
                                  }
                                />
                              </td>
                              <td className="text-center pb-2">
                                {group.weight !== "" && group.score !== "" ? (
                                  <strong>
                                    {(
                                      (group.weight * group.score) /
                                      100
                                    ).toFixed(2)}
                                  </strong>
                                ) : (
                                  ""
                                )}
                              </td>
                              <td>
                                <Col lg={12}>
                                  <FormGroup>
                                    <Button
                                      color="success"
                                      className="w-100"
                                      type="button"
                                      onClick={() =>
                                        handleButtonFileClick(groupIndex)
                                      }
                                    >
                                      {/* <i className="fa-solid fa-upload"></i> */}
                                      อัพโหลด
                                    </Button>
                                    <input
                                      id={`file-input-${groupIndex}`}
                                      type="file"
                                      accept=".pdf*"
                                      style={{ display: "none" }}
                                      onChange={e =>
                                        handleFileChange(e, groupIndex)
                                      }
                                    />
                                  </FormGroup>
                                  {fileUploads[groupIndex] !== null &&
                                  fileUploads[groupIndex] !== undefined ? (
                                    <Row className="align-items-center">
                                      {console.log(fileUploads[groupIndex])}
                                      <Col className="col-auto">
                                        <i
                                          className="fa-solid fa-file-doc fa-2xl fa-beat text-info"
                                          // style={{ color: "#51abcb" }}
                                        ></i>
                                      </Col>
                                      <Col className="col-auto">
                                        <button
                                          type="button"
                                          className="btn btn-link btn-sm text-info"
                                          onClick={() => {
                                            handleClearFile(groupIndex);
                                          }}
                                        >
                                          <i className="fa-solid fa-xmark-large"></i>
                                        </button>
                                      </Col>
                                    </Row>
                                  ) : (
                                    //     </div>
                                    //   </Col>
                                    // </Row>
                                    ""
                                  )}
                                </Col>
                              </td>
                              <td>
                                <Button
                                  color="danger"
                                  onClick={() => {
                                    const confirmed = window.confirm(
                                      groupIndex + 1
                                    );
                                    if (confirmed) {
                                      handleRemoveGroup(groupIndex);
                                    }
                                  }}
                                >
                                  ลบ
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      <Button color="primary" onClick={handleAddGroup}>
                        เพิ่มกลุ่ม
                      </Button>
                    </TabPane>
                    <TabPane tabId={2}>
                      <Table bordered>
                        <thead
                          className="table-light"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <tr>
                            <th className="text-center">สมรรถนะ</th>
                            <th>ระดับที่คาดหวัง</th>

                            <th className="text-center">
                              คะแนน
                              <br />
                              (ก)
                            </th>
                            <th rowSpan="2" className="text-center">
                              น้ำหนัก
                              <br />
                              ร้อยละ
                              <br />
                              (ข)
                            </th>
                            <th rowSpan="2" className="text-center">
                              คะแนนรวม
                              {/* <br />
                              (ค=กxข) */}
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {formTwoData.map(item => (
                            <tr key={item.id}>
                              <td>{item.label}</td>
                              <td
                                className="text-center"
                                style={{ width: "150px" }}
                              >
                                {dataInfo.user_level_id === 5 ||
                                dataInfo.user_level_id === 11
                                  ? "5"
                                  : ""}

                                {dataInfo.user_level_id === 13 ||
                                dataInfo.user_level_id === 10
                                  ? "4"
                                  : ""}

                                {dataInfo.user_level_id === 9 ? "3" : ""}

                                {dataInfo.user_level_id === 3 ||
                                dataInfo.user_level_id === 8
                                  ? "2"
                                  : ""}

                                {dataInfo.user_level_id === 2 ||
                                dataInfo.user_level_id === 7 ||
                                dataInfo.user_level_id === 14
                                  ? "1"
                                  : ""}
                              </td>
                              <td style={{ width: "100px" }}>
                                <Input
                                  type="text"
                                  // value={item.score}
                                  onChange={e => {
                                    const inputValue = e.target.value;
                                    let numericValue = parseFloat(inputValue);

                                    if (
                                      isNaN(numericValue) ||
                                      numericValue > 5
                                    ) {
                                      numericValue = 5;
                                    }

                                    const formattedValue =
                                      numericValue.toFixed(2);

                                    setFormTwoData(prevData =>
                                      prevData.map(prevItem =>
                                        prevItem.id === item.id
                                          ? {
                                              ...prevItem,
                                              score: formattedValue,
                                            }
                                          : prevItem
                                      )
                                    );
                                  }}
                                />
                              </td>
                              <td
                                className="text-center"
                                style={{ width: "150px" }}
                              >
                                ร้อยละ {item.percentage}
                              </td>
                              <td
                                className="text-center"
                                style={{ width: "150px" }}
                              >
                                {item.score !== "" ? (
                                  <>
                                    {(
                                      (item.score * item.percentage) /
                                      100
                                    ).toFixed(2)}
                                  </>
                                ) : (
                                  ""
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId={3}>
                      <Table bordered>
                        <thead
                          className="table-light"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <tr>
                            <th className="text-center">
                              องค์ประกอบการประเมิน
                            </th>

                            <th className="text-center">
                              คะแนน
                              <br />
                              (ก)
                            </th>
                            <th rowSpan="2" className="text-center">
                              สัดส่วนคะแนน
                              <br />
                              (น้ำหนัก) (ข)
                            </th>
                            <th rowSpan="2" className="text-center">
                              รวมคะแนน
                              <br />
                              (ก)x(ข)
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>{formTheeData_1.label}</td>
                            <td
                              className="text-center"
                              style={{ width: "150px" }}
                            >
                              {formTheeData_1.score}
                            </td>
                            <td
                              className="text-center"
                              style={{ width: "150px" }}
                            >
                              {formTheeData_1.percentage}%
                            </td>

                            <td
                              className="text-center"
                              style={{ width: "150px" }}
                            >
                              {formTheeData_1.score !== "" ? (
                                <>
                                  {(
                                    (formTheeData_1.score *
                                      formTheeData_1.percentage) /
                                    100
                                  ).toFixed(2)}
                                </>
                              ) : (
                                ""
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>{formTheeData_2.label}</td>
                            <td
                              className="text-center"
                              style={{ width: "150px" }}
                            >
                              {formTheeData_2.score}
                            </td>
                            <td
                              className="text-center"
                              style={{ width: "150px" }}
                            >
                              {formTheeData_2.percentage}%
                            </td>

                            <td
                              className="text-center"
                              style={{ width: "150px" }}
                            >
                              {formTheeData_2.score !== "" ? (
                                <>
                                  {(
                                    (formTheeData_2.score *
                                      formTheeData_2.percentage) /
                                    100
                                  ).toFixed(2)}
                                </>
                              ) : (
                                ""
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </TabPane>
                    <TabPane tabId={4}>
                      <Table bordered>
                        <thead
                          className="table-light"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <tr>
                            <th className="text-center">ลำดับ</th>
                            <th className="text-center">หัวข้อการพัฒนา</th>

                            <th colSpan={7} className="text-center">
                              การพัฒนาตนเอง
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {formFourData.map(item => (
                            <tr key={item.id}>
                              <td
                                className="text-center"
                                style={{ width: "60px" }}
                              >
                                {item.id}
                              </td>
                              <td>
                                <Input
                                  type="select"
                                  onChange={e =>
                                    handleDevelopmentChange(
                                      item.id,
                                      "topic",
                                      e.target.value
                                    )
                                  }
                                >
                                  <option>เลือกหัวข้อการพัฒนา</option>
                                  <option value="1">
                                    ด้านการมุ่งผลสัมฤทธิ์
                                  </option>
                                  <option value="2">ด้านการบริการที่ดี</option>
                                  <option value="3">
                                    ด้านการสั่งสมความเชี่ยวชาญในอาชีพ
                                  </option>
                                  <option value="4">
                                    ด้านการยึดมั่นในความถูกต้องชอบธรรมและจริยธรรม
                                  </option>
                                  <option value="5">ด้านการทำงานเป็นทีม</option>
                                  <option value="6">
                                    ด้านเทคโนโลยีสารสนเทศ
                                  </option>
                                  <option value="7">ด้านภาษา</option>
                                  <option value="8">ด้านการบริหารจัดการ</option>
                                  <option value="9">
                                    ด้านการวิเคราะห์ การจัดทำข้อมูล
                                  </option>
                                  <option value="10">
                                    ด้านการพัฒนานวัตกรรม
                                  </option>
                                  <option value="11">ด้านการสื่อสาร</option>
                                  <option value="12">อื่นๆ</option>
                                </Input>
                              </td>
                              <td
                                className="text-center"
                                style={{ width: "700px" }}
                              >
                                <Input
                                  style={{ height: "100px" }}
                                  type="textarea"
                                  placeholder="ระบุหลักสูตร/วิธีการ/แนวทางที่ต้องการ"
                                  value={item.description}
                                  onChange={e =>
                                    handleDevelopmentChange(
                                      item.id,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      <Button
                        color="success"
                        onClick={() => {
                          handleSubmit();
                          window.confirm("ต้องการที่จะส่งแบบฟอร์มใช่ไหม");
                        }}
                      >
                        ส่งแบบฟอร์ม
                      </Button>
                    </TabPane>
                  </TabContent>
                </div>
                <div className="actions clearfix">
                  <ul>
                    <li
                      className={
                        activeTab === 1 ? "previous disabled" : "previous"
                      }
                    >
                      <Link
                        to="#"
                        onClick={() => {
                          toggleTab(activeTab - 1);
                        }}
                      >
                        ย้อนกลับ
                      </Link>
                    </li>
                    <li className={activeTab === 4 ? "next disabled" : "next"}>
                      <Link
                        to="#"
                        onClick={() => {
                          toggleTab(activeTab + 1);
                        }}
                      >
                        ถัดไป
                      </Link>
                      {/* <Button color="primary" onClick={handleSubmit}>
                        เพิ่มกลุ่ม2
                      </Button> */}
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EvaluateForm;
