import React, { Component } from "react";
import Pig from "./pig"

export default class Pigs extends React.Component {
  constructor(props){
    super(props)
    console.log(props.piggies);
  }

  renderPiggies = () => this.props.piggies.map(piggie =>
            <Pig
              pig = {piggie} key={Math.random()} showDetails={this.props.showDetails}

            />)

  render(){
    return <div className="ui link cards">{this.renderPiggies()}</div>
  }


}
