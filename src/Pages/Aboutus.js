import React from "react";
import { ReactDOM } from "react-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../About.css";
import "./You.css"
import "./pages.css";
import Image1 from "./Images/FBG PNG white.png";
import PhoneIcon from "./Images/phone number icon.jpg"
export default function Aboutus(){
    return(
        <div className="aboutpage">
            <div className="header">
                <Navbar />
              </div>
  <div className="all">
    <div className="set1">
  <div className="big-img">
<img src={Image1} width="150px" />
  </div>
  <div>
    <h1>Here is the logo of FBG!</h1>
  </div>
  <div className="img-p">
 <img src={PhoneIcon} width="50px" /><p>0908259010</p>
  </div>
  <div className="img-p">
 <img src={PhoneIcon} width="50px" /><p>senayalemneh1992@gmail.com</p>
  </div>


    </div>


    <div className="set2">
  <div className="big-img">
<img src={Image1} width="150px" />
  </div>
  <div>
    <h1>Here is the logo of FBG!</h1>
  </div>
  <div className="img-p">
 <img src={PhoneIcon} width="50px" /><p>0908259010</p>
  </div>
  <div className="img-p">
 <img src={PhoneIcon} width="50px" /><p>senayalemneh1992@gmail.com</p>
  </div>
    </div>


    <div className="set3">
  <div className="big-img">
<img src={Image1} width="150px" />
  </div>
  <div>
    <h1>Here is the logo of FBG!</h1>
  </div>
  <div className="img-p">
 <img src={PhoneIcon} width="50px" /><p>0908259010</p>
  </div>
  <div className="img-p">
 <img src={PhoneIcon} width="50px" /><p>senayalemneh1992@gmail.com</p>
  </div>
    </div>


    <div className="set4">
  <div className="big-img">
<img src={Image1} width="150px" />
  </div>
  <div>
    <h1>Here is the logo of FBG!</h1>
  </div>
  <div className="img-p">
 <img src={PhoneIcon} width="50px" /><p>0908259010</p>
  </div>
  <div className="img-p">
 <img src={PhoneIcon} width="50px" /><p>senayalemneh1992@gmail.com</p>
  </div>
    </div>

    </div>
<div className="footer">
                <Footer />
              </div>
        </div>
    )
}