import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../About.css";
import About from "../About";
import Next from "../Next"; // Assuming Next is a React component

export default function Aboutus() {
  return (
    <div className="layout">
      <div className="header">
        <Navbar />
      </div>
      <div className="content">
        <About />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="next">
        <Next />
      </div>
    </div>
  );
}
