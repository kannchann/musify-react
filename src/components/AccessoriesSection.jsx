import React from "react";
import styles from "../style";
import { accessories } from "../constants";

const AccessoriesSection = () => {
  return (
    <div className="bg-primary text-secondary">
      <div className={`${styles.boxWidth}`}>
        <h2 className="text-3xl p-8 text-center font-bold tracking-wider">
          Try our other accessories
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {accessories.map((item,index)=>{return   <div key={index} className="rounded-lg w-[340px] h-[200px] border border-white md:border-none md:w-[600px] md:h-[350px] overflow-hidden">
            <img
              src={item}
              alt="Siri"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>})}
      
        </div>
      </div>
    </div>
  );
};

export default AccessoriesSection;
