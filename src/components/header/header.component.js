import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import { signOutStart } from "../../redux/authentication/authenticationActions";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { connect } from "react-redux";
import { setHiddenFromHeader } from "../../redux/dropdown/dropdown.actions";
import Shopicon from "../shopicon/shopicon.component.jsx";
import {createStructuredSelector} from 'reselect'
import {authenticationSelector} from '../../redux/authentication/authenticationSelectors'

const Header = ({ signOutStart,isGoogleSignedIn, ToggleCondition }) => {
  return (
    <div className="header">
      <div className="icon">
        <Logo />
      </div>
      <div className="options">
        <Link className="option" to="/" onClick={ToggleCondition}>
          <HomeRoundedIcon />
        </Link>
        <Link className="option" to="/shop" onClick={ToggleCondition}>
          Shop
        </Link>
        {isGoogleSignedIn ? (
          <div
            className="option"
            onClick={ () => {
              // ToggleCondition();
              signOutStart();
              
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signIn" onClick={ToggleCondition}>
            Sign in
          </Link>
        )}
        <Link className="option" to="/contact" onClick={ToggleCondition}>
          Contact
        </Link>
        <Shopicon />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  ToggleCondition: () => dispatch(setHiddenFromHeader()),
  signOutStart:()=>dispatch(signOutStart())
});

const mapStateToProps = createStructuredSelector ({
  isGoogleSignedIn: authenticationSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
