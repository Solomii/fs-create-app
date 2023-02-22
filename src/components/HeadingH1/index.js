import React, { Component } from "react";

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

export default HeandingH1;
