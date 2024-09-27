import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ width: "200px", float: "left", padding: "20px", background: "#f5f5f5" }}>
      <h3>Components</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/checkbox">Checkbox Example</Link></li>
        <li><Link to="/tab">Tab Example</Link></li>
        <li><Link to="/menuButton">Menu Button Example</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;