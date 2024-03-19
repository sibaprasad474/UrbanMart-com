import React from 'react'
import { products } from '../../Products'
import Product from './product'
import "./shop.css"
function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>UrbanMart.com</h1>
        </div>
        <div className="products">
        {products.map((product)=><Product data={product}/>)}
        </div>
    </div>
  )
}

export default Shop