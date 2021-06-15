import React from "react";
import './index.scss'

function Navbar(props) {
  return (
    <nav id="navbar">
      <img src="/img/zs_fill.png" alt="Logo" className="logo"/>
      <ul>
        <a href="#profile">Profile</a>
        <a href="#resume">Resume</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </ul>
    </nav>
  );
}

export default Navbar;
