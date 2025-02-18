import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close the menu on larger screens
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Inline styles
  const headerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: isScrolled ? 'black' : 'transparent',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
  };

  const logoStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: isScrolled ? 'white' : 'white',
  };

  const navStyles = {
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: isScrolled ? 'white' : 'white',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  };

  const buttonStyles = {
    backgroundColor: isScrolled ? 'transparent' : 'transparent',
    color: isScrolled ? 'white' : 'white',
    padding: '10px 20px',
    border: 'solid',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 500,
    //transition: 'background-color 0.3s ease, color 0.3s ease',
    marginRight: '30px', // Space on the right
  };

  // Responsive styles
  const mobileHeaderStyles = {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px',
  };

  const mobileNavStyles = {
    flexDirection: 'column',
    gap: '10px',
    marginTop: '10px',
    display: isMenuOpen ? 'flex' : 'none', // Show menu when open
  };

  const mobileButtonStyles = {
    marginTop: '10px',
    marginRight: '0', // Remove right margin on mobile
  };

  const hamburgerStyles = {
    display: isMobile ? 'block' : 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: isScrolled ? 'white' : 'white',
    position: 'absolute',
    top: '10px',
    right: '25px', // Position at the top-right
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{ ...headerStyles, ...(isMobile && mobileHeaderStyles) }}>
      <div style={logoStyles}>Sustainable Action Trust</div>
      
      <div style={hamburgerStyles} onClick={toggleMenu}>
        ☰
      </div>

      <nav>
        <ul style={{ ...navStyles, ...(isMobile && mobileNavStyles) }}>
          <li><a href="#hero" style={linkStyles}>Home</a></li>
          <li><a href="#aboutus" style={linkStyles}>About Us</a></li>
          <li><a href="#objectives" style={linkStyles}>Objectives</a></li>
        </ul>
      </nav>

      <button style={{ ...buttonStyles, ...(isMobile && mobileButtonStyles) }}>Let's Collaborate</button>
    </header>
  );
};

export default Header;
