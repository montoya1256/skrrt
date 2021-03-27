import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div>
      <div className="navbar-right navBar__dropdown--isLoaded-links">
        <button className={`dropdown-btn`} onClick={openMenu}>
          {/* <i className="fas fa-user-circle" /> */}
          Button
        </button>
        <div className={`profile-dropdown ${showMenu ? "" : "hidden"}`}>
          <NavLink to="/">{user.username}</NavLink>
          <NavLink to="/">{user.email}</NavLink>
          <label onClick={logout}>Log Out</label>
        </div>
      </div>
      <ul className="navbar--links-container">
        <li className="upload-btn">
          <NavLink to="/">Upload</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ProfileButton;
