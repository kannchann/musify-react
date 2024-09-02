import React from 'react'


const CardWrapper = (props) => {
  return (
    <div className='hero-card-gradient relative rounded-2xl border border-white cursor-pointer'>
      {props.children}

    </div>
  )
}

export default CardWrapper;