import React from "react";
import './App.css';
import './font/fonts.css';
import TextEditor from "./components/TextEditor";

function App() {
  const sample_post = get_posts();
  return (
    <div className='wrapper'>
      <div className="side">
        {
          sample_post.map(v => (
            <li className='post'>
              <span className='post_title'>{v}</span>
            </li>
          ))
        }
      </div>
      <div className="main">
        <TextEditor />
      </div>
    </div>);
}

function get_posts(){
  const posts = [
    "メモ",
    "Work",
    "Work",
    "Work",
    "Work",
    "Work",
  ];
  return posts;
}

export default App;
