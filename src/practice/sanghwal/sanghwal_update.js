/* eslint-disable */
// 주석은 ESLint 규칙을 일시적으로 비활성화 하는 방법입니다.
import React from 'react';
import { useState } from 'react';


function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      {/* 폼태그에 onSubmit, preventDefault를 하는 이유? 폼태그 안에서 서브밋이 눌릴 경우 그 타겟은 폼태그가 된다. 그러므로 이 때 폼태그에 직접 이벤트를 정지시켜주면 리로드가 멈춘다. 다른 이벤트를 타겟할때도 똑같이 e.target으로 코딩 가능*/}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" value={title} onChange={e=>{
            setTitle(e.target.value);
          }} />
        </p>
        <p>
          <textarea name="body" placeholder="body" value={body} onChange={e=>{
            setBody(e.target.value);
          }} />
        </p>
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      {/* 폼태그에 onSubmit, preventDefault를 하는 이유? 폼태그 안에서 서브밋이 눌릴 경우 그 타겟은 폼태그가 된다. 그러므로 이 때 폼태그에 직접 이벤트를 정지시켜주면 리로드가 멈춘다. 다른 이벤트를 타겟할때도 똑같이 e.target으로 코딩 가능*/}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </article>
  );
}

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  // 맵을 이해한 후에 for문 대신 map을 사용해볼것
  for (var i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(Number(e.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'javascript', body: 'javascript is...' },
  ]);
  let content = null;
  let contextControl = null;
  if (mode === 'welcome') {
    content = <Article title="Welcome" body="Hello, WEB" />;
  } else if (mode === 'read') {
    let title,
      body = null;
    for (var i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
    contextControl = (
      <li>
        <a href={'/update/'+id} onClick={e=>{
          e.preventDefault();
          setMode('update');
        }}>Update</a>
      </li>
    );
  } else if (mode === 'create') {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode('read');
          setId(nextId);
          setNextId(nextId + 1);
        }}
      />
    );
  } else if(mode === 'update'){
    let title,
      body = null;
    for (var i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content= <Update title={title} body={body} onUpdate={(title,body)=>{
      console.log(title,body);
      const newTopics = [...topics];
      const updateTopic = {id:id, title:title, body:body}
      for(var i = 0; i < newTopics.length; i++){
          if(newTopics[i].id === id){
            newTopics[i] = updateTopic;
            break;
          }
      }
      setTopics(newTopics);
      setMode('read');
    }} />
  }
  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode('welcome');
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('read');
          setId(_id);
        }}
      />
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(e) => {
              e.preventDefault();
              setMode('create');
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}
export default App;
