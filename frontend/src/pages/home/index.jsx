import React from "react";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { HomeMAndV } from "../../components/HomeMAndV";
import { HomeBookView } from "../../components/HomeBookView";
import { HomeValues } from "../../components/HomeValues";
import { HomeAllies } from "../../components/HomeAllies"
import "./Home.css";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeAboutUs />
      <HomeMAndV />
      <HomeBookView />
      <HomeValues />
      <HomeAllies />
    </div>
  );
};

export { Home };