import React from "react";
import "./style.css";
import Base from "./Base";
import {useState} from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";

const BComponentCol = (props)=>{
    return <div id="content-beginner-recommendation-components-col" className="col">
        <img src={props.img}/>
        <p>{props.name}</p>
        <b>${props.price}</b>
    </div>
}
export default BComponentCol;