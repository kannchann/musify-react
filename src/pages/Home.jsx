import React from "react";
import { Navbar, Hero } from "../layout";
import styles from "../style";
import Carousel from "../layout/Carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
    </div>
  );
};

export default Home;
