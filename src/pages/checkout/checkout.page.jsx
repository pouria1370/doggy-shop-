import React from "react";
import { connect } from "react-redux";
import "./checout.style.scss";
import { createStructuredSelector } from "reselect";
import { dropdownItemSelector } from "../../redux/dropdown-item/dropdownItemSelector";
import { accumulatorPriceCheckOutSelector } from "../../redux/dropdown-item/dropdownItemSelector";
import CheckOutItem from "../../components/checkoutItem/checkOutItem.component";
import ButtonForm from '../../components/button/button.component'

const CheckOut = ({ Items,total }) => (
  <div className="checkout">
    <div className="checkout-header">
      <div>Dog</div>
      <div>Description</div>
      <div>Number</div>
      <div>Price</div>
      <div>Remove</div>
    </div>
    <div className="checkout-list">
      {Items.map((item) => (
        <CheckOutItem item={item} />
      ))}
    </div>
    <div className="checkout-payment">
    <ButtonForm buttonName="Pay with Visa" />
    <div className="checkout-payment total">TOTAL: {total}$</div>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  Items: dropdownItemSelector,
  total:accumulatorPriceCheckOutSelector,
});

export default connect(mapStateToProps)(CheckOut);
