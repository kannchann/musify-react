import React from "react";
import { siri, soundBar, speaker, watch } from "../assets";
import styles from "../style";

const AccessoriesSection = () => {
  return (
    <div className="bg-black text-white">
      <div className={`${styles.boxWidth}`}>
        <h2 className="text-3xl p-8 text-center font-bold tracking-wider">
          Try our other accessories
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="rounded-lg w-[340px] h-[200px] border border-white md:border-none md:w-[600px] md:h-[350px] overflow-hidden">
            <img
              src={watch}
              alt="Siri"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg w-[340px] h-[200px] border border-white md:border-none md:w-[600px] md:h-[350px]  overflow-hidden">
            <img
              src={soundBar}
              alt="Sound Bar"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg w-[340px] h-[200px] border border-white md:border-none md:w-[600px] md:h-[350px]  overflow-hidden">
            <img
              src={siri}
              alt="Watch"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg w-[340px] h-[200px] border border-white md:border-none md:w-[600px] md:h-[350px]  overflow-hidden">
            <img
              src={speaker}
              alt="Speaker"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesSection;
