import React from "react";
import "./App.css";
// import Calendar from "./components/Calendar";
// import HeandingH1 from "./components/HeadingH1";
// import SignInFrom from "./components/forms/SingInForm";
// import CiaolSection from "./components/CiaoSection";

// import UserSection from './components/UserSection';
// import FormClass from './components/forms2/FormClass';
// import Ciao from "./components/Ciao";
// import UserCard from "./components/UserSection/UserCard";
// import UserList from './components/UserSection/UserList';
// import Container from "./components/Grid/Container";
// import Row from "./components/Grid/Row";
// import Col from "./components/Grid/Col";
// import StopWatch from "./components/StopWatch";
// import UserLoader from './components/UsersLoader/index';
import UserLoader from "./components/UsersLoader";
// const ImageWrapper = () => {};
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
            {/* <ImageWrapper
                width="500px"
                height="300px"
                border-radius="50%"
                onClick={() => {}}
                title="title"
                tabImdex={4}
            >
                <img src="https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1.jpg" alt="img sea" />
            </ImageWrapper> */}

            {/* <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col >
                        <StopWatch />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <StopWatch />
                    </Col>
                    <Col >
                        <StopWatch />
                    </Col>
                    <Col>
                        <StopWatch />
                    </Col>
                </Row>
            </Container> */}
            <UserLoader/>
        </>
    );
};

export default App;
