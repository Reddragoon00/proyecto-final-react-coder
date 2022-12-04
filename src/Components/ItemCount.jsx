import React, { useState } from 'react'

export default function ItemCount({item}) {

    const [count, setCount] = useState(1);
    function sum(){
        setCount(count + 1);
    }

    function res(){
        if(count >= 2){
            setCount(count - 1);
        }
    }
  return (
    <div>
        <span style={{cursor: 'pointer'}} onClick={sum}>+</span>
        {count}
        <span style={{cursor: 'pointer'}} onClick={res}>-</span>
    </div>
  )
}
