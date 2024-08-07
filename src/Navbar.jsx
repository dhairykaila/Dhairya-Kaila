import React, { useEffect } from "react";
import './Navbar.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import Profile from "./img/profile.png";
// import About from "./img/info.png";
// import Skill from "./img/skills.png"
// import Achievement from "./img/analytics.png";
// import contact from "./img/analytics.png";
import menuicon from "./img/navigation.png";

import { NavLink } from 'react-router-dom';

import Photo from "./Photo";
import "./Photo.css";


const Navbar = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  function showslidebar() {
    const sidebar = document.querySelector(".navbar-res");
    sidebar.style.display = "flex";
    const iconsmenu = document.querySelector(".menu-list");
    iconsmenu.style.display = "none";
    const hidemenu = document.querySelector(".hide-menu");
    hidemenu.style.display = "flex";
  }
  function hideslidebar() {
    const sidebar = document.querySelector(".navbar-res");
    sidebar.style.display = "none";
    const iconsmenu = document.querySelector(".menu-list");
    iconsmenu.style.display = "flex";
    const hidemenu = document.querySelector(".hide-menu");
    hidemenu.style.display = "none";
  }

  return (
    <nav>
      <div className="navbar">
        <div className="logo">Dhairya Kaila</div>
        <ul className="link">
          <li><NavLink to="/Dhairya-Kaila">Profile</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Skill">Skill</NavLink></li>
          <li><NavLink to="/Achievement">Achievement</NavLink></li>
          <li><NavLink to="/Photo">Photos</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </div>
      {/* <div className="logo">Dhairya Kaila</div> */}
      <div className="hide-menu" onClick={hideslidebar}></div>
      <div className="menu-list" onClick={showslidebar}>
        <img src={menuicon} alt="" />
      </div>
      <div className="navbar-res">
        <ul className="link-res" >
          <li onClick={hideslidebar}><NavLink id="li" to="/Dhairya-Kaila">Profile</NavLink></li>
          <li onClick={hideslidebar}><NavLink id="li" to="/About" >About</NavLink></li>
          <li onClick={hideslidebar}><NavLink id="li" to="/Skill" >Skill</NavLink></li>
          <li onClick={hideslidebar}><NavLink id="li" to="/Achievement" >Achievement</NavLink></li>
          <li onClick={hideslidebar}><NavLink id="li" to="/Photo" >Photos</NavLink></li>
          <li onClick={hideslidebar}><NavLink id="li" to="/Contact" >Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}



export default Navbar;