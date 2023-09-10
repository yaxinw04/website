import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/rocks">Rocks!</Link>
      {/* ... other links ... */}
    </nav>
  );
}

export default Navbar;
