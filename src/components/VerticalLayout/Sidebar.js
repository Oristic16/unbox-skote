import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import withRouter from "../Common/withRouter";

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import logoLightPng from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";

import logogorkoror from '../../assets/images/1200px-Opdc_preview_rev_1.png'
import whitelogo from '../../assets/images/draft-Logo-กพร-White.png'

const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              {/* <img src={logo} alt="" height="22" /> */}
              <img src={logogorkoror} alt="" height="22" />
            </span>
            <span className="logo-lg">
              {/* <img src={logoDark} alt="" height="17" /> */}
              <img src={logogorkoror} alt="" height="17" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              {/* <img src={logogorkoror} alt="" height="30" /> */}
              <img src={whitelogo} alt="" height="30" />
              {/* <img src={logoLightSvg} alt="" height="22" /> */}
            </span>
            <span className="logo-lg">
              <img className="mt-3" src={whitelogo} alt="" height="80" />
              {/* <img src={logoLightPng} alt="" height="19" /> */}
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
