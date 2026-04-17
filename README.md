# Paradise Nursery Shopping Application

A modern e-commerce web application for browsing and purchasing houseplants from Paradise Nursery.

## Project Overview

Paradise Nursery Shopping Application is a fully functional shopping cart system built with React and Redux. The application allows users to browse a diverse collection of plants organized by category, view detailed product information, add items to their cart, and manage their shopping experience seamlessly.

## Features

- **Landing Page**: Beautiful welcome screen with company branding and "Get Started" button
- **Product Catalog**: Browse plants organized by categories (Indoor Plants, Outdoor Plants, Succulents, Flowering Plants, Medicinal Plants, Decorative Plants)
- **Product Display**: Each plant includes thumbnail image, name, and price
- **Shopping Cart**: Manage cart items with quantity adjustment, item removal, and total cost calculation
- **Navigation**: Persistent navbar with Home, Plants, and Cart links
- **Cart Counter**: Real-time cart icon showing total number of items
- **Responsive Design**: User-friendly interface optimized for various screen sizes

## Technology Stack

- **Frontend**: React.js
- **State Management**: Redux
- **Styling**: CSS3
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductItem.jsx
├── pages/
│   ├── App.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   └── AboutUs.jsx
├── redux/
│   ├── CartSlice.jsx
│   └── Store.jsx
├── App.css
└── index.js
```

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-project.git
cd react-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Browse Plants**: Click "Get Started" on the landing page to view the product catalog
2. **Add to Cart**: Click "Add to Cart" button on any plant to add it to your shopping cart
3. **View Cart**: Click the cart icon in the navbar to view your shopping cart
4. **Manage Cart**: Adjust quantities, remove items, or clear your cart
5. **Checkout**: Click the checkout button (Coming Soon feature)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite

## Components

### Navbar
Persistent navigation component with links to Home, Plants, and Cart, plus a cart counter.

### ProductList
Displays plants organized by category with filtering and cart operations.

### CartItem
Shopping cart page showing selected items with quantity controls and pricing.

### AboutUs
Company information and mission statement page.

## Author

Paradise Nursery Development Team

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please visit our platform or contact our support team.