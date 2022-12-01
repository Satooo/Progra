import React from "react";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";
import { useState } from "react";

const About = ()=>{
    return <div><div className="content-about">
     <h1>CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR OWN!</h1>


    <p id="content-about-subText">OUR MISSION IS TO BUILD GAMING PCS AT THE BEST PRICE WITOUT CUTTING CORNERS.</p>
    <div style={{display:"flex",flexDirection:"column"}}>
        <a href="/homepage"><button id="content-about-button">LET'S BUILD</button></a><a href="/story"><button id="content-story-button">Explore our features</button></a>
    </div>
   </div>
   <div id="content-about-black">
    <div className="LogoPC">
        <img src="./images/PC Game.png" className="PC"/>

    </div>
    </div>
   </div>
}
export default About;