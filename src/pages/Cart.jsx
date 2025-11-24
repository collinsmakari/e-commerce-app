import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>No items in cart.</p>
        <Link to="/">Back to products</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart ({totalItems})</h2>

      <div className="cart-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button onClick={() => alert("Proceed to checkout (stub)")}>
          Checkout
        </button>
        <button onClick={clearCart} className="btn-clear">
          Clear Cart
        </button>
      </div>
    </div>
  );
}
