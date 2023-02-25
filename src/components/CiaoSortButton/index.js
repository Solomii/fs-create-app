import React from "react";


const CiaoSortButton = ({ title, onClick,direction }) => {
  return (
    <button type="button" onClick={onClick} >
      {title} {direction ? "gorowth" : "decrease"}
    </button>
  );
};



export default CiaoSortButton;