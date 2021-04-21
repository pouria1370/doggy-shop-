import React from "react";
import "./dropdown.style.scss";
import ButtonForm from "../button/button.component";
import { connect } from "react-redux";
import DropdownItem from "../dropdownItem/dropdownItem.component";

const Dropdown = ({ Items }) => (
  <div className="dropdown">
    {Items.length>0 ? null : <div className="dropdown-text">There is nothing</div>}

    <div className="dropdown-list">
      {Items.map((item) => (
        <DropdownItem item={item} />
      ))}
    </div>
    <div className="dropdown-button">
      <ButtonForm type="button" buttonName="Go to CheckOut" />
    </div>
  </div>
);
const matStateToProps = (state) => ({
  Items: state.dropdownItem.dropdownItems,
});
export default connect(matStateToProps)(Dropdown);
