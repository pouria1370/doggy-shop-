import { connect } from "react-redux";
import {isFetchingGrabbing } from "../../redux/shop/shopSelectors";
import ShopOverview from "./shopOverView.component.jsx"
import { createStructuredSelector } from "reselect";
import {compose} from 'redux'
import SpinnerLoading from "../spinning/spinning.component";

const mapStateToProps=createStructuredSelector({
    isLoading:isFetchingGrabbing
})
 const ShopOverviewContainer=compose(
     connect(mapStateToProps),
     SpinnerLoading
 )(ShopOverview)

 export default ShopOverviewContainer