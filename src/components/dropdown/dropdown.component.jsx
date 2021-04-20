import React from "react";
import "./dropdown.style.scss";
import ButtonForm from "../button/button.component";

const Dropdown = () => (
  <div className="dropdown">
    <div className="dropdown-text">There is nothing</div>
    <div className="dropdown-button">
    <ButtonForm type="button" buttonName="Go to CheckOut" />

    </div>
    </div>
);

export default Dropdown;
