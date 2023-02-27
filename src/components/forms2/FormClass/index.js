import React, { Component } from "react";
import styles from "./formClass.module.css";

class FormClass extends Component {
    render() {
        return (
            <form>
                <input className={styles.input} 
                    type="text"
                    placeholder="name"
                    name="password"
                />
                <input className={styles.input} 
                    type="number"
                    placeholder="phone"
                    name="password"
             
                />
                <input className={styles.input} type="submit" value="send" />
            </form>
        );
    }
}

export default FormClass;
