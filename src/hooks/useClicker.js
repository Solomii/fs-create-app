import { useState, useEffect } from "react";

const useClicker = (value = 0) => {
    const [count, setCount] = useState(value);
    useEffect(() => {
        const handleClick = () => {
            setCount((count) => count + 1);
        };
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);
    return count;
};
export default useClicker;
