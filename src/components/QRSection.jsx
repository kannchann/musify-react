import React from "react";
import styles from "../style";
import { appStore, playStore, qr } from "../assets";

const QRSection = () => {
  return (
    <div
      className={`bg-primary ${styles.paddingY} ${styles.paddingX} text-white`}
    >
      <div
        className={`${styles.boxWidth} ${styles.paddingX} banner-gradient flex flex-col lg:flex-row justify-center lg:space-x-20 items-center py-8 space-y-10 rounded-lg`}
      >
        <div className="size-[300px] ">
          <img src={qr} alt="" />
        </div>
        <div className="space-y-5 text-center">
          <h3 className="font-bold text-2xl">Scan QR code for more</h3>
          <p>Now you can download the official musify app.</p>
          <div className="flex h-[100px] flex-col md:flex-row md:gap-3 items-center">
            <button className=" w-[100px] md:w-[250px] ">
              <img src={playStore} alt="" className="" />
            </button>
            <button className=" w-[100px] md:w-[250px]  ">
              <img src={appStore} alt="" className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRSection;
