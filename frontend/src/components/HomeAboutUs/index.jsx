import React from "react";
import "./HomeAboutUs.css";
import imagen from "../../assets/home/aboutus/imagen1.png";

const HomeAboutUs = () => {
  return (
    <div className="home-about-us">
      <h2 className="mt-4 mb-5">SOBRE NOSOTROS</h2>
      <div className="container-aboutus container row g-2">
        <div className="col-md cont-aboutus">
          <div className="cont-img-aboutus">
            <img src={imagen} alt="about-us" />
          </div>
        </div>
        <div className="col-md cont-aboutus">
          <div className="cont-inf-aboutus">
            <p>La Fundación Humana Mujer Activa, creemos que cada persona debe crecer en todas sus dimensiones y aportes en la obtención de un mundo sostenible, una riqueza equilibrada y una sociedad con principios y valores. Hacemos nuestra parte en la lucha contra «Las pobrezas»</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeAboutUs };