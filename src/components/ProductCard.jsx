function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="product-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
