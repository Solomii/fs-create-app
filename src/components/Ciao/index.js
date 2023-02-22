import React, { Component } from "react";

class Ciao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHi: true,
        };
    }
    handleBtnSwitch = () => {
        const { isHi} = this.state;
        this.setState({ isHi: !isHi });
        // if(!isHi) {
        //     return <p> id:{id} Bye, name ??"anonim"</p>
        // }
    };
    render() {
        const { isHi } = this.state;
        const { classStyle, name, id } = this.props;

        return (
            <div className={classStyle}>
                <h2>
                    id:{id}
                    <br></br>
                    {isHi ? "Hi" : "Bye"} {name ?? "anonim"}{" "}
                </h2>
                <button onClick={this.handleBtnSwitch}>
                    {isHi ? "bye" : "hi"}
                </button>
            </div>
        );
    }
}

export default Ciao;
