// import React, { useState } from "react";
// import "./App.css";
// import HomePage from "./components/HomePage";
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
// import UserLoader from "./components/UsersLoader";

// import Tree from "./components/Tree";
// import Header from "./components/Header";
// import { UserContext, ThemeContext } from "./contexts";
// import CONSTANTS from "./constants";

// import LearnHooks from "./components/LearnHooks";
// import StopWatchHooks from "./components/StopWatchHooks";

// import LoginForm from "./components/forms/LoginForm";
// const {THEMES} = CONSTANTS;

// // const ImageWrapper = () => {};
// // const App = (props) => {
//     // const users = [
//     //     {
//     //         id: 1,
//     //         firstName: "Tom",
//     //         lastName: "Test",
//     //         isSelected: false,
//     //     },
//     //     {
//     //         id: 2,
//     //         firstName: "Mary",
//     //         lastName: "Rot",
//     //         isSelected: false,
//     //     },
//     // ];
//     // return (
//         <>
//             {/* <ImageWrapper
//                 width="500px"
//                 height="300px"
//                 border-radius="50%"
//                 onClick={() => {}}
//                 title="title"
//                 tabImdex={4}
//             >
//                 <img src="https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1.jpg" alt="img sea" />
//             </ImageWrapper> */}

//             {/* <Container>
//                 <Row>
//                     <Col>
//                     </Col>
//                     <Col >
//                         <StopWatch />
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col >
//                         <StopWatch />
//                     </Col>
//                     <Col >
//                         <StopWatch />
//                     </Col>
//                     <Col>
//                         <StopWatch />
//                     </Col>
//                 </Row>
//             </Container> */}
//             {/* <UserLoader/> */}
//         </>
//     // );
// // };

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         id: 1,
//         firstName: "Brad",
//         lastName: "Pitt",
//       },
//       theme: THEMES.LIGHT
//     };
//   }
//   setTheme = (theme) => {this.setState({theme})}
//   render() {
//     const { user, theme } = this.state;
//     return (
//       <ThemeContext.Provider value={[theme, this.setTheme]}>
//         <UserContext.Provider value={user}>
//           <Header />
//           <Tree />
//         </UserContext.Provider>
//       </ThemeContext.Provider>
//     );
//   }
// }

// const App = () => {
//     // const [isVisible, setIsVisible] = useState(true);

//     // const handleClick = () => {
//     //     setIsVisible(!isVisible);
//     // };

//     return (
//         <div>
//             {/* <LoginForm/> */}

//             {/* <button onClick={handleClick}>switch visible</button>
//             {isVisible ? <LerarnHooks /> : isVisible} */}

//             {/* <StopWatchHooks />  */}
//             <HomePage/>

//         </div>

//     );
// };

import React, { useState, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext, NavMenuContext } from "./contexts";
import CONSTANTS from "./constants";
// import { useClicker } from "./hooks";
import { MenuOpen } from "@mui/icons-material";
import SignUpForm from "./components/forms/SignUpForm/insex";
import Chat from "./components/Chat";
import NavMenu from "./components/NavMenu";
import LoaderPage from "./pages/LoaderPage";


const { THEMES } = CONSTANTS;

const MENU_ACTIONS = {
  MENU_OPEN: "MENU_OPEN",
  MENU_CLOSE: "MENU_CLOSE",
};
const reducer = (state, action) => {
  switch (action.type) {
    case MENU_ACTIONS.MENU_OPEN: {
      return { ...state, isMenuOpen: true };
    }
    case MENU_ACTIONS.MENU_CLOSE: {
      return { ...state, isMenuOpen: false };
    }
    default:
      return state;
  }
};

const App = () => {
    const [user] = useState({
        id: 4,
        firstName: "Brad",
        lastName: "Pitt",
    });
    const [theme, setTheme] = useState(THEMES.LIGHT);
    const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
    const handleMenuOpen = ()=> dispatch({type:MENU_ACTIONS.MENU_OPEN})
    const handleMenuClose = ()=> dispatch({type:MENU_ACTIONS.MENU_CLOSE})
    return (
      <NavMenuContext.Provider value={{state, handleMenuClose}}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <MenuOpen onClick={handleMenuOpen}/>
            <NavMenu />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/load" element={<LoaderPage />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </NavMenuContext.Provider>
    );
};

export default App;
