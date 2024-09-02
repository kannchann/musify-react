import React from "react";
import { CardWrapper } from "../components";
import PopularCardContent from "../components/PopularCardContent";
import styles from "../style";

const Carousel = () => {
  return (
    <div className="bg-black relative text-white">
      <div className={`${styles.boxWidth} grid justify-start items-center`}>
        <h2 className="text-3xl p-8 text-center font-bold">Popular Trends</h2>
        <div className="grid grid-flow-col justify-between gap-7 overflow-scroll no-scrollbar">
          <CardWrapper>
            <PopularCardContent />
          </CardWrapper>
          <CardWrapper>
            <PopularCardContent />
          </CardWrapper>
          <CardWrapper>
            <PopularCardContent />
          </CardWrapper>
          <CardWrapper>
            <PopularCardContent />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
