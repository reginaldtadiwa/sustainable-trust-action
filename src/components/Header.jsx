import React, { useEffect, useState } from "react";
import logoImage from "./logo.jpg";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Inline styles
  const headerStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "white",
    zIndex: 1000,
  };

  const logoStyles = {
    height: "60px",
    marginRight: "45px",
  };

  const navStyles = {
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
    listStyle: "none",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#333333",
    fontWeight: 500,
    transition: "color 0.3s ease",
  };

  const buttonStyles = {
    backgroundColor: "transparent",
    color: "#333333",
    padding: "10px 20px",
    border: "solid",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: 500,
    marginRight: "30px",
  };

  // Responsive styles
  const mobileHeaderStyles = {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "10px",
  };

  const mobileNavStyles = {
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
    display: isMenuOpen ? "flex" : "none",
  };

  const mobileButtonStyles = {
    marginTop: "10px",
    marginRight: "0", // Remove right margin on mobile
  };

  const hamburgerStyles = {
    display: isMobile ? "block" : "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "black", // hamburger always black
    position: "absolute",
    top: "10px",
    right: "25px", // Position at the top-right
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{ ...headerStyles, ...(isMobile && mobileHeaderStyles) }}>
      <img src={logoImage} alt="Logo" style={logoStyles} />

      <div style={hamburgerStyles} onClick={toggleMenu}>
        ☰
      </div>

      <nav>
        <ul style={{ ...navStyles, ...(isMobile && mobileNavStyles) }}>
          <li>
            <a href="#hero" style={linkStyles}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutus" style={linkStyles}>
              About Us
            </a>
          </li>
          <li>
            <a href="#objectives" style={linkStyles}>
              Objectives
            </a>
          </li>
        </ul>
      </nav>

      <button style={{ ...buttonStyles, ...(isMobile && mobileButtonStyles) }}>
        Let's Collaborate
      </button>
    </header>
  );
};

export default Header;
