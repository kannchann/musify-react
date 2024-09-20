import React from 'react'
import { cartIcon } from '../../assets';
import { Router, useNavigate } from 'react-router-dom';

const Cart = ({theme}) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate('/cart')}><img src={cartIcon} alt="" className={`${theme ? 'invert': ''} w-[24px] h-[24px] cursor-pointer`}/></div>
  )
}

export default Cart;