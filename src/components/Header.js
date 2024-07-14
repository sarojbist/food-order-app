import { LOGO_URL } from "../utils/constants";

const Header = () => {

    return (
      <>
   
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
      <div className=" w-[100vw] py-[30px]">
      <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full bg-black flex flex-col justify-center items-center mx-auto box">
                                <h2 className="text-white font-bold text-xs">Starts From</h2>
                                <h2 className="text-orange-500 text-base sm:text-3xl font-bold">$200</h2>
                            </div>
      </div>
      </>
    )
  }
export default Header;