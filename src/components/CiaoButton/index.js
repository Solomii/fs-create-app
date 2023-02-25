import React from "react";

const CiaoButton = ({ onClick, direction }) => {
    return (
        <button type="button" onClick={onClick}>
            {direction ? "hi" : "bye"}
        </button>
    );
};

export default CiaoButton;
