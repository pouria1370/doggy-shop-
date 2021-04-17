import React from "react";
import "./input.style.scss";
const InputForm = ({ value,name,typeInput, nameInput, label, placeholder,changehandler }) => {
  return (
    <div className="input-container">
      <label className={value.length>0?
        
        "shrink-label":
        "label"}>{label}</label>
      <input
        placeholder={placeholder}
        required
        className="input"
        type={typeInput}
        name={name}
        value={value}
        onChange={changehandler}
      >
        {nameInput}
      </input>
    </div>
  );
};
export default InputForm;
