import "./App.css";
import React from "react";

let indets = [];
let img = "";

let text = [
  "You make me think of you",
  "This makes me think of you",
  "I don't know why we don't know ",
  "These feelings in me I can't lose",
  "I don't cry when the sky isn't blue",
  "Cause I get to thinkin' of you",
  "This shit sucks...",
  "Within your touch",
  "",
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
