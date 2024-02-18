import React, { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import './Skill.css';
import facebook from './img/icons8-facebook-50.png';
import github from './img/icons8-github-50.png';
import instagram from './img/icons8-instagram-48.png';
import twitter from './img/icons8-twitterx-50.png';
import linkedin from './img/icons8-linkedin-48.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (<>
        <Navbar />
        <section id="skill" className="skill-main">
            <div className="heading-skill" data-aos='zoom-in'>
                <p>My Languages Skill</p>
                <h1>Skill</h1>
            </div>
            <div className="skill-languages">
                <div id="html" data-aos='zoom-in'>
                    <p>HTML</p>
                    <div id="skill-html">
                        <div id="prog-html" data-aos='fade-right'></div>
                    </div>
                    <p id="per">90%</p>
                </div>
                <div id="css" data-aos='zoom-in'>
                    <p>CSS</p>
                    <div id="skill-css">
                        <div id="prog-css" data-aos='fade-right'></div>
                    </div>
                    <p id="per">85%</p>
                </div>
                <div id="php" data-aos='zoom-in'>
                    <p>PHP</p>
                    <div id="skill-php">
                        <div id="prog-php" data-aos='fade-right'></div>
                    </div>
                    <p id="per">80%</p>
                </div>
                <div id="js" data-aos='zoom-in'>
                    <p>Js</p>
                    <div id="skill-js">
                        <div id="prog-js" data-aos='fade-right'></div>
                    </div>
                    <p id="per">75%</p>
                </div>
                <div id="java" data-aos='zoom-in'>
                    <p>JAVA</p>
                    <div id="skill-java">
                        <div id="prog-java" data-aos='fade-right'></div>
                    </div>
                    <p id="per">70%</p>
                </div>
                <div id="python" data-aos='zoom-in'>
                    <p>Python</p>
                    <div id="skill-python">
                        <div id="prog-python" data-aos='fade-right'></div>
                    </div>
                    <p id="per">70%</p>
                </div>
                <div id="c" data-aos='zoom-in'>
                    <p>C</p>
                    <div id="skill-c">
                        <div id="prog-c" data-aos='fade-right'></div>
                    </div>
                    <p id="per">85%</p>
                </div>
                <div id="dbms" data-aos='zoom-in'>
                    <p>DBMS</p>
                    <div id="skill-dbms">
                        <div id="prog-dbms" data-aos='fade-right'></div>
                    </div>
                    <p id="per">85%</p>
                </div>
            </div>
        </section>
        {/* <div className="skill-footer-icon">
            <div className="skill-social-icon">
                <a href="#"><img id="skill-i1" src={instagram} alt="" /></a>
                <a href="#"><img id="skill-i2" src={facebook} alt="" /></a>
                <a href="#"><img id="skill-i3" src={twitter} alt="" /></a>
                <a href="#"><img id="skill-i4" src={github} alt="" /></a>
                <a href="#"><img id="skill-i5" src={linkedin} alt="" /></a>
            </div>
        </div> */}
    </>
    );
}

export default Skill;