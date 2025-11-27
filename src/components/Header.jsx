import React from "react";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { totalItems } = useCart();

  //Setting up Fixed Header
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          MyShop
        </Link>
        <nav>
          <Link className="cart-home" to="/">
            Home
          </Link>
          <Link to="/cart" className="cart-link">
            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="badge">{totalItems}</span>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
