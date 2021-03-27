import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className='navbar--links-container'>
        <li className='session-links-login'>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li className='session-links'>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </div>
    );
  }

  return (
    <div>
    <nav className='navbar'>
      <div className="icon">Skrrt</div>
      <div className="search-box">
        <span className="fa fa-search"></span>
        <input type="search" placeholder="search"></input>
      </div>
      <div>
      </div>
    </nav>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
