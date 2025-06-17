import React from "react";
import { Link, useLocation } from "react-router-dom"; // 1. import useLocation

function Navbar() {
  const location = useLocation();
  const isUnfinished = location.pathname.includes("unfinished"); // 2. check if we're on /unfinished

  if (isUnfinished) {
    return null; // 3. hide the default navbar on Unfinished page
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/unfinished">unfinished</Link>
      {/* ... other links ... */}
    </nav>
  );
}

export default Navbar;
