import React, { Component } from "react";
import "./homepage.style.scss";
import DirectoryViewer from "../../components/directoryViewer/directoryViewer.component";
import { SHOP_DOGS } from "../../datas/shop-doggy.js";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Collection: SHOP_DOGS,
    };
  }

  render() {
    
    const shoppy = Object.keys(this.state.Collection).map(
      (index) => this.state.Collection[index]
    );
    console.log(shoppy.map(item=>item.dogs));
    return (
      <div className="home-page">
        {shoppy.map(({ id, ...otherProps }) => (
          <DirectoryViewer key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
export default Homepage;
