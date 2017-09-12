import React, { Component } from "react";
import "../main.css";

import CallBar from "./CallBar"
import CallsRanking from "./CallsRanking"

export default class StatTracking extends Component {
  render() {
    return (
      <div className="stattracking">
        <CallBar/>
				<CallsRanking/>
      </div>
    );
  }
}
