import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggleSlider from "./ThemeToggleSlider";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          MyShop
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart <span className="badge">{totalItems}</span>
          </Link>
        </nav>
        {/* Theme Toggle Btn */}
        <ThemeToggleSlider />
      </div>
    </header>
  );
}
export default Header;
