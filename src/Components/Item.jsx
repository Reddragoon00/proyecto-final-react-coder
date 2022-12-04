import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Item({product}) {
  return (
    <div>
        <div className='col-md-2'>
            <Card>
            <Card.Img variant = 'top' src = {product.img} alt = {product.name} style={{ width: '18rem' }}/>
            <Card.Body>
                <Card.Text>
                    id: {product.id}<br/>
                    name: {product.name}<br/>
                    $ {product.price}<br/>
                    Stock: {product.stock}
                </Card.Text>
                <div className="btn btn-dark">
                    <Link to ={'/item/' +product.id}>Ir al Item</Link>
                </div>
            </Card.Body>

            </Card>
        </div>
    </div>
  )
}

/*<div>
            <Card>
            <Card.Img variant = 'top' src = {product.img} alt = {product.name} />
            <Card.Body>
            <p>id: {product.id}</p>
            <p>name: {product.name}</p>
            <p>$ {product.price}</p> 
            <p>Stock: {product.stock}</p>
            </Card.Body>
            <img
            style = {{'height': '300px'}}

            alt = {product.name}
            />
            </Card>
 </div>
*/