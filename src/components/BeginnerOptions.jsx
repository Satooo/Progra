import React from "react";
import "./style.css";
import Base from "./Base";
import {useState} from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import BeginnerRecommendation from "./BeginnerRecommendation";
import { useEffect } from "react";
const BeginnerOptions = (props) =>{
    let currentSelection="";
    let selection=0;
    const [selected, setSelected] = React.useState(0);
    const [isActive, setIsActive] = useState(false);

    const [listadoProductos,setListadoProductos]=useState([]);

    const httpObtenerProductos = async () => {
        const resp = await fetch(`http://localhost:9999/armados?tipo=${"coding"}`)
        const data = await resp.json()
        setListadoProductos(data)
    }

    useEffect(()=>{
        httpObtenerProductos()
    },[])

    
    const getProductos = ()=>{
        return listadoProductos.map((_,index)=>{
            return listadoProductos[index].Producto})
    }
    
    console.log(getProductos())

    const handleClick = () => {
        // 👇️ toggle
        if(selection==0){
            setIsActive(current => !current);
            selection++;
        }else{

        }
        // 👇️ or set to true
        // setIsActive(true);
      };
    const onItemSelected=(emoji)=>{
        setSelected(emoji);
        if(props.callback){
          props.callback(emoji);
        }
     };



    return <div id="content-beginner-options">
        <div className="inline" style={{paddingBottom: "50px"}} id="mobile-boptions-nav"><h1 style={{width:"70%"}}>What do you need?</h1>
            <a href="/homepage" style={{width:"10%",backgroundColor: "white",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}} id="mobile-boptions-nav-b1">
                <button style={{width:"100%"}}> Back </button></a>
                <a id="startRecommend" style={{width:"10%",backgroundColor: "#ba68c8",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}}  href={ selected!=0 ? "/beginner-recommendation":"" } onClick={()=>{
                    localStorage.setItem("selection",selected)
                }}>
                    <button   style={{width: "100%",color:"white"}}>Next </button></a>
        </div>
        <div>
        <div className="row" id="content-beginner-grid-row">
            <div className="col" id="content-beginner-grid-col"><button className="optionButton" id="gaming" style={{border: selected=="1" ? "3px solid white" : "3px solid transparent"}} onClick={()=>{
                currentSelection="gaming";
                console.log(currentSelection);
                onItemSelected(1);
            }}>
                <img src="images/gaming.png"/>Gaming</button></div>
            <div className="col" id="content-beginner-grid-col"><button className="optionButton" id="design" style={{border: selected=="2" ? "3px solid white" : "3px solid transparent"}} onClick={()=>{
                currentSelection="design";
                console.log(currentSelection);
                onItemSelected(2);
            }}>
                <img src="images/design.png"/>Design</button></div>
            <div className="col" id="content-beginner-grid-col"><button className="optionButton" id="coding" style={{border: selected=="3" ? "3px solid white" : "3px solid transparent"}} onClick={()=>{
                currentSelection="coding";
                console.log(currentSelection);
                onItemSelected(3);
            }}>
                <img src="images/coding.png"/>Coding</button></div>
        </div>
        <div className="row" id="content-beginner-grid-row">
            <div className="col" id="content-beginner-grid-col"><button className="optionButton" id="rendering" style={{border: selected=="4" ? "3px solid white" : "3px solid transparent"}} onClick={()=>{
                currentSelection="rendering";
                console.log(currentSelection);
                onItemSelected(4);
            }}>
                <img src="images/rendering.png"/>Rendering</button></div>
            <div className="col" id="content-beginner-grid-col"><button className="optionButton" id="office" style={{border: selected=="5" ? "3px solid white" : "3px solid transparent"}} onClick={()=>{
                currentSelection="office";
                console.log(currentSelection);
                onItemSelected(5);
            }}>
                <img src="images/office.png"/>Office</button></div>
            <div className="col" id="content-beginner-grid-col"><button className="optionButton" id="other" style={{border: selected=="6" ? "3px solid white" : "3px solid transparent"}} onClick={()=>{
                currentSelection="other";
                console.log(currentSelection);
                onItemSelected(6);
            }}>
                <img src="images/other.png"/>Other</button></div>
        </div>
        </div>
    </div>
}
export default BeginnerOptions