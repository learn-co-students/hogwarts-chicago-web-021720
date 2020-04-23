import React from "react";
import HogInfo from "./HogInfo"

class Hog extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }

    expand = event => {
        this.setState(prevState => {
            return {expanded: !prevState.expanded}
        })
    }

    imgName = () => {
        const underscoredName = this.props.hog.name.toLowerCase().split(" ").join("_")
        return `/hog-imgs/${underscoredName}.jpg`
    }

    render() {
      return (
        <div className="ui eight wide column">
            <div className="ui card">
                <div className="image">
                    <img onClick={this.expand} src={this.imgName()} />
                </div>
                <div className="content">
                    <h1>{this.props.hog.name}</h1>
                    {this.state.expanded ? <HogInfo hog={this.props.hog} /> : null}
                </div>
                <div className="extra content">
                    <button onClick={() => this.props.hideHog(this.props.hog.name)}>Hide Pig</button>
                </div>
            </div>
        </div>
      );
    }
}

export default Hog;
