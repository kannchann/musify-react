import React from "react";
import {cartIcon, cartOrange } from "../../assets";
import {Button} from "./index";


export const HeroCard = ({title,img,price,dicountedPrice}) => {
  return (
    <div className="w-[250px] h-full text-secondary">
      <img
        src={img}
        alt=""
        className="absolute top-0 left-[30%] w-[100px] -translate-y-[50%]"
      />
      <div className="pt-[30%] w-full flex flex-col gap-2 px-2 pb-2">
        <h2>{title}</h2>
        <div className="flex space-x-10">
          <p className="text-textHighlight">${price}</p>
          <p className="line-through">${dicountedPrice}</p>
        </div>
      </div>
    </div>
  );
};

const PopularCardContent = ({title,list,price,img}) => {
  return (
    
    <div className="w-[320px] h-[570px] ">
      <div className="h-[250px]">
        <img src={img} alt="" className="w-full h-full rounded-t-2xl object-cover" />
      </div>
      <div className="w-full flex flex-col space-y-6 px-5 py-3 ">
        <h2 className="lg:text-lg">{title}</h2>
        <ul className="list-disc pl-5">
        {list.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
        <p className="text-textHighlight">${price}</p>
        <div className="flex justify-between ">
            <Button btnText="Shop now" variant="primary" size="small" link="payment" />
            <Button
              btnText="Add to Cart"
              variant="secondary"
              size="small"
              iconsrc={cartOrange}
              link="cart"
            />
          </div>
      </div>
    </div>
  );
};

export default PopularCardContent;
