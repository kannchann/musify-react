import React from "react";
import {  Hero, Carousel,AccessoriesSection,Banner,NewArrivalsSection} from "../components";



const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <Banner />
      <AccessoriesSection />
      <NewArrivalsSection />
    </div>
  );
};

export default Home;
