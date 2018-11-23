import React, { Component } from 'react';
import { Header } from './partials/Header.js';
import { Footer } from "./partials/Footer.js";
import { fetchUsers } from "../services/UserService.js";
import { UserList } from "./users/UserList.js"
import { MyUser } from './users/UserListItem.js'
import { UserGrid } from '../view/users/UserList.js'


class App extends Component {

  constructor(props) {

    super(props)
    this.state = {
      users: [],
      isGrid: false,
    };

  }
  componentDidMount() {
    fetchUsers()
      .then((niz) => { this.setState({ users: niz }) });
  }

  renderUsersListComponent = () => {
    if (this.state.isGrid) {
      return <UserGrid users={this.state.users} />
    } else {
      return <UserList users={this.state.users} />
    }
  }


  changeLayout = () => {

    this.setState({ isGrid: !this.state.isGrid })


  }



  render() {

    return (

      <div>
        <Header />
        <button onClick={this.changeLayout}>toggle layout</button>
        {this.renderUsersListComponent()}
        <Footer />
      </div>

    )

  }
}

export default App;
