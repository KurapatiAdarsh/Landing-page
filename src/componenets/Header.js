import React, { useState } from "react";


function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">VRV Security</div>
      <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#presence">Global Presence</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </header>
  );
}

export default Header;
