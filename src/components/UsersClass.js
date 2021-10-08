import React, { Component } from 'react'

export default class UsersClass extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }
    async getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
            return   res.json();
          }).then((data) => {
              this.setState({ users: data });
          });
    }
    componentDidMount() {
        this.getUsers();
    }
    render() {
        return (
            <div>
                {this.state.users.map((user) => {
                    return (<>
                        <h1 key={user.id}>{user.name}</h1>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </>)
                            
                            
                })}
            </div>
        )
    }
}
