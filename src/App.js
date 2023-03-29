import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

const App = () => {
  return (
    <div className=''> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>

    <Footer/>
      
      
    </div>
  );
};

export default App;