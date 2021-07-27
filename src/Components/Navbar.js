import React from 'react';
import '../Stylesheets/Navbar.css';
import '../style.css';
const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="brand-name">Crypto Calculator</div>
        <ul>
          <li>
            <a href="Home" />
            Home
          </li>
          <li>
            <a href="About" />
            About
          </li>
          <li>
            <a href="Contact" />
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
