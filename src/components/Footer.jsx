import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">MyShop</h2>
          <p>Your trusted marketplace for quality products.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li>
              <Link className="quick-link" to="/cart">
                Products
              </Link>
            </li>
            <li>
              <Link className="quick-link" to="/cart">
                About Us
              </Link>
            </li>
            <li>
              <Link className="quick-link" to="/cart">
                Contact
              </Link>
            </li>
            <li>
              <Link className="quick-link" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping Info</li>
            <li>Returns & Refunds</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="socials">
            <span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </span>
            <span>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.tiktok.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-tiktok"></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MyShop. @by_Makari All Rights
        Reserved.
      </div>
    </footer>
  );
}
