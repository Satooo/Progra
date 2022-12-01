import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";
import { useState } from "react";
import { allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
    windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
    codingComponentes, officeComponents, renderingComponents, otherComponents,
    possibleCheckoutItems} from "./models/dataScript";
import { useEffect } from "react";

const Ranking = () => {
    const [listadoRankingp,setlistadoRankingp]=useState([]);
    const [selected,setSelected]=useState(0);
    const [pc,setPC]=useState(0);
    //console.log(pc);

    const httpObtenerRankingp = async () => {
        const resp = await fetch(`http://localhost:9999/rankingp`);
        const data = await resp.json();
        setlistadoRankingp(data);
    }

    useEffect(()=>{
        httpObtenerRankingp()
    },[])
    
    const getRankingpURL = ()=>{
        return listadoRankingp.map((_,index)=>{
            return listadoRankingp[index].url})
    }

    const getRankingpNombres = ()=>{
        return listadoRankingp.map((_,index)=>{
            return listadoRankingp[index].Nombre})
    }

    const getRankingpPrecio = ()=>{
        return listadoRankingp.map((_,index)=>{
            return listadoRankingp[index].Precio})
    }

    //console.log(getRankingpURL());
    //console.log(getRankingpNombres());
    //console.log(getRankingpPrecio());

    const MonsterPc=[3,3,3,2,3,2,1];

    const CruiserPc=[1,3,2,1,3,2,0];

    const NasaPC=[3,3,3,3,3,3,1];

    const BudgetPC=[1,1,1,0,1,1,0];

    const LeaderboardPerifericos = (url, nombre, precio) =>{
        const rankingCard = Array(listadoRankingp.length).fill(0).map((_,index)=>{
            return<div id="rankingCard">
                <img src={url[index]}/>
                <h2>{nombre[index]}</h2>
                <b>${precio[index]}</b>
            </div>
        })
        return <div>
            {rankingCard}
        </div>;
    }

    const getPrice = (temp)=>{
        let price=0;
       Array(temp.length).fill(0).map((_,index)=>{
            price+=allItems[index][temp[index]].price;
        })
        return price;
    }
    const buildsComponents = (temp)=>{
        const component=Array(temp.length).fill(0).map((_,index)=>{
            //console.log(allItems[index][temp[index]].name);
            return <div className="inline" id="buildsComponents">
            <img src={allItems[index][temp[index]].img}/>
            <b>{allItems[index][temp[index]].name}</b>
            <p>${allItems[index][temp[index]].price}</p>
            </div>
        })
        return <div id="buildComponentsMargin">{component}</div>;
    }
   
    const builds = ()=>{
        return <div>
            <div className="inline" id="ranking-build"><img src="/images/build.png"/><h3>Monster PC</h3><b>${getPrice(MonsterPc)}</b><button style={{transform: pc==1?"rotate(180deg)":"none"}} onClick={()=>{pc!=1?setPC(1):setPC(0)}}><img src="icons/despl.png" id="ranking-build-button"/></button></div>
            <div id="buildComponentsCard" style={{display:pc==1?"flex":"none"}}>{buildsComponents(MonsterPc)}</div>
            <div className="inline" id="ranking-build"><img src="/images/build.png"/><h3>Cruiser PC</h3><b>${getPrice(CruiserPc)}</b><button style={{transform: pc==1?"rotate(180deg)":"none"}} onClick={()=>{pc!=2?setPC(2):setPC(0)}}><img src="icons/despl.png" id="ranking-build-button"/></button></div>
            <div id="buildComponentsCard" style={{display:pc==2?"flex":"none"}}>{buildsComponents(CruiserPc)}</div>
            <div className="inline" id="ranking-build"><img src="/images/build.png"/><h3>Nasa PC</h3><b>${getPrice(NasaPC)}</b><button style={{transform: pc==1?"rotate(180deg)":"none"}} onClick={()=>{pc!=3?setPC(3):setPC(0)}}><img src="icons/despl.png" id="ranking-build-button"/></button></div>
            <div id="buildComponentsCard" style={{display:pc==3?"flex":"none"}}>{buildsComponents(NasaPC)}</div>
            <div className="inline" id="ranking-build"><img src="/images/build.png"/><h3>Budget PC</h3><b>${getPrice(BudgetPC)}</b><button style={{transform: pc==1?"rotate(180deg)":"none"}} onClick={()=>{pc!=4?setPC(4):setPC(0)}}><img src="icons/despl.png" id="ranking-build-button"/></button></div>
            <div id="buildComponentsCard" style={{display:pc==4?"flex":"none"}}>{buildsComponents(BudgetPC)}</div>
        </div>
    }
    const showContent=(selected)=>{
        switch(selected){
            case 0:
                return LeaderboardPerifericos(getRankingpURL(), getRankingpNombres(), getRankingpPrecio());
            case 1:
                return builds();
        }
        
    }
    return <div id="content-ranking">
        <h1>Ranking best sellers</h1>
        <div id="inline">
        <button id="content-ranking-selection" style={{backgroundColor:selected==0?"white":"transparent",color:selected==0?"purple":"white"}} onClick={()=>{setSelected(0)}}>Periferics</button>
        <button id="content-ranking-selection" style={{backgroundColor:selected==1?"white":"transparent",color:selected==1?"purple":"white"}} onClick={()=>{setSelected(1)}}>Builds</button>
        {showContent(selected)}
        </div>
    </div>
}
export default Ranking;