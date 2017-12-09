import React from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";

const HeadStyles = {
  appbar: {
    height: 100,
    // backgroundColor: "#673AB7"
    backgroundColor: "rgb(37,147,246)"
  }
};
const Header = ({ name }) => (
  <div>
    <AppBar style={HeadStyles.appbar} title={name} showMenuIconButton={false} />
  </div>
);
Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
