import piggy from "../porco.png";
import React from "react";

const Nav = props => {

  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <button onClick={props.allPigs}>All Pigs</button>
      <button onClick={props.greaseFilter}>Greasers Only</button>
      <button onClick={props.sortByName}>Sort By Name</button>
      <button onClick={props.sortByWeight}>Sort By Weight</button>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
