import React from 'react'
import './App.css'
import { Header } from './component/Header';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './component/Home';
import { Cart } from './component/Cart';
export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
    
    </>
 )
}

export default App