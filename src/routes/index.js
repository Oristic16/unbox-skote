import React from "react";
import { Navigate } from "react-router-dom";

//import Region
import Login from '../pages/Login/index'
import Register from "../pages/Register";
import NotFound404 from "../pages/NotFound404";

import Page1 from "../pages/Page1/index";
import Page2 from "../pages/Page2/index";
import Dashboard2 from "../pages/Dashboard2";
import OPDCBox from "../pages/OPDCBOX";
import SetData from "../pages/SetData";

const authProtectedRoutes = [

  //Region
  { path: "/page1", component: <Page1 /> },
  { path: "/page2", component: <Page2 /> },
  { path: "/dashboard2", component: <Dashboard2 /> },
  { path: "/opdcbox", component: <OPDCBox /> },
  { path: "/setdata", component: <SetData /> },
  // { path: "*", component: <NotFound404 /> },
  {
    path: "/",
    exact: true,
    component: < Navigate to="/dashboard2" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "*", component: <NotFound404 /> },
];

export { authProtectedRoutes, publicRoutes };
