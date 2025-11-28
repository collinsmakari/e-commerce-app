import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { ThemeContext } from "./context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  const { theme } = useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);

  const closeCart = () => {
    setShowCart(false);
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.getItem("theme") || "light";
  }, [theme]);

  return (
    <div className="app">
      <ScrollToTop />
      <Header showCart={showCart} setShowCart={setShowCart} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      {/* Show popup cart */}
      {showCart && <Cart onClose={closeCart} />}

      {/* Hide footer when cart popup is active */}
      {!showCart && <Footer />}
    </div>
  );
}

export default App;
