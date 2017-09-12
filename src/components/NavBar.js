import React, { Component } from "react";
import "../main.css";

import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
      </div>

    );
  }
}
