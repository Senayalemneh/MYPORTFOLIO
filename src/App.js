import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './About';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Next from './Next';
import Previousworks from "./components/Previousworks";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import "./Pages/About.css";
// pages
import Projects from './Pages/Projects';
import Contactpage from './Pages/Contactpage';
import Aboutpage from './Pages/Aboutus';
import NoPage from './Pages/NoPage';
import Homepage from './Pages/Homepage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"    element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={
        <div>
        <Projects 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        />
        </div>
       }/>

        <Route path="/contact" element={<Contactpage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
