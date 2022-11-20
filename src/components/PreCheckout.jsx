import React from "react";
import { allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
  windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
  codingComponentes, officeComponents, renderingComponents, otherComponents,
  possibleCheckoutItems} from "./models/dataScript";
import { useState } from "react";

const PreCheckout =()=>{
    const [click,setClick]=useState(false);
    
    let possibleCheckoutItems;
    if(localStorage.getItem("possibleCheckoutItems")!=null){
        possibleCheckoutItems=JSON.parse(localStorage.getItem("possibleCheckoutItems"));
    }else{
        possibleCheckoutItems={}
    }

    const getPrice=()=>{
        let totalPrice=0;
        if(possibleCheckoutItems.length>0){
        for(let i=0;i<possibleCheckoutItems.length;i++){
            totalPrice+=possibleCheckoutItems[i].price;
        }}
        return <span>{totalPrice}</span>;
    }

    const possibleCheckoutCard = (name,price,img,order)=>{
        return <div className="content-advanced-buyCard">
            <img src={img}/>
            <div className="content-advanced-buyCard-text">
                <p><b>{name}</b></p>
                <p className="content-advanced-buyCard-text-price">${price}</p>
            </div>
            <button className="content-advanced-buyCard-addButton" onClick={()=>{
                for(let i=0;i<possibleCheckoutItems.length;i++){
                    if(possibleCheckoutItems[i].order==order){                    
                    possibleCheckoutItems.splice(i,1);
                    setClick(true);
                    localStorage.setItem("possibleCheckoutItems",JSON.stringify(possibleCheckoutItems));
                    setTimeout(()=>{setClick(false)},10);
                    }
                }
                console.log(possibleCheckoutItems);
            }}>x</button>
            </div>
    }
    const showPossibleCheckout = (click)=>{
        console.log(possibleCheckoutItems);
        if(possibleCheckoutItems.length>0){
        const checkout=Array(possibleCheckoutItems.length).fill(0).map((_,index)=>{
            return possibleCheckoutCard(possibleCheckoutItems[index].name,possibleCheckoutItems[index].price,possibleCheckoutItems[index].img,possibleCheckoutItems[index].order);
        })
        return checkout;
        }
        else{
            return <h1 style={{textAlign:"center"}} id="mobile-precheckout-noitems">No more items</h1>;
        }
    }

    return <div id="content-margin" style={{width: "90%"}}>
        <div className="inline" id="mobile-brecommend-nav">
            <h1 style={{width: "50%"}}>Shopping cart items</h1>
            
            <div style={{width: "100%"}}></div>
            <a href="/homepage" style={{width:"15%",backgroundColor: "white",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}} id="mobile-boptions-nav-b1">
                <button style={{width:"100%"}}>  Back </button></a>
                <a style={{width:"20%",backgroundColor: "#ba68c8",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}} href={possibleCheckoutItems.length>0 ? "/checkout":""} id="next">
                    <button style={{width: "100%",color:"white"}}>Checkout </button></a>
        </div>
            <div className="col" id="mobile-cart">
                <div style={{width:"90%",marginTop: "50px"}}>
                <div style={{marginRight:"auto",marginLeft:"auto",width:"30%",backgroundColor:"rgba(0, 0, 0, 0.5)",textAlign:"center",borderTopRightRadius:"10px",borderTopLeftRadius:"10px",padding:"10px"}} id="mobile-cart-pad"><b>${getPrice()}</b></div>
                <div id="list-checkout" style={{width:"60%",marginLeft:"auto",marginRight:"auto",backgroundColor:"rgba(0, 0, 0, 0.5)",padding: "20px",borderRadius:"10px"}} >
                {showPossibleCheckout(click)}
                </div>
                
                </div>
            </div>
        </div>
}
export default PreCheckout;