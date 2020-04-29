import React, { Component } from 'react'
import HogCardFlip from './HogCardFlip'

export class HogCardBack extends Component {
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    render() {
        const { specialty, greased, weight, toggleSide } = this.props
        return (
            <div>
                <p>Specialty: {specialty}</p>
                <p>Greased: {this.capitalize(String(greased))}</p>
                <p>Weight: {weight}</p>
                <HogCardFlip toggleSide={toggleSide}/>
            </div>
        )
    }
}

export default HogCardBack