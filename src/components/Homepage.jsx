import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import "./style.css";

const Homepage = () =>{
    return <div id="content-homepage">
        
        <img src="images/game-icon-white.png" id="homepage-image"/>
        <h1>Build your pc!</h1>
        <h2>Just for what you need </h2>
        <div id="homepage-build-buttons">
        <a href="/beginner-options"><button>Build for beginners</button></a>
        <a href="/advanced-options"><button>Advanced building </button></a>
        </div>
    </div>
}
export default Homepage;