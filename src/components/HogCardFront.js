import React, { Component } from 'react'
import HogCardHeader from './HogCardHeader'
import HogCardFlip from './HogCardFlip'
import Image from './Image'

export class HogCardFront extends Component {
    render() {
        const { image, name, toggleSide } = this.props
        return (
            <div>
                <Image image={image}/>
                <HogCardHeader name={name}/>
                <HogCardFlip toggleSide={toggleSide}/>
            </div>
        )
    }
}

export default HogCardFront