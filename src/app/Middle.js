import React from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "material-ui/Tabs";
import Tab from "material-ui/Tabs/Tab";
import ArticlesContainer from "../article/ArticlesContainer";

const MiddleStyles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },

  tabs: {
    // backgroundColor: "#512DA8",
    backgroundColor: "rgb(95,179,248)",
    width: "100%",
    height: 60,
    maginTop: 100
  },
  articlecontent: {
    overflow: "auto",
    height: 550
  },
  photocontent: {
    overflow: "auto",
    height: 1000
  },
  tab: {
    height: "100%"
  }
};

// function handleActive(tab) {
//   alert(`A tab with this route property ${tab.props.route} was activated.`);
// }
const Middle = ({ onTabActive, history }) => (
  <Tabs tabItemContainerStyle={MiddleStyles.tabs}>
    <Tab
      onActive={onTabActive}
      item={0}
      label="HotArticles"
      style={MiddleStyles.tab}
    >
      <div style={MiddleStyles.articlecontent}>
        <ArticlesContainer history={history} />
      </div>
    </Tab>

    <Tab
      onActive={this.onTabActive}
      item={1}
      label="HotPhotos"
      style={MiddleStyles.tab}
    >
      <div>Photo</div>
    </Tab>

    <Tab
      item={2}
      label="HotVideos"
      style={MiddleStyles.tab}
      route="/home"
      onActive={this.onTabActive}
    />
  </Tabs>
);

Middle.propTypes = {
  onTabActive: PropTypes.func.isRequired
};

export default Middle;
