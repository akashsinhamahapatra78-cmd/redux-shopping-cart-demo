import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
  const cartItems = useSelector(state => state.cart)

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const calculateItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <div className="cart">
      <h2>📑 Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>😳 Your cart is empty!</p>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-summary">
            <h3>📄 Order Summary</h3>
            <div className="summary-item">
              <span>Total Items:</span>
              <strong>{calculateItemCount()}</strong>
            </div>
            <div className="summary-item">
              <span>Subtotal:</span>
              <strong>${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</strong>
            </div>
            <div className="summary-item">
              <span>Tax (10%):</span>
              <strong>${(calculateTotal() * 0.1).toFixed(2)}</strong>
            </div>
            <div className="summary-item total">
              <span>Total Price:</span>
              <strong>${(calculateTotal() * 1.1).toFixed(2)}</strong>
            </div>
            <button className="checkout-btn">🛍️ Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
