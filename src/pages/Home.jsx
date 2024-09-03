import React from "react";
import {  Hero, Carousel,AccessoriesSection,Banner,NewArrivalsSection, QRSection} from "../components";




const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <Banner />
      <AccessoriesSection />
      <NewArrivalsSection />
      <QRSection />
    </div>
  );
};

export default Home;
