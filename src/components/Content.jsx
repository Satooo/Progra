import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";

const Content = () =>{
    let i=1;
    if(i==0){
        return <Homepage />
    }else{
        document.getElementById("icon-img").setAttribute("src","./images/game-icon-white.png")
        return <BeginnerOptions/>
    }
}
export default Content;