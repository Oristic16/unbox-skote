import React from "react";

//AuthProtext
import Page1 from "../pages/Page1";

//NonAuthProtect
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

const authProtectedRoutes = [

    //Region
    { path: "/page1", component: <Page1 /> },
    { 
        path: "/", 
        exact:true, 
        component: <Navigate to="/page1" /> 
    },

]

const publicRoutes = [
    { path: "/login", component: <Login /> },
]

export { authProtectedRoutes, publicRoutes }