import React from "react";
import "./checkout.style.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { addItemToDropdown } from "../../redux/dropdown-item/dropdownItemAction";
import { reduceItemToDropdown } from "../../redux/dropdown-item/dropdownItemAction";
import { removeItemToDropdown } from "../../redux/dropdown-item/dropdownItemAction";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const CheckOutItem = ({ item, addItem, reduceItem,removeItem }) => {
  const { price, imageUrl, title, race, quantity } = item;
  return (
    <div className="checkoutItem">
      <div className="checkoutItem-image">
        <img src={imageUrl} alt="i am picture" />
      </div>
      <div className="checkoutItem-description">
        <div id="title">{title}</div>
        <div>{race}</div>
      </div>
      <div className="checkoutItem-number">
        <ArrowLeftIcon
          onClick={() => reduceItem(item)}
          className="checkoutItem-quantity icons"
        />
        <div className="number">{quantity}</div>
        <ArrowRightIcon
          onClick={() => addItem(item)}
          className="checkoutItem-quantity icons"
        />
      </div>
      <div className="checkoutItem-price">{price}$</div>
      <div className="checkoutItem-delete">
        <DeleteIcon onClick={() => removeItem(item)} />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToDropdown(item)),
  reduceItem: (item) => dispatch(reduceItemToDropdown(item)),
  removeItem: (item) => dispatch(removeItemToDropdown(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
