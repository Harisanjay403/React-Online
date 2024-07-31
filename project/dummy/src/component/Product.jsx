import React from 'react'
import '../component/product.css'

export const Product = ({product, cart, setCart}) => {
  const productname=product.name.length>20? product.name.substring(0,20)+"..":product.name
   
  const addCart=()=>{
    setCart([...cart,product])
  }

  const removeCart = () =>{
    cart.filter((c)=>c.id !== product.id)
  }
  return (
    <div className="product">
      
      <div className="product-img">
        <img src={product.pic} alt={product.name}/>
      </div>

      <div className="product-detail">
        <h3>{productname}</h3>
        <p>Price Rs: {product.amt}</p>
        
        {
          cart.includes(product)?<button className='btnremove' onClick={removeCart}>Remove from cart</button>:<button onClick={addCart}>Add to cart</button>
        }
      </div>

    </div>
  )
}
