import React, { Component } from "react";
import "./homepage.style.scss";
import { HOME_DOGS } from "../../datas/home-doggy.js";
import HomeDirectoryViewer from '../../components/homeDirectoryViewer/homeDirectoryViewer.component'
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Collection: HOME_DOGS,
    };
  }

  render() {
    
    const homeDogsToArray = Object.keys(this.state.Collection).map(
      (index) => this.state.Collection[index]
    );
    console.log(homeDogsToArray.map(item=>item.title));
    return (
      <div>
        <div className="homePage-title">CROWN-DOGGY</div>
        <HomeDirectoryViewer/>
      </div>
    );
  }
}
export default Homepage;
