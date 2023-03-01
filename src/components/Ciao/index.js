import React, { Component } from "react";
import PropTypes from 'prop-types';
import CiaoButton from "../CiaoButton";

  /**
     * @param {*} props 
     * @param {string} props.classStyle 
     * @param {string} props.name
     * @param {number} props.id
     */

class Ciao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHi: true,
        };
    }
    handleBtnSwitch = () => {
        const { isHi } = this.state;
        this.setState({ isHi: !isHi });
        // if(!isHi) {
        //     return <p> id:{id} Bye, name ??"anonim"</p>
        // }
    };
    render() {
        const { isHi } = this.state;
        const { classStyle, name, id } = this.props;

        //погана практика, не робити так!!!
        // if(typeof name !== "string")

        return (
            <div className={classStyle}>
                <h2>
                    id:{id})
                    <br></br>
                    {isHi ? "Hi" : "Bye"} {name ?? "anonim"}{" "}
                </h2>
                <CiaoButton onClick={this.handleBtnSwitch} direction={isHi} />
            </div>
        );
    }
}

Ciao.propTypes = {
    classStyle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired
  };

export default Ciao;
