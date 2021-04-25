import React from "react";
import "./shop.style.scss";
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component.jsx'
import ShopOverview from '../../components/shopOverview/shopOverView.component.jsx' 
const Shoppage = ({match}) => {
 
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ShopOverview}/>
      <Route  path={`${match.path}/:collectionId`} component={CollectionOverview}/>
    
      </div>
  );
};

export default Shoppage