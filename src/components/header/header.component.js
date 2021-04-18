import React from "react";
import "./header.style.scss";
import { Link, Redirect } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import {auth} from '../../firebase/firebase.utils'

const Header = ({ isGoogleSignedIn }) => {
  return (
    <div className="header">
      <div className="icon">
        <Logo />
      </div>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/shop">
          Shop
        </Link>
        {isGoogleSignedIn ? (
          <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
        ) : (
          <Link className="option" to="/signIn">
            Sign in
          </Link>
        )}
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Header;
