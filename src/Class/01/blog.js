/* eslint-disable */
// 주석은 ESLint 규칙을 일시적으로 비활성화 하는 방법입니다.
import React from 'react';
import './blog.css';
import { useState } from 'react';

function App() {
  // 미리 보관하는 기능
  let [글제목, b] = useState(['남자 코트 추천', '강서 우동 맛집', '파이썬 독학', '독도는 우리땅']);
  const [따봉, 따봉변경] = useState(0)

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
        </div>
        <div className="list">
          <h4>{글제목[0]} <span onClick={()=>{
            따봉변경(따봉+1)
          }} >👍</span> {따봉} </h4>
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
        <div className="list">
          <h4>{글제목[3]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <button onClick={()=>{
          // 글제목[0] = "여자코트추천";
          // b();
          // ...는 괄호 벗긴 후, 괄호를 다시 씌워주세요라는 뜻 = 완전히 새로운 배열을 만드는 것
          // 어레이를 복사해 사용하고 싶을 때는 let 복사본 = [...복사할배열] 과 같이 만들어 사용하는 것이 좋다
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          b(copy)
        }}>여자코트추천으로 바꾸기</button>
        <button onClick={()=>{
          // 글제목[0] = "여자코트추천";
          // b();
          // ...는 괄호 벗긴 후, 괄호를 다시 씌워주세요라는 뜻 = 완전히 새로운 배열을 만드는 것
          // 어레이를 복사해 사용하고 싶을 때는 let 복사본 = [...복사할배열] 과 같이 만들어 사용하는 것이 좋다
          let copy = [...글제목];
          copy.sort();
          b(copy)
        }}>가나다순 정렬하기</button>
    </div>
  );
}
// JAX 문법 1. html()에 class 넣을 땐 className
// JAX 문법 2. {} 변수를 html에 꽂아넣을 때는 {중괄호}
// JAX 문법 3. <div style="color:blue"> 이런걸 넣고 싶으면 JAX상에서는 style={} 안에 {}자료형으로 넣어야 합니다.
// html에 꽂아넣는 작업을 있어보이는 말로 데이터 바인딩이라고 한다.

export default App;