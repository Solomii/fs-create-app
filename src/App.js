import React from "react";
import "./App.css";
import Calendar from "./components/Calendar";
// import HeandingH1 from "./components/HeadingH1";
// import SignInFrom from "./components/forms/SingInForm";
// import CiaolSection from "./components/CiaoSection/index";
import StopWatch from './components/StopWatch';
// import UserSection from './components/UserSection';
// import FormClass from './components/forms2/FormClass/index';
import Ciao from "./components/Ciao";
// import UserCard from "./components/UserSection/UserCard";
// import UserList from './components/UserSection/UserList/index';

const App = (props) => {
    // const users = [
    //     {
    //         id: 1,
    //         firstName: "Tom",
    //         lastName: "Test",
    //         isSelected: false,
    //     },
    //     {
    //         id: 2,
    //         firstName: "Mary",
    //         lastName: "Rot",
    //         isSelected: false,
    //     },
    // ];
    return (
        <>
          {/* <HeandingH1 /> */}
            {/* <CiaolSection /> */}
            <StopWatch/>
            {/* <UserSection/>  */}
            {/* <SignInFrom/> */}
            {/* <FormClass/> */}
            {/* <UserCard user={user}/> */}
            {/* <UserList users={users}/> */}
            <Calendar/>
            <Ciao
                classStyle={"ciao__welcome"}
                name="Tom"
                id={1}
            />
        </>
    );
};

export default App;
