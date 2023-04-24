import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord, removeWord } from './wordSlice';
import './App.css';
import List from './list';

function App() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const obj = useSelector((state) => state.words);
  const dispatch = useDispatch();

  const handleAddWord = () => {
    dispatch(addWord({ word, meaning }));
    setWord('');
    setMeaning('');
  };

  const handleRemoveWord = () => {
    dispatch(removeWord());
  };
  return (
    <div>
      <h1>React Redux Toolkit Example</h1>
      <div>
        <input
          type="text"
          placeholder="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <input
          type="text"
          placeholder="meaning"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />
        <button onClick={handleAddWord}>Add Word</button>
        <button onClick={handleRemoveWord}>Remove Word</button>
      </div>
      <div>
        {obj.words.length > 0 ? (
          <ul>
            {obj.words.map((word, index) => (
              <List key={index} word={word.word} meaning={word.meaning} />
            ))}
          </ul>
        ) : (
          <p>No words found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
