import React from 'react'
import {products} from '../../../src/Products'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import CartItems from './CartItems'
function Cart() {
  const {cartItems}=useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {products.map((product)=>{
          if(cartItems[product.id]!=0){
            return <CartItems data={product}></CartItems>
          }
        })}
      </div>
    </div>
  )
}

export default Cart