import PropTypes from "prop-types";
import React from "react";
import styles from "./Container.module.scss";

const Container = (props) => {
    const { children } = props;
    return <div className={styles.box}>{children}</div>;
};

Container.protoTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Container;
