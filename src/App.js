import React, { Component } from "react";
import "./App.css";
import Ciao from "./components/Ciao";

const user = {
  firsName:"Test"
}

class App extends Component {
    render() {
        return (
            <>
                <h1 className="title" title="12345">
                    Hi, React! {Math.random()}
                </h1>
                <Ciao classStyle="ciao__welcome " name={user.firsName} />
                <Ciao classStyle="ciao__welcome " name="Brad" isHi />
                <Ciao classStyle="title" name="Tom" isHi />
                <Ciao classStyle="ciao__welcome " name="Mary"  />
                <Ciao classStyle="ciao__welcome " name="" />
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
