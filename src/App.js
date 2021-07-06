import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import Header from "./components/header/header.component";
import { Redirect, Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shop/shop.page";
import Footer from "./components/footer/footer.component";
import SignInAndSignOut from "./pages/signInAndSignOut/signInAndSignOut.page";
import React from "react";
import { connect } from "react-redux";
// import setAuthentication from "../src/redux/authentication/authenticationActions";
import Dropdown from "./components/dropdown/dropdown.component.jsx";
import CheckOut from "./pages/checkout/checkout.page";
import { createStructuredSelector } from "reselect";
import { authenticationSelector } from "./redux/authentication/authenticationSelectors";
import { dropownSelector } from "./redux/dropdown/dropdown.selector.jsx";
import {authenticationCheckUp} from './redux/authentication/authenticationActions'

class App extends React.Component {
  subscribe = null;
  componentDidMount() {
    // const { collection } = this.props;
    // this.subscribe = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await objectCRUD(userAuth);
    //     userRef.onSnapshot((snapShot) => {
    //       this.props.setAuthenticator({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   } else this.props.setAuthenticator(userAuth);
      
    // });
    const{authenticationCheckUp}=this.props;
    authenticationCheckUp();
  }
  componentWillUnmount() {
    this.subscribe();
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.condition ? null : <Dropdown />}

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.authentication ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignOut />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  authenticationCheckUp: () => dispatch(authenticationCheckUp()),
});
const mapStateToProps = createStructuredSelector({
  authentication: authenticationSelector,
  condition: dropownSelector,
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
