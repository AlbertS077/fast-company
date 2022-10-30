import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ name, color }) => {
    return <span className={"badge m-2 bg-" + color}>{name}</span>;
};
Qualitie.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string
};
export default Qualitie;
