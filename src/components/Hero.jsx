import React from 'react';
import { cartIcon, hero_image } from '../assets';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div className='flex relative'>
      <div className='text-white w-1/2 h-[100vh]'>
        <h1 className='text-[5rem] leading-[100px] font-bold tracking-[5%]'>Let’s Dive in 
        <span className='text-primaryOrange'> Music</span> World</h1>
        <p className='text-textGrey text-[32px] leading-10 tracking-[2%] font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, phasellus imperdiet fringilla turpis lectus risus erat. Commodo purus, eu sed suspendisse fermentum  </p>
        <div className='flex gap-2'>
          <Button btnText='Shop now' variant='primary' size='small' />
          <Button btnText='Add to Cart' variant='secondary' size='small' iconsrc={cartIcon} />
        </div>
        <div>
          
        </div>
  
      </div>
      <img src={hero_image} alt="" className='object-contain w-1/2  absolute right-0 -top-[500px]' />
     
    </div>
  )
}

export default Hero;