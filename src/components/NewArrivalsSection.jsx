import React from "react";
import styles from "../style";
import { CardWrapper, PopularCardContent } from "./ui";
import { newArrivalsOne, newArrivalsThree, newArrivalsTwo } from "../assets";
import { Cards } from "../constants";


function cardHolder(card) {  
  return <CardWrapper cardColor="bg-primaryPurple">
  <PopularCardContent key= {card.id} title={card.title} list ={card.features} price={card.price} img={card.mainImg}/>
</CardWrapper>
;
}

const NewArrivalsSection = () => {
  return (
    <div className="bg-black text-white">
      <div className={`${styles.boxWidth}`}>
        <h2 className="text-3xl p-8 text-center font-bold tracking-wider">
          New Arrivals
        </h2>
        <div className="grid grid-flow-col justify-between gap-7 overflow-scroll no-scrollbar">
        {Cards.map(cardHolder)}        

        </div>

      </div>
    </div>
  );
};

export default NewArrivalsSection;
