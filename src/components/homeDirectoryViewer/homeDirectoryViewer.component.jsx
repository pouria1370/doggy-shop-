import React from "react";
import "./homeDirectoryViewer.style.scss";
import { HOME_DOGS } from "../../datas/home-doggy.js";
import HomeDirectoryItem from "../../components/homeDirectoryItem/homeDirectoryItem.component";
import Carousel from 'react-material-ui-carousel'


class HomeDirectoryViewer extends React.Component {
 
  

  render() {
    const homeDogsToArray = Object.keys(HOME_DOGS).map(
      (index) => HOME_DOGS[index]
    );
    return (
      <Carousel className="slideshow-container">
        {homeDogsToArray.map(({ id, ...otherProps }) => (
          <HomeDirectoryItem key={id}  {...otherProps} />
        ))}
        
      </Carousel>
    );
  }
}
export default HomeDirectoryViewer;
