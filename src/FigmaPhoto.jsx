import "./Photo.css";

import p2 from "./img/newPicture3.png";
import p4 from "./img/Picture54.png";
import p1 from "./img/MacBook Air.png";
import p3 from "./img/MacBook Pro 16.png";
import p5 from "./img/Frame 11.png";

import AOS from 'aos';
import React,{useEffect} from "react";

const FigmaPhoto = () => {
    useEffect(() => {
        AOS.init({ duration: 600 })
    }, []);
    return (
    <>
    <div className="All-Photo-main" data-aos="zoom-in">
                <div className="photos">
                    <div className="photo-container">
                        <img src={p2} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p3} alt="" />
                    </div>
                    <div className="photo-container" >
                        <img src={p4} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p5} alt="" />
                    </div>
                    <div className="photo-container certi-Photo">
                        <img src={p1} alt="" />
                    </div>
                </div>
            </div>
    </>
    );
}

export default FigmaPhoto;