import React from "react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-img" />
      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>Ksh.{item.price.toFixed(2)}</p>
        <div className="qty-controls">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      </div>

      <div className="cart-actions">
        <p>Sub: Ksh.{(item.qty * item.price).toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id)} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
}
