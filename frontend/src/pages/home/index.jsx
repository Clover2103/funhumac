import React from "react";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { HomeMAndV } from "../../components/HomeMAndV";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeAboutUs />
      <HomeMAndV />
      <h1>Home</h1>
    </div>
  );
};

export { Home };