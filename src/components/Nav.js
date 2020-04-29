import piggy from "../porco.png";
import React from "react";

const Nav = () => {
  return (
    <div className="navWrapper">
      <p className="headerText">Hogwarts</p>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <p className="normalText">A React App for County Fair Hog Fans</p>
    </div>
  );
};

export default Nav;