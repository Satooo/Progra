import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";
import { useState } from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { RUTA_BACKEND } from "../conf";

const CreateUser = () => {
    const navigate = useNavigate(); // Hook de navegacion

    const [selection, setSelection] = useState("login");

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorRegistro, setErrorRegistro] = useState(false)
    const [errorLogin, setErrorLogin] = useState(false)
    const [logged,setLogged]=useState(false)

    const httpRegister = async (user) => {
        //const resp = await fetch("http://localhost:9999/registro", {
        const resp = await fetch(`${RUTA_BACKEND}registro`, {   
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await resp.json();
        if (data.verify) {
            // Se registró satisfactoriamente.
            alert("Cuenta registrada satisfactoriamente!");
            setSelection("login");
        } else {
            // Correo ya registrado.
            setErrorRegistro(true)
        }
    }

    const httpLogin = async (user) => {
        //const resp = await fetch("http://localhost:9999/login", {
        const resp = await fetch(`${RUTA_BACKEND}login`, {   
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await resp.json();
        if (data.verify) {
            // Login correcto.
            setLogged(true)
            alert(`Welcome ${user.email}.`);
            window.location.href="http://localhost:3000/homepage"; // Redireccion con renderizado
            localStorage.setItem("Usuario_correo",user.email)
            
        } else {
            // No existe el usuario. Error.
            setErrorLogin(true)
        }
    }



    const register = () => {
        return <div id="login-menu">
            <h1>Create account</h1>
            <input placeholder="First Name" type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            <input type="text" placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required />
            <input type="text" placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            <input type="password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            <a id="create-account" ><button id="create-button" onClick={() => {
                if (name != "" && lastName != "" && email != "" && password != "") {
                    const user = {};
                    user.name = name;
                    user.lastName = lastName;
                    user.email = email;
                    user.password = password;
                    user.address = "";
                    user.apartment = "";
                    user.city = "";
                    user.zip = "";
                    user.phone = "";

                    httpRegister(user);

                    setName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");

                } else {
                    alert("Fill out all the information!");
                }
            }}>CREATE</button></a>{(() => {
                if (errorRegistro) {
                    return <div className="alert alert-danger">Error. El correo ya se encuentra registrado.</div>
                }
            })()
            }
        </div>
    }
    const login = () => {
        return <div class="Formulario">
            <h1 class="Titulo">LOG IN.</h1>
            <div class="Contenedor">
                <div class="Parrafo">
                    <p>Log in with your details below to view you order.</p>
                </div>

                <div class="contenedor-input">
                    <input type="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required id="Email" />

                </div>

                <div class="contenedor-input">
                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required id="Password" />
                </div>

                <button className="Boton mb-3" id="loginButton" type="button" onClick={() => {
                    if (email != "" && password != "") {
                        const user = {};
                        user.email = email;
                        user.password = password;
                        httpLogin(user);
                        setName("");
                        setLastName("");
                        setEmail("");
                        setPassword("");

                    } else {
                        alert("Fill out all the information!");
                    }
                }}>Sign in</button>{(() => {
                    if (errorLogin) {
                        return <div className="alert alert-danger">Error. El correo o contraseña es invalido.</div>
                    }
                })()
                }

                <div class="Parrafo1">
                    <p>Forgot your password? </p>
                </div>

                <div class="Parrafo2">
                    <strong>
                        <p>Don't have an account? </p>
                    </strong>
                </div>

                <button class="button" id="loginButton" onClick={() => { setSelection("register") }}> Sign up </button>

            </div>
        </div>
    }
    const content = (selection) => {
        switch (selection) {
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