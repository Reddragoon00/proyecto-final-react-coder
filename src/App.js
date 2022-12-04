import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/NavigationBar';
import ItemListContainer from './Components/ItemListContainer';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartContextComp from './Components/CartContextComp';



export default function App() {
  

  return (
    <CartContextComp>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:CategoryID' element={<ItemListContainer />} />
              <Route path='/item/:itemID' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
      </CartContextComp>
  );
}