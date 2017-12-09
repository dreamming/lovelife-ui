import React from "react";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import Drip from "../components/Drip";
import initWall, { FSS, unMountWall } from "../utils/IndexWallUtil";

const style = {
  height: "100%",
  width: "100%",
  // backgroundColor: "rebeccapurple",
  backgroundColor: "#BB788B",
  position: "absolute",
  large: {
    width: 150,
    height: 150,
    padding: 30
  },
  largeIcon: {
    width: 100,
    height: 100,
    color: "#2D53A2"
  },
  home: {
    textAlign: "center",
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "18%",
    bottom: 0,
    right: 0
  },
  spinnerTop: {
    position: "absolute",
    top: "35%",
    left: "1%",
    marginTop: "-50px",
    marginLeft: "30px",
    width: "100px",
    height: "100px"
  },

  spinnerBottom: {
    // position: "absolute",
    // bottom: "30%",
    // right: "1%",
    // marginBottom: "-50px",
    // marginLeft: "-50px",
    // width: "100px",
    // height: "100px"
    position: "absolute",
    top: "40%",
    left: "5%",
    marginTop: "-50px",
    marginLeft: "30px",
    width: "100px",
    height: "100px"
  },

  canvas: {
    // position: "absolute",
    // overflow: "hidden"
  },

  container: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  output: {
    opacity: "0.2",
    width: "100%",
    height: "100%"
  }
};

class IndexWall extends React.Component {
  componentDidMount() {
    initWall()();
    // FUCK
  }

  componentWillUnmount() {
    unMountWall();
  }

  render() {
    return (
      <div style={style}>
        <canvas id="mainCanvas">不支持的Canvas</canvas>
        <div style={style.spinnerTop}>
          <Drip name={"Mark"} />
        </div>
        <div style={style.spinnerBottom}>
          <Drip name={"Love Mary"} />
        </div>
        <div style={style.home}>
          {/* <Link to="/login" forceRefresh> */}
          <RaisedButton label="Login" primary href="/login" />
          {/* </Link> */}
          {/* <Link to="/home" forceRefresh> */}
          <RaisedButton
            label="Home"
            secondary
            href="/home"
            // onClick={() => (window.location.href = "home")}
          />
          {/* </Link> */}
        </div>
      </div>
    );
  }
}
export default IndexWall;
