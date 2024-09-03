import React from "react";
import { Navbar, Hero, Carousel } from "../components";
import { Banner} from "../components/ui";


const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <Banner />
    </div>
  );
};

export default Home;
