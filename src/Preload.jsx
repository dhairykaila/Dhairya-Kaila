import React, { useEffect } from "react";
import { preLoaderAnim } from "./aenime";
import wr from './img/smile.png';
import './Preload.css';

const Preload = () => {

    useEffect(()=>{
        preLoaderAnim()
    },100)

    return(
        <div className="preloader" >
            <div className="texts-container">
                <span id="smile"><img src={wr} alt="" /></span>
                <span>WELCOME </span>
                <span> TO </span>
                <span> MY </span>
                <span> PORTFOLIO</span>
            </div>
        </div>
    );
}

export default Preload;

// style={{ backgroundImage:`url(${projfigma})` }}