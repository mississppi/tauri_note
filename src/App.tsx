import React from "react";
import './App.css';
import './font/fonts.css';
import TextEditor from "./components/TextEditor";
import Title from "./components/Title";

function App() {
  const sample_post = get_posts();
  return (
    <div className='wrapper'>
      <div className="side">
        {
          sample_post.map(v => (
            <li className='post' onClick={handleCheck}>
              <span className='post_title'>{v}</span>
            </li>
          ))
        }
      </div>
      <div className="main">
        <div className="main_wrapper">
          <Title />
          <TextEditor />
        </div>
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

function handleCheck(){
  console.log("clicked!!!");
}

export default App;
