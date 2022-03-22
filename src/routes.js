import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutJSX from './pages/About';
import SignOrLogin from './components/Login';
import CartJSX from './pages/Cart';

const PAGES_URLS = () => {
  return(
    <Routes>
      <Route path='/' element={ <SignOrLogin /> } />
      <Route path='/pass-the-hat' element={ <PassTheHatJSX /> } />
      <Route path='/cart' element={ <CartJSX /> } />
      <Route path='/about' element={ <AboutJSX /> } />
    </Routes>
  )
}

export default PAGES_URLS;