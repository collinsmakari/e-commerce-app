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

      <div className="productcard-body">
        <h3 className="productcard-name">{product.name}</h3>
        <p className="productcard-price">Ksh.{product.price.toFixed(2)}</p>
        <p className="productcard-desc">{product.description}</p>

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
