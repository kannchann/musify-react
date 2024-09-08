import React from "react";
import { CardWrapper, PopularCardContent } from "../components/ui";
import styles from "../style";
import { blackHeadphones } from "../assets";
import { Cards } from "../constants";

function cardHolder(card) {  
  return <CardWrapper cardColor="popular-card-gradient">
  <PopularCardContent key= {card.id} title={card.title} list ={card.features} price={card.price} img={card.mainImg}/>
</CardWrapper>
;
}

const Carousel = () => {
  return (
    <div className="bg-black relative text-white">
      <div className={`${styles.boxWidth} grid justify-start items-center`}>
        <h2 className="text-3xl p-8 text-center font-bold">Popular Trends</h2>
        <div className="grid grid-flow-col justify-between gap-7 overflow-scroll no-scrollbar">
          {Cards.map(cardHolder)}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
