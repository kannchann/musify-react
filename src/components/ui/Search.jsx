import React from 'react'
import { searchIcon } from '../../assets'
import { useState } from 'react'

const Search = () => {
  return (
    <button>
       <img src={searchIcon} alt="" className='w-[24px] h-[24px] cursor-pointer'/>
    </button>

  )
}

export default Search