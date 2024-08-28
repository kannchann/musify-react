// import React, { useState } from 'react';

// const ThemeToggle = () => {
//     const [darkMode, setDarkMode] = useState(false);
//     function toggleTheme() {
//         changeTheme(!darkMode);
//         setDarkMode((prev) => !prev);
//     }
//     return (
//         <div
//             className="w-12 rounded-full h-6 bg-contrast cursor-pointer flex items-center px-1/2 relative select-none"
//             // onClick={toggleTheme}
//         >
//             <div
//                 className={`${
//                     darkMode ? 'translate-x-6' : 'translate-x-0'
//                 } h-5 w-5 bg-secondary rounded-full transform transition-transform duration-200`}
//             />

//             <span
//                 className={`text-center text-sm flex-shrink ml-auto absolute top-50 -translate-y-1/2 ${
//                     darkMode ? 'ml-1/4 left-0' : 'right-0 mr-1/4'
//                 }`}
//                 role="img"
//                 aria-label="theme emoji"
//             >
//                 {darkMode ? '🌜' : '🌞'}
//             </span>
//         </div>
//     );
// };

// export default ThemeToggle;