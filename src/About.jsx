import React, { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import './About.css';
import graduate from './img/graduate.png';
import map from './img/map.png';
import aboPhoto from './img/WhatsApp Image 2024-01-30 at 19.42.55_b0b6712b-modified.jpg';
import facebook from './img/icons8-facebook-50.png';
import github from './img/icons8-github-50.png';
import instagram from './img/icons8-instagram-48.png';
import twitter from './img/icons8-twitterx-50.png';
import linkedin from './img/icons8-linkedin-48.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({duration: 400})
    },[]);
    return (
        <>
            <Navbar/>
            <section  id="about" className="about-main">
                <div className="heading-about" data-aos='zoom-in'>
                    <p>Get To Know More</p>
                    <h1>About Me</h1>
                </div>
                <div className="about-photo" data-aos='fade-right'>
                    <img
                        src={aboPhoto}
                        alt=""
                    />
                </div>
                <div className="about-containt" data-aos='fade-right'>
                    <div className="about-box">
                        <div className="about-edu" data-aos='fade-up'>
                            <img id="icon" src={graduate} alt="" />
                            <h6>Education</h6>
                            <p>Diploma 6<sup>th</sup>Sem Student</p>
                            <p>10<sup>th</sup> Completed</p>
                        </div>
                        <div className="about-location" data-aos='fade-up'>
                            <img id="icon" src={map} alt="" />
                            <h6>Location</h6>
                            <p>Uma Ashish, Umiya chock Gokhuldham</p>
                            <p>Rajkot,Gujarat</p>
                        </div>
                    </div>
                    <div className="about-dis" >
                        <p>
                            I am a App Developer. I am proficient in HTML, CSS, JavaScript, php,
                            Java, Python, C. Currently, I am building a Music website with help
                            of React js. I am motivated and hard-working, always looking for new
                            challenges. Loves working with new technologies. I consider myself a
                            'forever student'.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;