import React from 'react';
import './footer.css';
import Logo from "../../imgs/workout-logo.jpg";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <GithubLogo size={40} style={{cursor: "pointer", fill: "white"}}/>
                <InstagramLogo size={40} style={{cursor: "pointer", fill: "white"}}/>
                <LinkedinLogo size={40} style={{cursor: "pointer", fill: "white"}}/>
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;