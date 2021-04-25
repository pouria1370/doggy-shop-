import React from "react";
import './CollectionOverview.style.scss'
import DirectoryViewer from "../directoryViewer/directoryViewer.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { colectionOfCollectionsSelector } from "../../redux/shop/shopSelectors"

const CollectionOverview=({collection,match}) => {
   console.log(collection)
    
    return (
      <div className="collectionOverview-page">
        he
      </div>
    );
  };

  const mapStateToProps =(state,ourProps)=> ({
    collection: colectionOfCollectionsSelector(ourProps.match.params.collectionId)(state),
  });
  export default connect(mapStateToProps)(CollectionOverview);
  