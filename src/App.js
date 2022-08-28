import "./App.css";
import React from "react";
import image from './assets/images/01.jpg';


let indets = [];
let img = "";

for (let index = 1; index < 10; index++) {

  if(index < 10){
    img = "0"+index+".jpg"; 
    console.log(`./assets/images/${img}`);
  
  }

  indets.push(
    <div className="box">
      <img
        className="center"
        src={require(`./assets/images/${img}`)}
        alt="hey"
      />
    </div>
  );

}

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="container col-12">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mx-auto pt-5">
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
