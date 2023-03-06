import React, { Component } from "react";
import { PropTypes } from "prop-types";

class UserLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null,
            isPending: false,
            currentPage:1
        };
    }
    componentDidMount() {
        this.setState({ isPending: true });
        fetch("https://randomuser.me/api/?results=10&seed=fd2022-2-ajax&page=1")
            .then((response) => response.json())
            .then((data) => this.setState({ users: data.results }))
            .catch((error) => this.setState({ error }))
            .finally(() => this.setState({ isPending: false }));
    }
    render() {
        const { users, isPending, error,currentPage } = this.state;
        if (error) {
            return <h4>error!</h4>;
        }
        if (isPending) {
            return <h4>Loading.....</h4>;
        }
        return (
            <section>
                <h2>Users List</h2>
                <div>
                    <button>&lt; prev </button>
                   <strong> {currentPage} </strong>
                    <button>next &gt; </button>
                </div>
                <ul>
                    {users.map((user) => (
                        <li key={user.login.uuid}>{user.email}</li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default UserLoader;
