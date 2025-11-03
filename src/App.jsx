import { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛍️ Redux Shopping Cart</h1>
        <button 
          className="cart-toggle-btn"
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? '📦 View Products' : '🛒 View Cart'}
        </button>
      </header>
      <main className="app-main">
        {showCart ? <Cart /> : <ProductList />}
      </main>
    </div>
  )
}

export default App
