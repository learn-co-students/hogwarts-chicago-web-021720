import React, { Component } from 'react'
import Hog from './Hog'


export class DisplayHogs extends Component {

    render() {
        return (
            <div className="ui grid container cards">
                {this.props.hogs.map(hog => <Hog hog={hog}/>)}
            </div>
        )
    }
}

export default DisplayHogs
