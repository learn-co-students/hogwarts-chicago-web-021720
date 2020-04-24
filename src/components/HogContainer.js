import React, { Fragment } from "react";
import Hog from "./Hog"


class HogContainer extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        hogs: [...this.props.hogs]
      }
    }

  createHogCards = () => {
    return this.state.hogs.map(hog => {
      return (
      <div key={hog.name} className="ui eight wide column">
        <Hog hog={hog} />
      </div>
      )
    })
  }

  filterGreased = () => {
    const greasedHogs = this.props.hogs.filter(hog => {
      return hog.greased
    })

    this.setState({
      hogs: [...greasedHogs]
    })
  }

  sortName = () => {
    const namedHogs = this.props.hogs.sort((a, b) => {
    return (a.name > b.name) ? 1 : -1
    })
    this.setState({
      hogs: [...namedHogs]
    })
  }

  sortWeight = () => {
    const weightHogs = this.props.hogs.sort((a, b) => {
      return (a.weight > b.weight) ? 1 : -1
      })
    this.setState({
      hogs: [...weightHogs]
    })
  }

  seeAllHogs = () => {
    this.setState({
      hogs: [...this.props.hogs]
    })
  }


  render() {
    return (
      <div className="someshit">
        <div id="buttons">
          <button className="ui button" onClick={this.seeAllHogs}>Let's See Them Hogs</button>
          <button className="ui button" onClick={this.filterGreased}>See The Greasy Hogs</button>
          <button className="ui button" onClick={this.sortName}>Sort By Name</button>
          <button className="ui button" onClick={this.sortWeight}>Sort By Weight</button>
        </div>
        <div className="ui grid container">{this.createHogCards()}</div>
      </div>
    );
  }
}

export default HogContainer;