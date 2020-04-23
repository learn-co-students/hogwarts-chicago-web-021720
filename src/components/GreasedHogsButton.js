import React, { Component } from 'react'

export class GreasedHogsButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onGreasedClick}>{this.props.hideGreased ? 'Show' : 'Hide'} Greased</button>
            </div>
        )
    }
}

export default GreasedHogsButton
