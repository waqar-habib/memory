import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li id="current">Your Score: {props.score}</li>      
      
      <li id="brand" className="brand animated lightSpeedIn">
        <a href="/memory-game/">{props.title}</a>
      </li>

      <li id="rw">{props.message}</li>
      
      <li id="top">High Score: {props.topScore}</li>      

    </ul>
  </nav>
);

export default Nav;