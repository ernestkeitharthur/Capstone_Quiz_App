// The navigation bar component, which provides links to navigate the app
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-blue-500 text-white">
    {/* Navigation Links */}
    <ul className="flex space-x-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/history">History</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
