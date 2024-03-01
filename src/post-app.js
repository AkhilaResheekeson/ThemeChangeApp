import React, { useState, useEffect } from "react";
import { useTheme } from "./Context/themeContext";
import './App.css';

function PostApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error occurred while fetching...", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`App ${theme}`}>
      <h1 className={`h1 ${theme}`}>POSTS</h1>
      <button className={`button ${theme}`} onClick={changeTheme}>Toggle Theme</button><br></br>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li  className={`li ${theme}`} key={post.id}>
              <h3>User ID: {post.id}</h3>
              <h4><u>{post.title}</u></h4>
              <p><i>{post.body}</i></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostApp;