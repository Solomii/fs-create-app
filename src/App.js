import React, { Component } from "react";
import "./App.css";
import Ciao from "./components/Ciao";
import HeandingH1 from "./components/HeadingH1";

class App extends Component {
    render() {
        return (
            <>
            <HeandingH1 classStyle="title" title="title" content="Hi, React"/>
                {/* <h1 className="title" title="12345">
                    Hi, React! {Math.random()}
                </h1> */}
                <Ciao classStyle="ciao__welcome " name="Brad"/>
                <Ciao classStyle="title" name="Tom"/>
                <Ciao classStyle="ciao__welcome " name="Mary"/>
                <Ciao classStyle="ciao__welcome "/>
            </>
        );
        // return React.createElement(
        //   'h1',
        //   { className: 'title' },
        //   'Hello, React'
        // );
    }
}

export default App;
