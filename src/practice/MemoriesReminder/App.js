// import logo from './logo.svg';
/* eslint-disable*/
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import List from './componant/list';
import Option from './componant/option';
import { useDispatch, useSelector } from "react-redux";

function App() {
  let lists = [{id:0, word:"Oi", meaning:"Hey"}, {id:1, word:"Cerveja", meaning:"Beer"},]

  let content = lists.map((list)=>{
    return (
      <List id={list.id} word={list.word} meaning={list.meaning} />
    )
  })
  let option = <Option />

  return (
    <div className="App">
      <div className="black-nav">Memories Reminder</div>
      <div className="section">
        {content}
      </div>
      <div className="option">
        {option}
        </div>
      <div className="bottom">
        <div
          className="btn_list btn"
          
        >
          List
        </div>
        <div
          className="btn_test btn"
          onClick={() => {
            alert("Comming Soon")
          }}
        >
          Test
        </div>
      </div>
    </div>
  );
}

export default App;
