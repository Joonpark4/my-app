// import logo from './logo.svg';
/* eslint-disable*/
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import List from './componant/list';
import Option from './componant/option';

function App() {
  const [page, setPage] = useState('List');
  const [hide, setHide] = useState(false);
  const [id, setId] = useState(null);
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
  const [nextId, setNextId] = useState(words.length + 1);
  const [selected, setSelected] = useState(false);
  const [updating, setUpdating] = useState(false);
  const scrollRef = useRef();
  const [addList, setAddList] = useState(false);
  const [cleft, setcLeft] = useState('');
  const [cright, setcRight] = useState('');
  const [offset, setOffset] = useState(false);

  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  useEffect(() => {
    function resetIds(words) {
      return words.map((word, index) => ({ ...word, id: index + 1 }));
    }
    let storedWords = localStorage.getItem('words');
    setWords(resetIds(JSON.parse(storedWords)));
  }, [localStorage.getItem('words')]);

  const handleDelete = (id) => {
    const newWords = words.filter((word) => word.id !== id);
    setWords(newWords);
  };

  const handleUpdate = (id, left, right) => {
    const updatedWords = words.map((word) => {
      if (word.id === id) {
        return { id, left, right };
      }
      return word;
    });
    setWords(updatedWords);
    localStorage.setItem('words', JSON.stringify(updatedWords));
  };

  const updateHide = (value) => {
    setHide(value);
  };

  const updateAddList = (value) => {
    setAddList(value);
  };

  const updateSetOffset = (value) => {
    setOffset(value);
  };

  let left = '',
    right = '';
  let content = null,
    option = null;
  if (page === 'List') {
    if (offset === false) {
      console.log(offset);
      content = words.map((word) => (
        <List
          key={word.id}
          id={word.id}
          nextId={word.nextId}
          left={word.left}
          right={word.right}
          onDelete={() => handleDelete(word.id)}
          onUpdate={handleUpdate}
          hide={hide}
          selected={selected}
        />
      ));
    } else if (offset === true) {
      console.log(offset);
      content = words.map((word) => (
        <List
          key={word.id}
          id={word.id}
          nextId={word.nextId}
          left={word.right}
          right={word.left}
          onDelete={() => handleDelete(word.id)}
          onUpdate={handleUpdate}
          hide={hide}
          selected={selected}
        />
      ));
    }
    option = (
      <Option
        page={page}
        hide={hide}
        updateHide={updateHide}
        addList={addList}
        updateAddList={updateAddList}
        offset={offset}
        updateSetOffset={updateSetOffset}
      />
    );
  }

  if (page === 'Test') {
  }
  let listAddList = null;
  if (addList === true) {
    listAddList = (
      <>
        <div
          className="add_list"
          onClick={(e) => {
            e.preventDefault();
            updateAddList(false);
            setAddList(false);
          }}
        >
          <form action="">
            <div className="list_top">
              <input
                type="text"
                className="updating_text"
                placeholder="Word"
                value={cleft}
                onClick={(event) => event.stopPropagation()}
                onChange={(e) => {
                  e.preventDefault();
                  setcLeft(e.target.value);
                }}
              ></input>
              <input
                type="text"
                className="updating_text"
                placeholder="Meaning"
                value={cright}
                onClick={(event) => event.stopPropagation()}
                onChange={(e) => {
                  e.preventDefault();
                  setcRight(e.target.value);
                }}
              ></input>
            </div>
            <div className="list_bottom">
              <button
                className="btn_list"
                onClick={(e) => {
                  e.preventDefault();
                  setAddList(false);
                }}
              >
                Cancel
              </button>
              <button
                className="btn_list"
                onClick={(e) => {
                  e.preventDefault();
                  if (cleft !== '' && cright !== '') {
                    const newList = { id: nextId, left: cleft, right: cright };
                    const newLists = [...words, newList];
                    setWords(newLists);
                    setId(nextId);
                    setNextId(nextId + 1);
                    setcLeft(''); // clear the left input field
                    setcRight(''); // clear the right input field
                  } else {
                    alert("You can't make word with blank");
                  }
                }}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </>
    );
    let timer = setTimeout(() => {
      scrollRef.current.scrollIntoView({ block: 'end', inline: 'nearest' });
    }, 1);
  }
  return (
    <div className="App">
      <div className="black-nav">Memories Reminder</div>
      <div className="section">
        {content}
        {listAddList}
        <div ref={scrollRef}></div>
      </div>
      <div className="option">{option}</div>
      <div className="bottom">
        <div
          className="btn_list btn"
          onClick={() => {
            setPage('List');
          }}
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
