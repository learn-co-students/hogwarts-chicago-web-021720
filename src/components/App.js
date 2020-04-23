import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
    }
  }

  allPigs = () => {
    this.setState({
        hogs: hogs,
      })
  }

  greaseFilter = () => {
    this.setState(prevState => {
      return {
        hogs: prevState.hogs.filter(hog => hog.greased === true),
      }
    })
  }

  nameSortHelper = (a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0
  }

  sortByName = () => {
    this.setState(prevState => {
      return {
        hogs: prevState.hogs.sort(this.nameSortHelper)
      }
    })
  }

  sortByWeight = () => {
    this.setState(prevState => {
      return {
        hogs: prevState.hogs.sort((a, b) => a.weight - b.weight)
      }
    })
  }

  hideHog = name => {
    this.setState(prevState => {
      return {
        hogs: prevState.hogs.filter(hog => hog.name !== name)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Nav
          allPigs={this.allPigs}
          greasedOnly={this.state.greasedOnly}
          greaseFilter={this.greaseFilter}
          sortByName={this.sortByName}
          sortByWeight={this.sortByWeight}
        />
        <HogsContainer
          hogs={this.state.hogs}
          hideHog={this.hideHog}
        />
      </div>
    );
  }
}

export default App;
