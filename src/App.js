import React from "react";
import "./App.css";
// import SignInFrom from "./components/forms/SingInForm";
// import CiaolSection from "./components/CiaoSection/index";
// import StopWatch from './components/StopWatch';
// import UserSection from './components/UserSection';
// import FormClass from './components/forms2/FormClass/index';
import Ciao from "./components/Ciao";

const App = (props) => {
    const user = {
        id: 1,
        firstName: "Tom",
        lastName: "Test",
    };
    return (
        <>
            {/* <CiaolSection />
            <StopWatch/>
            <UserSection/> */}
            {/* <SignInFrom/> */}
            {/* <FormClass/> */}
            <Ciao
                classStyle={"ciao__welcome"}
                name={user.firstName}
                id={user.id}
            />
        </>
    );
};

export default App;
