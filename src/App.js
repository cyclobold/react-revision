import React from "react";
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Button from "./Components/Button/Button"

class App extends React.Component{

    constructor(){
      super()
      this.username = "James"
      

    }


  


    render(){

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Greeting personname={this.username} age='12' height='5.2' email='james@email.com'>Hello everyone</Greeting>
          
            <Button/>
          </header>
        </div>
      );

    }

}

export default App
