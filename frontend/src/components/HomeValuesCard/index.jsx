import React from "react";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./HomeValuesCard.css";

const valuesData = [
  { title: "CALIDAD", description: "Al realizar nuestras labores, mantenemos un alto grado de calidad; nuestra manera de ser, de actuar y de parecer, son consecuentes con nuestros pensamientos y valores" },
  { title: "LIDERAZGO", description: "Es importante para el ejercicio de nuestro propósito; siendo capaces de dirigir, encabezar y apoyar todos los cambios que generamos a nuestro alrededor" },
  { title: "OBJETIVIDAD", description: "La imparcialidad no permite que nos apartemos de los objetivos, mantenemos independencia de opinión" },
  { title: "RESPETO", description: "Procuramos la observacion de las buenas maneras y costumbres, la consideración y la cortesia que cada individuo y situación merece" },
  { title: "RESPONSABILIDAD", description: "Satisfacemos las necesidades de nuestros clientes con el cumplimiento cabal de nuestros compromisos, sobrepasando sus exigencias, dando siempre más  de 100%" },
  { title: "SERVICIO", description: "Somos instrumento para el logro de los objetivos de nuestros clientes; poniendo a su favor nuestros recursos para sus utilidades y provecho" },
  { title: "TENACIDAD", description: "Nuestra firmeza y perseveracian para procurar no solo el cumplimiento de los términos de contrato, sino, la demonstración de la razón de ser nuestra Organización." }
];

const HomeValuesCard = () => {

  const {
    currentIndex,
    sliderRef,
    scrollUp,
    scrollDown,
  } = useCarrucel(valuesData.length, false, 5000);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      visibleSlides.push(valuesData[(currentIndex + i) % valuesData.length]);
    }
    return visibleSlides;
  };

  return (
    <div className="contCarrucel">
      <button className="nav-btn-QA" onClick={scrollUp}>&#9650;</button>
      <div className="contValuesCarrucel">
        {getVisibleSlides().map((slide, index) => (
          <div key={index} className={`valuesCarrucel valuesCarrucel-${index}`}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button className="nav-btn-QA" onClick={scrollDown}>&#9660;</button>
    </div>
  );
};

export { HomeValuesCard };