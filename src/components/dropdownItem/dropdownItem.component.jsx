import React from "react";
import "./dropdown.style.scss";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const DropdownItem = ({ item }) => {
  const { imageUrl, quantity, race, title } = item;
  return (<div className="dropdownItem">
    <div className="dropdownItem-image">
      <img src={imageUrl} alt="i am picture" />
    </div>
    <div className="dropdownItem-quantity">
      <ArrowLeftIcon  className="dropdownItem-quantity icons"/>
      <div className="number">{quantity}</div>
      <ArrowRightIcon className="dropdownItem-quantity icons" />
    </div>
    <div className="dropdownItem-description">
      <div id="title">{title}</div>
      <div>{race}</div>
    </div>
  </div>)
};

export default DropdownItem;
