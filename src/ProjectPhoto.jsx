import "./Photo.css";

import p1 from "./img/newPicture2.png";
import p3 from "./img/Picture134.png";
import p5 from "./img/Picture1546.png";
import p6 from "./img/Picture2111.png";

import AOS from 'aos';
import React,{useEffect} from "react";

const ProjectPhoto = () => {
    useEffect(() => {
        AOS.init({ duration: 600 })
    }, []);
    return (
        <>
            <div className="All-Photo-main"  data-aos="zoom-in">
                <div className="photos">
                    <div className="photo-container">
                        <img src={p1} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p3} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p6} alt="" />
                    </div>
                    <div className="photo-container">
                        <img src={p5} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectPhoto;