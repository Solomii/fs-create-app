import React, { Component } from "react";
// import { PropTypes } from "prop-types";
// import Spinner from "../Spinner";
import { getRandomUsers } from "../../api";
import UserLoadList from './UsersLoadList';

import Paginate from '../Paginate ';
import{configRandomUser} from "../../configs"
// import ControlAmount from "./ControlAmount";

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      currentResult:configRandomUser.AMOUNT,
      selectNation:configRandomUser.NATIONALITY,  
    };
  }


  load = () => {
    const { currentPage, currentResult } = this.state;
    this.setState({ isPending: true });
    getRandomUsers({page:currentPage, results:currentResult})
      .then((data) => this.setState({ users: data.results, error:null }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const {currentPage, currentResult} = this.state;
    if (currentPage !== prevState.currentPage || currentResult !== prevState.currentResult) {
      this.load();
    }
  }

  handlePrevBtn = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  };

  handleNextBtn = () =>
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));
 

    // setCheckedInput(event){
    //   console.log(event.target.value)
    // }

   setCheckedResult = (value) => this.setState({currentResult:value});

     
   setSelectedOption = ({target:{value}}) => {
    this.setState({selectNation:value});
  }
 
    render() {
        const { users, isPending, error,currentPage,currentResult, selectNation } = this.state;
        if (error) {
            return <h4>error!</h4>;
        }
        if (isPending) {
            return <p>Loading....</p>
        }
        return (
            <section>
                <h2>Users List</h2>
                {/* додати селект з виборам національності */}
                {/* додати чекбокс з вибором статті */}

                <select value={selectNation} style={{padding:" 5px 15px", margin:"10px"}} 
                 onChange={this.setSelectedOption}>
                  {selectNation.map((nat) =>(  <option value="" style={{padding:"10px"}}>{nat}</option>))}
                </select>
                {/* <ControlAmount amounts={[5,10,15]}
                setCheckedResult={this.setCheckedResult}
                currentResult={currentResult}
              /> */}
                 <Paginate 
                 currentPage={currentPage}
                 handlePrevBtn ={this.handlePrevBtn}
                handleNextBtn={this.handleNextBtn}
                 />
               <UserLoadList users={users}/>
            </section>
        );
    }
}

export default UserLoader;
