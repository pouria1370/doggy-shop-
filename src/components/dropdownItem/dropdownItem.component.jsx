import React from "react";
import "./dropdown.style.scss";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { connect } from "react-redux";
import {addItemToDropdown} from '../../redux/dropdown-item/dropdownItemAction'
import {reduceItemToDropdown} from '../../redux/dropdown-item/dropdownItemAction'
const DropdownItem = ({ item,addItem,reduceItem }) => {
  const { imageUrl, quantity, race, title } = item;
  return (<div className="dropdownItem">
    <div className="dropdownItem-image">
      <img src={imageUrl} alt="i am picture" />
    </div>
    <div className="dropdownItem-quantity">
      <ArrowLeftIcon onClick={()=>reduceItem(item)} className="dropdownItem-quantity icons"/>
      <div className="number">{quantity}</div>
      <ArrowRightIcon onClick={()=>addItem(item)} className="dropdownItem-quantity icons" />
    </div>
    <div className="dropdownItem-description">
      <div id="title">{title}</div>
      <div>{race}</div>
    </div>
  </div>)
};

const mapDispatchToProps=dispatch=>({
  addItem:item=>dispatch(addItemToDropdown(item)),
  reduceItem:item=>dispatch(reduceItemToDropdown(item)),
})

export default connect(null,mapDispatchToProps)(DropdownItem);
