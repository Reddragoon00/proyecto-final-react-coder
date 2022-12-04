import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

export const cartContext = createContext();

export default function CartContextComp({children}) {
    
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);


  function addToCart(item, count){
    
    const copyCart = [...cart];

    let inCart = false;
    for (let i = 0; i < copyCart.length; i++) {
      if (copyCart[i].id == item.id){
        copyCart[i].count += count;
        inCart = true;
      }
    }

    if(!inCart){
      copyCart.push({...item, count});
    }

    setCart(copyCart);
  }

  function deleteFromCart(id){
    setCart(cart.filter(item=> item.id != id));
  }

  function deleteAll(){
    setCart([]);
  }


  useEffect(() =>{
    setTotalCount(cart.reduce((acc, item) => acc + item.count, 0));
    setTotalAmount(cart.reduce((acc, item) => acc + item.count * item.price, 0));
  }, [cart]);

  return (
    <cartContext.Provider value={{cart, addToCart, totalCount, totalAmount, deleteFromCart, deleteAll}}>
      {children}
    </cartContext.Provider>
  )
}
