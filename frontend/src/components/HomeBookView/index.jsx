import React, { useState, useEffect } from "react";
import "./HomeBookView.css";

const content = [
  "En razón a nuestro objeto social; en La Fundación Humana Mujer Activa, creemos que cada persona debe crecer en todas sus dimensiones y aportar en la obtención de un mundo sostenible, una riqueza equilibrada y una sociedad con principios y valores. Hacemos nuestra parte en la lucha contra “Las Pobrezas”.",
  "Para ello, centramos nuestro quehacer en:\n\nCapacitar, para el desarrollo de técnicas, habilidades y destrezas en artes y oficios; que permitan la producción y comercialización de productos y servicios manufacturados de excelente calidad, competitivos en el mercado nacional e internacional.",
  "Ejecutar proyectos dirigidos al desarrollo de las MiPyMEs, para incrementar la generación de ingresos, la autosostenibilidad, el empleo y la rentabilidad.\n\nFacilitar la integración del grupo familiar a nuestros proyectos.",
  "Desarrollar programas, actividades y campañas que contribuyan a la preservación, rescate y cuidado del medio ambiente.\n\nPromover y fortalecer de comedores comunitarios, en provecho de una vida saludable y una alimentación sana.",
  "Administrar y/o Apoyar a los hogares infantiles, bajo premisas de calidad, protección, valores y principios morales, éticos y espirituales.\n\nRealizar programas de promoción y prevención en salud, a través de entidades dedicadas y especializadas en el tema.",
  "Efectuar brigadas de salud y de servicios, para atender a la comunidad, gratuitamente, a través de nuestro voluntariado.\n\nProveer a la población el acceso a la buena alimentación, los medicamentos adecuados, el vestuario y los implementos de aseo necesarios.",
  "Capacitar con educación no formal, en temas que permitan la transmisión del conocimiento, el fortalecimiento y desarrollo de las capacidades humanas.",
  "Acoger los planes de gobierno para fomentar, apoyar y desarrollar proyectos que le permitan a la comunidad el acceso a una vivienda digna y justa.",
  "Proporcionar puentes sociales entre los sectores representativos, cuyos aportes contribuyan al desarrollo de los objetivos de la fundación.",
  "Obtener ayudas, capitales, empleos, y generación de ingresos; para las familias, mediante alternativas de Responsabilidad Social y Solidaridad.",
  "Fomentar la recomposición del tejido social de la familia, para la preservación de su unidad, y así contrarrestar procesos de descomposición que la amenazan.",
  "Desarrollar proyectos de prevención, erradicación, producción, comercialización, uso y abuso de drogas y sustancias toxicas.",
];

const HomeBookView = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = content.length;

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      isMobile
        ? Math.min(prevPage + 1, totalPages - 1) // Salta 1 página si es móvil
        : Math.min(prevPage + 2, totalPages - 1) // Salta 2 páginas si no es móvil
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      isMobile ? Math.max(prevPage - 1, 0) : Math.max(prevPage - 2, 0)
    );
  };

  return (
    <div className="book-container">
      <h1 className="mb-4">Trabajamos por la Restauración Social</h1>
      <div className="book">
        {/* Página izquierda */}
        {!isMobile && currentPage < totalPages && (
          <div className="page left-page">{content[currentPage]}</div>
        )}
        {/* Página derecha */}
        <div className="page right-page">
          {content[isMobile ? currentPage : currentPage + 1] || ""}
        </div>
      </div>
      {/* Controles */}
      <div className="controls">
        <button className="btnHomeBook" onClick={prevPage} disabled={currentPage === 0}>
          Anterior
        </button>
        <button className="btnHomeBook" onClick={nextPage} disabled={currentPage >= totalPages - 1}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export { HomeBookView };
