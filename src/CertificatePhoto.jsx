import "./Photo.css";

import p1 from "./img/certi1.jpeg";
import p2 from "./img/certi2.jpeg";
import p3 from "./img/cerit3.jpeg";
import p4 from "./img/certi4.jpeg";

import AOS from 'aos';
import React,{useEffect} from "react";

const CertificatePhoto = () => {
    useEffect(() => {
        AOS.init({ duration: 600 })
    }, []);
    return (
        <>
            <div className="All-Photo-main" data-aos="zoom-in">
                <div className="photos">
                    <div className="photo-container certi-Photo">
                        <img src={p1} alt="" />
                    </div>
                    <div className="photo-container certi-Photo">
                        <img src={p4} alt="" />
                    </div>
                    <div className="photo-container certi-Photo">
                        <img src={p3} alt="" />
                    </div>
                    <div className="photo-container certi-Photo">
                        <img src={p2} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CertificatePhoto;