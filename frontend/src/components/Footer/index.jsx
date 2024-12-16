import React from "react";
import { Link } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import isme from "../../assets/Logo ISME.png";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <div className="footer row g-3">

      <div className="cont-area col-md-4">

        <div className="cont-acred">
          <p>Auditado y verificado por: </p>
          <div className="cont-logo-footer">
            <img src={isme} alt="ISME" />
          </div>
        </div>

        <div className="redes">
          <div>
            <a href="" target="_blank">
              <FaTiktok className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100064695218731" target="_blank" className="cl-p" >
              <FaFacebook className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/funhumac/" target="_blank" className="cl-p">
              <FaInstagram className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="" target="_blank" className="cl-p">
              <FaWhatsapp className="red-icon"/>
            </a>
          </div>
        </div>

      </div>

      <div className="cont-area col-md-4">
        
        <div>
          <div>
            <p>NUESTRA UBICACIÓN</p>
            <div className="cont-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.371579082128!2d-74.0657423!3d4.6664427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af80754cbbf%3A0xaa34c96e8a9ba13f!2sVigiempleo.com!5e0!3m2!1ses-419!2sco!4v1733850118839!5m2!1ses-419!2sco" 
              width="310"
              height="280"
            ></iframe>
            </div>
          </div>
        </div>
        <div>
          <p>© 2024 FunHuMac. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className="cont-area col-md-4">
        <div className="cont-links">
          <p><Link to="/home#aboutUs">¿Quienes somos?</Link></p>
          <p><Link to="/projects">Nuestros proyectos</Link></p>
          <p><Link to="/contact">Contactenos</Link></p>
          <p><Link to="/contact">Quejas / Apelaciones</Link></p>
          <p><Link to="/photos">Galeria</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export { Footer };