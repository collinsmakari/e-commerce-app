import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.title}
        className="product-img-large"
      />
      <div>
        <h2>{product.title}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}
