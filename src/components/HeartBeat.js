import React from "react";
import "./HeartBeat.css";

const style = {
  marginTop: "54%",
  marginLeft: "2%",
  position: "absolute"
  //   overflow: "hidden"
};

const HeartBeat = () => (
  <div style={style}>
    <div className="heart-beat">
      <div className="heart-shape" />
    </div>
  </div>
);

export default HeartBeat;
