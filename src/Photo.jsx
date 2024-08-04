import React, { useEffect } from 'react';
import './Photo.css';
import './PhotoNavbar.css'
import Navbar from './Navbar';
import Swp from './Swp.jsx'

import p1 from "./img/newPicture2.png";
import p2 from "./img/newPicture3.png";
import p3 from "./img/Picture134.png";
import p4 from "./img/Picture54.png";
import p5 from "./img/Picture1546.png";
import p6 from "./img/Picture2111.png";
import p7 from "./img/Picture556.png";

import p8 from "./img/certi1.jpeg";
import p9 from "./img/certi2.jpeg";
import p10 from "./img/cerit3.jpeg";
import p11 from "./img/certi4.jpeg";
import p12 from "./img/MacBook Air.png";
import p13 from "./img/MacBook Pro 16.png";
import p14 from "./img/Frame 11.png";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink, Outlet } from "react-router-dom";
import { Link } from 'react-scroll';
import { Switch, Route } from 'react-router-dom';
import About from './About.jsx';
import Footer from './Footer.jsx';
const Photo = () => {
    function hidePhoto() {
        document.getElementById("hidePhoto").style.display = "none";
    }
    useEffect(() => {
        AOS.init({ duration: 600 })
    }, []);

    return (
        <>
            <Navbar />
            <section className="photo-main">
                <div className="heading-photo" data-aos="zoom-in">
                    <p>Project, Certificate</p>
                    <h1>Photos</h1>
                </div>
                {/* <div className="catagory" > */}
                {/* <Switch>
                <Route path="/Project">
                    <Project/>
                </Route>
                <Route path="/Certificate">
                    <Certificate/>
                </Route>
                </Switch> */}
                {/* <Swp/> */}
                {/* </div> */}
                <div className='Photo-nav'>
                    <ul>
                        <li id='nav1' onClick={() => {
                            var element = document.getElementById("nav1");
                            element.classList.remove("nl");
                            var addelement = document.getElementById("nav2");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav3");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav4");
                            addelement.classList.add("nl");
                            hidePhoto();
                        }} className='nl'><NavLink to="AllPhoto">ALL</NavLink></li>
                        <li id='nav2' onClick={() => {
                            var element = document.getElementById("nav2");
                            element.classList.remove("nl");
                            var addelement = document.getElementById("nav1");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav3");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav4");
                            addelement.classList.add("nl");
                            hidePhoto();
                        }} className='nl nav-link'><NavLink to="ProjectPhoto">Project</NavLink></li>
                        <li id='nav3' onClick={() => {
                            var element = document.getElementById("nav3");
                            element.classList.remove("nl");
                            var addelement = document.getElementById("nav1");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav2");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav4");
                            addelement.classList.add("nl");
                            hidePhoto();
                        }} className='nl nav-link'><NavLink to="FigmaPhoto">Figma</NavLink></li>
                        <li id='nav4' onClick={() => {
                            var element = document.getElementById("nav4");
                            element.classList.remove("nl");
                            var addelement = document.getElementById("nav1");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav2");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav3");
                            addelement.classList.add("nl");
                            hidePhoto();
                        }} className='nl nav-link'><NavLink to="CertificatePhoto">Certificate</NavLink></li>
                        {/* <li id='nav5' onClick={() => {
                            var element = document.getElementById("nav5");
                            element.classList.remove("nl");
                            var addelement = document.getElementById("nav1");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav2");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav4");
                            addelement.classList.add("nl");
                            var addelement = document.getElementById("nav3");
                            addelement.classList.add("nl");
                        }} className='nl nav-link'><NavLink to="DUCampusPhoto">DUC</NavLink></li> */}
                    </ul>
                    <Outlet />
                </div>
            </section>
            <div className="All-Photo-main">
                <div className="photos" id='hidePhoto' data-aos="zoom-in">
                    <div className="photo-container">
                        <img src={p1} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p2} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p6} alt="" />
                    </div>
                    <div className="photo-container" data-aos='zoom-in'>
                        <img src={p3} alt="" />
                    </div>
                    <div className="photo-container" data-aos='zoom-in'>
                        <img src={p4} alt="" />
                    </div>
                    <div className="photo-container" data-aos='zoom-in'>
                        <img src={p13} alt="" />
                    </div>
                    <div className="photo-container" data-aos='zoom-in'>
                        <img src={p14} alt="" />
                    </div>
                    <div className="photo-container" data-aos='zoom-in'>
                        <img src={p12} alt="" />
                    </div>
                    <div className="photo-container" data-aos='zoom-in'>
                        <img src={p5} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos='zoom-in'>
                        <img src={p8} alt="" />
                    </div>
                    <div className="photo-container" data-aos='zoom-in'>
                        <img src={p7} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos='zoom-in'>
                        <img src={p9} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos='zoom-in'>
                        <img src={p11} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos='zoom-in'>
                        <img src={p10} alt="" />
                    </div>
                </div>
            </div>
            {/* <PhotoNavbar/> */}
            <Footer/>
        </>
    );
}

export default Photo;