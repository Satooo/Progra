import React from "react";
import { allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
  windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
  codingComponentes, officeComponents, renderingComponents, otherComponents,
  possibleCheckoutItems} from "./models/dataScript";
import { useState } from "react";

const User = () =>{
    const [selected, setSelected] = React.useState(0);
    const [actualizar,setActualizar]=React.useState(false);
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [apartment,setApartment]=useState("");
    const [city,setCity]=useState("");
    const [country,setCountry]=useState("");
    const [zip,setZip]=useState("");
    const [phone,setPhone]=useState("");
    const [logOut,setLogOut]=useState(false);
    const user=JSON.parse(localStorage.getItem("user"));
 
    const profileInfo = () => {
        return <div className="row">
            <div className="col-3">
                <h3>Default</h3>
                <p>Perú</p>
                <div id="content-user-icon"></div>
            </div>
            <div className="col-7">
                <div className="row">
                    <div className="col">
                        First Name
                        <input className="mt-3 mb-3" placeholder={localStorage.getItem("user")!=null?String(user.name):"name"} value={name}
                onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col">
                        Last name
                        <input className="mt-3 mb-3" placeholder={localStorage.getItem("user")!=null?String(user.lastName):"lastName"} value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <p >Email</p>
                <input style={{width:"100%"}} className="mb-3" placeholder={localStorage.getItem("user")!=null?String(user.email):"email"} value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <p >Address</p>
                <input style={{width:"100%"}} className="mb-3" placeholder={localStorage.getItem("user")!=null?String(user.address):"address"} value={address}
                onChange={(e) => setAddress(e.target.value)}/>
                <div className="row">
                    <div className="col" >
                        Apartment, suit,etc
                        <input  className="mt-3 mb-3" placeholder={localStorage.getItem("user")!=null?String(user.apartment):"apartment"} value={apartment}
                onChange={(e) => setApartment(e.target.value)}/>
                    </div>
                    <div className="col">
                        City
                        <input className="mt-3 mb-3" placeholder={localStorage.getItem("user")!=null?String(user.city):"city"} value={city}
                onChange={(e) => setCity(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Country, Region
                        <input  className="mt-3 mb-3" placeholder={localStorage.getItem("user")!=null?String(user.country):"country"} value={country}
                onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                    <div className="col">
                        Postal code, Zip code
                        <input className="mt-3 mb-3" placeholder={localStorage.getItem("user")!=null?String(user.zip):"ZIP"} value={zip}
                onChange={(e) => setZip(e.target.value)}/>
                    </div>
                </div>
                <p>Phone</p>
                <input style={{width:"100%"}} placeholder={localStorage.getItem("user")!=null?String(user.phone):"phone"} value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
                <div className="row mt-5">
                    <div className="col"><button id="content-user-profile" onClick={()=>{
                        if (name!="" && lastName!="" && email!="" && password!=""){
                            const tempUser={};
                            tempUser.name=name;
                            tempUser.lastName=lastName;
                            tempUser.email=email;
                            tempUser.password=password;
                            tempUser.address="address 123";
                            tempUser.apartment="apartment 123"
                            tempUser.city="Lima"
                            tempUser.country="Perú";
                            tempUser.zip="123";
                            tempUser.phone="936779244";
                            localStorage.setItem("user",JSON.stringify(tempUser));
                        }else{
                            alert("At least fill the fullname, email and password");
                        }
                    }}
>Update info</button></div>
                    <div id="cancel-button" className="col"><button>Cancel</button></div>
                </div>
            </div>
        </div>
    }
    const orderHistory=(actualizar)=>{
        if(localStorage.getItem("orderHistory")!=null){
        const history = JSON.parse(localStorage.getItem("orderHistory"));
        const order=Array(history.length).fill(0).map((_,index)=>{
            return<div id="historyCard">
            <div className="inline">
                <img src={history[index].img}/>
                <p style={{width:"100%"}}>{history[index].name}</p>
                <p><b>${history[index].price}</b></p>
            </div>
            </div>
        });
        return <div>
            {order}
        </div>;
        }else{
            return <h1 style={{width:"100%",height:"100%",textAlign:"center"}} className="mt-5"><b>No items have been bought!</b></h1>
        }
    }
    const showContent = (selected)=>{
        switch(selected){
            case 0:
                return profileInfo();
            case 1:
                return orderHistory();
        }
    }
    const deleteHistory = ()=>{
        localStorage.removeItem("orderHistory");
        setActualizar(true);
    }
    return <div className="row" id="content-user">
    <div id="content-buttons" className="col-3">
        <div className="row"><button id="content-user-buttons" className={selected==1?"content-user-button-selected":""} onClick={()=>{setSelected(1)}}>Order history</button></div>
        <div className="row"><button id="content-user-buttons" className={selected==0?"content-user-button-selected":""} onClick={()=>{setSelected(0)}}>Profile info</button></div>
        <a href={logOut==true?"/create-user":""}><div className="row"><button id="content-user-buttons" onClick={()=>{setLogOut(true)}}>Log out</button></div></a>
        <button id="history-clear" style={{display:localStorage.getItem("orderHistory")!=null&&selected==1?"flex":"none"}} onClick={()=>{deleteHistory()}}>Clear history</button>
    </div>
    <div className="col-7" id="content-user-info">
        {showContent(selected)}
    </div>
    
    </div>
}
export default User;