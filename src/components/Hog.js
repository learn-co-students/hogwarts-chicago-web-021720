import React, { Component } from 'react'
import Image from './Image'


class Hog extends Component {

    constructor() {
        super()

        this.state = {
            showDetails: true  // Show details by default
        }

        this.renderDetails = this.renderDetails.bind(this)
        this.toggleShowDetails = this.toggleShowDetails.bind(this)
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    renderDetails() {
        if (this.state.showDetails) {
            const { specialty, greased, weight } = this.props.hog
            return (
                <div className="extra content">
                    <p>Specialty: {specialty}</p>
                    <p>Greased: {this.capitalize(String(greased))}</p>
                    <p>Weight: {weight}</p>
                </div>
            )
        }
    }

    toggleShowDetails() {
        this.setState(prevState => {
            return {
                showDetails: !prevState.showDetails
            }
        })
    }

    render() {
        const { name, image } = this.props.hog

        return (
            <div className="ui card centered four wide column">
                <Image image={image}/>
                <div className="content">
                    <a className="header" onClick={this.toggleShowDetails}>{name}</a>
                </div>
                {this.renderDetails()}
            </div>
        )
    }
}

export default Hog
