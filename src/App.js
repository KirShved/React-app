import React, { useState } from "react";
import Counter from "./components/counter";
import "./style/App.css"
import PostList from "./components/postList";
import PostForm from "./components/postForm";


function App() {
  
  let [posts,setPosts]=useState([
    {id:1, title:'Java Script1', body:'description'},
    {id:2, title:'Java Script2', body:'description'},
    {id:3, title:'Java Script3', body:'description'}
  ])

  const createPost=(newPost)=>{
    setPosts([...posts,newPost])
  }

  const removePost= (post)=>{
    setPosts(posts.filter(p=>p.id!==post.id))
  }


  return (
    <div className="App">
      <Counter/>

      <PostForm create={createPost}/>

      <PostList remove={removePost} posts={posts} title={'Посты про JS'} />

    </div>
  );
}

export default App;
