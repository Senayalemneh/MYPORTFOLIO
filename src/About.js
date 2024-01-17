import React from "react";
import { ReactDOM } from "react";
import "./About.css";

export default function About() {

    const handleClick = () => {
        console.log("You just clicked the button. Thank you!");
        alert("I'm busy now, I will contact you later!")
    }

    return (
        <div className="about">
            <h1>I am Senay Alemneh</h1>
            <h2>Web Designer & Graphic Designer</h2>
            <h3>My name is Senay Alemneh, passionate web designer and graphics designer graduated from Addis Ababa University.</h3>
            <form>
                <button className="btn" onClick={handleClick}>Let's talk</button>
            </form>
        </div>
    );
}
