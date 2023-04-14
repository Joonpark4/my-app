/* eslint-disable */
// 주석은 ESLint 규칙을 일시적으로 비활성화 하는 방법입니다.
import React from 'react';

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
        <a id={t.id} href={'/read/' + t.id} onClick={(e)=>{
            e.preventDefault();
            props.onChangeMode(e.target.id);
        }}>{t.title}</a>
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
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'javascript', body: 'javascript is...' },
  ];
  return (
    <div className="App">
      <Header
        title="REACT"
        onChangeMode={() => {
          alert('Header');
        }}
      />
      <Nav topics={topics}
      onChangeMode={(id)=>{
        alert(id);
      }} />
      <Article title="Welcome" body="Hello, WEB" />
    </div>
  );
}
export default App;
