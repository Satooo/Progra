import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";
import { useState } from "react";
import { useReducer } from "react";

const CreateUser = () =>{
    const [selection, setSelection]=useState("login");

    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [logged,setLogged]=useState(false);
    
    const [userExist,setUserExist]= useState(false);


    const register=()=>{
        return <div id="login-menu">
        <h1>Create account</h1>
        <input placeholder="First Name" type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required/>
        <input type="text" placeholder="Last Name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required/>
        <input type="text" placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
        <input type="text" placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
        <a id="create-account" ><button id="create-button" onClick={()=>{
            if(name!="" && lastName!="" && email!="" && password!=""){
                const user = {};
                user.name=name;
                user.lastName=lastName;
                user.email=email;
                user.password=password;
                user.address="address 123";
                user.apartment="apartment 123";
                user.city="Lima";
                user.country="Perú";
                user.zip="123";
                user.phone="936779244";
                localStorage.setItem("user",JSON.stringify(user));
                setSelection("login");
                
                setName("");
                setLastName("");
                setEmail("");
                setPassword("");

            }else{
                alert("Fill out all the information!");
            }
        }}>CREATE</button></a>
    </div>
    }
    const login=()=>{
        return <div class="Formulario">
        <h1 class="Titulo">LOG IN.</h1>
        <div class="Contenedor">
            <div class="Parrafo">
                <p>Log in with your details below to view you order.</p>
            </div>

            <div class="contenedor-input">
                <input type="email" placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} required id="Email"/>

            </div>

            <div class="contenedor-input">
                <input type="password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} required id="Password"/>
            </div>


            <a href={logged==true?"/homepage":""}><button className="Boton mb-5" id="loginButton" onClick={()=>{
                    if (localStorage.getItem("user")!=null){
                        const tmpUser=JSON.parse(localStorage.getItem("user"));
                        if(tmpUser.email==email&&tmpUser.password==password){
                            setLogged(true);
                        }else{
                            alert("Wrong email or password, try again!");
                        }
                    }else{
                        alert("user doesn't exist");
                    }
            
            }}>Sign in</button></a>
            
            <div class="Parrafo1">
                <p>Forgot your password? </p>
            </div>

            <div class="Parrafo2">
                <strong>
                <p>Don't have an account? </p>
                </strong>
            </div>

            
                <button class="button" id="loginButton" onClick={()=>{setSelection("register")}}> Sign up </button>
                
        </div>
        </div>
    }
    const content = (selection) =>{
        switch(selection){
            case "login":
                return login();
            case "register":
                return register();
        }
    }
    return <div id="content-center">
    {content(selection)}
    </div>
}
export default CreateUser;