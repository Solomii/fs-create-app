import React from "react";
import PropTypes from "prop-types";
import Ciao from "../Ciao";
import {userShape} from "../UserSection/UserCard";

const CiaoList = (props) => {
    const mapUsers = (user) => {
        return (
            <Ciao
                key={user.id}
                id={user.id}
                name={user.firstName + " " + user.lastName}
                classStyle="ciao__welcome"
            />
        );
    };

    const { users } = props;
    return <>{users.map(mapUsers)}</>;
};

CiaoList.propTypes ={
    users: PropTypes.arrayOf(userShape).isRequired
  }

export default CiaoList;
