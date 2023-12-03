import React from "react";
import { Navigate } from "react-router-dom";

import NotFound404 from "../pages/NotFound404";
import Page1 from "../pages/Page1/index";
import Page2 from "../pages/Page2/index";
import Dashboard from "../pages/Dashboard";
import OPDCBox from "../pages/OPDCBOX";
import SetData from "../pages/SetData";
import RateService from "../pages/การประเมิน/index";
import ManageSorce from "../pages/ManageSorce";
import TestAPI from "../pages/TestAPI";
import RegisterTest from "../pages/Authentication/RegisterTest";
import LaOnline from "../pages/LaOnline/index";
import ProfileUser from "../pages/Profile/ProfileUser";
import ResorceOnline from "../pages/ResorceOnline";
import EntryWork from "../pages/EntryWork";
import RequestTex from "../pages/Tax";

import OPDCTimeline from "../pages/OPDCTimeline";
import Login from "../pages/Login/index";
import SetDataLar from "../pages/LaOnline/SetData/SetDataLar";
import TESTluklen from "../pages/TESTPage";
import SetDataTool from "../pages/ResorceOnline/SetDataTool/SetDataTool";
import Reducetex from "../pages/Reducetex";
import SetUserData from "../pages/EntryWork/SetUserData/SetUserData";
import TableLeave from "../pages/LaOnline/TableLeave";
import TableBorrowPage from "../pages/ResorceOnline/TableBorrowPage/TableBorrowPage";

const authProtectedRoutes = [
  //Region
  { path: "/page1", component: <Page1 /> },
  { path: "/page2", component: <Page2 /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/opdcbox", component: <OPDCBox /> },
  { path: "/setdata", component: <SetData /> },
  { path: "/rateservice", component: <RateService /> },
  { path: "/managesorce", component: <ManageSorce /> },
  { path: "/testapi", component: <TestAPI /> },
  { path: "/registertest", component: <RegisterTest /> },
  { path: "/laonline", component: <LaOnline /> },
  { path: "/laonline/setdata", component: <SetDataLar /> },
  { path: "/laonline/tableleave", component: <TableLeave /> },
  { path: "/profile", component: <ProfileUser /> },
  { path: "/resorceonline", component: <ResorceOnline /> },
  { path: "/resorceonline/setdata", component: <SetDataTool /> },
  { path: "/resorceonline/borrowtable", component: <TableBorrowPage /> },
  { path: "/entrywork", component: <EntryWork /> },
  { path: "/entrywork/setdata", component: <SetUserData /> },
  { path: "/requesttex", component: <RequestTex /> },
  { path: "/requestreducetex", component: <Reducetex /> },

  { path: "/opdctimeline", component: <OPDCTimeline /> },
  { path: "/testpage", component: <TESTluklen /> },
  {
    path: "/",
    exact: true,
    component: < Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "*", component: <NotFound404 /> },
];

export { authProtectedRoutes, publicRoutes };
