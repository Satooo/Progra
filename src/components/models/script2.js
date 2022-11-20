import React from 'react';
let content=document.getElementById("content");

let componentsPriceText=document.getElementById("componentsPrice");
let beginnerComponentsPrice=document.getElementById("beginner-components-price");

let possibleCheckoutItems=[];
let next = document.getElementById("nextButton");
let startRecommend=document.getElementById("startRecommend");
let beginnerRecommendedComponents=document.getElementById("beginner-components-grid");

let optionButton=document.querySelectorAll(".optionButton");
let optionRecommended=null;

let buyNum=0;
let graphicItems=[{
    "name":"NVIDIA GeForce GTx",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce GTx",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce GTx",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce GTx",
    "price":400,
    "img":"images/graphic.png"
}];
let processorItems=[{
    "name":"Intel I3",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I5",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I7",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I9",
    "price":400,
    "img":"images/processor.png"
}];
let memoryItems=[{
    "name":"RAM 4gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 8gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 16gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 32gb",
    "price":400,
    "img":"images/memory.png"
}];
let storageItems=[{
    "name":"Toshiba 500GB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 1TB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 2TB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 3TB",
    "price":400,
    "img":"images/storage.png"
}];
let coolerItems=[{
    "name":"Cooler 10",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 20",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 30",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 40",
    "price":400,
    "img":"images/cooler.png"
}];
let windowsItems=[{
    "name":"Windows 8 32bit AMD",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit AMD",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit Intel",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit Intel",
    "price":400,
    "img":"images/windows.png"
}];
let powersupplyItems=[{
    "name":"PowerSupply Base",
    "price":200,
    "img":"images/power.png"
},{
    "name":"PowerSupply Max",
    "price":200,
    "img":"images/power.png"
}];

let gamingComponents = [
    1,3,2,0,1,1,0
];
let designComponents = [
    2,3,3,0,1,1,1
];
let codingComponentes = [
    3,3,3,3,1,1,1
];
let renderingComponents = [
    3,2,2,3,1,1,1
];
let officeComponents = [
    0,1,1,3,1,0,0
];
let otherComponents = [
    0,1,1,3,1,0,0
];

let allItems=[
    graphicItems,processorItems,memoryItems,storageItems,coolerItems,windowsItems,powersupplyItems
]
optionButton.forEach(
    function(button){
        button.addEventListener("click",()=>{
            document.getElementById(button.id).style.border="3px solid white";
            optionRecommended=button.id;
            localStorage.setItem("recommendType",optionRecommended);
            startRecommend.setAttribute("href","beginner-recommendation.html");
            optionButton.forEach(
                function(button){
                    if(button.id!=optionRecommended){
                        document.getElementById(button.id).style.border="3px solid transparent";
                    }
                }
            );
        });
    }
);
function addToPossibleCheckout(name,price,imgSrc,order){
    let item = {}
    item.name=name;
    item.price=price;
    item.imgSrc=imgSrc;
    item.id=order;
    possibleCheckoutItems.push(item);
}
function createComponentCard(imgSrc,component,price){
    let componentCardCol=document.createElement("div");
    componentCardCol.setAttribute("id","content-beginner-recommendation-components-col");
    componentCardCol.setAttribute("class","col");
    let componentCardImg=document.createElement("img");
    componentCardImg.setAttribute("src",imgSrc);
    let componentCardTitle=document.createElement("p");
    componentCardTitle.innerHTML=component
    let componentCardPrice=document.createElement("p");
    componentCardPrice.innerHTML=price;
    componentCardCol.appendChild(componentCardImg);
    componentCardCol.appendChild(componentCardTitle);
    componentCardCol.appendChild(componentCardPrice);
    return componentCardCol;
}

function beginnerRecommendationGeneration(){
    let rowNum=0;
    let tempPrice=0;
    let componentCardRow;
    let recommendType=localStorage.getItem("recommendType");
    if(recommendType==null){
        recommendType="gaming";
    }
    let recommendTypeComponents;
    switch(recommendType){
        case "gaming":
            recommendTypeComponents=gamingComponents;
            break;
        case "design":
            recommendTypeComponents=designComponents;
            break;
        case "coding":
            recommendTypeComponents=codingComponentes;
            break;
        case "rendering":
            recommendTypeComponents=gamingComponents;
            break;
        case "office":
            recommendTypeComponents=officeComponents;
            break;
        case "other":
            recommendTypeComponents=otherComponents;
            break;
    }
    for(let i=0;i<7;i++){
        buyNum++;
        if(rowNum==0){
            componentCardRow=document.createElement("div");
            componentCardRow.setAttribute("class","row");
        }
        rowNum++;
        let tempcol = createComponentCard(allItems[i][recommendTypeComponents[i]].img,allItems[i][recommendTypeComponents[i]].name,allItems[i][recommendTypeComponents[i]].price);
        addToPossibleCheckout(allItems[i][recommendTypeComponents[i]].name,allItems[i][recommendTypeComponents[i]].price,allItems[i][recommendTypeComponents[i]].img,buyNum);
        tempPrice+=Number(allItems[i][recommendTypeComponents[i]].price);
        componentCardRow.appendChild(tempcol);
        if(rowNum==2){
            beginnerRecommendedComponents.appendChild(componentCardRow);
            rowNum=0;
        }
        if(i==6){
            let tempcol = createComponentCard("","","");
            componentCardRow.appendChild(tempcol);
            beginnerRecommendedComponents.appendChild(componentCardRow);
            rowNum=0;
        }
    }
    beginnerComponentsPrice.innerHTML=`<b>$ ${tempPrice}</b>`;
    console.log(possibleCheckoutItems);
}
beginnerRecommendationGeneration();
next.href="pre-checkout.html";
next.addEventListener("click",()=>{
    localStorage.setItem("checkoutItems",JSON.stringify(possibleCheckoutItems));
});
