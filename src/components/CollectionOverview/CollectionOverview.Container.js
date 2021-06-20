import { connect } from "react-redux";
import {isCollectionLoaded } from "../../redux/shop/shopSelectors";
import CollectionOverview from "./CollectionOverview.component.jsx";
import { createStructuredSelector } from "reselect";
import {compose} from 'redux'
import SpinnerLoading from "../spinning/spinning.component";

const mapStateToProps=createStructuredSelector({
    isLoading: (state)=>! isCollectionLoaded(state)
})
 const CollectionOverviewContainer=compose(
     connect(mapStateToProps),
     SpinnerLoading
 )(CollectionOverview)

 export default CollectionOverviewContainer