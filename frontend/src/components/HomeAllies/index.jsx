import React from "react";
import image1 from "../../assets/home/allies/logo-aiexocp.png";
import image2 from "../../assets/home/allies/logo-aiexsst.png";
import image3 from "../../assets/home/allies/logo-clubdetiro.png";
import image4 from "../../assets/home/allies/logo-cognoseguridad.png";
import image5 from "../../assets/home/allies/Logo Conasegur.png";
import image6 from "../../assets/home/allies/logo-vialseguridad.png";
import image7 from "../../assets/home/allies/logo-vigiempleo.png";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./HomeAllies.css";

const images = [image1, image2, image3, image4, image5, image6, image7];

const alliesData = [
  { src: image2, alt: "aiex sst", url: "https://aiex.co/", desc: "Contamos con la licencia para la prestacion de los servicios de seguridad y salud en el trabajo, concedida por el Ministerio de Salud y ..." },
  { src: image3, alt: "clubtiro", url: "https://clubdetiroconasegur.com/", desc: "Fomenta el respeto, la sana convivencia, el juego limpio y el espíritu de competencia para el personal de Seguridad Privada..." },
  { src: image1, alt: "aiexocp", url: "https://aiex.com.co/", desc: "CERTIFICACIÓN DE PERSONAS AIEX S.A.S. es un Organismo de Evaluación de la Conformidad acreditado bajo la Norma ISO/IEC 17024:2012 de naturaleza privada y alto sentido de responsabilidad ..." },
  { src: image4, alt: "cognoseguridad", url: "https://conasegur.org/", desc: "Somos la Corporación Nacional de Empresas de Seguridad Privada 'CONASEGUR', gremio del sector de la Vigilancia y Seguridad Privada, con cubrimiento a nivel Nacional..." },
  { src: image5, alt: "conasegur", url: "https://conasegur.org/", desc: "«CONASEGUR» Corporación Nacional de Empresas de Seguridad Privada, que propenden por el desarrollo gremial de sus asociados..." },
  { src: image6, alt: "vialseguridad", url: "https://vialseguridad.com/", desc: "Somos una empresa de Seguridad Privada que cuenta con autorización SuperVigilancia Res. 20224100050807 de  05-08-2022, con un alto..." },
  { src: image7, alt: "vigiempleo", url: "https://vigiempleo.com/pages/", desc: "Esta plataforma tecnológica permite de forma oportuna y eficiente la solución de las necesidades laborales del talento humano tanto empresariales como personales..." }
];

const HomeAllies = () => {

  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarrucel(images.length, false, 5000);

  return (
    <div className="bodyHomeAllies">
      <div className="alliesSlider mb-5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="contAlliesSlider">
          <button className="navBtnAllies prevBtnAllies" onClick={scrollLeft}>&#10094;</button>
          <div className="sliderAllies" ref={sliderRef}>
            {images.map((img, index) => {
              const ally = alliesData[index];
              let className = 'sliderImgAllies';
              if (index === currentIndex) {
                className += ' focusAllies';
              } 
              else if (index === (currentIndex - 1 + images.length) % images.length) {
                className += ' leftAllies';
              } else if (index === (currentIndex + 1) % images.length) {
                className += ' rightAllies';
              }
              return (
                <div className={className} key={index}>
                  <figure>
                    <img src={ally.src} alt={ally.alt} />
                    <div className="alliesInfo">
                      <p>{ally.desc}</p>
                      <a href={ally.url} target="_blank" rel="noreferrer">
                        <button className="btn-allies">CONOCER MÁS</button>
                      </a>
                    </div>
                  </figure>
                </div>
              );
            })}
          </div>
          <button className="navBtnAllies nextBtnAllies" onClick={scrollRight}>&#10095;</button>
        </div>

      </div>
      <div className="slider-deg-allies">
        {/* Contenido adicional aquí si es necesario */}
      </div>
    </div>
  );
};

export { HomeAllies };
