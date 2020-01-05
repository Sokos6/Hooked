import React, { useReducer, useEffect } from "react";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";
import appReducer from './reducers';
import Header from './Header';

const defaultPosts = [
  {
    title: "This and that",
    content: "The greatest thing since sliced bread!",
    author: "Will Sokolowski"
  },
  {
    title: "DOM TRIM",
    content: "Keeping the DOM tree clean!",
    author: "Will Sokolowski"
  }
];

export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue' });

export default function App() {
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts });
  const { user, posts } = state;

  useEffect(() => {
    if (user) {
        document.title = `${user} - React Hooks Blog`
    } else {
        document.title = 'React Hooks Blog'
    }
}, [user])

  return (
    <div>
    <Header text="Go Go React" />
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
    </div>
  );
}
