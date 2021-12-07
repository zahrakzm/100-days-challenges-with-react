import React, { Component } from "react";
import "./assets/custom.css";

export default class UsersList extends Component {
  state = {
    users: [],
    check:false
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => this.setState({ users: data }));
    console.log(`this.users`, this.users)
  }
  getData=()=> {
    this.setState({check: true})
  }
  render() {
    return (
      <>
      <button onClick={ ()=> this.getData()}>Get Users Info</button>
      {this.state.check &&
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>username</td>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <Users key={user.id} user={user} />
              ))}
          </tbody>
        </table>
  }
      </>
    );
  }
}
class Users extends Component {
  render() {
    const { user } = this.props;

    return (
      <>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
        </tr>
      </>
    );
  }
}
