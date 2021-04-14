import React from "react";
import "./directoryItem.style.scss";

const DirectoryItem = ({ price, age, race, imageUrl }) => {
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
      <input className="add-to-cart" type="button"></input>
    </div>
  );
};
export default DirectoryItem;
