import React from "react";
import "./style.css";

const Footer = ()=>{
    return <div id="footer">
            <div className="row" id="footer-row">
                <div className="col">
                <h1>Sign up to our newsletter for the latest PC news!</h1>
                <div className="inline">
                <input type="text" placeholder="Email"/>
                <button id="subscribe">Subscribe</button>
                </div>
                <div className="inline" id="socialmedia">
                    <button><img src="icons/facebook.png"/></button>
                    <button><img src="icons/twitter.png"/></button>
                    <button><img src="icons/instagram.png"/></button>
                    <a href="https://move-web.peruh.repl.co/" target="_blank"><button><img src="images/easteregg.png"/></button></a>
                </div>
                </div>
                <div className="col" id="footer-col2">
                <div className="row">
                    <div className="col">Build your pc</div>
                    <div className="col">Good</div>
                    <div className="col">Terms & conditions</div>
                </div>
                <div className="row">
                    <div className="col">Why Redux</div>
                    <div className="col">Better</div>
                    <div className="col">Privacy & policy</div>
                </div>
                <div className="row">
                    <div className="col">Support</div>
                    <div className="col">Best</div>
                    <div className="col">Refund policy</div>
                </div>
                </div>
            </div>
            <div id="copyright">
                Grupo 5 - Copyright Ⓡ
            </div>
        </div>
}
export default Footer