import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";

const initialState = {
    email: "",
    password: "",
    emailValid: true,
    paasswordValid: true,
};

class SignInFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
        };
    }

    handlerSubmit = (event) => {
        event.preventDefault();
        const { target } = event;
        console.log(target.email.value);
        console.log(target.password.value);
        this.setState({ ...initialState });
    };

    // handlerEmail = ({ target: { value } }) => this.setState({ email: value });

    // handlerPassword = ({ target: { value } }) => this.setState({ password: value });

    handlerInput = ({ target: { name, value } }) =>
        this.setState({
            [name]: value,
            [name + "Valid"]: !value.includes(" "),
        });
    render() {
        const { email, password, emailValid, paasswordValid } = this.state;

        const emailClassName = cx(styles.input, {
            [styles.invalid]: !emailValid,
        });

        const passwordClassName = cx(styles.input, {
            [styles.invalid]: !paasswordValid,
        });
        return (
            <form className={styles.conainer} onSubmit={this.handlerSubmit}>
                <input
                    className={emailClassName}
                    type="email"
                    placeholder="email"
                    name="email"
                    //виводить значення стану
                    value={email}
                    /*брати значення яке ввели і записує у стан*/
                    onChange={this.handlerInput}
                />
                <input
                    className={passwordClassName}
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={this.handlerInput}
                />
                <input className={styles.input} type="submit" value="send" />
            </form>
        );
    }
}

export default SignInFrom;
