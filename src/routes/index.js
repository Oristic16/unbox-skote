import React from "react";
import { Navigate } from "react-router-dom";

//import Region
import Login from '../pages/Login/index'
import Page1 from "../pages/Page1/index";
import Page2 from "../pages/Page2/index";

const authProtectedRoutes = [

  //Region
  { path: "/page1", component: <Page1 /> },
  { path: "/page2", component: <Page2 /> },
  {
    path: "/",
    exact: true,
    component: < Navigate to="/page1" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
