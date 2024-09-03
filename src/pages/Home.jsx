import React from "react";
import { Navbar, Hero, Carousel } from "../components";
import { Banner} from "../components/ui";
import AccessoriesSection from "../components/AccessoriesSection";


const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <Banner />
      <AccessoriesSection />
    </div>
  );
};

export default Home;
