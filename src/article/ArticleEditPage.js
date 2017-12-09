import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import Paper from "material-ui/Paper";
import ArticleEdit from "./ArticleEdit";
import HeartBeat from "../components/HeartBeat";

const ArticleEditPageStyle = {
  paper: {
    backgroundColor: "rgb(78,189,212)",
    display: "block",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },

  avatar: {
    width: 75,
    height: 75,
    marginTop: 25,
    marginBottom: -30
  },

  saveButton: {
    backgroundColor: "rgb(0,188,212)",
    // marginTop: 12,
    // marginLeft: 1200,
    position: "absolute",
    right: "4%",
    top: "30%",
    zIndex: 10000
  }
};

class ArticleEditPage extends Component {
  //   login = data =>
  //     this.props.loginAction(data).then(() => {
  //       console.log("Logined");
  //     });

  render() {
    return (
      <div>
        <Paper style={ArticleEditPageStyle.paper}>
          <ArticleEdit />
          <div>
            <RaisedButton
              style={ArticleEditPageStyle.saveButton}
              label="Save"
              secondary
              onClick={this.onHandleLogin}
            />
            <HeartBeat />
          </div>
        </Paper>
      </div>
    );
  }
}

// ArticleEditPage.propTypes = {
//   loginAction: PropTypes.func.isRequired
// };

export default connect(null, null)(ArticleEditPage);
