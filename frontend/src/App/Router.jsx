import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Preview } from "../pages/preview";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { Photos } from "../pages/photos";
import { Contact } from "../pages/contact";
import { NavBar } from "../components/NavBar";
import { NavBarResponsive } from "../components/NavBarResponsive";
import { RedesFlotantes } from "../components/Redes";
import { Footer } from "../components/Footer";

const RouterPages = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 790);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {location.pathname !== "/" && (
        isMobile ? 
          <NavBarResponsive /> : 
          <NavBar />
      )}
      {location.pathname !== "/" && <RedesFlotantes />}
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </div>
  )
}

export { RouterPages };