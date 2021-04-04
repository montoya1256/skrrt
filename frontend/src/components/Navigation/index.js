import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

import logo from "../../images/skrrt-logo.png";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="navbar--links-container">
        <li className="session-links-login">
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li className="session-links">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <NavLink className="icon" to="/explore">
          <i className="fas fa-home home-btn"></i>
          <img className="icon-img" src={logo} alt="logo"></img>
        </NavLink>
        <div className="search-box">
          {/* <span className="fa fa-search"></span>
          <input type="search" placeholder="search"></input> */}
          <p></p>
        </div>
        <div></div>
      </nav>
      <i className="fa fa-bars hamburger-icon"></i>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
