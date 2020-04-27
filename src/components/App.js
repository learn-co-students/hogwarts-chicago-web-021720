import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filters from "./Filters";
import PigContainer from "./PigContainer";

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      filter: 'all'
    }
  }



  onFilterChange = (event) => {
    let filteredHogs = hogs;
    if (event.target.value !== 'all') {
      let trueTest = (event.target.value === "true")
      filteredHogs = hogs.filter(hog => {
        return hog.greased === trueTest
      })
    } 
    
    this.setState({
      filter: event.target.value,
      hogs: filteredHogs
    })
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filters onFilterChange={this.onFilterChange}/>
        <PigContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
