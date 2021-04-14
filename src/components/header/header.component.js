import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg'

const Header = () => {
  return (
    <div className="header">
    <div className="icon" >
      <Logo/>
    </div>
      <div className="options">
        <Link className='option' to="/">Home</Link>
        <Link className='option' to="/shop">Shop</Link>
        <Link className='option' to="/signIn">Sign in</Link>
        <Link className='option' to="/contact">Contact</Link>
      </div>
    </div>
  );
};
export default Header