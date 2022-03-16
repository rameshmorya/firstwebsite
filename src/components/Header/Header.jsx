import React from "react";
import './Header.css';
import { useStickyHeader } from "react-use-sticky-header";
// import Navbar from "../Navbar";
// import { Link } from "react-router-dom";


const Header = () => {
  const [setHeaderRef] = useStickyHeader(50, { headerDetached: 'header--detached-custom' });
  return (
    <>
    <div className="headerAddressBox">
        <div className="container">
            <div className="flexRowBox">
                <div className="cl6">
                    <ul className="headerContactBox">  
                        <li><a href="mailto:support@example.com"><em className="icon-envelope"></em>support@example.com</a></li>
                        <li><a href="tel:+91 9999 44 9981"><em className="icon-phone-alt"></em>+91 9999 44 9981</a></li>
                    </ul>
                </div>
                <div className="cl6">
                    <ul className="headerSocialBox">
                    {/* <li><Link to="#"><em className="icon-facebook-f"></em></Link></li>
                    <li><Link to="#"><em className="icon-twitter"></em></Link></li>
                    <li><Link to="#"><em className="icon-instagram"></em></Link></li>
                    <li><Link to="#"><em className="icon-youtube"></em></Link></li>
                    <li><Link to="#"><em className="icon-linkedin-in"></em></Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
      <header ref={setHeaderRef}>
        <div className="headerContainer">
          <div className="container">
              <div className="headerFlexBox">
                <div className="logoBox">
                <a href="/">
                  SATYOGA
              </a>
                </div>
                {/* <Navbar/> */}
              </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;