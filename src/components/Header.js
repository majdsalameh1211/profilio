import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Header.css';

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header ${isScrolled ? 'scrolled' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="header-content">
        {(!isScrolled || isHovered) && (
          <>
            <img
              src={require('../public/pic.jpg')}
              alt="Majd Salameh"
              className="header-image"
            />
            <div className="header-text">
              <h3>Majd Salameh</h3>
              <li>Software Engineering Student</li>
            </div>
          </>
        )}
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
