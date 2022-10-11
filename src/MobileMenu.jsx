import React from 'react'
import './mobilemenu.css';
import { Link } from 'react-router-dom';
import NavOptions from './NavOptions';



function MobileMenu({display}) {
    
    // console.log(display,'menucom');
    return (
        <div className="mobile-menu" style={{display:display}}>
      <Link to="/login"className="header-link mobile-menu-link">
      <NavOptions line1={"Hello, shubham"}
      line2={"Sign out"}/>
      </Link>
      <Link className="header-link mobile-menu-link">
      <NavOptions line1={"Returns"}
      line2={"& Orders"}/>
      </Link>
      <Link className="header-link mobile-menu-link">
      <NavOptions line1={"Your"}
      line2={"Prime"}/>
      </Link>
        </div>
    )
}

export default MobileMenu;
