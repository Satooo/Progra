import React from "react";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";
import { useState } from "react";

const About = ()=>{
    return <div><div className="content-about">
     <h1>CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR OWN!</h1>


    <p id="content-about-subText">OUR MISSION IS TO BUILD GAMING PCS AT THE BEST PRICE WITOUT CUTTING CORNERS.</p>
    <a href="/story"><button id="content-about-button">LET'S BUILD</button></a>
   </div>
   <div id="content-about-black">
    <div className="LogoPC">
        <img src="./images/PC Game.png" className="PC"/>

    </div>
    </div>
   </div>
}
export default About;