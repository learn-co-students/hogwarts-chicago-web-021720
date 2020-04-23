import React from "react";
import Hog from "./Hog"

class HogsContainer extends React.Component {
  renderHogs = () => {
    return this.props.hogs.map(hog => <Hog hog={hog} hideHog={this.props.hideHog}/>)
  }
  
  render() {
    return (
      <div className="ui grid container">
        {this.renderHogs()}
      </div>
    );
  }
}

export default HogsContainer;
