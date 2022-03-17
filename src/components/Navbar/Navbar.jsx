import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className="navlink active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/services">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
