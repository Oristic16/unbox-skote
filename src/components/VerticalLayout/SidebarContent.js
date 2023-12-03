import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "../Common/withRouter";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";
import { Button } from "reactstrap";
import axios from "axios";
import { GetCookieData, GetCookieToken } from "../../pages/Cookie/GetCookie";

const SidebarContent = props => {
  const baseURL = process.env.REACT_APP_API_CORS;

  const user = GetCookieData("userData");
  const user_id = user.user_id;

  const token = GetCookieToken("userToken");

  const [totalRows, setTotalRows] = React.useState(null);

  const ref = useRef();
  const activateParentDropdown = useCallback(item => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                parent5.childNodes[0].classList.remove("mm-active"); // a tag
              }
            }
          }
        }
      }
    }
  };

  const path = useLocation();
  const activeMenu = useCallback(() => {
    const pathName = path.pathname;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  const getTotalRows = () => {
    axios
      .get(
        baseURL +
        `/api/leave/approve/datatable?page=1&size=5&order[0]=created_date&order[1]=DESC&filter[approve_id][0]=${user_id}&filter[approve_status][0]=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(res => {
        setTotalRows(res.data.info.totalRows);
        console.log("TotalRow from SidebarCon: ", res.data.info.totalRows);
        // console.log("totalRows: ",res)
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getTotalRows();
  }, []);

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu" style={{}}>
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/entrywork">
                <i className=" fas fa-user-clock"></i>
                <span>{props.t("ลงเวลาปฏิบัติราชการ")}</span>
              </Link>
            </li>
            <li>
              <Link to="/opdctimeline">
                <i className="fa-solid fa-calendar-days"></i>
                <span>{props.t("OPDC Timeline")}</span>
              </Link>
            </li>
            <li>
              <Link to="/laonline">
                <div style={{ position: "absolute", right: "10%", top: "10%" }} className="rounded-pill bg-danger text-white text-end">{totalRows}</div>
                <i className="fas fa-hand-peace"></i>

                <span>{props.t("การลาออนไลน์")}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/setdata">
                <i className="fa-solid fa-file-shield"></i>
                <span>{props.t("กำหนดข้อมูล")}</span>
              </Link>
            </li>
            <li>
              <Link to="/page1">
                <i className="fa-solid fa-user-shield"></i>
                <span>{props.t("การประเมินผลการปฏิบัติราชการ")}</span>
              </Link>
            </li>

            <li>
              <Link to="/resorceonline">
                <i className="bx bx-data"></i>
                <span>{props.t("ทรัพยากรออนไลน์")}</span>
              </Link>
            </li>

            {user.position.length !== 0 ? (
              ""
            ) : (
              <>
                <li>
                  <Link to="/requesttex">
                    <i className="fa-solid fa-file-import"></i>
                    <span>{props.t("นำเข้าใบภาษี")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/requestreducetex">
                    <i className="fa-solid fa-copy"></i>
                    <span>{props.t("นำเข้าลดหย่อนใบภาษี")}</span>
                  </Link>
                </li>
              </>
            )
            }
          </ul >
        </div >
      </SimpleBar >
    </React.Fragment >
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
