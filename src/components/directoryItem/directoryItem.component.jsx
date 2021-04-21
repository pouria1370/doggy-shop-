import React from "react";
import "./directoryItem.style.scss";
import ButtonForm from "../button/button.component";
import {setItemToDropdown} from '../../redux/dropdown-item/dropdownItemAction'
import {connect} from 'react-redux'


const DirectoryItem = ({ item, setItemTodropdown }) => {
  const { price, age, race, imageUrl } = item;
  return (
    <div className="card">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="card-details">
        <div className="age-container">Age:{age}</div>
        <div className="price-container">{price}$</div>
        <div className="race-container">race:{race}</div>
      </div>
      <div className="directoryItem_button">
        <ButtonForm
          buttonName="Add Me"
          type="button"
          changeHandler={()=>setItemTodropdown(item)}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setItemTodropdown: (item) => dispatch(setItemToDropdown(item)),
});
export default connect(null, mapDispatchToProps)(DirectoryItem);
