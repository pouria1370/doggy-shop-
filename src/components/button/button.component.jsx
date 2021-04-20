import React from "react";
import "./button.style.scss";
const ButtonForm = ({ type, buttonName, changeHandler }) => {
  return (
    <button
      onClick={changeHandler}
      className={buttonName.includes('Google') ? "button google" : "button"}
      type={type}
    >
      {buttonName}
    </button>
  );
};
export default ButtonForm;
