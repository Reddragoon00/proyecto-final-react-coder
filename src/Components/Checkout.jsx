import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { cartContext } from './CartContextComp';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Checkout() {
  const {totalAmount, cart, deleteAll} = useContext(cartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [orderID, setOrderID] = useState('');

  function endShopping(){
    const order = {
      buyer: {name, email, tel},
      totalAmount,
      cart,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    addDoc(ordersCollection, order).then(({id}) => {
      setOrderID(id);
      deleteAll();
    }) 

  }
  return (
    <>
    {orderID ? ('Gracias por confiar en nuestros servicios. Su ID de compra es : ' + orderID 
    ) : (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Label>Cellphone number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" onChange={(e) => setTel(e.target.value)} />
          </Form.Group>
        </Form>
      <Button variant="dark" onClick={endShopping}>
        END PURCHASE
      </Button>
      </div>
    )}

    </>
  )
}
