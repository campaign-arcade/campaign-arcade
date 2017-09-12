import React, { Component } from "react";
import "../main.css";

import NavBar from "./NavBar.js"
import Title from "./Title.js"

export default class Header extends Component {
  render() {
    return (
      <div className="header row">
        <Title/>
				<NavBar/>
      </div>

    );
  }
}
