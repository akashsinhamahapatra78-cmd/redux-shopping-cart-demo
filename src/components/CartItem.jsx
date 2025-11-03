import { useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../redux/cartSlice'

function CartItem({ item }) {
  const dispatch = useDispatch()

  const handleIncreaseQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
  }

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
    }
  }

  const handleRemove = () => {
    dispatch(removeItem(item.id))
  }

  const subtotal = (item.price * item.quantity).toFixed(2)

  return (
    <div className="cart-item">
      <div className="item-image">{item.image}</div>
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="item-quantity">
        <button onClick={handleDecreaseQuantity} className="qty-btn">-</button>
        <span className="qty-value">{item.quantity}</span>
        <button onClick={handleIncreaseQuantity} className="qty-btn">+</button>
      </div>
      <div className="item-subtotal">
        <p>Subtotal: <strong>${subtotal}</strong></p>
      </div>
      <button onClick={handleRemove} className="remove-btn">🗑️ Remove</button>
    </div>
  )
}

export default CartItem
