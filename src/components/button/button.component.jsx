import React from "react";
// import "./button.style.scss";
import {ButtonContainer} from './button.style.js'
const ButtonForm = ({ type,buttonName, changeHandler }) => {
  return (
    <ButtonContainer
      onClick={changeHandler}
      buttonName={buttonName}
      type={type}
    >
      {buttonName}
    </ButtonContainer>
  );
};
export default ButtonForm;
