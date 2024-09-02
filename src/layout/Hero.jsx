import React from "react";
import { cartIcon, hero_image, scroll } from "../assets";
import { Button, CardWrapper } from "../components";
import styles from "../style";
import HeroCard from "../components/HeroCard";
import PopularCardContent from "../components/PopularCardContent";

const Hero = () => {
  return (
    <div
      className={`relative bg-primaryDark ${styles.paddingX} ${styles.paddingY}`}
    >
      {/* Blurred Background Circles */}
      <div className="w-[600px] h-[600px] hidden md:block absolute bottom-10 left-5 bg-primaryBlue rounded-full blur-[500px]"></div>
      <div className="w-[600px] h-[600px] hidden md:block  absolute top-0 right-5 bg-primaryPurple rounded-full blur-[500px]"></div>
      {/* hero-image  */}
      <img
        src={hero_image}
        alt="Hero"
        className="object-contain w-1/2 absolute bottom-0 right-0 bg-hero-image-gradient"
      />

      {/* Content Wrapper */}
      <div className={`relative flex flex-col z-10 ${styles.boxWidth}`}>
        {/* Text Section */}
        <div className="text-white w-full md:w-[70%] lg:w-[50%] space-y-3">
          <h1 className="text-3xl sm:text-[4rem] sm:leading-[80px] font-bold sm:tracking-[5%]">
            Let’s Dive in
            <br /> <span className="text-primaryOrange">Music</span> World
          </h1>
          <p className="text-textGrey sm:text-[24px] leading-10 tracking-[2%] font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra, phasellus imperdiet fringilla turpis lectus risus erat.
            Commodo purus, eu sed suspendisse fermentum.
          </p>
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

          <div className={`flex flex-col-reverse lg:flex-row space-x-2 md:space-x-11 justify-end items-center gap-7 lg:pl-[5%] mt-20`}>
            
            <img
              src={scroll}
              alt=""
              className="w-[60px] h-[60px] cursor-pointer"
            />
            <div className="flex  space-x-10 ">
              <CardWrapper>
                <HeroCard />
              </CardWrapper>
              <CardWrapper>
                <HeroCard />
              </CardWrapper>
              <CardWrapper>
                <HeroCard />
              </CardWrapper>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
