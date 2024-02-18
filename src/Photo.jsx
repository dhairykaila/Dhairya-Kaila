import React,{useEffect} from 'react';
import './Photo.css';
import Navbar from './Navbar';
import Swp from './Swp.jsx'


import AOS from 'aos';
import 'aos/dist/aos.css';


const Photo = () => {
    
    useEffect(()=> {
        AOS.init({duration: 2000})
    },[]);

    return (
        <>
            <Navbar/>
            <section className="photo-main" data-aos="zoom-in">
                <div className="heading-photo" >
                    <p>Project, Campus</p>
                    <h1>Photos</h1>
                </div>
                <Swp/>
            </section>
        </>
    );
}

export default Photo;