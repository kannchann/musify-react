import React from 'react'


const CardWrapper = ({cardColor, children}) => {
  return (
  <div className={`${cardColor} relative rounded-2xl border border-white cursor-pointer`}>
      {children}
    </div>
  )
}

export default CardWrapper;