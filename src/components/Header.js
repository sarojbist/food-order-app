import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div  className="header">
        <div className="head-logo">
  <img src={LOGO_URL} alt="website logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }
export default Header;