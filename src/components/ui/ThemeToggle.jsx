import React, { useState,useEffect } from "react";
import { Moon } from "../../assets";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
 
  const changeTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
   
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return <button onClick={changeTheme} className="bg-black rounded-full  flex justify-between items-center px-1">
    
    
    <img src={Moon} alt="" className="w-[25px] h[25px] object-contain"/>
    <div className="w-5 h-5 bg-gray-500 rounded-full "></div>
  </button>;
};

export default ThemeToggle;

