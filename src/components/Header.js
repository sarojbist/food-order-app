import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnLog, setBtnLog] = useState(true);
  return (
    <>
      {console.log("Rendered header")}
      {/* react refreshes this whole header component when we change anything in the state variable  */}
      <div className="header">
        <div className="head-logo">
          <img src={LOGO_URL} alt="website logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>
              <button className={`border px-2 py-1  ${btnLog ? "bg-lime-600" : "bg-red-400"}`} onClick={() => setBtnLog(!btnLog)}>{btnLog ? "Log In" : "Log Out"}</button>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}
export default Header;