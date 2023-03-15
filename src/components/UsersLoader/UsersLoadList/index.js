import React from "react";
import PropTypes from "prop-types";
import UserCard from "../UserCard";

const UserLoadList = (props) => {
    const {users} = props;
    const mapUsers = (user) => <li key={user.login.uuid}  style={{display:"inline-block", border:"solid 1px teal", margin:"5px", padding:"5px"}}><UserCard user={user}/></li>;
    return <ul>{users.map(mapUsers)}</ul>;
};

UserLoadList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UserLoadList;
