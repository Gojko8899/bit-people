import React, { Component } from 'react';
import { Header } from './partials/Header.js'
import { PostList } from '../posts/postList.js'
import { posts } from '../posts/jsonData.js'
// import logo from '../../src/logo.svg';
import '../../src/App.css';
import { white } from 'ansi-colors';



class App extends Component {
  render() {
    return (



      <div className="App">
        <header style={{ backgroundColor: 'red', color: "white", padding: "20px" }}>

          <Header />

        </header>

        <div>

          <PostList posts={posts} />


        </div>

      </div>

    )

  }
}

export default App;
