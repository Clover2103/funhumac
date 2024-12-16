import React, { useRef, useState } from 'react';
import img1 from '../../assets/home/slider/imagen1.jpg';
import img2 from '../../assets/home/slider/imagen2.jpg';
import img3 from '../../assets/home/slider/imagen3.jpg';
import img4 from '../../assets/home/slider/imagen4.png';
import img5 from '../../assets/home/slider/imagen5.jpg';
import img6 from '../../assets/home/slider/imagen6.jpg';
import img7 from '../../assets/home/slider/imagen7.jpg';
import img8 from '../../assets/home/slider/imagen8.jpg';
import { useCarrucel } from '../../hooks/useCarrucel';
import './HomeSlider.css';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const HomeSlider = () => {
  
  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    goToIndex,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarrucel(images.length, true, 5000);

  return (
    <div className="homeSlider"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="cont-slider">
        <button className="nav-btn prev-btn" onClick={scrollLeft}>&#10094;</button>
        <div className="slider" ref={sliderRef}>
          {images.map((img, index) => {
            let className = 'slider-img';
            if (index === currentIndex) {
              className += ' focus';
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
              className += ' left';
            } else if (index === (currentIndex + 1) % images.length) {
              className += ' right';
            }
            return (
              <div className={className} key={index}>
                <img src={img} alt={`img-slider-${index + 1}`} />
              </div>
            );
          })}
        </div>
        <button className="nav-btn next-btn" onClick={scrollRight}>&#10095;</button>
        <div className="slider-msg">
          <h2>Fundación Humana- Mujer Activa</h2>
        </div>
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>

      <div className="slider-deg">
          
      </div>
    </div>
  );
};

export { HomeSlider };