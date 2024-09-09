import React from 'react'
import { searchIcon } from '../../assets'
import { useState } from 'react'

const Search = () => {
  const [isActive, setActive] = useState(false)
  function handleClick(){
    setActive((prev) => !prev);

  }
  return (
    <div onClick={handleClick}>
       <img src={searchIcon} alt="" className='w-[24px] h-[24px] cursor-pointer'/>
       {/* {isActive ? <div className='text-white'>hi</div>: null} */}

    </div>
   
  )
}

export default Search