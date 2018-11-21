import React, { Component } from 'react';
import { Header } from './partials/Header.js'
import { PostList } from '../posts/postList.js'
import { posts } from '../posts/jsonData.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostList posts={posts} />
      </div>
    )

  }
}

export default App;
