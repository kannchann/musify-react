import React,{ useRef } from "react";
import {  Hero, Carousel,AccessoriesSection,Banner, QRSection} from "../components";
import { newArrivalProduct, popularProduct } from "../constants";




const Home = () => {
  const mySectionRef = useRef(null);
  return (
    <div>
      <Hero targetRef={mySectionRef} />
      <div  ref={mySectionRef} >
      <Carousel heading="Popular Trends" color="bg-[#282828]" data={popularProduct}/>
      <Banner />
      <AccessoriesSection />
      <Carousel heading="New Arrivals" color="bg-primaryPurple" data={newArrivalProduct} />
      <QRSection />
      </div>
    </div>
  );
};

export default Home;
