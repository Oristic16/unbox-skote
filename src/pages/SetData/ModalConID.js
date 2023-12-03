import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Collapse,
  Input,
  InputGroup,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  UncontrolledAccordion,
} from "reactstrap";
import { GetCookieToken } from "../Cookie/GetCookie";
import axios from "axios";
import { useInsertConText } from "../Context/InsertContext";
import LoadingData from "../TESTPage/LoadingData";
import FadeIn from "react-fade-in/lib/FadeIn";

const API_URL = process.env.REACT_APP_API_CORS;

function ModalConID(props) {
  const { task, user_id } = props;
  const { insert, setInsert } = useInsertConText();
  const token = GetCookieToken("userToken");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [isCollapseOpen, setCollapseIsOpen] = useState(false);
  const [buttonIcons, setButtonIcons] = useState({});
  const [isOpenCollapseNested, setIsOpenCollapseNested] = useState({});
  const [buttonStates, setButtonStates] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [allarray, setAllarray] = useState([]);
  const [valueSearch, setValueSearch] = useState([]);
  const [insert_id, setInsert_id] = useState();
  const [insert_name, setInsert_name] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url = `${API_URL}/api/orgInner/level`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then(response => {
        setData(response.data.result);

        const combinedArray = [
          ...response.data.result.child?.map(org => [org.org_name, org.org_id]),
          ...response.data.result.child?.flatMap(org =>
            org.child?.map(i => [i.org_name, i.org_id])
          ),
        ];
        setAllarray(combinedArray);
      })
      .catch(error => console.error("Error:", error));
  };

  const handleListItemClick = (id, e, value) => {
    setActiveItem(id === activeItem ? null : id);
    setInsert_id(id);
    setInsert_name(e);
  };

  const toggle = () => {
    setLoading(true);
    setModal(!modal);
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const toggleCollapse = () => setCollapseIsOpen(!isCollapseOpen);

  const toggleCollapseNested = id => {
    setIsOpenCollapseNested(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const setButton = id => {
    setButtonStates(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const regex = new RegExp(searchTerm, "i");
    setValueSearch(allarray.filter(item => regex.test(item[0])));
  }, [searchTerm]);

  const handleFinalClick = () => {
    setInsert({ insert_id, insert_name, task });
  };

  const handleClearClick = () => {
    setActiveItem(null);
  };

  useEffect(() => {
    if (user_id !== undefined && user_id !== null) {
      const url = `${API_URL}/api/users/${user_id}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(url, config)
        .then(response => {
          setInsert_id(response.data.result?.cont_to_id);
          setInsert_name(
            `${response.data.result?.cont_to.map(i => i.org_name)}`
          );
          setInsert({ insert_id, insert_name, task });
        })
        .catch(error => console.error("Error:", error));
    }
  }, [user_id, insert.insert_id]);

  return (
    <Fragment>
      <Button color="secondary" onClick={toggle}>
        <i className="fa-solid fa-list"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} centered size="lg">
        <ModalHeader
          toggle={() => {
            toggle();
            handleClearClick();
          }}
        >
          เลือกหน่วยงาน
        </ModalHeader>
        <ModalBody>
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
            <FadeIn>
              <Input
                className="w-50"
                placeholder="ค้นหา"
                type="search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />

              <InputGroup className="my-2">
                <Button
                  key={data.org_id}
                  onClick={() => {
                    toggleCollapse();
                    setButton(data.org_id);
                    setButtonIcons(prevState => ({
                      ...prevState,
                      [data.org_id]:
                        prevState[data.org_id] === "fa-solid fa-angle-down"
                          ? "fa-solid fa-angle-up"
                          : "fa-solid fa-angle-down",
                    }));
                  }}
                  color={buttonStates[data.org_id] ? "primary" : "primary"}
                  outline={buttonStates[data.org_id] ? false : true}
                >
                  {buttonIcons[data.org_id] ? (
                    <i className={buttonIcons[data.org_id]}></i>
                  ) : (
                    <i className="fa-solid fa-angle-up"></i>
                  )}
                </Button>

                <Input
                  readOnly
                  defaultValue={data.org_name}
                  onClick={() =>
                    handleListItemClick(data.org_id, data.org_name)
                  }
                  valid={data.org_id === activeItem}
                  style={{
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                />
              </InputGroup>
              <Collapse isOpen={isCollapseOpen}>
                {data.child?.map((org, index) =>
                  org.child.length !== 0 ? (
                    <Fragment key={index}>
                      <ListGroup key={org.org_id}>
                        <InputGroup className="my-2">
                          <Button
                            onClick={() => {
                              toggleCollapseNested(org.org_id);
                              setButton(org.org_id);
                              setButtonIcons(prevState => ({
                                ...prevState,
                                [org.org_id]:
                                  prevState[org.org_id] ===
                                  "fa-solid fa-angle-down"
                                    ? "fa-solid fa-angle-up"
                                    : "fa-solid fa-angle-down",
                              }));
                            }}
                            color={
                              buttonStates[org.org_id] ? "primary" : "primary"
                            }
                            outline={buttonStates[org.org_id] ? false : true}
                          >
                            {buttonIcons[org.org_id] ? (
                              <i className={buttonIcons[org.org_id]}></i>
                            ) : (
                              <i className="fa-solid fa-angle-up"></i>
                            )}
                          </Button>

                          <Input
                            readOnly
                            defaultValue={org.org_name}
                            onClick={() =>
                              handleListItemClick(org.org_id, org.org_name)
                            }
                            valid={org.org_id === activeItem}
                            style={{
                              cursor: "pointer",
                              transition: "background-color 0.3s",
                            }}
                          />
                        </InputGroup>
                        <Collapse isOpen={isOpenCollapseNested[org.org_id]}>
                          {org.child.map(i => (
                            <Input
                              key={i.org_id}
                              className="my-2"
                              readOnly
                              defaultValue={i.org_name}
                              onClick={() =>
                                handleListItemClick(i.org_id, i.org_name)
                              }
                              valid={i.org_id === activeItem}
                              style={{
                                cursor: "pointer",
                                transition: "background-color 0.3s",
                              }}
                            />
                          ))}
                        </Collapse>
                      </ListGroup>
                    </Fragment>
                  ) : (
                    <Input
                      key={org.org_id}
                      className="my-2"
                      readOnly
                      defaultValue={org.org_name}
                      onClick={() =>
                        handleListItemClick(org.org_id, org.org_name)
                      }
                      valid={org.org_id === activeItem}
                      style={{
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                      }}
                    />
                  )
                )}
              </Collapse>

              {searchTerm
                ? valueSearch.map(([org_name, org_id], index) => (
                    <Fragment key={index}>
                      <Input
                        key={org_id}
                        className="my-2"
                        readOnly
                        defaultValue={org_name}
                        onClick={() => handleListItemClick(org_id, org_name)}
                        valid={org_id === activeItem}
                        style={{
                          cursor: "pointer",
                          transition: "background-color 0.3s",
                        }}
                      />
                    </Fragment>
                  ))
                : ""}
            </FadeIn>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              handleFinalClick();
            }}
          >
            บันทึก
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              toggle();
              handleClearClick();
            }}
          >
            ยกเลิก
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}

export default ModalConID;
