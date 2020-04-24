import React, { Fragment } from "react";

class Hog extends React.Component {
  constructor(){
    super()
    this.state = {
      front: true,
      hide: false
    }
  }

  pickASide = () => {
    const { hog } = this.props
    if (this.state.front){
      return (
      <div className="ui card">
        <h1 className="header"> {hog.name}</h1>
        <div className="image">
          <img src={hog.image} alt='hog' />
        </div>
      </div>
      )
    } else {
      return (
      <div className="ui card">
        <h1 className="header">{hog.name}</h1>
        <div className="content">
          <p >Greased: {`${hog.greased}`}</p>
          <p>Highest Medal Achieved: {hog['highest medal achieved']} </p>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
        </div>
      </div>
      )
    }
  }


  flipCard = () => {
    this.setState(prevState => ({
      front: !prevState.front
    }))
  }

  hideCard = () => {
    this.setState(prevState => ({
      hide: !prevState.hide
    }))
  }

  render() {
    return <div onClick={this.flipCard}>
      {!this.state.hide ?
        this.pickASide()
      :
        <div style={{backgroundColor: "pink"}}>-</div>
      }
      <button className='hidebutton' onClick={this.hideCard}>hide pig</button>
    </div>
    
  }
}

export default Hog;
