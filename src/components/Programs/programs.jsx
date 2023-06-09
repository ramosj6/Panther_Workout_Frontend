import React from 'react';
import "./programs.css";
import { Barbell, PersonSimpleRun, Fire, Heartbeat, ArrowRight } from "@phosphor-icons/react";


const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className='program-categories'>
            <div className="category">
                <Barbell size={32}/>
                <span>Strength Training</span>
                <span>In this program, you are trained to improve your strength through many exercises.</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <ArrowRight size={16}/>
                </div>
            </div>
            <div className="category">
                <PersonSimpleRun size={32}/>
                <span>Cardio Training</span>
                <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <ArrowRight size={16}/>
                </div>
            </div>
            <div className="category">
                <Fire size={32}/>
                <span>Fat Burning</span>
                <span>This program is suitable for you who wants to get rid of your fat and lose their weight.</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <ArrowRight size={16}/>
                </div>
            </div>
            <div className="category">
                <Heartbeat size={32}/>
                <span>Health Fitness</span>
                <span>This programs is designed for those who exercises only for their body fitness not body building.</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <ArrowRight size={16}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Programs;