import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>Bikes</li>
          <li>Spare</li>
          <li>Stores</li>
        </ul>
      </div>
      <div className="navbar-font">
        <i className="fas fa-search"></i>
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
