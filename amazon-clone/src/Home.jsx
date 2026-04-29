import './Home.css';
import GridProduct from './GridProduct';
import Product from './Product';
import ProductCarousel from './ProductCarousel';
import banner from './assets/banner.jpg';

import i1 from './assets/product/i1.jpg';
import i2 from './assets/product/i2.jpg';
import i3 from './assets/product/i3.jpg';
import i4 from './assets/product/i4.jpg';
import i5 from './assets/product/i5.jpg';
import i6 from './assets/product/i6.jpg';
import i7 from './assets/product/i7.jpg';
import i8 from './assets/product/i8.jpg';
import p10 from './assets/product/10.jpg';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={banner} alt="" />

        <div className="home_row">
          <GridProduct 
            title="Appliances for your home | Up to 55% off"
            img1={i1} label1="Air conditioners"
            img2={i2} label2="Refrigerators"
            img3={i3} label3="Microwaves"
            img4={i4} label4="Washing machines"
          />
          
          <GridProduct 
            title="Starting ₹49 | Deals on home essentials"
            img1={i5} label1="Cleaning supplies"
            img2={i6} label2="Bathroom accessories"
            img3={i7} label3="Home tools"
            img4={i8} label4="Wallpapers"
          />

          <div className="home_card_simple">
            <div className="signIn_box">
              <h2>Sign in for your best experience</h2>
              <button>Sign in securely</button>
            </div>
            <div className="ad_box">
              <img src={p10} alt="ad" />
            </div>
          </div>
          
          <GridProduct 
            title="Continue shopping deals"
            img1={i2} label1="Notebooks"
            img2={i3} label2="Files"
            img3={i4} label3="Binders"
            img4={i5} label4="Folders"
          />
        </div>

        <ProductCarousel 
          title="Related to items you've viewed" 
          images={[i6, i7, i8, i1, i2, i3, i4, i5]} 
        />

        <div className="home_row">
          <Product
             id="1"
             title="Solo 2-D A4 Ring Binder File"
             price="199"
             image={i6}
             rating={4}
          />
          <Product
             id="2"
             title="Logitech Wireless Mouse"
             price="599"
             image={i7}
             rating={5}
          />
           <Product
             id="3"
             title="Samsung 24 inch IPS Monitor"
             price="8999"
             image={i8}
             rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
