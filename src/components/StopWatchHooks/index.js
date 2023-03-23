import React, { useState, useEffect } from "react";
import { format, addMilliseconds } from "date-fns";
import styles from "./StopWatchHooks.module.scss";

const StopWatchHooks = () => {
    const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
    const [isRunnig, setIsRunnig] = useState(false);

    const handleBtn = () => {
        setIsRunnig(!isRunnig);
    };

    const handleBtnReset =()=>{
       setTime(new Date(0, 0, 0, 0, 0, 0, 0));
       setIsRunnig(false)
    }

    useEffect(() => {
        if (isRunnig) {
            const intervalId = setInterval(() => {
                console.log("start interval");
                setTime((prevTime) => addMilliseconds(prevTime, 1000));
            }, 1000);
            return () => {
                console.log("stop interval");
                clearInterval(intervalId);
            };
        }
    }, [isRunnig]);

    return (
        <div className={styles.container}>
            <h2>{format(time, "HH:mm:ss")}</h2>
            <button onClick={handleBtn}>{isRunnig ? "stop" : "start"}</button>
            <button onClick={handleBtnReset}>Reset</button>
        </div>
    );
};

export default StopWatchHooks;
