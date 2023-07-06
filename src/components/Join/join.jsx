import React, { useRef } from 'react';
import "./join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mxa6pe7', 'template_44kw908', form.current, 'ayLKkszv743K9n2_G')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='Join' id='join-us'>
      <div className='left-j'>
        <hr/>
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input type='email' name='user_email' placeholder='Enter email here'/>
          <button className='btn btn-j'>Join Now</button>

        </form>
      </div>
    </div>
  );
};

export default Join;