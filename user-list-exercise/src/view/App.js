import React, { Component } from 'react';
import { Header } from './partials/Header.js';
import { Footer } from "./partials/Footer.js";
import { fetchUsers } from "../services/UserService.js";
import { UserLists } from "./users/UserList.js"
import { MyUser } from './users/UserListItem.js'

class App extends Component {

  constructor(props) {

    super(props)
    this.state = {
      users: []
    };

  }
  componentDidMount() {
    fetchUsers()
      .then((niz) => { this.setState({ users: niz }) });
  }

  render() {

    return (

      <div>
        <Header />
        <UserLists users={this.state.users} />
        <Footer />
      </div>

    )

  }
}

export default App;
