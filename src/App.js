import "./App.css";
import React from "react";

let indets = [];
let img = "";

for (let index = 1; index < 10; index++) {

  if(index < 10){
    img = "0"+index+".jpg"; 
  
  }

  indets.push(
    <div className="box">
      <img
        className="center"
        src={process.env.PUBLIC_URL+img}
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
