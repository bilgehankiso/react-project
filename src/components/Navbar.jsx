import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { totalQuantity } = useSelector(state => state.cart);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        🌿 Paradise Nursery
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Plants</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <div className="cart-icon-container">
            <Link to="/cart">🛒</Link>
            {totalQuantity > 0 && (
              <span className="cart-count">{totalQuantity}</span>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
