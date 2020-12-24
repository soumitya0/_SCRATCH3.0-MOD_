import PropTypes from "prop-types";
import React from "react";

import styles from "./watermark.css";

const Watermark = (props) => (
    console.log(props.costumeURL, "costumeURL CAT"),
    (<img className={styles.spriteImage} src={props.costumeURL} />)
);

Watermark.propTypes = {
    costumeURL: PropTypes.string,
};

export default Watermark;
