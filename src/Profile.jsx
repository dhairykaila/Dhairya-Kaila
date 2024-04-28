import React, { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import './Profile.css';
import myPhoto from './img/myphoto1.jpg';
import facebook from './img/facebook.png';
import github from './img/github.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';


import AOS from 'aos';
import 'aos/dist/aos.css';


import { NavLink } from 'react-router-dom';



const Profile = () => {

    useEffect(()=> {
        AOS.init({duration: 600});
    },[]);

   

    return (<>
        <Navbar/>
        <section id="profile" className="profile-main" data-aos='zoom-in'>
            <div className="pro-photo" data-aos="fade-right">
                <img src={myPhoto} alt="" />
            </div>
            <div className="pro-containt" data-aos='zoom-in'>
                <div id="pro-con-well" data-aos='fade-right'>
                    <p>Hello, I'm</p>
                </div>
                <br /><br />
                <div id="pro-con-name">
                    <h1>Dhairya Kaila</h1>
                </div>
                <div id="pro-con-work" >
                    <p>Web Developer</p>
                </div>
                <div id="pro-btn">
                    <div id="pro-coninfo"><NavLink to="/Contact" id="coninfo-t">Contact Info</NavLink></div>
                </div>
                <div className="social-icon" >
                    <a href="https://www.instagram.com/dhairya_kaila_/?igsh=M2hyejZyanVydmE0"><img id="i1" src={instagram} alt="" /></a>
                    <a href="https://www.facebook.com/dhairy.kaila"><img id="i2" src={facebook} alt="" /></a>
                    <a href="https://x.com/dhairyp69073198?t=TJZ3-TiUOXTlEIBLw2-UZA&s=09"><img id="i3" src={twitter} alt="" /></a>
                    <a href="https://github.com/dhairykaila"><img id="i4" src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/dhairy-kaila/"><img id="i5" src={linkedin} alt="" /></a>
                </div>
            </div>
        </section>
    </>
    );
}

export default Profile;