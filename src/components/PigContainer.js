import React, { Component } from "react";
import PigCard from "./PigCard"

//this is going to render a select form so that users can select from s dropdown of options
class PigContainer extends Component {
  renderPigCards = () => {
    return this.props.hogs.map(hogObj => {return <PigCard hog={hogObj}/>})
  }
  render() {
    return (
        <div className="ui grid container">
          <div className="ui eight wide column">
            <div className="ui cards">{this.renderPigCards()}</div>
          </div>
        </div>
    )
  }
}

export default PigContainer;