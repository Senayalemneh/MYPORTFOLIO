import React from "react";
import { ReactDOM } from "react-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./You.css";
import Meme from "./Meme";
export default function Contactpage(){

  const names=["Senay","Aklil","Marshet","Elsa"]
    return(
        <div className="aboutpage">
             <div className="header">
                <Navbar />
              </div>
              <div>
                <Meme />
              </div>
        <div>
         <ul>
            {
             names.map((name,index)=>(
         <li className="contact">{name} is the {index}'s in the Array List! </li>
            ))
             }
          </ul>
        </div>


            <div className="footer">
                <Footer />
              </div>

        </div>
    )
}