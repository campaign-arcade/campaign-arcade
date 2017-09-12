import React, { Component } from "react";
import "../main.css";

import { withRouter } from 'react-router-dom';

import Header from "./Header.js";
import Footer from "./Footer.js";

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=''>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(BaseLayout);
