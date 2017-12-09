import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Paper from "material-ui/Paper";
import Drip from "../components/Drip";
import LoginForm from "./LoginForm";
import { loginAction } from "./LoginActions";

const style = {
  paper: {
    height: 400,
    width: 320,

    // top: "10%",
    // left: "45%",
    // margin: 100,
    // textAlign: "center",
    // display: "inline-block",
    margin: "auto",
    // marginRight: "55%"
    position: "absolute",

    // display: "block",
    // position: "fixed",
    // _position: "absolute"
    // marginTop: "10%",
    // marginLeft: "45%"
    // top: "50%",
    // left: "50%",
    // marginLeft: "45%",
    // marginTop: "10%",

    // left: "50%",
    // marginLeft: "-100px",

    // top: "50%",
    // marginTop: "-50px"
    bottom: "50px",
    top: "50px",
    left: "50px",
    right: "50px"
  },
  page: {
    // background: "#222",
    // textAlign: "center",
    // height: "100%",
    // width: "100%",
    // backgroundColor: "rgb(78,189,212)",
    // position: "absolute"
    // margin: "0 auto",

    // backgroundColor: "rebeccapurple",
    // backgroundColor: "#BB788B",

    backgroundColor: "rgb(78,189,212)",
    display: "block",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  spinnerBottom: {
    position: "absolute",
    top: "40%",
    left: "5%",
    marginTop: "-50px",
    marginLeft: "30px",
    width: "100px",
    height: "100px"
  },
  spinnerTop: {
    position: "absolute",
    top: "35%",
    left: "1%",
    marginTop: "-50px",
    marginLeft: "30px",
    width: "100px",
    height: "100px"
  }
};

class LoginPage extends Component {
  login = data =>
    this.props.loginAction(data).then(() => {
      console.log("Logined");
    });

  render() {
    return (
      // <div style={style.page}>
      //   <Paper style={style.paper}>
      //     <LoginForm login={this.login} />
      //   </Paper>
      // </div>
      <div style={style.page}>
        <div style={style.spinnerTop}>
          <Drip name={"Mark"} />
        </div>
        <div style={style.spinnerBottom}>
          <Drip name={"Love Mary"} />
        </div>

        <Paper style={style.paper}>
          <LoginForm login={this.login} />
        </Paper>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginAction: PropTypes.func.isRequired
};

export default connect(null, { loginAction })(LoginPage);
