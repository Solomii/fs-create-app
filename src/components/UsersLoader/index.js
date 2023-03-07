import React, { Component } from "react";
// import { PropTypes } from "prop-types";
// import Spinner from "../Spinner";
import { getRandomUsers } from "../../api";
import UserLoadList from './UsersLoadList';

import Paginate from '../Paginate ';

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isPending: true });
    getRandomUsers({page:currentPage})
      .then((data) => this.setState({ users: data.results }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
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
 
    render() {
        const { users, isPending, error,currentPage } = this.state;
        if (error) {
            return <h4>error!</h4>;
        }
        if (isPending) {
            return <p>Loading....</p>
        }
        return (
            <section>
                <h2>Users List</h2>
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
