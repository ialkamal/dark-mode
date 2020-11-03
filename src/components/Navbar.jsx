import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: props.darkMode ? "papayawhip" : "black",
        }}
      >
        <h1>Crypto Tracker</h1>
      </NavLink>
      <NavLink
        to="/details"
        style={{
          textDecoration: "none",
          color: props.darkMode ? "papayawhip" : "black",
        }}
      >
        <h2>Details</h2>
      </NavLink>

      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
