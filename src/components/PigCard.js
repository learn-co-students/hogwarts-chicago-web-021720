import React, { Component } from "react";


class PigCard extends Component {
    constructor() {
        super()
        this.state = {
            isClicked: false
        }
    }

    toggleInfo = () => {
        
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }))
    }
    render() {
      return (
        
        <div className="card" onClick={this.toggleInfo}>
            <div className="pigTitle">
                {this.props.hog.name}
            </div>
            <div>
                <img src={this.props.hog.image}></img>
            </div>
            <div className="description">
            {
            this.state.isClicked ? 
            <div><p>Weight: {this.props.hog.weight}</p><p>Specialty: {this.props.hog.specialty}</p><p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p></div>:
            null
            }
            </div>
            <div className="extra content">

            </div>
        </div>
      )
    }
  }
  
  export default PigCard;