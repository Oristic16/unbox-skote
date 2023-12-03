import React from 'react'

import { useFontSizeContext } from './FontSizeContext'

function FontSelector() {

  const { fontSize, setFontSize, defaultFontSize } = useFontSizeContext();

  // console.log(fontSize)

  const handleFontSizeChange = (event) => {

    const scale = event.target.value

    if(scale === "default") return handleReset()

    if(scale === "small") {
      const sum = 0.4
      setFontSize()
      console.log(fontSize)
      const elementsToAdjust = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, a, div, p, span'
        );
      elementsToAdjust.forEach((element) => {
        const elementType = element.tagName.toLowerCase()
        if(elementType === 'h1') element.style.fontSize = `${2.25 - sum}rem`;
        if(elementType === 'h2') element.style.fontSize = `${1.875 - sum}rem`;
        if(elementType === 'h3') element.style.fontSize = `${1.5 - sum}rem`;
        if(elementType === 'h4') element.style.fontSize = `${1.125 -sum}rem`;
        if(elementType === 'h5') element.style.fontSize = `${1 - sum}rem`;
        if(elementType === 'h6') element.style.fontSize = `${0.938 -sum}rem`;
        if(elementType === 'p') element.style.fontSize = `${1 - sum}rem`;
        if(elementType === 'a') element.style.fontSize = `${1 - sum}rem`;
        if(elementType === 'div') element.style.fontSize = `${1 - sum}rem`;
        if(elementType === 'span') element.style.fontSize = `${1 - sum}rem`;
      });
  
      // ตั้งค่า font-size ให้กับ body
      // document.body.style.fontSize = sum;
    }

    if(scale === "medium") {
      const sum = 0.2
      setFontSize()
      console.log(fontSize)
      const elementsToAdjust = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, a, div, p, span'
        );
      elementsToAdjust.forEach((element) => {
        const elementType = element.tagName.toLowerCase()
        if(elementType === 'h1') element.style.fontSize = `${2.25 + sum}rem`;
        if(elementType === 'h2') element.style.fontSize = `${1.875 + sum}rem`;
        if(elementType === 'h3') element.style.fontSize = `${1.5 + sum}rem`;
        if(elementType === 'h4') element.style.fontSize = `${1.125 + sum}rem`;
        if(elementType === 'h5') element.style.fontSize = `${1 + sum}rem`;
        if(elementType === 'h6') element.style.fontSize = `${0.938 + sum}rem`;
        if(elementType === 'p') element.style.fontSize = `${1 + sum}rem`;
        if(elementType === 'a') element.style.fontSize = `${1 + sum}rem`;
        if(elementType === 'div') element.style.fontSize = `${1 + sum}rem`;
        if(elementType === 'span') element.style.fontSize = `${1 + sum}rem`;
      });
  
      // ตั้งค่า font-size ให้กับ body
      // document.body.style.fontSize = sum;
    }

    if(scale === "large") {
      const sum = 0.4
      setFontSize()
      console.log(fontSize)
      const elementsToAdjust = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, a, div, p, span'
        );
      elementsToAdjust.forEach((element) => {
        const elementType = element.tagName.toLowerCase()
        if(elementType === 'h1') element.style.fontSize = `${2.25 + sum}rem`;
        if(elementType === 'h2') element.style.fontSize = `${1.875 + sum}rem`;
        if(elementType === 'h3') element.style.fontSize = `${1.5 + sum}rem`;
        if(elementType === 'h4') element.style.fontSize = `${1.125 + sum}rem`;
        if(elementType === 'h5') element.style.fontSize = `${1 + sum}rem`;
        if(elementType === 'h6') element.style.fontSize = `${0.938 + sum}rem`;
        if(elementType === 'p') element.style.fontSize = `${1 + sum}rem`;
        if(elementType === 'a') element.style.fontSize = `${1 + sum}rem`;
        if(elementType === 'div') element.style.fontSize = `${1 + sum}rem`;
        if(elementType === 'span') element.style.fontSize = `${1 + sum}rem`;
      });
  
      // ตั้งค่า font-size ให้กับ body
      // document.body.style.fontSize = sum;
    }
    // setFontSize(prev => ({ ...prev,
    //     h1: 2.25 - newSize,
    //     h2: 1.875 - newSize,
    //     h3: 1.5 - newSize,
    //     h4: 1.125 - newSize,
    //     h5: 1 - newSize,
    //     h6: 0.938 - newSize,
    //     a: 1 - newSize,
    //     div: 1 - newSize,
    //     span: 1 - newSize
    // }));
    // setFontSize()
    // console.log(fontSize)

    // ตั้งค่า font-size ให้กับแต่ละ element โดยตรง
    // const elementsToAdjust = document.querySelectorAll(
    //   'h1, h2, h3, h4, h5, h6, a, div, p, span'
    //   );
    // elementsToAdjust.forEach((element) => {
    //   element.style.fontSize = `${newSize}rem`;
    // });

    // ตั้งค่า font-size ให้กับ body
    // document.body.style.fontSize = newSize;

    // if(event.target.value === "small") {
    //   setFontSize(prev => ({ ...prev,
    //     h1: "1.75rem",
    //     h2: "1.375rem",
    //     h3: "1rem",
    //     h4: "0.625rem",
    //     h5: "0.5rem",
    //     h6: "0.438rem",
    //     a: "0.5rem",
    //     div: "0.5rem",
    //     span: "0.5rem"
    //   }))
    //   console.log(fontSize)
    //   elementsToAdjust.forEach((element) => {
    //     const elementType = element.tagName.toLowerCase()
    //     if(elementType === 'h1') {
    //       console.log(elementType)
    //     }
    //     if(elementType === 'h2') {
    //       console.log(elementType)
    //     }
    //     if(elementType === 'h3') {
    //       console.log(elementType)
    //     }
    //     if(elementType === 'h4') {
    //       console.log(elementType)
    //     }
    //     if(elementType === 'h5') {
    //       console.log(elementType)
    //     }
    //   });



    

    // elementsToAdjust.forEach((element) => {
    //   const computedFontSize = getComputedStyle(element).fontSize;
    //   const numericSize = parseFloat(computedFontSize);
    //   const adjustedSize = numericSize + parseFloat(newSize);
    //   element.style.fontSize = `${adjustedSize}rem`;
    // });

    // ตั้งค่า font-size ให้กับ body โดยบวกกับค่า font-size เดิม
    // const computedBodyFontSize = getComputedStyle(document.body).fontSize;
    // const numericBodySize = parseFloat(computedBodyFontSize);
    // const adjustedBodySize = numericBodySize + parseFloat(newSize);
    // document.body.style.fontSize = `${adjustedBodySize}rem`;

    
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

  return (
    <div>
        <select className='me-3' value={fontSize} onChange={handleFontSizeChange}>
          <option value="default">Default</option>
          <option value="small">เล็ก</option>
          <option value="medium">ปานกลาง</option>
          <option value="large">ใหญ่</option>
        </select>
        <button onClick={handleReset}>Reset State</button>
    </div>
  )
}

export default FontSelector