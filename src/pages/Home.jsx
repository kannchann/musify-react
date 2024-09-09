import React from "react";
import {  Hero, Carousel,AccessoriesSection,Banner, QRSection} from "../components";
import { newArrivalProduct, popularProduct } from "../constants";




const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel heading="Popular Trends" color="bg-[#282828]" data={popularProduct}/>
      <Banner />
      <AccessoriesSection />
      <Carousel heading="New Arrivals" color="bg-primaryPurple" data={newArrivalProduct} />
      <QRSection />
    </div>
  );
};

export default Home;
