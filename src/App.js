import "./App.css";
import React from "react";

let indets = [];
let img = "";

let text = [
  "I'm thinking 'bout you every day",
  "I think we should spend some time away",
  "stay with me in Heaven everyday",
  "I wanna feel your body on me",
  "Tall palm trees and kaleidoscope dreams",
  "I'm at home thinking 'bout you and me",
  "'Cause girl, I got that cabin fever",
  "You made me a believer",
  "Eating marshmallow pies, I can see it in your eyes",
];

for (let index = 1; index < 10; index++) {

  if(index < 10){
    img = "0"+index+".jpg"; 
    console.log(`./assets/images/${img}`);
  
  }

  indets.push(
    <div className="contenedor">
      <div className="box">
        <div>
          <img
            className="center"
            src={require(`./assets/images/${img}`)}
            alt="hey"
          />
        </div>
        <div id="mytext" class="centered mytext hide">
          {text[index - 1]}
        </div>
      </div>
    </div>
  );

}

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="container">
          <div className="col-sm-8 col-md-12 col-lg-12 pt-5">
            <p className="Title-header">A Sunset Reminder</p>
            <hr></hr>
            <div className="box-body">{indets}</div>
            <hr></hr>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
