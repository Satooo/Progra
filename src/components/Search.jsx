import React from "react";
import "./style.css";
import Base from "./Base";
import {useState} from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import BComponent from "./BComponentCol";
import BComponentCol from "./BComponentCol";
import { allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
    windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
    codingComponentes, officeComponents, renderingComponents, otherComponents,
    possibleCheckoutItems} from "./models/dataScript";


const Search=()=>{
    const webSearch = localStorage.getItem("search");
    if(localStorage.getItem("search")!=null || localStorage.getItem("search")!=""){
        console.log(webSearch);
    }
    const content = (img,name,price)=>{
        return <div className="row" id="content-search">
            <div className="col">
                <div id="searchImg">
                <img src={img}/>
                <button id="searchInfoButton" onClick={()=>{
                    if(localStorage.getItem("possibleCheckoutItems")!=null){
                    let tempCart=JSON.parse(localStorage.getItem("possibleCheckoutItems"));
                    console.log(tempCart);
                    let newItem={};
                    newItem.name=name;
                    newItem.price=price;
                    newItem.img=img;
                    newItem.order=`${name}*`;
                    tempCart.push(newItem);
                    localStorage.setItem("possibleCheckoutItems",JSON.stringify(tempCart));
                    alert("Agregado a carrito de compras")
                    }else{
                    let tempCart=[];
                    let newItem={};
                    newItem.name=name;
                    newItem.price=price;
                    newItem.img=img;
                    newItem.order=`${name}*`;
                    tempCart.push(newItem);
                    localStorage.setItem("possibleCheckoutItems",JSON.stringify(tempCart));
                    alert("Agregado a carrito de compras")
                    }
                }}>Add to cart</button>
                </div>
            </div>
            <div className="col" id="searchInfo">
                <h2>{name}</h2>
                <p>${price}</p>
                <p><span style={{color:"#d1c4e9"}}>Shipping</span> calculated at checkout</p>
                <div className="container" id="specs">
                    <div className="row">
                        <div className="col">Chipset Manufacturer</div>
                        <div className="col">Grupo 5</div>
                    </div>
                    <div className="row">
                        <div className="col">GPU</div>
                        <div className="col">{name}</div>
                    </div>
                    <div className="row">
                        <div className="col">Core clock</div>
                        <div className="col">1530 Mhz</div>
                    </div>
                    <div className="row">
                        <div className="col">Boost Clock</div>
                        <div className="col">OC mode: 1800 MHz 
                        Gaming mode
                        (Default) 1770 MHZ</div>
                    </div>
                    <div className="row">
                        <div className="col">Cuida cores</div>
                        <div className="col">1280</div>
                    </div>
                </div>
            </div>

        </div>
    }
     const findElement= (webSearch)=>{
        for(let i=0;i<allItems.length;i++){
            for(let j=0;j<allItems[i].length;j++){
                if(allItems[i][j].name==webSearch){
                    return content (allItems[i][j].img,allItems[i][j].name,allItems[i][j].price);
                }
            }
        }
        return <div id="content-search"><h1 className="mt-5"  style={{width:"100%",textAlign:"center"}}>Not found!</h1></div>
     }
     return findElement(webSearch);
}
export default Search;
