import React from "react";
import "./header.style.scss";
import { Link} from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import {auth} from '../../firebase/firebase.utils'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from "react-redux";

const Header = ({ isGoogleSignedIn }) => {
  return (
    <div className="header">
      <div className="icon">
        <Logo />
      </div>
      <div className="options">
        <Link className="option" to="/">
          <HomeRoundedIcon/>
        </Link>
        <Link className="option" to="/shop">
          <ShoppingCartIcon/>
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
const mapStateToProps=(state)=>(
  {isGoogleSignedIn:state.authentication.currentUser}
)
export default connect(mapStateToProps)(Header);
