import React,{useState} from 'react'
import styles from '../style';
import { Link, useNavigate } from 'react-router-dom';
import { footerData } from '../constants';
import { GoogleLogo, InstaLogo, logo, TwitterLogo } from '../assets';
import { Button } from './ui';


export default function Footer() {
  let date = new Date;
  date = date.getFullYear();
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  const handleItemClick = (section, item) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${section}/${formattedItem}`);
  };

  return (
    <footer className={`bg-primaryPurple text-white ${styles.padding}`}>
        <div className={`flex flex-wrap justify-between ${styles.boxWidth}`}>


          {/* Logo and Newsletter */}
          <div className="w-full pl-[50%] md:pl-0 md:w-1/4 order-6 md:-order-1">
              <img src={logo} alt="Musify Logo" className=" w-[150px] md:w-[300px] h-auto" />
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerData).map(([key, items]) => (
            <div key={key} className="w-full md:w-1/4 mb-8">
              <h3
                className="text-lg font-semibold mb-4 cursor-pointer md:cursor-default"
                onClick={() => toggleSection(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <ul className={`space-y-2 ${activeSection === key || activeSection === '' ? 'block' : 'hidden md:block'}`}>
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => handleItemClick(key, item)}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className=" md:order-6 mb-8 w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>1800-102-0525</p>
            <p>Mon-Sun- 10AM-7PM</p>
            <h4 className=" text-lg font-semibold mt-4 mb-2">Manufactured by:</h4>
            <p>Harman International Industries, Inc.</p>
            <p>8500, Balboa Blvd,</p>
            <p>Northridge, CA 91329,USA</p>
            <h4 className="font-semibold mt-4 mb-2">Share on Social Media</h4>
            <div className="flex space-x-4">
              <img src={InstaLogo} alt="" />
              <img src={GoogleLogo} alt="" />
              <img src={TwitterLogo} alt="" />
            </div>
          </div>


          <div className='md:order-4 w-full md:w-1/2 flex flex-col justify-center '>
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className='font-bold tracking-wider'>Subscribe to Our Newsletter</label>
            <div className="flex gap-2 md:h-[38px] items-center flex-col md:flex-row"  >
            <input
              id='email'
                type="email"
                placeholder="Enter your mail id"
                className="bg-primaryPurple border  border-primaryOrange w-full  text-white p-2 rounded-md"
              />
              <Button size='small' btnText='Subscribe'/>

            </div>
            
            </form>
          </div>
        </div>
        

        {/* Copyright */}
        <div className=" pt-4 mt-8 text-center">
        <p>&copy; {date}.Musify.All Rights Reserved</p>
        </div>
    </footer>
  );
}