import React from "react";
import { CardWrapper, PopularCardContent } from "../components/ui";
import styles from "../style";


const Carousel = ({ heading, data, color }) => {
  return (
    <div className="bg-primary relative text-white">
      <div className={`${styles.boxWidth} grid justify-start items-center`}>
        <h2 className="text-3xl p-8 text-center text-secondary font-bold">{heading}</h2>
        <div className="grid grid-flow-col justify-between gap-7 overflow-scroll no-scrollbar">
          {data.map((card) => {
             return <CardWrapper cardColor={color}>
              <PopularCardContent
                key={card.id}
                title={card.title}
                list={card.features}
                price={card.price}
                img={card.mainImg}
              />
            </CardWrapper>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
