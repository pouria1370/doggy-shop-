import React from "react";
import './shopOverView.style.scss'
import DirectoryViewer from "../directoryViewer/directoryViewer.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionssSelector } from "../../redux/shop/shopSelectors";

const ShopOverview=({collections}) => {
    const shoppy = Object.keys(collections).map(
      (index) => collections[index]
    );
    return (
      <div className="shopOverview-page">
        {shoppy.map(({ id, ...otherProps }) => (
          <DirectoryViewer key={id} {...otherProps} />
        ))}
      </div>
    );
  };

  const mapStateToProps = createStructuredSelector({
    collections: collectionssSelector,
  });
  export default connect(mapStateToProps)(ShopOverview);
  