import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';
import App from './pages/App';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import AboutUs from './pages/AboutUs';
import './pages/App.css';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <footer className="footer">
            <p>&copy; 2024 Paradise Nursery. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
