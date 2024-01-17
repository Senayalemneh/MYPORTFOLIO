import React from "react";
import "./About.css";
import { ReactDOM } from "react";
import image from "./ethio alert.jpg";
import link from "./components/Previousworks";
import { Link } from "react-router-dom";
export default function Navbar(){
   return(
    <div className="header-nav">
        {/* <img src={image} width="60px" alt="logo"/> */}
        <h1>Senay Alemneh</h1>
        <ul>
            <li><Link to="/"  className="link">Home</Link></li>
            <li><Link to="/about"  className="link">About</Link></li>
            <li><Link to="/projects"  className="link">Projects</Link></li>
            <li><Link to="/contact"  className="link">Contact</Link></li>
            
        </ul>
    </div>
         )   

}