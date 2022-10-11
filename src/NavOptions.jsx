import React from 'react';
import './Header.css';

function NavOptions(props){

    return <div className="header-nav-option">
    <span className="option-1">{props.line1}</span>
    <span className="option-2">{props.line2}</span>
    </div>
}

export default NavOptions;