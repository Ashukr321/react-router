import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) => ({
    color: isActive ? "orange" : "white",
    fontWeight: isActive ? "bold" : "",
  })
  return (
    <div className="navbar">
      <NavLink className="logo">react-router</NavLink>
      <div className="navLink">
        <NavLink
          to="/"
          style={activeLink}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={activeLink}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={activeLink}
        >
          Contact
        </NavLink>
        <NavLink
          to="/service"
          style={activeLink}
        >
          Services
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
