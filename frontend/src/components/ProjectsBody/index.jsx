import React from "react";
import image1 from "../../assets/projects/projects1.jpg";
import image2 from "../../assets/projects/projects2.jpg";
import image3 from "../../assets/projects/projects3.jpg";
import image4 from "../../assets/projects/projects4.jpg";
import image5 from "../../assets/projects/projects5.jpg";
import image6 from "../../assets/projects/projects6.jpg";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./ProjectsBody.css";

const images = [image1, image2, image3, image4, image5, image6];

const sedesInfo = [
  {
    title: "Proyectos de Capacitación en artes y oficios",
    text: "Arte Country, Tejidos a mano, Pintura, Decoración, Empaques corrugados, Informática. Capacitación y educación no formal en temas que permitan la transmisión del conocimiento, el fortalecimiento y desarrollo de las capacidades humanas.",
  },
  {
    title: "Proyectos de Inversión y Capacitación para MiPyMEs:",
    text: "Desarrollo de habilidades Gerenciales, Emprendimiento y fortalecimiento Empresarial, Capacitación Administrativa, Comercialización. Bajo modelos SENA en mi Negocio y NTC 6001 Modelo de gestión para MiPes.",
  },
  {
    title: "Proyectos de reforestación, ciclo del reciclaje, preservación, rescate y cuidado del medio ambiente, con aplicación de la norma ISO 14001.",
    text: "Proyectos para Administración, Fomento y fortalecimiento de comedores comunitarios, con aplicación de la norma ISO 22000 de Inocuidad Alimentaria y el decreto 3075 de 1997 sobre Buenas Prácticas en la Manufactura.",
  },
  {
    title: "Proyectos para Administración y Apoyo de hogares infantiles y protección de la niñez:",
    text: "Bajo parámetros del ICBF, Ley 7 de 1979 y Decreto 2388 de 1979, y Ley 1098 de 2006 para la Infancia y la Adolescencia.",
  },
  {
    title: "Proyectos de Recomposición del tejido social de la familia, mediante capacitaciones, foros, conversatorios o talleres.",
    text: "Desarrollo de proyectos de prevención de erradicación, producción, comercialización, uso y abuso de drogas, sustancias toxicas..",
  },
  {
    title: "Desarrollo de programas de promoción y prevención en salud, realización de brigadas de salud.",
    text: "Proyectos de gestión en ayuda humanitaria para facilitar el acceso a la buena alimentación, Acceso a medicamentos, vestuario e implementos de aseo y artículos de primera necesidad. Proyectos de facilitación para el acceso de la comunidad una vivienda digna y justa, a la educación con medios adecuados, a condiciones de vida más humanas y a la lucha para la erradicación de la pobreza.",
  },
];

const ProjectsBody = () => {

  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarrucel(images.length, false, 5000);

  const currentSede = sedesInfo[currentIndex];

  return (
    <div className="bodyProjects mb-3">
      <h1 className="mt-4 text-center">NUESTROS PROYECTOS</h1>
      <div className="projectsSlider"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="cont-projectsSlider">
          <button className="nav-btn prev-btn" onClick={scrollLeft}>&#10094;</button>
          <div className="projectsSliderCont" ref={sliderRef}>
            {images.map((img, index) => {
              let className = 'projectsSliderCont-img';
              if (index === currentIndex) {
                className += ' focus';
              } 
              else if (index === (currentIndex - 1 + images.length) % images.length) {
                className += ' left';
              } else if (index === (currentIndex + 1) % images.length) {
                className += ' right';
              }
              return (
                <div className={className} key={index}>
                  <div className="col-md container-img">
                    <div className="cont-img">
                      <img src={img} alt={`img-slider-${index + 1}`} />
                    </div>
                  </div>
                  <div className="col-md">
                    <p className="text-center p-3">{currentSede.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="nav-btn next-btn" onClick={scrollRight}>&#10095;</button>
        </div>

        {/* Contenedor flotante con información dinámica */}
        <div className="info-container-projects mb-3">
          <h2>{currentSede.title}</h2>
        </div>
        <div className="projectsSlider-deg">
            
        </div>
      </div>
    </div>
  );
};

export { ProjectsBody };