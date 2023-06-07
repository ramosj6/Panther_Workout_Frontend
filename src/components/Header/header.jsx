import React from 'react';
import "./header.css";
import Logo from "../../imgs/workout-logo.jpg";

const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header;