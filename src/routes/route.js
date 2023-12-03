import React from "react";
import { Navigate } from "react-router-dom";
import { GetCookieData } from "../pages/Cookie/GetCookie";
import { useEffect } from "react";
import { GetCookieExpires } from "../pages/Cookie/FunctionCookie";

const Authmiddleware = (props) => {

  const getExpiresDateFromCookie = (nameToken) => {
    const cookieValue = GetCookie(nameToken);
  
    if (cookieValue) {
      const cookiePairs = cookieValue.split(';');
  
      for (let i = 0; i < cookiePairs.length; i++) {
        const pair = cookiePairs[i].trim().split('=');
        const key = pair[0];
        const value = pair[1];
  
        if (key.toLowerCase() === 'expires') {
          const expiresDateString = value;
          const expiresDate = new Date(expiresDateString);
          return expiresDate;
        }
      }
    }
  
    return null;
  };
  
  const GetCookie = (nameToken) => {
    const name = nameToken + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
  
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  
    return "";
  };
 
  // ตัวอย่างการใช้งาน
  const expiresDate = getExpiresDateFromCookie('userToken');
  
  if (expiresDate) {
    console.log('Expires Date:', expiresDate);
    // หรือถ้าต้องการแสดงเป็นวันที่ท้องถิ่น
    console.log('Local Expires Date:', expiresDate.toLocaleString());
  } else {
    console.log('Cookie not found or expires not set.');
  }
  

  if (!GetCookieData("userData")) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return (<React.Fragment>
    {props.children}
  </React.Fragment>);
};

export default Authmiddleware;
