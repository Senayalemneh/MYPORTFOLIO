import React from "react";
import { ReactDOM } from "react";
import "./You.css";
import img from "../images/22.jpg"
export default function Myprojects(props)
{
    return(
   <div className="Mycomp">
<img src={props.img} width="120px"/>
<h1>{props.title}</h1>
<h2>{props.name}</h2>
   </div>
    )
}