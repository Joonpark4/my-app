/* eslint-disable */
// 주석은 ESLint 규칙을 일시적으로 비활성화 하는 방법입니다.
import React from 'react';
import '../css/blog.css';
import { useState } from 'react';

function App() {
  // 미리 보관하는 기능
  let [글제목, b] = useState(['남자 코트 추천', '강서 우동 맛집', '파이썬 독학']);
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
        </div>
        <div className="list">
          <h4>{글제목[0]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{글제목[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{글제목[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
// JAX 문법 1. html()에 class 넣을 땐 className
// JAX 문법 2. {} 변수를 html에 꽂아넣을 때는 {중괄호}
// JAX 문법 3. <div style="color:blue"> 이런걸 넣고 싶으면 JAX상에서는 style={} 안에 {}자료형으로 넣어야 합니다.
// html에 꽂아넣는 작업을 있어보이는 말로 데이터 바인딩이라고 한다.

export default App;