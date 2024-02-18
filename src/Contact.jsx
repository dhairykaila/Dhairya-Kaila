import React, { useEffect } from "react";
import './Contact.css';
import Navbar from "./Navbar";
import facebook from './img/icons8-facebook-50.png';
import github from './img/icons8-github-50.png';
import instagram from './img/icons8-instagram-48.png';
import twitter from './img/icons8-twitterx-50.png';
import linkedin from './img/icons8-linkedin-48.png';
import email from './img/icons8-email-48.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <>
            <Navbar />
            <div className="heading-con" data-aos="zoom-in">
                    <p>Contact Me & My Location</p>
                    <h1>Contact</h1>
                </div>
            <section id="section5" data-aos="zoom-in">
                
                <div class="contact">
                    <div class="location-area" data-aos="fade-right">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.80351149273!2d70.82129635!3d22.27348695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707225350885!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* <div id="Location-con">
                                <h1>Location</h1>
                                <p>
                                360004 Rajkot, GUJARAT, <br />
                                    India
                                </p>
                            </div>
                            <div id="Email-con">
                                <h1>Email</h1>
                                <p>dhairykaila@gmail.com</p>
                            </div>
                            <div id="Call-con">
                                <h1>Call</h1>
                                <p>+91 81600 67515</p>
                            </div> */}
                    </div>
                    <div class="contact-area" data-aos="fade-left">
                        <form onsubmit="sendEmail(); reset(); return true;">
                            <input
                                type="text"
                                id="con-name"
                                placeholder="Name"
                                required
                            /><br />
                            <input
                                type="email"
                                id="con-email"
                                placeholder="Email"
                                required
                            /><br />
                            <input
                                type="text"
                                id="con-subj"
                                placeholder="Subject"
                                required
                            /><br />
                            <textarea
                                cols="33"
                                id="con-txarea"
                                rows="5"
                                placeholder="How can i help you?"
                            ></textarea>
                            <br />
                            <button type="submit" id="con-btn">Send</button>
                        </form>
                    </div>
                </div>
                <div className="emailaddress-main">
                    <div className="emailaddress">
                        <div className="eaddress">
                            <img src={email} alt="" />
                            <p>dhairykaila@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <div className="con-footer-icon">
                <div className="con-social-icon">
                    <a href="#"><img id="con-i1" src={instagram} alt="" /></a>
                    <a href="#"><img id="con-i2" src={facebook} alt="" /></a>
                    <a href="#"><img id="con-i3" src={twitter} alt="" /></a>
                    <a href="#"><img id="con-i4" src={github} alt="" /></a>
                    <a href="#"><img id="con-i5" src={linkedin} alt="" /></a>
                </div>
            </div> */}
        </>
    );
}

export default Contact;