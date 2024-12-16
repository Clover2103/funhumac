import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo funhumac.png";
import "./NavBarResponsive.css";

const NavBarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navBarResponsive">
      <div className="navBarResponsive__header">
        <div className="navBarResponsive__logo">
          <div className="navBarResponsive__logo cogno-logo-navbar">
            <Link to="/home">
              <img src={logo} alt="Cognoseguridad" />
            </Link>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {isMenuOpen && (
        <div className="navBarResponsive__links">
          <Link to="/home" onClick={toggleMenu}>INICIO</Link>
          <Link to="/projects" onClick={toggleMenu}>PROYECTOS</Link>
          <Link to="/photos" onClick={toggleMenu}>GALERIA</Link>
          <Link to="/contact" onClick={toggleMenu}>CONTACTO</Link>
          <div className="btnFormRes">
            <a href="#" target="_blank" rel="noreferrer">
              <button >
                QUIERO DONAR
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export { NavBarResponsive };
