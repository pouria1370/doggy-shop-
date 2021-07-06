import React from "react";
import "./CollectionOverview.style.scss";
import DirectoryItem from "../directoryItem/directoryItem.component"
import { connect } from "react-redux";
import { colectionOfCollectionsSelector } from "../../redux/shop/shopSelectors";

const CollectionOverview = ({ collection, match }) => {
  const { dogs, title } = collection;
  console.log(dogs);
  return (
    <div className="collectionOverview">
    <div className="collectionOverview title">{title}</div>
    <div className="collectionOverview list">
    {dogs.map((item) => (
      <DirectoryItem item={item} key={item.id}  />
    ))}
    </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: colectionOfCollectionsSelector(props.match.params.collectionId)(
    state
  ),
});
export default connect(mapStateToProps)(CollectionOverview);
