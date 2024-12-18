import React from "react";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { HomeMAndV } from "../../components/HomeMAndV";
import { HomeBookView } from "../../components/HomeBookView";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeAboutUs />
      <HomeMAndV />
      <HomeBookView />
      <h1>Home</h1>
    </div>
  );
};

export { Home };