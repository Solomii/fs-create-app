import React from "react";
import UserProfile from "../../UserSection/UserCard";


const Child = (props) => {
    return (
        <div
            style={{
                border: "1px solid teal",
                padding: "10px",
                margin: "10px",
            }}
        >
            <h2>Cildren User profile</h2>
            <UserProfile/>
        </div>
    );
};

export default Child;
