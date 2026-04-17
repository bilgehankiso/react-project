import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from '../components/Navbar';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = {
    'Indoor Plants': [
      { id: 1, name: 'Monstera Deliciosa', price: 45.99, image: 'https://images.unsplash.com/photo-1563241527-3004b1eec4ca?w=300&h=300&fit=crop', category: 'Indoor Plants' },
      { id: 2, name: 'Pothos (Golden Vine)', price: 22.99, image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop', category: 'Indoor Plants' },
      { id: 3, name: 'Snake Plant', price: 35.99, image: 'https://images.unsplash.com/photo-1612896671428-bdeed0b17882?w=300&h=300&fit=crop', category: 'Indoor Plants' },
      { id: 4, name: 'Peace Lily', price: 38.99, image: 'https://images.unsplash.com/photo-1597848212624-d2c27e1b3c16?w=300&h=300&fit=crop', category: 'Indoor Plants' },
      { id: 5, name: 'Rubber Plant', price: 52.99, image: 'https://images.unsplash.com/photo-1585202898657-05eca60daec9?w=300&h=300&fit=crop', category: 'Indoor Plants' },
      { id: 6, name: 'Fiddle Leaf Fig', price: 62.99, image: 'https://images.unsplash.com/photo-1585202898682-7b47e24ce11a?w=300&h=300&fit=crop', category: 'Indoor Plants' },
    ],
    'Outdoor Plants': [
      { id: 7, name: 'Hibiscus', price: 35.99, image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=300&h=300&fit=crop', category: 'Outdoor Plants' },
      { id: 8, name: 'Azalea', price: 29.99, image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop', category: 'Outdoor Plants' },
      { id: 9, name: 'Bougainvillea', price: 32.99, image: 'https://images.unsplash.com/photo-1598894410127-ca49ec8eacda?w=300&h=300&fit=crop', category: 'Outdoor Plants' },
      { id: 10, name: 'Hydrangea', price: 38.99, image: 'https://images.unsplash.com/photo-1571863533956-aeb466b7f847?w=300&h=300&fit=crop', category: 'Outdoor Plants' },
      { id: 11, name: 'Rose Bush', price: 45.99, image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop', category: 'Outdoor Plants' },
      { id: 12, name: 'Jasmine', price: 28.99, image: 'https://images.unsplash.com/photo-1600547343868-57019e53d87f?w=300&h=300&fit=crop', category: 'Outdoor Plants' },
    ],
    'Succulents': [
      { id: 13, name: 'Aloe Vera', price: 18.99, image: 'https://images.unsplash.com/photo-1585314295506-3b0c4f96b20c?w=300&h=300&fit=crop', category: 'Succulents' },
      { id: 14, name: 'Jade Plant', price: 22.99, image: 'https://images.unsplash.com/photo-1616694342806-431e36512bd0?w=300&h=300&fit=crop', category: 'Succulents' },
      { id: 15, name: 'Echeveria', price: 16.99, image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b61?w=300&h=300&fit=crop', category: 'Succulents' },
      { id: 16, name: 'Cactus (Prickly Pear)', price: 14.99, image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=300&h=300&fit=crop', category: 'Succulents' },
      { id: 17, name: 'Haworthia', price: 15.99, image: 'https://images.unsplash.com/photo-1578908636434-a3e0d8b9b0a6?w=300&h=300&fit=crop', category: 'Succulents' },
      { id: 18, name: 'Sedum', price: 12.99, image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=300&h=300&fit=crop', category: 'Succulents' },
    ],
    'Flowering Plants': [
      { id: 19, name: 'Orchid', price: 55.99, image: 'https://images.unsplash.com/photo-1577666722873-12a650c61dcb?w=300&h=300&fit=crop', category: 'Flowering Plants' },
      { id: 20, name: 'Poinsettia', price: 32.99, image: 'https://images.unsplash.com/photo-1575763185298-0e7e3a43c2d3?w=300&h=300&fit=crop', category: 'Flowering Plants' },
      { id: 21, name: 'Chrysanthemum', price: 28.99, image: 'https://images.unsplash.com/photo-1578909695046-acb1b5f68b05?w=300&h=300&fit=crop', category: 'Flowering Plants' },
      { id: 22, name: 'Anthurium', price: 42.99, image: 'https://images.unsplash.com/photo-1587392575127-bae9a0c4c5d8?w=300&h=300&fit=crop', category: 'Flowering Plants' },
      { id: 23, name: 'Begonia', price: 24.99, image: 'https://images.unsplash.com/photo-1591168261297-1ba2ab5fb968?w=300&h=300&fit=crop', category: 'Flowering Plants' },
      { id: 24, name: 'Petunia', price: 19.99, image: 'https://images.unsplash.com/photo-1578909695046-acb1b5f68b05?w=300&h=300&fit=crop', category: 'Flowering Plants' },
    ],
    'Medicinal Plants': [
      { id: 25, name: 'Tulsi (Holy Basil)', price: 19.99, image: 'https://images.unsplash.com/photo-1585418744394-19b0ef5a4f0f?w=300&h=300&fit=crop', category: 'Medicinal Plants' },
      { id: 26, name: 'Mint', price: 15.99, image: 'https://images.unsplash.com/photo-1585418744394-19b0ef5a4f0f?w=300&h=300&fit=crop', category: 'Medicinal Plants' },
      { id: 27, name: 'Neem', price: 35.99, image: 'https://images.unsplash.com/photo-1603487005255-c5d2b89ef29b?w=300&h=300&fit=crop', category: 'Medicinal Plants' },
      { id: 28, name: 'Lavender', price: 27.99, image: 'https://images.unsplash.com/photo-1591188322130-e1c30d45b0f6?w=300&h=300&fit=crop', category: 'Medicinal Plants' },
      { id: 29, name: 'Thyme', price: 17.99, image: 'https://images.unsplash.com/photo-1585418744394-19b0ef5a4f0f?w=300&h=300&fit=crop', category: 'Medicinal Plants' },
      { id: 30, name: 'Rosemary', price: 22.99, image: 'https://images.unsplash.com/photo-1585418744394-19b0ef5a4f0f?w=300&h=300&fit=crop', category: 'Medicinal Plants' },
    ],
    'Decorative Plants': [
      { id: 31, name: 'Boston Fern', price: 34.99, image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=300&h=300&fit=crop', category: 'Decorative Plants' },
      { id: 32, name: 'Calathea', price: 48.99, image: 'https://images.unsplash.com/photo-1605773527852-d2b41576c8ba?w=300&h=300&fit=crop', category: 'Decorative Plants' },
      { id: 33, name: 'Prayer Plant', price: 38.99, image: 'https://images.unsplash.com/photo-1585514422652-c4c86a50e34e?w=300&h=300&fit=crop', category: 'Decorative Plants' },
      { id: 34, name: 'Bird of Paradise', price: 72.99, image: 'https://images.unsplash.com/photo-1605773527852-d2b41576c8ba?w=300&h=300&fit=crop', category: 'Decorative Plants' },
      { id: 35, name: 'Dracaena', price: 42.99, image: 'https://images.unsplash.com/photo-1591188322130-e1c30d45b0f6?w=300&h=300&fit=crop', category: 'Decorative Plants' },
      { id: 36, name: 'String of Pearls', price: 31.99, image: 'https://images.unsplash.com/photo-1603487005255-c5d2b89ef29b?w=300&h=300&fit=crop', category: 'Decorative Plants' },
    ],
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems(new Set([...addedItems, product.id]));
  };

  const isProductAdded = (productId) => {
    return addedItems.has(productId) || cartItems.some(item => item.id === productId);
  };

  return (
    <div>
      <Navbar />
      <div className="products-container">
        <div className="products-header">
          <h1>Paradise Nursery - Our Collection</h1>
          <p>Explore our wide variety of plants for every home and garden</p>
        </div>

        {Object.entries(products).map((category, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{category[0]}</h2>
            <div className="products-grid">
              {category[1].map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <button
                      className={`add-to-cart-btn ${isProductAdded(product.id) ? 'disabled' : ''}`}
                      onClick={() => handleAddToCart(product)}
                      disabled={isProductAdded(product.id)}
                    >
                      {isProductAdded(product.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
