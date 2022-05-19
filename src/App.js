import React from 'react';
import Quehaceres from "./components/Quehaceres/Quehaceres"

class App extends React.Component {

  render(){
    return (
      <div className="container">
        <button className="btn btn-success">Get MERN black belt</button> <br /> <br/>
        <Quehaceres />
      </div>
    );
  }
}

export default App;
