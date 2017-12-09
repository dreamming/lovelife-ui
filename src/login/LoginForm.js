import React, { Component } from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import TextField from "material-ui/TextField";
import Snackbar from "material-ui/Snackbar";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import avatarImg from "../assets/avatarImg.png";

const LoginFormStyles = {
  loginButton: {
    backgroundColor: "rgb(0,188,212)",
    marginTop: 12,
    marginLeft: 80
  },
  registeButton: {
    backgroundColor: "rgb(0,188,212)",
    marginTop: 12,
    marginLeft: 10
  },
  avatar: {
    width: 75,
    height: 75,
    marginTop: 25
    // marginBottom: -30
  },
  TextInput: {
    marginBottom: -10
  },
  Snackbar: {
    bottom: "100%",
    top: 0
  },
  loginForm: {
    textAlign: "center",
    margin: "auto"
  }
  // paper: {
  //   height: 410,
  //   width: 320,
  //   textAlign: "center",
  //   margin: "auto",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   bottom: 100,
  //   right: 0
  //   // display: "inline-block"
  // }
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    };
  }
  onHandleLogin = () => {
    const { loginData } = this.state;
    const errors = this.validate(loginData);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.login(loginData).catch(err => {
        this.setState({ errors: err.response.data.errors, loading: false });
      });
    }
  };

  onChange = e =>
    this.setState({
      loginData: { ...this.state.loginData, [e.target.name]: e.target.value }
    });

  validate = loginData => {
    const errors = {};
    if (!Validator.isEmail(loginData.email)) {
      errors.email = "Invalide email";
    }
    if (!loginData.password) {
      errors.password = "Can't be blank";
    }
    return errors;
  };

  render() {
    const { loginData, errors } = this.state;
    return (
      <div style={LoginFormStyles.loginForm}>
        <Avatar style={LoginFormStyles.avatar} src={avatarImg} />
        <div>
          <TextField
            id="email"
            name="email"
            type="email"
            hintText="mail@mail.com"
            floatingLabelText="Email:"
            autoComplete="off"
            // style={LoginFormStyles.TextInput}
            value={loginData.email}
            errorText={errors.email}
            onChange={this.onChange}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            hintText="Make it secure"
            floatingLabelText="Password:"
            // style={LoginFormStyles.TextInput}
            value={loginData.password}
            errorText={errors.password}
            onChange={this.onChange}
          />
        </div>

        <div>
          <RaisedButton
            label="Login"
            secondary
            style={LoginFormStyles.loginButton}
            onClick={this.onHandleLogin}
          />
          <RaisedButton
            label="Register"
            secondary
            style={LoginFormStyles.registeButton}
          />
        </div>

        {errors.gloable && (
          <Snackbar
            open={!!errors.gloable}
            message={errors.gloable}
            autoHideDuration={4000}
          />
        )}
      </div>
      // </Paper>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};
export default LoginForm;
