import React, { useContext, useEffect } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { cartContext } from './CartContextComp'

export default function CartWidget() {
  
  const {cart, totalCount} = useContext(cartContext);
  return (
    <>
    <Link to="/Cart" className='btn btn-dark'>
      <BsCart4 className='logoCart' />
      {totalCount}
    </Link>
    </>
  )
}
