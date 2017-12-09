import React from "react";
import PropTypes from "prop-types";
import "./Drip.css";

const Drip = ({ name }) => (
  <div className="la-ball-scale-pulse la-3x">
    <span>{name}</span>
    <div />
    <div />
  </div>
);

Drip.propTypes = {
  name: PropTypes.string.isRequired
};

export default Drip;
