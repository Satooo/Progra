import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";
import { useState, useEffect } from "react";
import { RUTA_BACKEND } from "../conf";

const Reviews = () =>{
    const [selection,setSelection]=useState("reviews");
    const [listadoResena,setListadoResena]=useState([])

    const [puntajeGlobal,setPuntajeGlobal]=useState(0)

    const httpObtenerResenas = async () => {
        //const resp = await fetch(`http://localhost:9999/resena`)
        const resp = await fetch(`${RUTA_BACKEND}resena`)
        const data = await resp.json()
        setListadoResena(data)

      }

    useEffect(()=>{
        httpObtenerResenas()
        getPuntajeGlobal(listadoResena)
    },[listadoResena])

    const getPuntajeGlobal=(lista)=>{
        let suma = 0
        for(let i=0;i<lista.length;i++){
            suma+=lista[i].Puntaje
        }
        suma=suma+15
        let promedio = suma/(lista.length+3)
        promedio=Math.round(promedio)
        setPuntajeGlobal(promedio)
    }

    const influencers = ()=>{
        let temp = []
        for(let i=0;i<listadoResena.length;i++){
           if(listadoResena[i].Tpo_resena=="influencer"){
            let item={}
            item.caption=listadoResena[i].Comentario
            item.link=listadoResena[i].Link
            temp.push(item)
           }
        }

        return <div style={{backgroundColor:"white"}}>
        <div className="Titulo2">
        <button style={{display:selection=="influencers"?"flex":"none"}} id="content-reviews-button" onClick={()=>{setSelection("reviews")}}>Back</button>
            <h2>Influencers</h2></div>

        <div className="row" >
            <div className="col">
            <iframe width="560" height="315" src={temp[0].link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="video_mobile"></iframe>
            <div style={{width:"86%",paddingTop:"20px",backgroundColor:"#f3e5f5",borderRadius:"20px",marginTop:"20px",marginBottom:"20px"}} id="video_caption_mobile">
                <div style={{display:"flex",flexDirection:"row",backgroundColor:"transparent"}}>
                <p style={{color:"#ab47bc",fontSize:"50px",padding:"20px"}}>"</p>
                <p>{temp[0].caption} </p>
                <p style={{color:"#ab47bc",fontSize:"50px",padding:"20px"}}>"</p>
                </div>
            </div>
            </div>
            <div className="col" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <iframe width="560" height="315" src={temp[1].link}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="video_mobile"></iframe> 
            <div style={{width:"86%",paddingTop:"20px",backgroundColor:"#ffebee",borderRadius:"20px",marginTop:"20px",marginBottom:"20px"}} id="video_caption_mobile">
                <div style={{display:"flex",flexDirection:"row",backgroundColor:"transparent"}}>
                <p style={{color:"#ef5350",fontSize:"50px",padding:"20px"}}>"</p>
                <p>{temp[1].caption} </p>
                <p style={{color:"#ef5350",fontSize:"50px",padding:"20px"}}>"</p>
                </div>
            </div>
            </div>



            
         </div>
         
        </div>
    }
    const reviewCard = (name,description,puntaje) =>{
        return <div id="content-reviews-card">
            <div style={{display:"flex",flexDirection:"row"}}>
                <h2>{name}</h2>
                {Array(puntaje).fill(0).map((_,index)=>{
                    return <img src="/icons/star-filled.png" style={{width:"30px",height:"30px",filter:"grayscale(100%)"}}/>
                })}
            </div>
            <p>{description}</p>
        </div>
    }
    const printStars = ()=>{
        if(puntajeGlobal>=0){
            const stars=Array(puntajeGlobal).fill(0).map((_,index)=>{
                return <img src="/icons/star-filled.png"/>
            })
            return stars
        }else{
            const stars=Array(5).fill(0).map((_,index)=>{
                return <img src="/icons/star-filled.png"/>
            })
            return stars
        }

    }
    const showContent = (selection) =>{
        switch(selection){
            case "reviews":
                return <div><h1>User reviews</h1>
            <div class="inline" style={{borderBottom: "1px solid lightgray",paddingBottom:"10px"}}><h2>Global rate</h2>
            {   
                printStars()
            }
        
            </div>
            <div>{reviewCard("Juan Lopez","I completely recommend this service",5)}
            {reviewCard("Jhon Doe","Great service",5)}
            {reviewCard("Carl Johnson","Pc well built and nice case quality",5)}
            {Array(listadoResena.length).fill(0).map((_,index)=>{
                return reviewCard(`${listadoResena[index].Usuario.Nombre} ${listadoResena[index].Usuario.Apellido}`,listadoResena[index].Comentario,listadoResena[index].Puntaje)
            })}
            </div>
            </div>
            case "influencers":
                return influencers();
        }
        
    }
    return <div id="content-reviews-background">
        <div id="content-reviews-content">
            
            {showContent(selection)}
            <button style={{display:selection=="reviews"?"flex":"none"}} id="content-reviews-button" onClick={()=>{setSelection("influencers")}}>Checkout our video reviews!</button>
            <p id="space-reviews">.</p>
        </div>
        
    </div>
}
export default Reviews;