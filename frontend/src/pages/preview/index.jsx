import React from "react";
import "./Preview.css";
import logo from '../../assets/logo funhumac.png';
import { useRedirectAfterDelay } from '../../hooks/useRedirectAfterDelay';

const Preview = () => {

  useRedirectAfterDelay('/home', 5000);

  return (
    <div className="App">
      <header className="App-header">
        <h1>BIENVENIDO A</h1>
        <div className='cont-logo'>
          <div className='circule-1 circule'></div>
          <div className='circule-2 circule'></div>
          <div className='circule-3 circule'></div>
          <div className='circule-4 circule'></div>
          <div className='circule-5 circule'></div>
          <div className='circule-6 circule'></div>
          <div className='circule-7 circule'></div>
          <div className='circule-8 circule'></div>
          <div className='circule-9 circule'></div>
          <div className='circule-10 circule'></div>
          <div className='circule-11 circule'></div>
          <div className='circule-12 circule'></div>
          <div className='circule-13 circule'></div>
          <div className='circule-14 circule'></div>
          <div className='circule-15 circule'></div>
          <div className='logo'>
            <img src={logo} className="App-logo-preview" alt="logo" />
          </div>
        </div>
        <p>Por favor, espere<span className="loading-dots"></span></p>
      </header>
    </div>
  );
};

export { Preview };