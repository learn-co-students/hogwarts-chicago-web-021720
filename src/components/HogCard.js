import React, { Component } from 'react'
import HogCardBack from './HogCardBack'
import HogCardFront from './HogCardFront'

class HogCard extends Component {
    constructor() {
        super()

        this.state = {
            frontSide: true  // Show front of card by default
        }

        this.toggleSide = this.toggleSide.bind(this)
        this.renderCard = this.renderCard.bind(this)
    }

    toggleSide() {
        this.setState(prevState => {
            return {
                frontSide: !prevState.frontSide
            }
        })
    }

    renderCard() {
        const { name, image, specialty, greased, weight } = this.props.hog

        if (this.state.frontSide) {
            return <HogCardFront name={name} image={image} toggleSide={this.toggleSide}/>
        } else {
            return <HogCardBack specialty={specialty} greased={greased} weight={weight} toggleSide={this.toggleSide}/>
        }
    }

    render() {
        return (
            <div className="ui card centered four wide column">
                {this.renderCard()}
            </div>
        )
    }
}

export default HogCard