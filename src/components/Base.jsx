import React, { useState } from "react";
import "./style.css";
import Footer from "./Footer";
import Content from "./Content";
import Homepage from "./Homepage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import BeginnerOptions from "./BeginnerOptions";
import CreateUser from "./createUser";
import AdvancedOptions from "./AdvancedOptions";
import BeginnerRecommendation from "./BeginnerRecommendation";
import PreCheckout from "./PreCheckout";
import Checkout from "./Checkout";
import User from "./User";
import Support from "./Support";
import About from "./About"
import Reviews from "./Reviews";
import Ranking from "./Ranking";
import Search from "./Search";
import { useEffect } from "react";
import { allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
    windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
    codingComponentes, officeComponents, renderingComponents, otherComponents,
    possibleCheckoutItems} from "./models/dataScript";
import MyStory from "./MyStory";

const Base = (props) =>{
    const [selected, setSelected] = React.useState(0);
    const [click, setClick] = React.useState(0);
    const [found,setFound]=React.useState(false);
    const [messageDelay,setMessageDelay]=useState("");
    let selection=0;
    const[num,setNum]=useState(0)
    
    const [message, setMessage] = useState('');
    const [xpos,setXpos]=useState(-1);
    const [ypos,setYpos]=useState(-1);

    const [position,setPosition]=useState(-1)

    const [listadoAllProductos,setListadoAllProductos]=useState([])

    const httpObtenerProductos = async () => {
        const resp = await fetch(`http://localhost:9999/producto`)
        const data = await resp.json()
        setListadoAllProductos(data)
    }

    console.log(listadoAllProductos)
    console.log(position)

    const [isActive, setIsActive] = React.useState(false);
    const handleClick = () => {
        if(selection==0){
            setIsActive(current => !current);
            selection++;
        }else{

        }
      };
    
    useEffect(() => {
        if(num<2){
        setNum(num+1)
        if(num==1){
            httpObtenerProductos()
        }}
        console.log("Search message inside useEffect: ", message);
        setXpos(-1);
           setYpos(-1);
            for(let i=0;i<allItems.length;i++){
                for(let j=0;j<allItems[i].length;j++){
                    if(allItems[i][j].name==message){
                        setXpos(i);
                        setYpos(j);
                   }
                }
            }
        setPosition(-1)
        for(let i=0;i<listadoAllProductos.length;i++){
            if(listadoAllProductos[i].Nombre==message){
                setPosition(i)
            }
        }
    }, [message]);


    const searchBar= ()=>{
        
        const handleChange = event => {
            setMessage(event.target.value);
            console.log(message);
        }
        let possibleSearch={};
        possibleSearch.img="";
        possibleSearch.name="";
        if(xpos>-1 && ypos>-1){
            possibleSearch.img=allItems[xpos][ypos].img;
            possibleSearch.name=allItems[xpos][ypos].name;
        }
        return <div id="searchbar" style={{display:isActive==true ? "flex":"none"}}>
            
            <a href={message!=""?"/Search":""} ><button onClick={()=>{
                if(message!=""){
                    localStorage.setItem("search",message);
                }
            }}>Search</button></a>
            <input 
        id="message"
        name="message"
        onInput={handleChange}
         type="text"/>
        <div id="searchPopup">
            <div className="inline">
            <img src={possibleSearch.img}/>
            <b>{possibleSearch.name}</b>
            <p style={{display:xpos==-1?"flex":"none"}}>Searching... &#128270;</p>
            </div>
            <p style={{display:message.length>0&&xpos==-1?"flex":"none"}}>{message}</p>
            <p style={{display:xpos>-1?"flex":"none"}} id="searchPopupLine">press  search  to find details</p>
            </div>
        </div>
    }

    const onItemSelected=(emoji)=>{
        setClick(emoji);
        if(props.callback){
          props.callback(emoji);
        }
     };
     console.log(click);
    const pathname = window.location.pathname;
    return <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"/>
        <div>
        
        <div id="navbar">
            <div id="icon">
                <img id="icon-img" src="images/game-icon-white.png" style={{display: pathname=="/homepage" ? "none" :"flex"}}/>
                
            </div>
            <div id="navbar-sections">
                <a href="/homepage"><button style={{fontWeight:click==1?"bold":"normal"}} onClick={()=>{onItemSelected(1);}}>Home</button></a>
                <a href="/about"><button style={{fontWeight:click==2?"bold":"normal"}} onClick={()=>{onItemSelected(2);}}>About</button></a>
                <a href="/support"><button style={{fontWeight:click==3?"bold":"normal"}} onClick={()=>{onItemSelected(3);}}>Support</button></a>
                <a href="/reviews"><button style={{fontWeight:click==4?"bold":"normal"}} onClick={()=>{onItemSelected(4);}}>Reviews</button></a>
                <a href="/ranking"><button style={{fontWeight:click==5?"bold":"normal"}} onClick={()=>{onItemSelected(5);}}>Ranking</button></a>
            </div>
            {searchBar()}
            <div id="navbar-profile">
                <button onClick={()=>{handleClick()}}><img src={isActive==false ? './icons/search.png':'./icons/exit.png'}/></button>
                <a href="/user"><button><img src={'./icons/user.png'}/></button></a>
                <a href="/pre-checkout"><button><img src={'./icons/cart.png'}/></button></a>
            </div>
            </div>
            <div id="content">
            
            <div>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateUser/>}/>
                    <Route path="/create-user" element={<CreateUser/>}/>;
                    <Route path="/homepage" element={<Homepage/>}/>
                    <Route path="/beginner-options" element={<BeginnerOptions/>}/>
                    <Route path="/advanced-options" element={<AdvancedOptions/>}/>
                    <Route path="/beginner-recommendation" element={<BeginnerRecommendation/>}/>
                    <Route path="/pre-checkout" element={<PreCheckout/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/user" element={<User/>}/>
                    <Route path="/support" element={<Support/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Reviews" element={<Reviews/>}/>
                    <Route path="/Ranking" element={<Ranking/>}/>
                    <Route path="/Search" element={<Search/>}/>
                    <Route path="/story" element={<MyStory/>}/>
                </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
            <div id="mobile-nav">
                <button><a href="/user"><img src={'./icons/user.png'}/></a></button>
                <button onClick={()=>{handleClick()}}><img src={isActive==false ? './icons/search.png':'./icons/exit.png'}/></button>
                <button><a href="/pre-checkout"><img src={'./icons/cart.png'}/></a></button>
                </div>
        </div>
        </div>
        </div>
}
export default Base;