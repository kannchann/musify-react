import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  type = 'button',
  variant = 'primary',
  btnText = 'Submit',
  size = 'medium',
  className = '',
  iconsrc = '',
  link = "",
}) => {
  // Memoized variant classes to avoid unnecessary recalculations
  const variantClass = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'border-primaryOrange text-white bg-primaryOrange border-box-shadow hover:bg-none hover:border-orange-600';
      case 'secondary':
        return 'border-primaryOrange text-primaryOrange hover:bg-primaryOrange hover:text-white';
      default:
        return '';
    }
  }, [variant]);

  // Memoized size classes to adjust padding and font size
  const sizeClass = useMemo(() => {
    switch (size) {
      case 'large':
        return 'px-4 py-3 ';
      case 'medium':
        return 'px-20 py-2';
      case 'small':
        return 'px-8 py-2 ';
      default:
        return '';
    }
  }, [size]);

  // Combine all classes into a single className string
  const buttonClasses = `border font-figTree rounded-lg transition ease-in-out delay-150 text-sm   ${variantClass} ${sizeClass} ${className}`;

  const renderIcon = iconsrc ? (
    <span className={`flex relative`}>
      {typeof iconsrc === 'string' ? <img src={iconsrc} alt="icon" className="w-4 h-4 absolute left-3 top-3" /> : iconsrc}
    </span>
  ) : null;

  return (
    <div>
     {renderIcon}
     <button type={type} className={buttonClasses}>
      <Link to={`/${link}`}>
      {btnText}
      </Link>
     
    </button>
    </div>
   
  );
};

export default Button;
