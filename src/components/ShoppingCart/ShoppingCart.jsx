import React from "react";
import { WrapperShoppingCart } from "./ShoppingCart.styled";


const ShoppingCart = ({cart, sendOrder, totalPrice, discount, discountedPrice}) => {
  return (
    <WrapperShoppingCart>
      <div>
      <p className="title-order">Your Order:</p>
      <ul className="order-list">
        {cart.map((item) => (
          <li key={item.id}>
            <span>
              {item.name}
            </span>
            <span>{item.precio}</span>
          </li>
        ))}
      </ul>
      </div>
      <div>
        <p>Total price: ${totalPrice}</p>
        {discount > 0 && <p>Discount: {discount * 100}%</p>}
        <p>Discounted price: ${discountedPrice}</p>
        <button className="button-send" onClick={sendOrder}>Send Order</button>
      </div>
      
  </WrapperShoppingCart>
  );
};

export default ShoppingCart;
