import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import NavOptions from "./NavOptions";
import MobileMenu from "./MobileMenu";

function Header() {
  const [{ basket }] = useStateValue();
  // console.log(basket);

  // using usestate for the mobile menu to pass-on the display style for toggling the open close of the mobil
  // menu when the hamburger menu is clicked.
  const [display, setDisplay] = useState("none");

  function handleDisplay() {
    display == "none" ? setDisplay("block") : setDisplay("none");
    // console.log(display);
  }

// was trying to hide mobile menu on window resize. have to work on this
  // function hideDisplay(e) {
  //   setDisplay(e);
  // }
  // useEffect(() => {
  //   hideDisplay("none");
  // }, [wide]);


  return (
    <nav className="header">
      <Link to="/">
        <img className="header-logo" src="/images/amazon-logo.png" alt="" />
      </Link>
      <Link className="header-link">
        <NavOptions
          line1={"Address"}
          line2={
            <i class="fas fa-map-marker-alt">
              <span style={{ fontFamily: "Roboto" }}>Set your location</span>
            </i>
          }
        />
      </Link>
      <div className="header-search">
        <input type="text" className="search-box" />
        <i class="fas fa-search"></i>
      </div>

      <div className="header-nav">
        <Link to="/login" className="header-link">
          <NavOptions line1={"Hello, shubham"} line2={"Sign out"} />
        </Link>
        <Link className="header-link">
          <NavOptions line1={"Returns"} line2={"& Orders"} />
        </Link>
        <Link className="header-link">
          <NavOptions line1={"Your"} line2={"Prime"} />
        </Link>
        <i onClick={handleDisplay} class="fas fa-2x fa-bars menu-bar"></i>

        <Link to="/checkout" className="header-link basket">
          <div className="header-basket">
            <i class="fas fa-shopping-cart"></i>
            <span>{basket?.length}</span>
          </div>
        </Link>
        <MobileMenu display={display} />
      </div>
    </nav>
  );
}

export default Header;
