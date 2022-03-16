import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const sample_post = get_posts();
  return (
    <div className='wrapper'>
      <div className="side">
        {
          sample_post.map(v => (
            <li className='post'>{v}</li>
          ))
        }
      </div>
      <div className="main">
        <p>fugafuga</p>
      </div>
    </div>
  );
}

function get_posts(){
  const posts = [
    "アカウント情報",
    "Work",
    "MySQL情報",
    "PHPメモ",
    "明日やること",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
    "メモメモメモ",
  ];
  return posts;
}

export default App;
