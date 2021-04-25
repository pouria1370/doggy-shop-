import React from "react";
import "./homeDirectoryViewer.style.scss";
import HomeDirectoryItem from "../../components/homeDirectoryItem/homeDirectoryItem.component";
import Carousel from "react-material-ui-carousel";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directoriesSelector } from "../../redux/directory/directorySelector";

const HomeDirectoryViewer = ({ directories }) => {
  const homeDogsToArray = Object.keys(directories).map(
    (index) => directories[index]
  );
  return (<Carousel className="slideshow-container">
    {homeDogsToArray.map(({ id, ...otherProps }) => (
      <HomeDirectoryItem key={id} {...otherProps} />
    ))}
  </Carousel>)
};
const mapStateToProps = createStructuredSelector({
  directories: directoriesSelector,
});
export default connect(mapStateToProps)(HomeDirectoryViewer);
