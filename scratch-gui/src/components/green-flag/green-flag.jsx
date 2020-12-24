import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import greenFlagIcon from "./icon--green-flag.svg";
import styles from "./green-flag.css";

const GreenFlagComponent = function (props) {
    const { active, className, onClick, title, ...componentProps } = props;

    console.log("greenFlag is clicked");

    // console.log("i am working when green flag is clicked 58521616  ");

    /*
// this is where when you click the hat block in events "When clicked" 
// just console.dir(onClick)
*/
    // useing localstorage
    //  localStorage.setItem("isItem", "true");

    return (
        <img
            className={classNames(className, styles.greenFlag, {
                [styles.isActive]: active,
            })}
            draggable={false}
            src={greenFlagIcon}
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};
GreenFlagComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
};
GreenFlagComponent.defaultProps = {
    active: false,
    title: "Go",
};
export default GreenFlagComponent;
