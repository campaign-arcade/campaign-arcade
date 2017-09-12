import React, { Component } from "react";
import "../main.css";

import RealTime from "./RealTime.js"
import StatTracking from "./StatTracking.js"

export default class MainPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <RealTime/>
				<StatTracking/>
      </div>
    );
  }
}
