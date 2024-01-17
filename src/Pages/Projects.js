import React from "react";
import { ReactDOM } from "react-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./You.css";
import img from "../images/22.jpg";
import img2 from "../images/33.jpg";
import img3 from "../images/44.jpg";
import img4 from "../images/11.jpg";
import Myprojects from "./Myprojects";
export default function Projects(props){
    return(
        <div className="aboutpage">
             <div className="header">
                <Navbar />
              </div>
     
    <div className="Projects">
       <Myprojects
       img={img}
       title="Non Governmental Organization"
       name="Bright Thought"
       
       />
        <Myprojects
       img={img2}
       title="Private organization"
       name="Byte PLC"
       
       />

<Myprojects
       img={img3}
       title="Trading Organization!"
       name="Beemnet Fitness"
       
       />

<Myprojects
       img={img4}
       title="Marketing Organization"
       name="Ethio Alert"
       
       />
        {/* <h1>{props.setup}</h1>
        <h1>{props.punchline}</h1> */}
    </div>





     <div className="footer">
                <Footer />
              </div>

        </div>
    )
}