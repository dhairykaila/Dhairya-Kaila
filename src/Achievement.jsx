import React, { useEffect } from "react";
import './Achievement.css';
import Navbar from "./Navbar";
import edu from './img/edu.png';
import certi from './img/certi.png';
import proj from './img/proj.png';
import facebook from './img/icons8-facebook-50.png';
import github from './img/icons8-github-50.png';
import instagram from './img/icons8-instagram-48.png';
import twitter from './img/icons8-twitterx-50.png';
import linkedin from './img/icons8-linkedin-48.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievement = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <>
            <Navbar />
            <section id="acievement" className="achi-main">
            <div className="heading-achi" data-aos="zoom-in">
                <p>My All Gradution & Achievement</p>
                <h1>Achievement</h1>
            </div>
            
                <div class="bio-box">
                    <div class="education">
                        <div id="edu-name-logo">
                            <figure data-aos="fade-right">
                                <img src={edu} alt="edu" id="edu-logo" />
                            </figure>
                            <h1 id="edu-name" data-aos="fade-left">Education</h1>
                        </div>
                        <div class="edu-detail">
                            <ul id="edu-1" data-aos="fade-down">
                                <div id="edu-dura-1">
                                    <h3><li>Diploma</li></h3>
                                    <p id="year">Pursuing</p>
                                </div>
                                <p id="sub-edu">Darshan University, Rajkot, Gujrat</p>
                            </ul>
                            <ul id="edu-2" data-aos="fade-up">
                                <div id="edu-dura-2">
                                    <h3><li>High School</li></h3>
                                    <p id="year">March 2021-22</p>
                                </div>
                                <p id="sub-edu">L.G. Dholakiya School, Rajkot, Gujrat</p>
                            </ul>
                        </div>
                    </div>
                    <div class="certificates">
                        <div id="certi-name-logo">
                            <figure data-aos="fade-right">
                                <img src={certi} alt="edu" id="edu-logo" className="cer-logo" />
                            </figure>
                            <h1 id="edu-name" data-aos="fade-left">Certificates</h1>
                        </div>
                        <div class="certi-detail">
                            <ul data-aos="fade-down">
                                <h3><li>HTML5</li></h3>
                                <p id="sub-ceti">Provided by Michigan University on Coursera</p>
                            </ul>
                            <ul data-aos="zoom-in">
                                <h3><li>CSS 3</li></h3>
                                <p id="sub-ceti">Provided by Michigan University on Coursera</p>
                            </ul>
                            <ul data-aos="fade-up">
                                <h3><li>Java Script</li></h3>
                                <p id="sub-ceti">Provided by Michigan University on Udemy</p>
                            </ul>
                        </div>
                    </div>
                    <div class="project">
                        <div id="proj-name-logo">
                            <figure data-aos="fade-right">
                                <img src={proj} alt="edu" id="edu-logo" className="proj-logo" />
                            </figure>
                            <h1 id="proj-name" data-aos="fade-right">Project</h1>
                        </div>
                        <div class="proj-detail" data-aos="fade-up">
                            <ul>
                                <h3><li>iDark</li></h3>
                                <p id="sub-proj">
                                    I designed one front develop website. I have used HTML, CSS
                                    and Bootstrap framework in this website.in website social
                                    media followers such as insta, josh, moj, game hack such as
                                    free fire diamond hack, pubg uc hack.
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="achi-footer-icon">
            <div className="achi-social-icon">
                    <a href="#"><img id="achi-i1" src={instagram} alt="" /></a>
                    <a href="#"><img id="achi-i2" src={facebook} alt="" /></a>
                    <a href="#"><img id="achi-i3" src={twitter} alt="" /></a>
                    <a href="#"><img id="achi-i4" src={github} alt="" /></a>
                    <a href="#"><img id="achi-i5" src={linkedin} alt="" /></a>
            </div>
            </div> */}
        </>
    );
}

export default Achievement;