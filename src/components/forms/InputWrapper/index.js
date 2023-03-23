import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./InputWrapper.module.scss";
import PropTypes from "prop-types";

const InputWrapper = (props) => {
    const { name, ...restProps } = props;
    return (
        <label className={styles.label}>
            <span>{name}</span>
            <Field name={name} placeholder={name} {...restProps} />
            <ErrorMessage
                name={name}
                conponent="div"
                className={styles.error}
            />
        </label>
    );
};

InputWrapper.defaultProps = {
    email: " text",
};

InputWrapper.propTypes = {
    type: PropTypes.string,
};

export default InputWrapper;
