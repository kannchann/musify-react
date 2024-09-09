import React, { useState } from "react";
import { Moon } from "../../assets";

function changeTheme(dark){
  const documentStyles = window.getComputedStyle(document.documentElement);
  const darkStyles = {
    primary: documentStyles.getPropertyValue('--primary-dark-background'),
    secondary: documentStyles.getPropertyValue('--primary-light-background'),
   
  }
  const lightStyles = {
    primary: documentStyles.getPropertyValue('--primary-light-background'),
    secondary: documentStyles.getPropertyValue('--primary-dark-background')
  }
  const theme = dark ? darkStyles : lightStyles;
  document.documentElement.style.setProperty('--primary-background', theme.primary);
  document.documentElement.style.setProperty('--secondary-background', theme.secondary);

}

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
    function toggleTheme() {
        changeTheme(!darkMode);
        setDarkMode((prev) => !prev);
    }

  return  <div
  className="w-12 rounded-full h-6 bg-secondary cursor-pointer flex items-center px-1 relative select-none"
  onClick={toggleTheme}
>
  <div
      className={`${
          darkMode ? 'translate-x-6 ' : 'translate-x-0'
      } h-4 w-4 bg-textGrey rounded-full transform transition-transform duration-200`}
  />

  <span
      className={`text-center text-sm flex-shrink ml-auto absolute top-[50%] -translate-y-1/2 ${
          darkMode ? 'ml-1 left-0' : 'right-0 mr-1'
      }`}
      role="img"
      aria-label="theme emoji"
  >
      {darkMode ? '🌜' : '🌞'}
  </span>
</div>
};

export default ThemeToggle;

