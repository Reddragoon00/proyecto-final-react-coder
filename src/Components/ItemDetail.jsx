import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

export default function ItemDetail({product}) {
  return (
    <div className='col-md-3'>
        <Card>
            <Card.Img variant = 'top' src = {product.img} alt = {product.name} style={{ width: '30rem' }}/>
            <Card.Body>
                <Card.Title>
                    {product.name}
                </Card.Title>
                <Card.Text>
                    $ {product.price}<br/>
                    Stock: {product.stock}
                </Card.Text>
            </Card.Body>
            <ItemCount product={product}/>
        </Card>
    </div> 
  )
}
