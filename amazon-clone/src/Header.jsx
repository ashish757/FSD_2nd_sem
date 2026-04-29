import './Header.css';
import logo from './assets/amazon.png';

function Header() {
  return (
    <div className="header_container">
      <div className="header">
        <div className="header_logo_container nav_border">
          <img className="header_logo" src={logo} alt="Amazon Logo" />
          <span className="header_logo_in">.in</span>
        </div>
        
        <div className="header_location nav_border">
          <span className="location_icon">📍</span>
          <div className="header_option">
            <span className="header_optionLineOne">Delivering to Gurugram 122002</span>
            <span className="header_optionLineTwo">Update location</span>
          </div>
        </div>
        
        <div className="header_search">
          <select className="header_searchDropdown">
            <option>All</option>
          </select>
          <input className="header_searchInput" type="text" placeholder="Search Amazon.in" />
          <div className="header_searchIconContainer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill="#333">
              <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/>
            </svg>
          </div>
        </div>
        
        <div className="header_nav">
          <div className="header_option nav_border">
            <span className="header_optionLineTwo">🇮🇳 EN ▾</span>
          </div>

          <div className="header_option nav_border">
            <span className="header_optionLineOne">Hello, sign in</span>
            <span className="header_optionLineTwo">Account & Lists ▾</span>
          </div>
          
          <div className="header_option nav_border">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          
          <div className="header_optionBasket nav_border">
            <span className="basket_icon">🛒</span>
            <span className="header_basketCount">0</span>
            <span className="header_basketText">Cart</span>
          </div>
        </div>
      </div>
      
      <div className="header_bottom">
        <div className="header_bottom_nav">
          <span className="nav_border">☰ All</span>
          <span className="nav_border">Fresh ▾</span>
          <span className="nav_border">MX Player</span>
          <span className="nav_border">Sell</span>
          <span className="nav_border">Bestsellers</span>
          <span className="nav_border">Mobiles</span>
          <span className="nav_border">Today's Deals</span>
          <span className="nav_border">Customer Service</span>
          <span className="nav_border">New Releases</span>
          <span className="nav_border">Prime ▾</span>
          <span className="nav_border">Amazon Pay</span>
        </div>
      </div>
    </div>
  )
}

export default Header
