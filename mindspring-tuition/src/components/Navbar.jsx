import React, { useState } from 'react';
import logo from '../assets/mindspring-logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <div className="brand">
          <h1>Mindspring Tuition</h1>
          <span>Expert 11+ Preparation</span>
        </div>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {isOpen && <button className="close-btn" onClick={toggleMenu}>×</button>}

        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <span className="dropdown-label">Services ▾</span>
          <ul className={`dropdown-menu ${dropdownOpen ? 'visible' : ''}`}>
            <li>
              <Link to="/elevenplus" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
                11+ Exam
              </Link>
            </li>
            <li><a href="#">English</a></li>
            <li><a href="#">Maths</a></li>
            <li><a href="#">Science</a></li>
          </ul>
        </div>

<li>
  <Link to="/offer" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
    What We Offer
  </Link>
</li>


        <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

        <button className="book-btn">Book Classes</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Navbar;

