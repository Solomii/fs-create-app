import React, { Component } from "react";
import PropTypes from "prop-types";

class HeandingH1 extends Component {
    render() {
        const { classStyle, title, content } = this.props;
        return (
            <div>
                <h1 className={classStyle} title={title}>
                    {content}
                </h1>
            </div>
        );
        // return React.createElement("h1",{className:classStyle, title:title},content)
    }
}
HeandingH1.defaultProps = {
    classStyle: "teal",
    title: "none",
    content: "Title Test",
};

HeandingH1.propTypes = {
    classStyle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default HeandingH1;
