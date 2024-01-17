import React from "react";
import { ReactDOM } from "react";
import MImage from "./Images/Meme Image.png";
import memesData from "./memesData";
export default function Meme(){
    
   
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    // here we gonna substite the code 
    const [header , SetHeade] =React.useState(99);
    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }
    
    
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    const [memesImage , setmemesImage]=React.useState();
  function handlebuttonclick(){
    const imageurl=memesData.data.memes;
    const num=Math.floor(Math.random()*imageurl.length)
    console.log(imageurl[num].url)
    setmemesImage(imageurl[num].url);

  }
      return (
        <div>
             <div className="meme-nav">
       <img src={MImage} />
       <h2>Meme Generator</h2>
       <h4>React Course - Project 3</h4>
             </div>
             <div>
               {thingsElements}
             </div>   
             <div className="meme-body">
              <form>
                <input type="text" placeholder="Top text" className="input1"/>
                <input type="text" placeholder="Bottom text" className="input2"/>
              </form>
             </div>
             <div className="meme-button">
           <button onClick={handlebuttonclick} className="meme-btn">Generate new meme Image</button>
             </div>   
             <img  className="memeimage" src={memesImage} />
              
        </div>
    );
}