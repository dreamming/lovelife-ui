import React from "react";
import AppBar from "material-ui/AppBar";

const FootComponentStyles = {
  appbar: {
    height: 80,
    position: "absolute",
    width: "100%",
    bottom: 0
  }
};
const Foot = () => (
  <AppBar showMenuIconButton={false} style={FootComponentStyles.appbar} />
);
export default Foot;
