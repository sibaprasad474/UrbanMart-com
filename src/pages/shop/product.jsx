import React, { useContext, useState } from "react";
import { ShopContext,ShopContextProvider } from "../../Context/ShopContext";
import { products } from "../../Products";
function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const {addToCart,cartItems}=useContext(ShopContext);

  const cartItemsAmount=cartItems[id];
  return (
    <div className="product">
      <div className="description">
        <img src={productImage} alt="" />
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={(e)=>addToCart(id)}>Add to Cart{cartItemsAmount>0&&<>({cartItemsAmount})</>}</button>
      </div>
    </div>
  );
}

export default Product;

