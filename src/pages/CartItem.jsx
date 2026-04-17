import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeFromCart, incrementQuantity, decrementQuantity } from '../redux/CartSlice';
import Navbar from '../components/Navbar';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(state => state.cart);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleCheckout = () => {
    alert('Check out functionality coming soon! 🎉');
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Start shopping to add plants to your cart!</p>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>
                      Category: {item.category}
                    </p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecrement(item.id)}
                    >
                      −
                    </button>
                    <div className="quantity-display">{item.quantity}</div>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    ${item.totalPrice.toFixed(2)}
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div className="summary-row">
                <span>Tax:</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-actions">
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
              <Link to="/products" className="continue-btn">
                ← Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
