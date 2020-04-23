import React, {
  Component
} from "react";

export default class Pig extends React.Component {

  constructor(props) {
    super(props)
  }

  formatImage = imagename => {
    let imgName = imagename.split(' ').join('_').toLowerCase();
    let pics = require(`../hog-imgs/${imgName}.jpg`);
    return pics;
  }

  render() {
    const {
      name,
      specialty,
      greased,
      weight,
      detailShown,
      indexKey
    } = this.props.pig;

    return <div className = "card" > < div className = "image" > < img src = {
      this.formatImage(name)
    }
    /></div > < div className = "content" > {
      name

    }< /div><div className="extra content"><button data-id={indexKey} onClick={this.props.showDetails}>{detailShown ? 'Hide Details' : 'Show Details'}</button></div>
    <div className="extra content">
      {detailShown ? `WEIGHT: ${weight} SPECIALTY: ${specialty}` : 'Detail Not shown'}
    </div>
    </div >
  }
}
