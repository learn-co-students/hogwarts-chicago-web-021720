import React, { Component } from 'react'

export class Image extends Component {
    render() {
        return (
            <div className="image">
                <img src={this.props.image}/>
            </div>
        )
    }
}

export default Image