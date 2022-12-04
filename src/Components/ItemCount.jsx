import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { cartContext } from './CartContextComp';

export default function ItemCount({product}) {

    const [count, setCount] = useState(1);
    const [removeBttn, setremoveBttn] = useState(false);

    const {cart, addToCart} = useContext(cartContext);

    function sum(){
        if(count < product.stock){
            setCount(count + 1);
        }
    }

    function res(){
        if(count >= 2){
            setCount(count - 1);
        }
    }

    function onAdd(){
        addToCart(product, count);
        setremoveBttn(true);
    }

    useEffect(()=>{
        console.log(cart);
    }, [cart]);

  return (
    <div>
        <span style={{cursor: 'pointer'}} onClick={sum}>+</span>
        {count}
        <span style={{cursor: 'pointer'}} onClick={res}>-</span>
        <br />
        {removeBttn ? (
            <>
                Producto agregado al carrito! <br/>
                <div className="btn btn-dark">
                    <Link to ='/' style={{ textDecoration: 'none' }}>CONTINUE SHOPPING</Link>
                </div>
                <div className="btn btn-success">
                    <Link to ='/Checkout' style={{ textDecoration: 'none', color: 'black' }}>GO TO CHECKOUT</Link>
                </div>
            </>
            ) : (
            <Button variant= 'dark'onClick={onAdd}>ADD TO CART</Button>
        )}
    </div>
  )
}
