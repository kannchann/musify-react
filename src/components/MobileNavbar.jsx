import React, { useState } from 'react';
import { logo, hamburger, close } from '../assets';
import { navLinks } from '../constants';

const MobileNavbar = () => {
    const [linkToggle , setLinkToggle] = useState(false);
  return (
        <div className='sm:hidden flex flex-1 justify-start items-center'>
            <img src={linkToggle ? close : hamburger} alt="" className='object-contain w-[28px] h-[28px]' onClick={()=> setLinkToggle((prev) => (!prev))} />

            <div className={`${linkToggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 left-0 mx-4 min-w-[140px] rounded-xl sidebar `}>
                <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                    {navLinks.map((navLink,index) => (
                        <li key={navLink.id} className={`cursor-pointer text-white text-base md:text-lg `}>{navLink.title}</li>
                    ))}
                </ul>
            </div>
      </div>
  )
}

export default MobileNavbar