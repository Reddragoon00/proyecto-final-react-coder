import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
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
  );
}

export default App;
