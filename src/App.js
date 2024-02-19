import React from "react";
// import  Navbar  from "./Navbar.jsx";
import  Profile  from "./Profile.jsx";
import  About  from "./About.jsx";
import  Skill  from "./Skill.jsx";
import  Achievement from './Achievement.jsx';
import Contact from "./Contact.jsx";
import Photo from "./Photo.jsx";

import { Switch,Route } from 'react-router-dom';
import Swp from "./Swp.jsx";
import Navbar from "./Navbar.jsx";
// import Preload from "./Preload.jsx";


function App() {
  return (
    <>
      {/* <Preload/> */}
    <Switch>
      <Route exact path="/Dhairya-Kaila">
        <Profile/>
      </Route>

      <Route path="/About">
        <About/>
      </Route>

      <Route path="/Skill">
        <Skill/>
      </Route>

      <Route path="/Achievement">
        <Achievement/>
      </Route>

      <Route path="/Contact">
        <Contact/>
      </Route>

      <Route path="/Photo">
        <Photo/>
      </Route>

      <Route path="/Contact">
        <Photo/>
      </Route>
    </Switch>
    </>
  );
}

export default App;