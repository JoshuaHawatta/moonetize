import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutJSX from './pages/About';
import HomeJSX from './pages/Home';
import CartJSX from './pages/Cart';
import PassTheHatJSX from './pages/PassTheHat';

const PAGES_URLS = () => {
  return(
    <Routes>
      <Route path='/' element={ <HomeJSX /> } />
      <Route path='/pass-the-hat' element={ <PassTheHatJSX /> } />
      <Route path='/cart' element={ <CartJSX /> } />
      <Route path='/about' element={ <AboutJSX /> } />
    </Routes>
  )
}

export default PAGES_URLS;