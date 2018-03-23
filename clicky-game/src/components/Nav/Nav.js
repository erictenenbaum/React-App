import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Clicky Game
        </a>
      </div>
      <div className="text-center">
        <h1>{props.message}</h1>
      </div> 
      <div className="text-right">
        <h2>Score: {props.score} | High Score: {props.highScore}</h2>
      </div>     
    </div>
  </nav>
);

export default Nav;
