import React, { useContext } from 'react'
import { cartContext } from './CartContextComp'
import { IoMdRemoveCircle } from 'react-icons/io'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Cart() {

const {cart, totalCount, totalAmount, deleteFromCart} = useContext(cartContext);
  return (
  <>
    {cart.map((item) =>(
        <div key={item.id}>
          {item.name + " " + item.count}
          <span onClick={()=>deleteFromCart(item.id)}>
            <IoMdRemoveCircle/>
          </span>
        </div>
    ))}
    <div>
      <br />
      You have in cart: {totalCount} <br /> Total amount to pay: ${totalAmount}
    </div>
    <Link to="/Checkout" className='btn btn-dark'>
      <Button variant= 'dark'>GO TO CHECKOUT</Button>
    </Link>
  </>
  )
}
