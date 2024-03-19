import React from 'react'
import './cart.css';
function CartItems(props) {
    const { id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <button className='addToCartBttn'>Proceed</button>
        </div>
        {console.log(props.id)}
    </div>
  )
}

export default CartItems