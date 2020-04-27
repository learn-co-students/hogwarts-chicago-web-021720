import React, { Component } from "react";

//this is going to render a select form so that users can select from s dropdown of options
class Filters extends Component {
  render() {
    return (
        <div className="ui form">
            <h3>Greased or naw?</h3>
            <div className="filterWrapper">
            <select name="type" id="type" onChange={event => this.props.onFilterChange(event)}>
                <option value="all">All</option>
                <option value={true}>Greased</option>
                <option value={false}>Not Greased</option>
            </select>
            </div>
        </div>
    )
  }
}

export default Filters;
