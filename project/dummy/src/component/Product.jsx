import React from 'react'
import '../component/product.css'

export const Product = ({product}) => {
  const productname=product.name.length>20? product.name.substring(0,20)+"..":product.name
  return (
    <div className="product">
      
      <div className="product-img">
        <img src={product.pic} alt={product.name}/>
      </div>

      <div className="product-detail">
        <h3>{productname}</h3>
        <p>Price Rs: {product.amt}</p>
        <button>Add to cart</button>
      </div>

    </div>
  )
}
