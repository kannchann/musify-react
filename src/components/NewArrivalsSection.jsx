import React from "react";
import styles from "../style";
import { CardWrapper, PopularCardContent } from "./ui";
import { newArrivalsOne } from "../assets";
const NewArrivalsSection = () => {
  return (
    <div className="bg-black text-white">
      <div className={`${styles.boxWidth}`}>
        <h2 className="text-3xl p-8 text-center font-bold tracking-wider">
          New Arrivals
        </h2>
        <div>
        <CardWrapper cardColor="primaryPurple">
            <PopularCardContent img={newArrivalsOne}/>
        </CardWrapper>

        </div>

      </div>
    </div>
  );
};

export default NewArrivalsSection;
