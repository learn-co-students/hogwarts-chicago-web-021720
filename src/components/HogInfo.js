import React from "react";

class HogInfo extends React.Component {

    render() {
        const hog = this.props.hog

        return (
            <div className="description"> 
                <p>Specialty: {hog.specialty}</p>
                <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                <p>Weight: {hog.weight}</p>
                <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
            </div>
        );
    }
}

export default HogInfo;
