import React from "react";
import { allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
  windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
  codingComponentes, officeComponents, renderingComponents, otherComponents,
  possibleCheckoutItems} from "./models/dataScript";
import { useState } from "react";
import { useEffect } from "react";



const AdvancedOptions = (props) => {
  let orderNum=0;
  let [totalPrice,setTotalPrice]=useState(0);
  const [selection, setSelection] = useState("");

  const [click,setClick]=useState(false);
  
  const [categoria,setCategoria]=useState("")

  const [listadoProductos,setListadoProductos]=useState([])


  const httpObtenerProductos = async (categoria) => {
    const resp = await fetch(`http://localhost:9999/producto?categoria=${categoria}`)
    const data = await resp.json()
    setListadoProductos(data)
  }

  
  useEffect(()=>{
    httpObtenerProductos(categoria)
  },[categoria])

  const imageLink = (selection)=>{
    switch(selection){
      case "Graficas":
          return  "images/graphic.png";
  
      case "Procesador":
          return "images/processor.png";
  
      case "Memoria":
        return "images/memory.png";
  
      case "Almacenamiento":
        return "images/storage.png";
  
      case "Cooler":
        return "images/cooler.png";
  
      case "Windows":
        return "images/windows.png";
        
      case "Power":
        return "images/power.png";
    }
  }

  const changeContent = (selection)=>{
    switch(selection){
      case "graphics":
          return  graphicItems;
  
      case "processor":
          return processorItems;
  
      case "memory":
        return memoryItems;
  
      case "storage":
        return storageItems;
  
      case "cooler":
        return coolerItems;
  
      case "windows":
        return windowsItems;
        
      case "powerSupply":
        return powersupplyItems;
    }
  }
  const addPossibleCheckoutItem = (name,price,img,order) =>{
    let item={};
    item.name=name;
    item.price=price;
    item.img=img;
    item.order=`{${name}${order}}`
    possibleCheckoutItems.push(item);
    console.log(possibleCheckoutItems);
  } 
  
  const AComponentAddCard =(name,price,img,order)=>{
    return <div className="content-advanced-buyCard">
        <img src={img}/>
        <div className="content-advanced-buyCard-text">
            <p><b>{name}</b></p>
            <p className="content-advanced-buyCard-text-price">${price}</p>
        </div>
        <button className="content-advanced-buyCard-addButton" onClick={()=>{
            addPossibleCheckoutItem(name,price,img,order);
            let tempPrice=totalPrice+price;
            setTotalPrice(tempPrice);
            setClick(true);
            setTimeout(()=>{setClick(false)},10);
        }}>+</button>
    </div>
  }
  const showContent = (selection) =>{
    if(selection=="" || categoria==""){
      setSelection("graphics")
      setCategoria("Graficas")
    }
    let image=imageLink(categoria)    
    //const Items= Array(tempArray.length).fill(0).map((_,index)=>{
    //  return AComponentAddCard(tempArray[index].name,tempArray[index].price,tempArray[index].img,index);
    //  });
    const Items = Array(listadoProductos.length).fill(0).map((_,index)=>{
      return AComponentAddCard(listadoProductos[index].Nombre,listadoProductos[index].Precio,image,index);
    })
    return Items;
  }
  
  const AComponentSelCard=(name,price,img,order)=>{
    orderNum++;
    return <div className="content-advanced-buyCard" >
        <img src={img}/>
        <div className="content-advanced-buyCard-text">
            <p><b>{name}</b></p>
            <p className="content-advanced-buyCard-text-price">${price}</p>
        </div>
        <button className="content-advanced-buyCard-addButton" onClick={()=>{
          let tag=order;
          for (let i=0;i<possibleCheckoutItems.length;i++){
            console.log(possibleCheckoutItems[i].order);
            if(possibleCheckoutItems[i].order==tag){
              let tempPrice=totalPrice-possibleCheckoutItems[i].price;
              setTotalPrice(tempPrice);
              possibleCheckoutItems.splice(i,1);
              setClick(true);
              setTimeout(()=>{setClick(false)},10);
            }
          }
          console.log(possibleCheckoutItems);
        }}>x</button>
    </div>
  }
  
  const showPossibleCheckout = (click)=>{
    console.log(possibleCheckoutItems.length);
    if(possibleCheckoutItems.length>0){

      const possibleCheckout= Array(possibleCheckoutItems.length).fill(0).map((_,index)=>{
        return AComponentSelCard(possibleCheckoutItems[index].name,possibleCheckoutItems[index].price,possibleCheckoutItems[index].img,possibleCheckoutItems[index].order);
      })
      return possibleCheckout;
      
    }else{
      return <p style={{textAlign:"center"}}>Components will show here..</p>
    }
  }
  const updatePrice=(click)=>{
    console.log(totalPrice);
    return totalPrice;
  }
  
  const saveToStorage=()=>{
    if(possibleCheckoutItems.length>0){
      localStorage.setItem("possibleCheckoutItems",JSON.stringify(possibleCheckoutItems));
  }
  }

    return <div id="content-margin" style={{width: "90%"}}>
    <div className="inline" id="mobile-brecommend-nav">
      <h1 style={{width: "50%"}}>Build your own PC!</h1>
      
        <div style={{width: "100%"}}></div>
        <a href="/homepage" style={{width:"15%",backgroundColor: "white",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}} id="mobile-advanced-nav-b1">
            <button style={{width:"100%"}}> Back </button></a>
            <a style={{width:"20%",backgroundColor: "#ba68c8",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}} id="advanced-pre-checkout" href={possibleCheckoutItems.length>0 ? "/pre-checkout":""}>
                <button style={{width: "100%",color:"white"}} onClick={()=>{saveToStorage()}}>Checkout </button></a>
    </div>
    <div className="row" id="mobile-advanced">
      <div className="col-3" id="mobile-advanced-head1"></div>
      <div className="col-5" id="mobile-advanced-head">
          <div className="row">
              <div className="col-3">
                  <button className="content-advanced-categories-grid-col" id="graphicButton" onClick={()=>{setSelection("graphics"),setCategoria("Graficas")}}>Graphics</button>
              </div>
              <div className="col-3">
                  <button className="content-advanced-categories-grid-col" id="processorButton" onClick={()=>{setSelection("processor"),setCategoria("Procesador")}}>Processor</button>
              </div>
              <div className="col-3">
                  <button className="content-advanced-categories-grid-col" id="memoryButton" onClick={()=>{setSelection("memory"),setCategoria("Memoria")}}>Memory</button>
              </div>
              <div className="col-3">
                  <button className="content-advanced-categories-grid-col" id="storageButton" onClick={()=>{setSelection("storage"),setCategoria("Almacenamiento")}}>Storage</button>
              </div>
          </div>
          <div className="row" style={{marginTop:"20px"}}>
              <div className="col-4">
                  <button className="content-advanced-categories-grid-col" id="coolerButton" onClick={()=>{setSelection("cooler"),setCategoria("Cooler")}}>Cooler</button>
              </div>
              <div className="col-4">
                  <button className="content-advanced-categories-grid-col" id="windowsButton" onClick={()=>{setSelection("windows"),setCategoria("Windows")}}>Windows</button>
              </div>
              <div className="col-4">
                  <button className="content-advanced-categories-grid-col" id="powerButton" onClick={()=>{setCategoria("Power")}}>Power supply</button>
              </div>
          </div>
      </div>
      <div className="col-4" id="mobile-advanced-head1"></div>
    </div>
      <div className="row" id="mobile-advanced-presentation">
        <div className="col-3" id="mobile-advanced-presentation-1">
          <img src="images/pc.png" style={{width: "100%",marginLeft: "-40px"}}/>
          <div style={{backgroundColor:"#673ab7", padding: "20px",borderRadius: "20px",width:"90%"}}>
                <div>Components price</div>
                <div id="componentsPrice" style={{borderBottom: "1px solid white",marginBottom: "10px",paddingBottom: "10px"}}><b>${updatePrice(click)}</b></div>
                <div>Build fee</div>
                <div><b>$99</b></div>
            </div>
        </div>
        <div className="col-5" id="mobile-advanced-presentation-2">
          <div id="buySection" style={{width: "80%",textAlign: "center",marginTop: "50px",marginLeft: "auto",marginRight: "auto"}}>
            {showContent(selection)}
          </div>
        </div>
        <div className="col-4">
          <div style={{width:"90%",marginTop: "50px"}}>
            <div className="buyList" id="mobile-buylist">
              {showPossibleCheckout(click)}
            </div>
          </div>
        </div>
      </div>
  </div>
}
export default AdvancedOptions;