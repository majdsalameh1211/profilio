import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Header.css';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';

  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsCollapsed(true); // Collapse header when scrolling
      } else {
        setIsCollapsed(false); // Expand header when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="header-content">
        <img
          src={require('../public/pic.jpg')}
          alt="Majd Salameh"
          className="header-image"
        />
        <div className="header-text">
          <h3>Majd Salameh</h3>
          <li>Software Engineering Student</li>
        </div>
        {/* Only visible in expanded header */}
        {!isCollapsed && (
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
          </button>
        )}
      </div>
      {!isCollapsed && (
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
  
};

export default Header;
