import React, { Component } from "react";
import "../main.css";

import RealTime from "./RealTime.js"
import StatTracking from "./StatTracking.js"

export default class CampaignUserView extends Component {
  render() {
    return (
      <div className="campaignuserview">
				<RealTime/>
				<StatTracking/>
      </div>
    );
  }
}
