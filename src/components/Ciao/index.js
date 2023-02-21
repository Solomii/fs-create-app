import React, { Component } from "react";

class Ciao extends Component {
    render() {
        const{classStyle, name,isHi}=this.props;
        const word = isHi ? "Hi" : "bye";
        return (
            <div >
                <h2 className={classStyle}>{word}, {name ?? "anonim"} </h2>
            </div>
        );
    }
}

export default Ciao;
