import React from "react";
import "./shop.style.scss";
import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverview.Container";
import ShopOverviewContainer from "../../components/shopOverview/ShopOverview.container";
import { connect } from "react-redux";
import { FetchCollectionAsyncStart } from "../../redux/shop/shopActions";

class Shoppage extends React.Component {
  componentDidMount() {
    const { FetchCollectionAsyncStart } = this.props;
    FetchCollectionAsyncStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={ShopOverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionOverviewContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  FetchCollectionAsyncStart: () => dispatch(FetchCollectionAsyncStart()),
});
export default connect(null, mapDispatchToProps)(Shoppage);
