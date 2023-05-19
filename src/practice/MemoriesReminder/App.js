// import logo from './logo.svg';
/* eslint-disable*/
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import List from './componant/list';
import Option from './componant/option';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [words, setWords] = useState(() => {
    let storedWords = localStorage.getItem('words');
    return storedWords
      ? JSON.parse(storedWords)
      : [
          { id: 1, left: 'Oi', right: 'Hey' },
          { id: 2, left: 'Cerveja', right: 'Beer' },
          { id: 3, left: 'Laranja', right: 'Orange' },
          { id: 4, left: 'Livro', right: 'Book' },
          { id: 5, left: 'Carta', right: 'Letter' },
          { id: 6, left: 'Chave', right: 'Key' },
          { id: 7, left: 'Gato', right: 'Cat' },
          { id: 8, left: 'Cachorro', right: 'Dog' },
          { id: 9, left: 'Como', right: 'Eat' },
          { id: 10, left: 'Bebo', right: 'Drink' },
          { id: 11, left: 'Casa', right: 'House' },
          { id: 12, left: 'Namorada', right: 'Girlfriend' },
        ];
  });
  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  let content = words.map((list)=>{
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
