import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <>
      <Navbar className='navbar-style' bg="dark" variant="dark">
        <Container className="navbar-style">
          <div>
            <img className = "img" src={require('../Images/CTB-Logo.png')} />
            <Navbar.Brand href="#home">Celulares TodoBusca</Navbar.Brand>
          </div>
          <div>
            <Nav className="navbar-style btn-group">
              <Link to="/" className='btn btn-dark'>
                Home
              </Link>
              <Link to="/category/celular" className='btn btn-dark'>
                Cellphones
              </Link>
              <Link to="/category/accesorio" className='btn btn-dark'>
                Accesories
              </Link>
              <Link to="/Checkout" className='btn btn-dark'>
                Checkout
              </Link>
            </Nav>
          </div>
            { <CartWidget />}
        </Container>
      </Navbar>
      <br />
    </>
  );
}

/* import React from 'react'

export default function NavigationBar() {
  return (
    <div>Link 1 / Link 2 / Link 3</div>
  )
}
 */