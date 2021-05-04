import React, { Component } from 'react';
import classes from './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
class App extends Component{
  render(){
    return(
      <div className="container">
       <Home/>
       <About/>
       <Contact/>
      </div>
    )
  }
}
export default App;