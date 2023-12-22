"use client"
import React from 'react'
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import { FaWhatsapp } from "react-icons/fa";
function Contact() {
  
 
  return (
    <section id='Contact' className="fade-in">
      <h5>Get In touch</h5>
      <h2>Contact me</h2>

      <div className="container  contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>atharvan.coder@gmail.com</h5>
            <a href="mailto:atharvan.coder@gmail.com">Send Msg</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact-icon'/>
            <h4>Linkdin</h4>
            <a href="https://www.linkedin.com/in/atharva-naik-527b74255/">Send Msg</a>
          </article>
          <article className='contact_option'>
            <FaWhatsapp className='contact-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9527909539</h5>
            <a href="https://api.whatsapp.com/send?phone=+919527909539">Send Msg</a>
          </article>
        </div>
        <div className='contact_form'>
            <form >
              <input type="text" name='name' placeholder='Enter Your Name' required/>
              <input type="email" name="email" placeholder='Enter Your Email' required/>
              <textarea rows={7} placeholder='Enter Message'></textarea>
              <input type="submit" value="Send Message" className='btn btn-primary' />
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact