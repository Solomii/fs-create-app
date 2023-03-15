import React from "react";
import PropTypes from "prop-types";

const UserCard=(props) =>{
  const {user:{email, gander, nat, name:{first, last}}}= props;
  return (
    <div>
    <article>
      <h3>{first} {last}</h3>
      <p>nat:{nat} ({gander})</p>
      <p>email:{email}</p>
    </article>
    </div>
  )
 
}

// UserCard.propTypes = {};

export default UserCard;
