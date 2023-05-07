import React from "react";
import { Link } from "react-router-dom";
import {
    FaEnvelope,
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaCopyright,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                  <a href="#">  <li className="menuItem">Terms Of Use</li></a>
                   <a href="#"> <li className="menuItem">Privacy-Policy</li></a>
                   <a href="https://arpit-singh2001.github.io/portfolio/" target="_blank"> <li className="menuItem">About</li></a>
                 
                   
                </ul>
                <div className="infoText">
                It is ultimate movie search app, designed to help you easily find the perfect movie to watch for any occasion! Our app boasts a user-friendly interface that allows you to browse through a vast collection of movies, including new releases. you can search for movies based on various criteria, such as genre and ratings.Whether you're in the mood for a romantic comedy, an action-packed thriller, or a heartwarming drama, our movie search app has got you covered. So use the app today and start exploring the exciting world of cinema!
                </div>
                <div className="socialIcons">
                    <a  href="https://www.linkedin.com/in/arpit-singh-503b3a1a6/"  target='_blank' 
                    style={{ textDecoration: 'none'}} >
                    <span className="icon">
                        <FaLinkedin />
                    </span>

                    </a>
                    <a  href="https://github.com/Arpit-Singh2001"  target='_blank' >
                    <span className="icon">
                        <FaGithub />
                       
                    </span>

                   </a>
                   <a  href="https://www.instagram.com/singhthakur7080/?hl=hi"  target='_blank' >
                    <span className="icon">
                    <FaInstagram />
                    </span>
                    </a>

                    <a  href="https://www.linkedin.com/in/arpit-singh-503b3a1a6/"  target='_blank' >
                    <span className="icon">
                        <FaEnvelope />
                    </span>
                 </a>
                 
                </div>
                <div className="last"> Copyright <FaCopyright/> 2023 Arpit Singh. All Rights Reserved.</div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;