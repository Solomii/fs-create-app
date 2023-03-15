import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SIGN_IN_SCHEMA } from "./../../../utils/validatoinSchemas";
import styles from "./LoginFrom.module.scss";

const initialValues = {
    email: "",
    password: "",
};

const LoginForm = (props) => {
    const onSubmit = (values, formikBag) => {
        console.log("values", values);
        console.log("formikBag", formikBag);
        formikBag.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={SIGN_IN_SCHEMA}
        >
            {(fromikProps) => {
                console.log(fromikProps);
                return (
                    // <form
                    //     onSubmit={fromikProps.handleSubmit}
                    //     onReset={fromikProps.handleReset}
                    // >
                    //   <input type="email" name="email" onChange={fromikProps.handleChange}/>
                    //   <input type="password" name="password" onChange={fromikProps.handleChange}/>
                    //     <input type="submit" value="Send"  />

                    // </form>
                    <Form className={styles.form}>
                        <Field type="email" name="email" placeholder="email" />
                        <ErrorMessage
                            name="email"
                            conponent="div"
                            className={styles.error}
                        />
                        <Field
                            type="password"
                            name="password"
                            placeholder="password"
                        />
                        <ErrorMessage
                            name="password"
                            conponent="div"
                            className={styles.error}
                        />
                        <Field type="submit" value="Send" />
                    </Form>
                );
            }}
        </Formik>
    );
};

export default LoginForm;
