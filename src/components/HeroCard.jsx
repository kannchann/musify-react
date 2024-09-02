import React from "react";
import { redHeadphones } from '../assets'

const HeroCard = () => {
  return (
    <div className="w-[250px]">
      <img
        src={redHeadphones}
        alt=""
        className="absolute top-0 left-[30%] w-[107px] -translate-y-[50%]"
      />
      <div className="pt-[30%] w-full flex flex-col gap-2 px-2 pb-2">
        <h2>Wireless headphones</h2>
        <div className="flex space-x-10">
          <p className="text-textHighlight">$120</p>
          <p className="">$185</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;