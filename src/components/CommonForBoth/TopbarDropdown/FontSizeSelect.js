import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { withTranslation } from "react-i18next";

import { useFontSizeContext } from "../../../pages/Context/FontSizeContext";

const FontSizeSelect = () => {

    const { fontSize, setFontSize, defaultFontSize } = useFontSizeContext();

  const body = document.querySelectorAll('body')

//   console.log(body)

  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  }
  
  const changeFontSizeSelect = (size) => {
    if(size === "เล็ก") {
        
    }
    if(size === "กลาง") {
        
    }
    if(size === "ใหญ่") {

    }
  }

  const handleReset = () => {
    setFontSize(defaultFontSize)
    const elementsToAdjust = document.querySelectorAll(
      'h1, h2, h3, h4, h5, h6, a, div, p, span'
      );
      elementsToAdjust.forEach((element) => {
        const elementType = element.tagName.toLowerCase(); // รับชื่อแท็กของ element
        if (defaultFontSize[elementType]) {
          element.style.fontSize = `${defaultFontSize[elementType]}rem`;
        }
      });
  }

  const size = ["เล็ก", "กลาง", "ใหญ่"]

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle className="btn header-item " tag="button">
          <i style={{color:"black"}} className="fa-duotone fa-text-size font-size-16"></i>
        </DropdownToggle>
        <DropdownMenu className="language-switch dropdown-menu-end">
          {size.map((item,idx) => (
            <DropdownItem
              key={idx}
              onClick={() => changeFontSizeSelect(item)}
            >
              {item}
            </DropdownItem>
          ))}
          <DropdownItem
              onClick={handleReset}
            >
              Reset
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default withTranslation()(FontSizeSelect)
