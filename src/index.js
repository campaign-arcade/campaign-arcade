import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./components/MainPage.js";
import BaseLayout from "./components/base_layout.js";
import ScrollToTop from "./components/ScrollToTop.js"

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
			<ScrollToTop>
      <Switch>
        <Route path="/" component={CampaignUserView} />
      </Switch>
			</ScrollToTop>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
