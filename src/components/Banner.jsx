import React from "react";
import styles from "../style";
import { Checked, Customer, deliverIcon, discount } from "../assets";
import { Button, Timer } from "./ui";

const Banner = () => {
  return (
    <div className={`bg-black ${styles.paddingY} ${styles.paddingX} text-white`}>
      <div
        className={`${styles.boxWidth} banner-gradient flex flex-col items-center py-8 space-y-10 rounded-lg`}
      >
        <h3 className="font-bold text-2xl">Why buy directly from Musify?</h3>
        <div
          className={`md:flex-row flex flex-col gap-7 md:justify-between md:items-center md:w-full ${styles.paddingX}`}
        >
          <div className="flex lg:flex-1 gap-2 items-center">
            <img src={deliverIcon} alt="Free Delivery" />
            <p>Free Delivery</p>
          </div>
          <div className="flex lg:flex-1 gap-2 items-center">
            <img src={Checked} alt="Verified Products" />
            <p>Verified Products</p>
          </div>
          <div className="flex lg:flex-1 gap-2 items-center">
            <img src={Customer} alt="24/7 Customer Support" />
            <p>24/7 Customer support</p>
          </div>
        </div>
      </div>



      <div className={` ${styles.paddingY} flex flex-col space-y-7 justify-center items-center md:flex-row md:justify-around ${styles.boxWidth}`}>
      <h2 className="text-3xl font-bold text-center block md:hidden">Exclusive Offer</h2>
      <div className="rounded-full bg-primaryBlue w-[290px] lg:w-[500px] relative  ">
            <div className="absolute bg-primaryPurple text-white w-[100px] h-[100px] left-[10%] rounded-full text-center p-6 font-bold text-xl">
              20% off
            </div>
            <img src={discount} alt="Discount" className="object-cover" />
          </div>
          <div className="flex md:space-y-5 flex-col items-center">
          <h2 className="text-3xl font-bold hidden md:block">Exclusive Offer</h2>

          <Timer />
          <div className="flex gap-3">
            <Button variant="secondary" btnText="View Details" size="small" />
            <Button variant="primary" btnText="Shop now" size="small" />
          </div>


          </div>
      </div>

     
    </div>
  );
};

export default Banner;
