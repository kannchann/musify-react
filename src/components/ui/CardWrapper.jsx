import React from 'react'


const CardWrapper = ({children}) => {
  return (
    <div className='hero-card-gradient relative rounded-2xl border text-white border-white cursor-pointer'>
      {children}

    </div>
  )
}

export default CardWrapper;