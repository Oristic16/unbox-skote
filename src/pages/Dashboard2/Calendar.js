import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//import Images
import verification from "../../assets/images/verification-img.png";

import {
  addNewEvent as onAddNewEvent,
  deleteEvent as onDeleteEvent,
  getCategories as onGetCategories,
  getEvents as onGetEvents,
  updateEvent as onUpdateEvent,
} from "../../store/actions";

import DeleteModal from "./DeleteModal";

import "@fullcalendar/bootstrap/main.css";

//redux
import { useSelector, useDispatch } from "react-redux";

import TextCard from "./TextCard";
import axios from "axios";

const Calendar = (props) => {
  const baseURL = "http://localhost:8000";

  //meta title
  // document.title = "Calendar | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  // ของกูววววว
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(baseURL + "/getevent")
      .then((res) => {
        setData(res.data);
        console.log("Data Event: ",res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const [detail, setDetail] = useState(false);
  // const [selectedDay, setSelectedDay] = useState(null);
  // const [modal, setModal] = useState(false);
  const toggleDetail = () => {
    setDetail(!detail);
  };

  // ห้ามลบบบบบ

  const [event, setEvent] = useState({
    day: "",
    month: "",
    detail: "",
  });

  const monthTh = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ษ.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ตุ.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];

  const { events, categories } = useSelector((state) => ({
    events: state.calendar.events,
    categories: state.calendar.categories,
  }));

  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalcategory, setModalcategory] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (!modal && !isEmpty(event) && !!isEdit) {
      setTimeout(() => {
        setEvent({});
        setIsEdit(false);
      }, 500);
    }
  }, [modal, event]);

  /**
   * Handling the modal state
   */
  const toggle = () => {
    // if (modal) {
    //   setModal(false);
    //   setEvent(null);
    // } else {
    //   setModal(true);

    // }
    setModal(!modal);
  };

  /**
   * Handling date click on calendar
   */
  const handleDateClick = (arg) => {
    const date = arg["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );
    setEvent({
      ...event,
      day: modifiedDate.getDate(),
      month: monthTh[modifiedDate.getMonth()],
    });
    console.log(modifiedDate);
    toggle();
  };

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = (arg) => {
    const event = arg.event;
    setEvent({
      id: event.id,
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    });
    setIsEdit(true);
    toggle();
  };

  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    if (event && event.id) {
      dispatch(onDeleteEvent(event.id));
    }
    setDeleteModal(false);
    toggle();
  };

  /**
   * On category darg event
   */

  const handleAddEvent = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/addevent", {
        day: event.day,
        month: event.month,
        detail: event.detail,
      })
      .then(() => {
        toggle();
      })
      .then(() => {
        getData();
      })
      .then(() => {
        setDetail(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = async (id) => {
    await axios.delete(baseURL + `/getevent/${id}`);
    // axios.delete ทำต่อพรุ่งนี้
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const [modalDrops, setModalDrops] = useState(data.map(() => false));

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <FullCalendar
            plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
            slotDuration={"00:15:00"}
            handleWindowResize={true}
            themeSystem="bootstrap"
            height="420px"
            headerToolbar={{
              start: "prev",
              center: "title",
              end: "next",
            }}
            events={events}
            editable={true}
            selectable={true}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
          />
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button color="primary" onClick={toggleDetail} className="mt-3">
              View Detail
            </Button>
          </div>
          <h1>{events}</h1>
        </CardBody>
      </Card>
      <Modal isOpen={modal} centered toggle={toggle}>
        <ModalHeader tag="h5" className="py-3 px-4 border-bottom-0">
          Add Event
        </ModalHeader>
        <ModalBody className="p-4">
          <Form onSubmit={handleAddEvent}>
            <Row style={{ display: "flex", justifyContent: "end" }}>
              <Col lg={2} className="">
                <div className="mb-3">
                  <Label className="form-label">วันที่</Label>
                  <Input
                    name="title"
                    type="text"
                    value={event.day}
                    onChange={(e) =>
                      setEvent((prev) => ({ ...prev, day: e.target.value }))
                    }
                  />
                </div>
              </Col>
              <Col lg={2} className="">
                <div className="mb-3">
                  <Label className="form-label">เดือน</Label>
                  <Input
                    name="title"
                    type="text"
                    value={event.month}
                    onChange={(e) =>
                      setEvent((prev) => ({ ...prev, month: e.target.value }))
                    }
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Detail</Label>
                  <Input
                    name="title"
                    type="text"
                    onChange={(e) =>
                      setEvent((prev) => ({ ...prev, detail: e.target.value }))
                    }
                  />
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col className="col-6">
                {!!isEdit && (
                  <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={() => setDeleteModal(true)}
                  >
                    Delete
                  </button>
                )}
              </Col>
              <Col className="col-6 text-end">
                <button
                  type="button"
                  className="btn btn-light me-2"
                  onClick={toggle}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  id="btn-save-event"
                >
                  Save
                </button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      <Offcanvas
        style={{width:"30%"}}
        direction="end"
        isOpen={detail}
        toggle={toggleDetail}
      >
        <OffcanvasHeader toggle={toggleDetail}>
          รายละเอียดกิจกรรม
        </OffcanvasHeader>
        <OffcanvasBody
          style={{
            overflow: "scroll",
            background: "#f3f3f3",
          }}
        >
          {data.map((item,index) => {   
            return (
              <>
              <Card
                onClick={() => handleDelete(item.id)}
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#ff9a9a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#fff")
                }
                key={item.id}
              >
                <CardBody>
                  <TextCard
                    day={item.day}
                    month={item.month}
                    detail={item.detail}
                  />
                </CardBody>
              </Card>
              
              </>
            );
          })}
          
        </OffcanvasBody>
      </Offcanvas>
    </React.Fragment>
    /* {categories &&
            categories.map((category, i) => (
              <div
                className={`${category.type} external-event fc-event text-white`}
                key={"cat-" + category.id}
                draggable
              >
                <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                {category.title}
              </div>
            ))} */
    /* <FullCalendar
            plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
            // initialView="dayGridMonth"
            slotDuration={"00:15:00"}
            // handleWindowResize={true}
            themeSystem="bootstrap"
            headerToolbar={{
              start: "prev",
              center: "title",
              end: "next",
            }}
            // events={events}
            // aspectRatio={1.5}
            height="420px"
            // editable={true}
            // droppable={true}
            // selectable={true}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            // drop={onDrop}
            // contentHeight="auto"
            selectable={true}
          /> */
    /*<Modal backdrop={false} isOpen={deleteDetail} toggle={toggleDeleteDetail} centered>
        <ModalHeader>Confrim</ModalHeader>
        <ModalBody className="text-center">
          <Button color="success" size="lg">
            ตกลง
          </Button>
          <Button
            onClick={toggleDeleteDetail}
            color="danger"
            size="lg"
            className="ms-2"
          >
            ยกเลิก
          </Button>
        </ModalBody>
      </Modal> */
  );
};

Calendar.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  // className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
};

export default Calendar;
