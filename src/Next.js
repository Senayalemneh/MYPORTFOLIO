import React from "react";
import { ReactDOM } from "react";
import "./About.css";

import Image from "./senay image.png";

export default function Next() {
    function handleMouseOver() {
        console.log("Hovered on the Image!");
        // const image = document.getElementById("next-image");
        // if (image) {
        //     image.style.width = "10px";
        // }
    }

    return (
        <div className="next">
            <img
                src={Image}
                onMouseOver={handleMouseOver}
                className="next-image"
                width="400px"
                height="600px"
                alt="Senay Image"
            />
        </div>
    );
}
