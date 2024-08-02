import React, { createContext } from 'react'
import './App.css'
import { Header } from './component/Header';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './component/Home';
import { Viewcart } from './component/Viewcart.jsx';
import { useState } from 'react';

export const cartContext = createContext()

export const App = () => {
  const [cart,setCart]=useState([])

  

  return (
    <>
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Viewcart />} />
        </Routes>
      </div>
    </BrowserRouter>

    </cartContext.Provider>
    
    
    </>
 )
}

export default App