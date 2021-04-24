import React from "react";
import "./dropdown.style.scss";
import ButtonForm from "../button/button.component";
import { connect } from "react-redux";
import DropdownItem from "../dropdownItem/dropdownItem.component";
import { createStructuredSelector } from "reselect";
import { dropdownItemSelector } from "../../redux/dropdown-item/dropdownItemSelector";
import { withRouter } from "react-router-dom";
import { setHiddenFromHeader } from "../../redux/dropdown/dropdown.actions";

const Dropdown = ({ Items, history, ToggleCondition }) => (
  <div className="dropdown">
    {Items.length > 0 ? null : (
      <div className="dropdown-text">There is nothing</div>
    )}

    <div className="dropdown-list">
      {Items.map((item) => (
        <DropdownItem item={item} />
      ))}
    </div>
    <div onClick={ToggleCondition} className="dropdown-button">
      {Items.length == 0 ? null : (
        <ButtonForm
          type="button"
          changeHandler={() => history.push("/checkout")}
          buttonName="Go to CheckOut"
        />
      )}
    </div>
  </div>
);
const matStateToProps = createStructuredSelector({
  Items: dropdownItemSelector,
});
const mapDispatchToProps = (dispatch) => ({
  ToggleCondition: () => dispatch(setHiddenFromHeader()),
});
export default withRouter(
  connect(matStateToProps, mapDispatchToProps)(Dropdown)
);
