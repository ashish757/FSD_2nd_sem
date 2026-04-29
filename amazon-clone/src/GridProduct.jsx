import './GridProduct.css';

function GridProduct({ title, img1, img2, img3, img4, label1, label2, label3, label4, linkText }) {
  return (
    <div className="gridProduct">
      <h2 className="gridProduct_title">{title}</h2>
      <div className="gridProduct_grid">
        <div className="gridProduct_item">
          <img src={img1} alt="" />
          <p>{label1}</p>
        </div>
        <div className="gridProduct_item">
          <img src={img2} alt="" />
          <p>{label2}</p>
        </div>
        <div className="gridProduct_item">
          <img src={img3} alt="" />
          <p>{label3}</p>
        </div>
        <div className="gridProduct_item">
          <img src={img4} alt="" />
          <p>{label4}</p>
        </div>
      </div>
      <a href="#" className="gridProduct_link">{linkText || "See more"}</a>
    </div>
  );
}

export default GridProduct;
