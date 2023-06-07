import React from 'react';
import "./hero.css";
import Header from '../Header/header';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            <div className="ad">
                <div>

                </div>
                <span>
                    Join JJEG. The #1 workout club in the US!
                </span>
            </div>
            <div className="hero-text">
                <div className="line line--shortBar1"></div>
                <div className="line line--shortBar2"></div>
                <div className="line line--shortBar3"></div>
                <div className="line line--shortBar4"></div>
                <div className="line line--shortBar5"></div>
                <div>
                    <span className='stroke-text'><i>Push</i> </span>
                    <span><i>Limits.</i></span>
                </div>
                <div>
                    <span className='stroke-text'><i>Break</i> </span>
                    <span><i>Barriers.</i></span>
                </div>
            </div>
        </div>
        <div className="right-h">right side</div>
    </div>
  )
}

export default Hero;