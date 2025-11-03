# Redux Shopping Cart Demo 🛒

A comprehensive React application demonstrating Redux Toolkit for state management. This project showcases how to build a fully functional shopping cart with products, using modern Redux patterns and best practices.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Redux Implementation](#redux-implementation)
- [Components](#components)
- [Running the Application](#running-the-application)
- [Testing the Cart](#testing-the-cart)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- **Product Listing**: Display a complete list of available products with images, names, descriptions, and prices
- **Add to Cart**: Seamlessly add products to the shopping cart with a single click
- **Remove from Cart**: Easily remove unwanted items from the cart
- **Update Quantity**: Increase or decrease the quantity of items in the cart
- **Real-time Cart Summary**: Display total items, total price, and detailed item breakdown
- **Redux Toolkit State Management**: Centralized state management using Redux slices and actions
- **React-Redux Hooks**: Component connection using `useSelector` and `useDispatch`
- **Responsive Design**: Clean, user-friendly interface that works across devices
- **Persistent State Logic**: Cart state updates immediately reflect in the UI

## 🛠 Tech Stack

- **Frontend Framework**: React 18.x
- **State Management**: Redux Toolkit
- **React-Redux**: For connecting React components to Redux store
- **Build Tool**: Vite
- **Styling**: CSS3
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/akashsinhamahapatra78-cmd/redux-shopping-cart-demo.git
   cd redux-shopping-cart-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional dependencies**
   ```bash
   npm install redux @reduxjs/toolkit react-redux
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 📁 Project Structure

```
redux-shopping-cart-demo/
├── src/
│   ├── components/
│   │   ├── ProductList.jsx       # Displays available products
│   │   ├── Cart.jsx              # Shopping cart display
│   │   ├── ProductCard.jsx       # Individual product card
│   │   └── CartItem.jsx          # Individual cart item
│   ├── redux/
│   │   ├── store.js              # Redux store configuration
│   │   └── cartSlice.js          # Cart reducer with actions
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Application styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
├── public/
│   └── vite.svg
├── package.json                  # Project dependencies
├── .gitignore                    # Git ignore file
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

## 🚀 Usage

### Adding Items to Cart

1. Browse the Product List component
2. Click the "Add to Cart" button on any product
3. The item is immediately added to your cart
4. The cart summary updates in real-time

### Managing Cart Items

- **Increase Quantity**: Click the "+" button next to the item
- **Decrease Quantity**: Click the "-" button next to the item
- **Remove Item**: Click the "Remove" button to delete the item from cart

### Viewing Cart Summary

- View total number of items in the cart
- See the total price calculation
- Check individual item details (name, price, quantity)

## 🔄 Redux Implementation

### Redux Store (`src/redux/store.js`)

```javascript
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
```

### Cart Slice (`src/redux/cartSlice.js`)

The cart slice defines:

- **Initial State**: Empty cart array
- **Actions**:
  - `addItem`: Adds a product to the cart or increments quantity if exists
  - `removeItem`: Removes an item from the cart
  - `updateQuantity`: Updates the quantity of a specific cart item
  - `clearCart`: Empties the entire cart

```javascript
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // Implementation
    },
    removeItem: (state, action) => {
      // Implementation
    },
    updateQuantity: (state, action) => {
      // Implementation
    },
    clearCart: (state) => {
      // Implementation
    },
  },
});
```

## 🧩 Components

### ProductList.jsx
- Fetches and displays all available products
- Uses `useDispatch` to dispatch add-to-cart actions
- Renders ProductCard components

### Cart.jsx
- Displays all items in the shopping cart
- Shows cart summary (total items, total price)
- Uses `useSelector` to access cart state from Redux
- Renders CartItem components

### ProductCard.jsx
- Individual product display component
- Shows product image, name, description, price
- Contains "Add to Cart" button

### CartItem.jsx
- Individual cart item display
- Quantity control buttons (increase/decrease)
- Remove button
- Shows subtotal for each item

## ▶️ Running the Application

### Development Mode
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Build for Production
```bash
npm run build
```
Creates an optimized production build.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally.

## 🧪 Testing the Cart

### Test Case 1: Add Items
1. Open the application
2. Click "Add to Cart" on multiple products
3. ✅ Verify: Items appear in cart, cart count increases

### Test Case 2: Update Quantity
1. Add an item to cart
2. Click the "+" button to increase quantity
3. Click the "-" button to decrease quantity
4. ✅ Verify: Quantity updates, total price recalculates

### Test Case 3: Remove Items
1. Add items to cart
2. Click "Remove" on an item
3. ✅ Verify: Item disappears from cart, totals update

### Test Case 4: Duplicate Items
1. Add the same product twice
2. ✅ Verify: Quantity increases instead of creating duplicate entry

### Test Case 5: Empty Cart
1. Remove all items from cart
2. ✅ Verify: Cart displays "Your cart is empty" message

## 📝 Sample Product Data

The application comes with sample products:

```javascript
[
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
    description: 'High-performance laptop for work and gaming',
  },
  {
    id: 2,
    name: 'Mouse',
    price: 25,
    description: 'Wireless ergonomic mouse',
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 75,
    description: 'Mechanical keyboard with RGB lighting',
  },
  // ... more products
]
```

## 🎓 Learning Outcomes

By working through this project, you'll learn:

1. **Redux Fundamentals**: Understanding slices, actions, and reducers
2. **Redux Toolkit**: Modern Redux pattern with less boilerplate
3. **State Management**: Managing complex application state globally
4. **React-Redux Integration**: Connecting components using hooks
5. **useSelector Hook**: Accessing Redux state in components
6. **useDispatch Hook**: Dispatching actions from components
7. **Immutable State Updates**: Redux enforces immutability principles
8. **Component Architecture**: Building reusable, connected components

## 🔧 Troubleshooting

### Issue: "Cannot find module 'redux'"
**Solution**: Run `npm install redux @reduxjs/toolkit react-redux`

### Issue: Cart not updating
**Solution**: 
- Ensure components are wrapped with Redux Provider in main.jsx
- Verify that useSelector hook is properly accessing the cart state
- Check that actions are correctly dispatched

### Issue: Port 5173 already in use
**Solution**: 
```bash
npm run dev -- --port 3000
```
Or kill the process using the port.

### Issue: Hot reload not working
**Solution**: 
- Restart the development server
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📚 Additional Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React-Redux Hooks API](https://react-redux.js.org/api/hooks)
- [Redux Best Practices](https://redux.js.org/style-guide/style-guide)
- [Vite Documentation](https://vitejs.dev/)

## 👨‍💻 Author

Created as a comprehensive learning resource for Redux Toolkit state management in React applications.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Submit pull requests
- Suggest improvements
- Share feedback

## ⭐ Support

If you found this helpful, please consider giving it a ⭐ star on GitHub!

---

**Happy coding! 🚀**
