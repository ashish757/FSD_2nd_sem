import './Product.css'

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info">
        <p className="product_title">{title}</p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p className="product_price">
          <small>₹</small>
          {price}
        </p>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
