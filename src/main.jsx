import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import ThemeContext from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);
