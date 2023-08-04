import React, { useState } from 'react';
import './Navigation.css'; // Make sure to create the CSS file with the provided styles
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <h1>Hiring App</h1>
    
    <div className="navbar">
      
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#" onClick={closeMenu}>For Employers</a>
        <a href="#" onClick={closeMenu}>Refer &amp; Earn ₹15k</a>
        <Link to="/login" onClick={closeMenu}>Login</Link>
        <a href="#" onClick={closeMenu}>Sign Up</a>
      </nav>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
    </div>
    </div>
  );
};

export default Navigation;

