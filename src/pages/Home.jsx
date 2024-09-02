import React from "react";
import { Navbar, Hero } from "../layout";
import Carousel from "../layout/Carousel";
import Banner from "../layout/Banner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Banner />
    </div>
  );
};

export default Home;
