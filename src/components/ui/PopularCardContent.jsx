import React from "react";
import { blackHeadphones,cartIcon } from "../../assets";
import {Button} from "./index";


const PopularCardContent = ({title,list,price,img}) => {
  console.log('Received list:', list);
  return (
    
    <div className="w-[310px]">
      <div className="h-[300px]">
        <img src={img} alt="" className="w-full h-full rounded-t-2xl object-cover" />
      </div>
      <div className="w-full flex flex-col gap-2 px-2 py-2">
        <h2 className="lg:text-lg">{title}</h2>
        <ul>
        {list.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
        <p className="text-textHighlight">${price}</p>
        <div className="flex gap-2">
            <Button btnText="Shop now" variant="primary" size="small" link="payment" />
            <Button
              btnText="Add to Cart"
              variant="secondary"
              size="small"
              iconsrc={cartIcon}
              link="cart"
            />
          </div>
      </div>
    </div>
  );
};

export default PopularCardContent;
