import React from "react";
import "./App.css";
import CiaolSection from "./components/CiaoSection/index";
import StopWatch from './components/StopWatch';
import UserSection from './components/UserSection';

const App = (props) => {
    return (
        <>
            <CiaolSection />
            <StopWatch/>
            <UserSection/>
        </>
    );
};

export default App;
