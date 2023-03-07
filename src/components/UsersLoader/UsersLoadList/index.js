import React from "react";
import PropTypes from "prop-types";

const UserLoadList = (props) => {
    const {users} = props;
    const mapUsers = (user) => <li key={user.login.uuid}>{user.email}</li>;
    return <ul>{users.map(mapUsers)}</ul>;
};

UserLoadList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UserLoadList;
