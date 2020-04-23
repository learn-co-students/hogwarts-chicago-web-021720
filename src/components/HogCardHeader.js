import React, { Component } from 'react'

export class HogCardHeader extends Component {
    
    render() {
        return (
            <div className="content">
                <a className="header">{this.props.name}</a>
            </div>
        )
    }
}

export default HogCardHeader
