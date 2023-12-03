import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Input,
  ListGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { GetCookieToken } from "../../Cookie/GetCookie";
import axios from "axios";
import { useInsertConText } from "../../Context/InsertContext";

const API_URL = process.env.REACT_APP_API_CORS;

function ModalUser(props) {
  const { task } = props;
  const { insert, setInsert } = useInsertConText();
  const token = GetCookieToken("userToken");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataInfo, setDataInfo] = useState([]);
  const [insert_id, setInsert_id] = useState();
  const [insert_name, setInsert_name] = useState();
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = `${API_URL}/api/users/datatable`;

    const fetchData = () => {
      const params = new URLSearchParams({
        page: currentPage,
        size: pageSize,
        "order[0]": "user_name",
        "order[1]": "ASC",
        "filter[user_name_status][0]": "ปกติ",
        search: searchTerm,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      };
      axios
        .get(url, config)
        .then(response => {
          //   console.log("result :", response.data, "info :", response.data.info);
          setData(() => response.data.result);
          setDataInfo(() => response.data.info);
          setTotalPages(Math.ceil(response.data.info.totalRows / pageSize));
        })
        .catch(error => console.error("Error:", error));
    };
    fetchData();
  }, [searchTerm]);

  const handleListItemClick = (id, e, value) => {
    setActiveItem(id === activeItem ? null : id);
    setInsert_id(id);
    setInsert_name(e);
  };

  const toggle = () => setModal(!modal);

  const handleFinalClick = () => {
    setInsert({ insert_id, insert_name, task });
  };

  const handleClearClick = () => {
    setActiveItem(null);
  };

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
          เลือกเจ้าหน้าที่
        </ModalHeader>
        <ModalBody>
          <Input
            placeholder="ค้นหา"
            type="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          {data.map((user, index) => (
            <Fragment key={index}>
              <ListGroup key={user.user_id} className="my-2">
                <Input
                  readOnly
                  defaultValue={user.user_name}
                  onClick={() =>
                    handleListItemClick(user.user_id, user.user_name)
                  }
                  valid={user.user_id === activeItem}
                  style={{
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                />
              </ListGroup>
            </Fragment>
          ))}
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

export default ModalUser;
