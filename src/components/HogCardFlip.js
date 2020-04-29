import React, { Component } from 'react'

export class HogCardFlip extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggleSide}>Flip</button>
            </div>
        )
    }
}

export default HogCardFlip