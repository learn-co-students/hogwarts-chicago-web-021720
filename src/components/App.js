import React, { Component } from "react";
import "../App.css";
import DisplayHogs from "./DisplayHogs"
import GreasedHogsButton from "./GreasedHogsButton"
import SortHogs from "./SortHogs"
import Nav from "./Nav";
import hogs from "../porkers_data";

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      sortBy: 'name',    // Initially sort hogs by name
      hideGreased: true  // Initially hide greased pigs
    }

    this.onSelectChange = this.onSelectChange.bind(this)
    this.onGreasedClick = this.onGreasedClick.bind(this)
    this.getHogsToDisplay = this.getHogsToDisplay.bind(this)
  }
  
  onSelectChange(event) {
    this.setState({
        sortBy: event.target.value
    })
  }

  onGreasedClick() {
    this.setState(prevState => {
      return {
        hideGreased: !prevState.hideGreased
      }
    })
  }

  sortByWeight(hog1, hog2) {
      return (hog1.weight < hog2.weight) ? -1 : (hog1.weight > hog2.weight) ? 1 : 0
  } 

  sortByName(hog1, hog2) {
      return (hog1.name < hog2.name) ? -1 : (hog1.name > hog2.name) ? 1 : 0
  }

  getHogsToDisplay() {
    // Return an array of hogs that are to be displayed (and in the correct order!)
    let hogsToDisplay = this.state.sortBy === 'name' ? hogs.sort(this.sortByName) : hogs.sort(this.sortByWeight)
    if (this.state.hideGreased) {
      hogsToDisplay = hogsToDisplay.filter(hog => !hog.greased)
    }
    return hogsToDisplay
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <SortHogs sortBy={this.state.sortBy} onSelectChange={this.onSelectChange}/>
        <GreasedHogsButton hideGreased={this.state.hideGreased} onGreasedClick={this.onGreasedClick}/>
        <DisplayHogs hogs={this.getHogsToDisplay()}/>
      </div>
    );
  }
}

export default App;