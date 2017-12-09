import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showActiveTab } from "./MiddleAction";
import Header from "./Header";
import Middle from "./Middle";
import Foot from "./Foot";

class HomePage extends Component {
  showTabDetail = tab => this.props.showActiveTab(tab.props.item);

  render() {
    return (
      <div>
        <Header name={"M&M"} />
        <Middle {...this.props} onTabActive={this.showTabDetail} />
        {/* <Foot /> */}
      </div>
    );
  }
}
HomePage.propTypes = {
  showActiveTab: PropTypes.func.isRequired
};

export default connect(null, { showActiveTab })(HomePage);
