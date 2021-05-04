import React, { Component } from 'react';
import classes from './App.css';
import CalculateScore from'./Components/CalculateScore';
class App extends Component{
  render(){
    return(
      <div className="App">
        <CalculateScore Name={"deepthi"} 
        School={"oxford"} 
        Total={283} 
        Goal={3}/>
      </div>
    )
  }
}
export default App;