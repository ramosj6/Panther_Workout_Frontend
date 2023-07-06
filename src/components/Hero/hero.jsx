import React from 'react';
import "./hero.css";
import Header from '../Header/header';
import Heart from "../../imgs/heart-rate.png";
import Athlete1 from "../../imgs/athlete-running.png";
import Calories from "../../imgs/calories.png";
import {motion} from 'framer-motion';



const Hero = () => {
    const transition = {type: 'spring', duration : 5};

  return (
    <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            <div className="ad">
                <motion.div initial={{left: '340px'}} whileInView={{left: '8px'}} transition={{...transition, type: 'tween'}}></motion.div>
                <span>
                    Join Panther Club. The #1 workout club in the US!
                </span>
            </div>
            <div className="hero-text">
                <div className='animation-lines'>
                    <div className="line line--shortBar1"></div>
                    <div className="line line--shortBar2"></div>
                    <div className="line line--shortBar3"></div>
                    <div className="line line--shortBar4"></div>
                    <div className="line line--shortBar5"></div>
                </div>
                <div className='text'>
                    <div>
                        <span className='stroke-text'><i>Push</i> </span>
                        <span><i>Limits.</i></span>
                    </div>
                    <div>
                        <span className='stroke-text'><i>Break</i> </span>
                        <span><i>Barriers.</i></span>
                    </div>
                    <div>
                        <span>Unleash your inner strength, push your limits, and transform your body with our empowering workouts that ignite the fire within you.</span>
                    </div>
                </div>
            </div>
            <div className='figures'>
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div initial={{right: "1rem"}} whileInView={{right: "7rem"}} transition={transition} className='heart-rate'>
                <img id="heart-img" src={Heart} alt='' />
                <span>Heart Rate </span><span>116 bpm</span>
            </motion.div>

            <img src={Athlete1} alt="" className="hero-image" />

            <motion.div initial={{right: "37rem"}} whileInView={{right: "28rem"}} transition={transition} className="calories">
                <img src={Calories} alt=""></img>
                <div>
                    <span>Calories Burned</span><span>369 Cal.</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero;