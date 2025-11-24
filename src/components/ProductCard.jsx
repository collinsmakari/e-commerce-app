import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-img" />
      </Link>

      <div className="product-body">
        <h3>{product.title}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="desc">{product.description}</p>

        <div className="actions">
          <button onClick={() => addToCart(product)}>Add to cart</button>
          <Link to={`/product/${product.id}`} className="details-link">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
