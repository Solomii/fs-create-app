import React, { useReducer } from "react";
const initialState ={
  fname:"",
  sname:"",
  email:"",
  password:"",
  phone:"",
  age:18
}
const reducer = (state, action)=>{
  const {name, value}= action;
    const newState ={
      ...state,
      [name]:value
    }
    return newState;
}

const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const hanleInput = ({target:{name, value}})=>{
    const action ={name, value};
    dispatch(action)
  }
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
             <input
                    type="text"
                    name="fname"
                    value={state.fname}
                    onChange={hanleInput}
                    placeholder="fnaem"
                />
                <input
                    type="text"
                    name="sname"
                    value={state.sname}
                    onChange={hanleInput}
                    placeholder="snaem"
                />
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={hanleInput}
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={hanleInput}
                    placeholder="password"
                />
                <input
                    type="text"
                    name="phone"
                    value={state.phone}
                    onChange={hanleInput}
                    placeholder="phone"
                />
                <input
                    type="number"
                    name="age"
                    value={state.age}
                    onChange={hanleInput}
                    placeholder="age"
                />
                <input type="submit" value="send" /> 
            </form>
        </div>
    );
};

export default SignUpForm;
