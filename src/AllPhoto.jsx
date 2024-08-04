import "./Photo.css";

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
import React,{useEffect} from "react";

const AllPhoto = () => {
    useEffect(() => {
        AOS.init({ duration: 600 })
    }, []);
    return (
        <>
            <div className="All-Photo-main" data-aos="zoom-in">
                <div className="photos">
                    <div className="photo-container">
                        <img src={p1} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p2} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p6} alt="" />
                    </div>
                    <div className="photo-container" data-aos="zoom-in">
                        <img src={p3} alt="" />
                    </div>
                    <div className="photo-container" data-aos="zoom-in">
                        <img src={p13} alt="" />
                    </div>
                    <div className="photo-container" data-aos="zoom-in">
                        <img src={p4} alt="" />
                    </div>
                    <div className="photo-container" data-aos="zoom-in">
                        <img src={p12} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos="zoom-in">
                        <img src={p14} alt="" />
                    </div>
                    <div className="photo-container" data-aos="zoom-in">
                        <img src={p5} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos="zoom-in">
                        <img src={p8} alt="" />
                    </div>
                    <div className="photo-container" data-aos="zoom-in">
                        <img src={p7} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos="zoom-in">
                        <img src={p9} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos="zoom-in">
                        <img src={p11} alt="" />
                    </div>
                    <div className="photo-container certi-Photo" data-aos="zoom-in">
                        <img src={p10} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllPhoto;