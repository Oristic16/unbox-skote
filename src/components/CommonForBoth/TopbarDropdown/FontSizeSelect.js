import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { get, map } from "lodash";
import { withTranslation } from "react-i18next";

//i18n
import i18n from "../../../i18n";
import languages from "../../../common/languages";

import { useFontSizeContext } from "../../../pages/Context/FontSizeContext";

const FontSizeSelect = () => {
  const { fontSize, setFontSize, defaultFontSize } = useFontSizeContext();

  const elementsToAdjust = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, a, div, p, span, input, td, th"
  );

  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };

  const changeFontSizeSelect = (size) => {
    if (size === "เล็ก") {
        let sum = 0.2
        elementsToAdjust.forEach((element) => {
            const elementType = element.tagName.toLowerCase()
            if(elementType === 'h1') element.style.fontSize = `${2 - sum}rem`;
            if(elementType === 'h2') element.style.fontSize = `${1.625 - sum}rem`;
            if(elementType === 'h3') element.style.fontSize = `${1.42188 - sum}rem`;
            if(elementType === 'h4') element.style.fontSize = `${1.21875 -sum}rem`;
            if(elementType === 'h5') element.style.fontSize = `${1.01562 - sum}rem`;
            if(elementType === 'h6') element.style.fontSize = `${0.8125 -sum}rem`;
            if(elementType === 'p') element.style.fontSize = `${0.8125 - sum}rem`;
            if(elementType === 'a') element.style.fontSize = `${0.8125 - sum}rem`;
            if(elementType === 'div') element.style.fontSize = `${0.8125 - sum}rem`;
            if(elementType === 'span') element.style.fontSize = `${0.8125 - sum}rem`;
            if(elementType === 'input') element.style.fontSize = `${0.8125 - sum}rem`;
            if(elementType === 'td') element.style.fontSize = `${0.8125 - sum}rem`;
            if(elementType === 'th') element.style.fontSize = `${0.8125 - sum}rem`;
          });
    }
    if (size === "กลาง") {
        setFontSize(defaultFontSize);
    
        elementsToAdjust.forEach((element) => {
        const elementType = element.tagName.toLowerCase(); // รับชื่อแท็กของ element
        if (defaultFontSize[elementType]) {
            element.style.fontSize = `${defaultFontSize[elementType]}rem`;
        }
        });
    }
    if (size === "ใหญ่") {
        let sum = 0.4
        elementsToAdjust.forEach((element) => {
            const elementType = element.tagName.toLowerCase()
            if(elementType === 'h1') element.style.fontSize = `${2 + sum}rem`;
            if(elementType === 'h2') element.style.fontSize = `${1.625 + sum}rem`;
            if(elementType === 'h3') element.style.fontSize = `${1.42188 + sum}rem`;
            if(elementType === 'h4') element.style.fontSize = `${1.21875 + sum}rem`;
            if(elementType === 'h5') element.style.fontSize = `${1.01562 + sum}rem`;
            if(elementType === 'h6') element.style.fontSize = `${0.8125 + sum}rem`;
            if(elementType === 'p') element.style.fontSize = `${0.8125 + sum}rem`;
            if(elementType === 'a') element.style.fontSize = `${0.8125 + sum}rem`;
            if(elementType === 'div') element.style.fontSize = `${0.8125 + sum}rem`;
            if(elementType === 'span') element.style.fontSize = `${0.8125 + sum}rem`;
            if(elementType === 'input') element.style.fontSize = `${0.8125 + sum}rem`;
            if(elementType === 'td') element.style.fontSize = `${0.8125 + sum}rem`;
            if(elementType === 'th') element.style.fontSize = `${0.8125 + sum}rem`;
          });
    }
  };

  const handleReset = () => {

    setFontSize(defaultFontSize);
    
    elementsToAdjust.forEach((element) => {
      const elementType = element.tagName.toLowerCase(); // รับชื่อแท็กของ element
      if (defaultFontSize[elementType]) {
        element.style.fontSize = `${defaultFontSize[elementType]}rem`;
      }
    });
  };

  const size = ["เล็ก", "กลาง", "ใหญ่"];

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle className="btn header-item " tag="button">
          <i
            style={{ color: "black" }}
            className="fa-duotone fa-text-size font-size-16"
          ></i>
        </DropdownToggle>
        <DropdownMenu className="language-switch dropdown-menu-end">
          {size.map((item, idx) => (
            <DropdownItem key={idx} onClick={() => changeFontSizeSelect(item)}>
              {item}
            </DropdownItem>
          ))}
          <DropdownItem onClick={handleReset}>Reset</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default withTranslation()(FontSizeSelect);
