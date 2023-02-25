import React from "react";
import styles from "./UserCard.modules.css"

const UserCard = (props) => {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;
  const style = { color: isSelected ? "teal" : "pink" };
  const handleSelector = () => {
    userSelector(id);
  };
  return (
    <article  className={styles.article} style={style} onClick={handleSelector}>
      <h3>
        <em>{id}) </em>
        {firstName} {lastName}
      </h3>
    </article>
  );
};

export default UserCard;