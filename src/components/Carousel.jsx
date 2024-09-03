import React from "react";
import { CardWrapper, PopularCardContent } from "../components/ui";
import styles from "../style";
import { blackHeadphones } from "../assets";

const Carousel = () => {
  return (
    <div className="bg-black relative text-white">
      <div className={`${styles.boxWidth} grid justify-start items-center`}>
        <h2 className="text-3xl p-8 text-center font-bold">Popular Trends</h2>
        <div className="grid grid-flow-col justify-between gap-7 overflow-scroll no-scrollbar">
          <CardWrapper cardColor="popular-card-gradient">
            <PopularCardContent img={blackHeadphones}/>
          </CardWrapper>
          <CardWrapper  cardColor="popular-card-gradient">
            <PopularCardContent img={blackHeadphones}/>
          </CardWrapper>
          <CardWrapper  cardColor="popular-card-gradient">
            <PopularCardContent img={blackHeadphones} />
          </CardWrapper>
          <CardWrapper  cardColor="popular-card-gradient">
            <PopularCardContent img={blackHeadphones} />
          </CardWrapper>
          <CardWrapper cardColor="popular-card-gradient">
            <PopularCardContent img={blackHeadphones}/>
          </CardWrapper>
          <CardWrapper  cardColor="popular-card-gradient">
            <PopularCardContent img={blackHeadphones}/>
          </CardWrapper>
          <CardWrapper  cardColor="popular-card-gradient">
            <PopularCardContent img={blackHeadphones} />
          </CardWrapper>
          <CardWrapper  cardColor="popular-card-gradient">
            <PopularCardContent img={blackHeadphones} />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
