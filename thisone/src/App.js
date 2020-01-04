import React, { useState } from "react";

import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl"
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl"
  }
];

function userReducer (state, action) {
  switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
          return action.username

      case 'LOGOUT':
          return ''

      default:
          throw new Error()
  }
}

export default function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts ] = useState(defaultPosts);
  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} setUser={setUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}
