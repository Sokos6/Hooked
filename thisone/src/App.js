import React, { useReducer, useEffect, useState } from "react";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";
import appReducer from "./reducers";
import Header from "./Header";
import { ThemeContext } from "./contexts";
import ChangeTheme from "./ChangeTheme";

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

// export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue' });

export default function App() {
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral"
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts
  });
  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = "React Hooks Blog";
    }
  }, [user]);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 8 }}>
        <Header text="Go Go React" />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <br />
        <div style={{ padding: 8 }}>
          <Header text="Hooked" />
          <UserBar user={user} dispatch={dispatch} />
          <br />
          {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
          <br />
          <hr />
          <PostList posts={posts} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
