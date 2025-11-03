import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'
import ProductCard from './ProductCard'
import './ProductList.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
    description: 'High-performance laptop for work and gaming',
    image: '💻'
  },
  {
    id: 2,
    name: 'Mouse',
    price: 25,
    description: 'Wireless ergonomic mouse',
    image: '🖱️'
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 75,
    description: 'Mechanical keyboard with RGB lighting',
    image: '⌨️'
  },
  {
    id: 4,
    name: 'Monitor',
    price: 350,
    description: '4K Ultra HD 27-inch display',
    image: '🖥️'
  },
  {
    id: 5,
    name: 'Headphones',
    price: 150,
    description: 'Wireless noise-cancelling headphones',
    image: '🎧'
  },
  {
    id: 6,
    name: 'Webcam',
    price: 80,
    description: '1080p HD webcam for streaming',
    image: '📷'
  }
]

function ProductList() {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addItem(product))
  }

  return (
    <div className="product-list">
      <h2>📦 Available Products</h2>
      <div className="products-grid">
        {PRODUCTS.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
