import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/themes/material_blue.css";
import Form1 from "./Form 11 Case/Form1";
import Form2 from "./Form 11 Case/Form2";
import Form3 from "./Form 11 Case/Form3";
import Form4 from "./Form 11 Case/Form4";
import Form5 from "./Form 11 Case/Form5";
import Form6 from "./Form 11 Case/Form6";
import Form7 from "./Form 11 Case/Form7";
import Form8 from "./Form 11 Case/Form8";
import Form9 from "./Form 11 Case/Form9";
import Form10 from "./Form 11 Case/Form10";
import Form11 from "./Form 11 Case/Form11";

const SelectForm = ({ idForm, closeCanvas }) => {

  const checkIdForm = () => {

    switch (idForm) {
      case "1":
        return (<Form1 idForm={idForm} closeCanvas={closeCanvas} />);
      case "2":
        return (<Form2 idForm={idForm} closeCanvas={closeCanvas} />);
      case "3":
        return (<Form3 idForm={idForm} closeCanvas={closeCanvas} />);
      case "4":
        return (<Form4 idForm={idForm} closeCanvas={closeCanvas} />);
      case "5":
        return (<Form5 idForm={idForm} closeCanvas={closeCanvas} />);
      case "6":
        return (<Form6 idForm={idForm} closeCanvas={closeCanvas} />);
      case "7":
        return (<Form7 idForm={idForm} closeCanvas={closeCanvas} />);
      case "8":
        return (<Form8 idForm={idForm} closeCanvas={closeCanvas} />);
      case "9":
        return (<Form9 idForm={idForm} closeCanvas={closeCanvas} />);
      case "10":
        return (<Form10 idForm={idForm} closeCanvas={closeCanvas} />);
      case "11":
        return (<Form11 idForm={idForm} closeCanvas={closeCanvas} />);
      default:
        return "";
    }
  }
  

  return (
    <div>
      {checkIdForm()}
    </div>
  )
};

export default SelectForm;
