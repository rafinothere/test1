import React, { useState } from 'react';
import logo from '../assets/mindspring-logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeAll = () => { setIsOpen(false); setDropdownOpen(false); };

  return (
    <header className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <div className="brand">
          <h1>Mindspring Tuition</h1>
          <span>Expert 11+ Preparation</span>
        </div>
      </div>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        {isOpen && <button className="close-btn" onClick={toggleMenu}>×</button>}

        <Link to="/" onClick={closeAll}>Home</Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <span className="dropdown-label">Services ▾</span>
          <ul className={`dropdown-menu ${dropdownOpen ? 'visible' : ''}`}>
            <li>
              <Link to="/elevenplus" onClick={closeAll}>11+ Exam</Link>
            </li>
            <li>
              <Link to="/english" className="dropdown-link" onClick={closeAll}>English</Link>
            </li>
            <li>
              <Link to="/maths" className="dropdown-link" onClick={closeAll}>Maths</Link>
            </li>
            <li>
              <Link to="/science" className="dropdown-link" onClick={closeAll}>Science</Link>
            </li>
          </ul>
        </div>

        <Link to="/offer" onClick={closeAll}>What We Offer</Link>
        <Link to="/about" onClick={closeAll}>About Us</Link>
        <Link to="/contact" onClick={closeAll}>Contact</Link>

        {/* Book Classes now routes to /contact */}
        <Link to="/contact" className="book-btn" onClick={closeAll}>
          Book Classes
        </Link>
      </nav>

      <button className="hamburger" onClick={toggleMenu} aria-label="Open menu">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {isOpen && <div className="backdrop" onClick={toggleMenu} />}
    </header>
  );
};

export default Navbar;

