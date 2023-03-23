import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";

const LearnHooks = (props) => {
    // const [count, setCount] = useState(0);
    // const [step, setStep] = useState(1);

    // const add = () => {
    //     setCount((count) => count + step);
    // };

    // const sub = () => {
    //     setCount((count) => count - step);
    // };

    // const handleInput = ({ target: { value } }) => {
    //     setStep(Number(value));
    // };

    const [coords, setCoords]= useState({x:0,y:0})
    const [amount, setAmount]= useState(0);

    const handleMove = (event)=>{
        setCoords({
            x:event.clientX,
            y:event.clientY,
        })
    }

    const handleClick = ()=>{
        setAmount((amount)=>amount+1)
    }

    
    useEffect(() => {
        console.log("effect")
        document.body.addEventListener("click", handleClick)
        return ()=>{
            console.log("clear effect")
            document.body.removeEventListener("click", handleClick)
        }
    },[]);
   
    return (
        <div>
            {/* <h2>count: {count}</h2>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <input type="number" value={step} onChange={handleInput} /> */}

<div onMouseMove={handleMove} style={{ backgroundColor: "pink" }} onClick={handleClick}>
      <p>coord x:{coords.x}</p>
      <p>coord y:{coords.y}</p>
      <p>amount click:{amount}</p>
            </div>
        </div>
    );
};

LearnHooks.propTypes = {};

export default LearnHooks;
