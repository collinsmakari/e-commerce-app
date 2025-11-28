import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart({ onClose }) {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Background overlay */}
      <div className="cart-overlay" onClick={onClose}></div>

      {/* Popup container */}
      <div className="cart-modal">
        <button className="close-btn" onClick={onClose}>
          x
        </button>

        {items.length === 0 ? (
          <div className="your-cart">
            <h2>Your Cart</h2>
            <p>No items in cart.</p>
            <Link to="/" onClick={onClose}>
              Back to products
            </Link>
          </div>
        ) : (
          <div className="your-cart">
            <h2>Your Cart ({totalItems})</h2>

            <div className="cart-list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="cart-summary">
              <p>Total: Ksh.{totalPrice.toFixed(2)}</p>
              <button onClick={() => alert("Proceed to checkout (stub)")}>
                Checkout
              </button>
              <button onClick={clearCart} className="btn-clear">
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
