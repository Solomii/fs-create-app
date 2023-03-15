import React from "react";
import Parent from "./Parent";

const Tree = (props) => {
    return (
        <div
            style={{
                border: "1px solid teal",
                padding: "10px",
                margin: "10px",
            }}
        >
            <h1>Tree</h1>
            <Parent />
        </div>
    );
};

export default Tree;
