import React from "react";
import ReactDOM from "react-dom";
import image1 from "../images/11.jpg";
import image2 from "../images/22.jpg";
import image3 from "../images/33.jpg";
import image4 from "../images/44.jpg";

export default function Previousworks(){
    return(
        <div className="works-cont">
          <div>
        <img src={image1}/><br></br>
        <h1>Ethio Alert Logo</h1>
        <p>0908259010</p>
        <p>senayalemneh@gmail.com</p>
           </div>
          <div>
        <img src={image2}/><br></br>
        <h1>Ethio Alert Logo</h1>
        <p>0908259010</p>
        <p>senayalemneh@gmail.com</p>
          </div>
          <div>
        <img src={image3}/><br></br>
        <h1>Ethio Alert Logo</h1>
        <p>0908259010</p>
        <p>senayalemneh@gmail.com</p>
          </div>
          <div>
        <img src={image4}/><br></br>
        <h1>Ethio Alert Logo</h1>
        <p>0908259010</p>
        <p>senayalemneh@gmail.com</p>
          </div>
        </div>
    )
};