import React, { useState } from "react";

const MyStory = ()=>{
    const segment = (title,desc,img) =>{
        return <div style={{diplay:"flex",flexDirection:"column",justifyContent:"center",marginTop:"50px",marginLeft:"50px",alignItems:"center",backgroundColor:"white",borderRadius:"25px"}}>
            <h3 style={{textAlign:"center",color:"black",width:"80%",marginTop:"20px",marginRight:"auto",marginLeft:"auto"}}>{title}</h3>
            <div style={{backgroundColor:"#ce93d8",borderRadius:"20px",width:"250px",height:"200px",color:"transparent",marginRight:"auto",marginLeft:"auto",marginBottom:"20px",overflow:"hidden",marginTop:"40px",filter:"drop-shadow(1px 1px 10px purple"}}>
                <img style={{objectFit:"contain",height:"100%"}} src={`images/${img}.png`}/>
            </div>
            <div style={{borderRadius:"20px",color:"black",padding:"20px",width:"350px",textAlign:"justify",textJustify:"interWord"}}>
                {desc}
            </div>
        </div>
    }
    return <div style={{width:"80%",color:"white",marginLeft:"10%"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <a href ="/homepage" style={{backgroundColor:"#ba68c8",display:"block",width:"150px",textAlign:"center",padding:"20px",borderRadius:"25px",marginRight:"30px"}}><b> Back home</b></a>
            <h1>Nuestras funcionalidades!</h1>
        </div>
        <div style={{display:"flex",flexDirection:"row",overflow:"scroll"}}>
        {segment("Compra para principiantes ","La compra para principiantes consiste en dar recomendaciones de CPU según el uso que le quiere dar el usuario, incluyendo una tabla de sus componentes con sus respectivos precios. ","f1")}
        {segment("Compra para conocedores","La compra para conocedores consiste en que el usuario puede seleccionar y eliminar por su cuenta los componentes que desee para armar su CPU. ","f2")}
        {segment("Búsqueda de productos","Esta función búsqueda le permite al usuario encontrar los ítems que desee. Si le da click en buscar le dirigirá a una página en donde se mostrará las características y precio del ítem. ","f3")}
        {segment("Ranking de los best sellers","En esta función el usuario visualizará una lista de los periféricos y CPU más comprados en la página, también se mostrará una lista de los ítems integrados en cada tipo de CPU.","f4")}
        {segment("Un carrito de compras","El usuario podrá visualizar en el carrito de compras los precios de los componentes que selecciono, así como eliminar los que no desee.","f5")}
        {segment("Historial de compras","Esta función le permitirá al usuario revisar la lista de los componentes comprados con solo ingresando en el icono de perfil.  ","f6")}
        </div>
        
        
    </div>
}
export default MyStory