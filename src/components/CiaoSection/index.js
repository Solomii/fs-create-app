import React, { Component } from "react";
import CiaoList from "../CiaoList";
import CiaoSortButton from "../CiaoSortButton";

class CiaolSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 4, firstName: "Brad", lastName: "Pitt" },
                { id: 3, firstName: "Tom", lastName: "Test" },
                { id: 2, firstName: "Bary", lastName: "PP" },
                { id: 1, firstName: "Cate", lastName: "Cate" },
            ],
            isDirectGrowById: true,
            isDirectGrowByFirstName: true,
            isDirectGrowByLastName: true,
        };
    }
    sortById = () => {
        //отримити масив з юзерами
        const { users, isDirectGrowById } = this.state;
        //sort
        const newUsers = [...users];
        newUsers.sort((a, b) => (isDirectGrowById ? a.id - b.id : b.id - a.id));
        // const newUsers = JSON.parse(JSON.stringify(users))
        // write user in state
        this.setState({ users: newUsers, isDirectGrowById: !isDirectGrowById });
    };
    sortByFirstName = () => {
        const { users, isDirectGrowByFirstName: direction } = this.state;
        const newUsers = [...users];
        newUsers.sort((a, b) => {
            if (a.firstName > b.firstName) {
                return direction ? -1 : 1;
            }
            if (a.firstName < b.firstName) {
                return direction ? 1 : -1;
            }
            return 0;
        });
        this.setState({ users: newUsers, isDirectGrowByFirstName: !direction });
    };
    sortByLastName = () => {
        const { users, isDirectGrowByLastName: direction } = this.state;
        const newUsers = [...users];
        newUsers.sort((a, b) => {
            if (a.lastName > b.lastName) {
                return direction ? -1 : 1;
            }
            if (a.lastName < b.lastName) {
                return direction ? 1 : -1;
            }
            return 0;
        });
        this.setState({ users: newUsers, isDirectGrowByLastName: !direction });
    };

    render() {
        const {
            users,
            isDirectGrowById,
            isDirectGrowByFirstName,
            isDirectGrowByLastName,
        } = this.state;
        console.log(users);
        return (
            <>
                <CiaoSortButton
                    onClick={this.sortById}
                    title="Sort by id"
                    direction={isDirectGrowById}
                />
                <CiaoSortButton
                    onClick={this.sortByFirstName}
                    title="Sort by name"
                    direction={isDirectGrowByFirstName}
                />
                <CiaoSortButton
                    onClick={this.sortByLastName}
                    title="Sort by name"
                    direction=  {isDirectGrowByLastName}
                />
                {/* <HeandingH1
                    classStyle="title"
                    title="title"
                    content="Hi, React"
                /> */}
                {/* <h1 className="title" title="12345">
                    Hi, React! {Math.random()}
                </h1> */}
                {/* <Ciao classStyle="ciao__welcome " name={this.state.users[0].firstName} />
                <Ciao classStyle="title" name={this.state.users[1].firstName} />
                <Ciao classStyle="ciao__welcome " name={this.state.users[2].firstName}  />
                <Ciao classStyle="ciao__welcome " name={this.state.users[3].firstName}  />
                <Ciao classStyle="ciao__welcome " /> */}
                <CiaoList users={users} />
            </>
        );
        // return React.createElement(
        //   'h1',
        //   { className: 'title' },
        //   'Hello, React'
        // );
    }
}

export default CiaolSection;
