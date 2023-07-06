import React from 'react';
import "./reasons.css";
import { CheckCircle } from "@phosphor-icons/react";

import img1 from "../../imgs/img1.jpg";
import img2 from "../../imgs/img2.jpg";
import img3 from "../../imgs/img3.jpg";
import img4 from "../../imgs/img4.jpg";

import Adidas from "../../imgs/adidas.png";
import NewBalance from "../../imgs/nb.png";
import Nike from "../../imgs/nike.png";


const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className='left-r'>
            <img src={img1} alt="" />
            <img src={img4} alt="" />
            <img src={img3} alt="" />
            <img src={img2} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>

            <div className='details-r'>
                <div>
                    <CheckCircle size={32}/>
                    <span>OVER 140+ EXPERT COACHES</span>
                </div>
                <div>
                    <CheckCircle size={32}/>
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <CheckCircle size={32}/>
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <CheckCircle size={32}/>
                    <span>KEEP TRACK OF YOUR WORKOUTS</span>
                </div>
                <div>
                    <CheckCircle size={32}/>
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span style={{ color: "var(--gray)", fontWeight: "normal"}}>
                OUR PARTNERS
            </span>

            <div className="partners">
                <img src={NewBalance} alt="" />
                <img src={Adidas} alt="" />
                <img src={Nike} alt="" />
            </div>
        </div>
        <div className="blur blur-f"></div>
    </div>
  );
};

export default Reasons;