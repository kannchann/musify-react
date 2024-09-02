import React from "react";
import { blackHeadphones,cartIcon } from "../assets";
import Button from "./Button";


const PopularCardContent = () => {
  return (
    <div className="w-[310px]">
      <div className="h-[300px]">
        <img src={blackHeadphones} alt="" className="w-full h-full rounded-t-2xl object-cover" />
      </div>
      <div className="w-full flex flex-col gap-2 px-2 py-2">
        <h2 className="lg:text-lg">Wireless Headphones with Dolby Surround Sound</h2>
        <ul>
          <li>Truely Wireless</li>
          <li>Dolby Surround Sound</li>
          <li>13hrs of playback time</li>
          <li>Made in Germany</li>
        </ul>
        <p className="text-textHighlight">$145</p>
        <div className="flex gap-2">
            <Button btnText="Shop now" variant="primary" size="small" />
            <Button
              btnText="Add to Cart"
              variant="secondary"
              size="small"
              iconsrc={cartIcon}
            />
          </div>
      </div>
    </div>
  );
};

export default PopularCardContent;
