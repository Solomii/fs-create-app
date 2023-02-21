import React, { Component } from "react";

class HeandingH1 extends Component {
    render() {
        const { classStyle, title,content } = this.props;
        return (
            <div>
                   <h1 className={classStyle}title={title}>
                    {content} {Math.random()}
                </h1>
              
            </div>
        );
    }
}

export default HeandingH1;