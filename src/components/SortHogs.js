import React, { Component } from 'react'


export class SortHogs extends Component {

    render() {
        return (
            <div>
                <label for="select-hogs">Sort By:</label>
                <select id="select-hogs" value={this.props.sortBy} onChange={this.props.onSelectChange}>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>  
            </div>
        )
    }
}


export default SortHogs
