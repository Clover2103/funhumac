import React from "react";
import { HomeValuesCard } from "../HomeValuesCard";
import "./HomeValues.css";


const HomeValues = () => {

  return (
    <div className="bodyHomeGAndV">
      <div className="container">
        <div className="w-100 pt-5 pb-5">
          <div className="cont-values">
            <h2>Valores</h2>
            <HomeValuesCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export { HomeValues };