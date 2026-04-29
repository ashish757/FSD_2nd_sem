import './ProductCarousel.css';

function ProductCarousel({ title, images }) {
  return (
    <div className="productCarousel">
      <div className="productCarousel_title">
        <h2>{title}</h2>
        <a href="#">See all offers</a>
      </div>
      <div className="productCarousel_imageContainer">
        {images.map((img, index) => (
          <img key={index} className="productCarousel_image" src={img} alt="Product" />
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
