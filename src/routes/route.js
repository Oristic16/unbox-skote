import React from 'react'
import { Navigate } from 'react-router-dom'

function Authmiddleware(props) {

    if(!localStorage.getItem("authUser")) {
        return (
            <Navigate to={{pathname: "/login", state: {from: props.location }}} />
        )
    }
  return (
    <React.Fragment>
        {props.children}
    </React.Fragment>
  )
}

export default Authmiddleware