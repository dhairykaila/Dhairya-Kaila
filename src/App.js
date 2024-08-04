import React from "react";
// import  Navbar  from "./Navbar.jsx";
import  Profile  from "./Profile.jsx";
import  About  from "./About.jsx";
import  Skill  from "./Skill.jsx";
import  Achievement from './Achievement.jsx';
import Contact from "./Contact.jsx";
import Photo from "./Photo.jsx";

import AllPhoto from './AllPhoto';
import ProjectPhoto from './ProjectPhoto';
import FigmaPhoto from './FigmaPhoto';
import DUCampusPhoto from './DUCampusPhoto';

import { Switch,Route, Routes } from 'react-router-dom';
import Swp from "./Swp.jsx";
import Navbar from "./Navbar.jsx";
import CertificatePhoto from "./CertificatePhoto.jsx";
// import Preload from "./Preload.jsx";


function App() {
  return (
    <>
    {/* <Switch> */}
    <Routes>
      <Route exact path="/Dhairya-Kaila" element={<Profile/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Skill" element={<Skill/>} />
      <Route path="/Achievement" element={<Achievement/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Photo/" element={<Photo/>}>
        <Route path="AllPhoto" element={<AllPhoto/>} />
        <Route path="ProjectPhoto" element={<ProjectPhoto/>} />
        <Route path="FigmaPhoto" element={<FigmaPhoto/>} />
        <Route path="CertificatePhoto" element={<CertificatePhoto/>} />
        <Route path="DUCampusPhoto" element={<DUCampusPhoto/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;