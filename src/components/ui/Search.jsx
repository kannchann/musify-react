import React from 'react'
import { searchIcon } from '../../assets'
import { useState } from 'react'

const Search = ({theme}) => {
  return (
    <button>
       <img src={searchIcon} alt="" className={` ${theme ? 'invert':''} w-[24px] h-[24px] cursor-pointer`}/>
    </button>

  )
} 

export default Search