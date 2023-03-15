import React from "react";
import SubParent from "../SubParent";
import { ThemeContext } from "../../../contexts";
import CONSTANTS from "../../../constants";
const { THEMES } = CONSTANTS;

const Parent = (props) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <div
            style={{
              backgroundColor: theme === THEMES.LIGHT ? "wheat" : "#222",
              color: theme === THEMES.LIGHT ? "#222" : "wheat",
              border: "1px solid teal",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h2>Parent</h2>
            <SubParent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Parent;
